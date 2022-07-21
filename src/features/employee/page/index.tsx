import { AudioOutlined, DeleteOutlined, EditOutlined, PlusOutlined, UploadOutlined } from '@ant-design/icons';
import { Button, Input, message, Select, Space, Table, Upload } from 'antd';
import { useState, useEffect } from 'react';
import ModalForm from './modalform';
import { columns, dataSource } from './service';

const { Option } = Select;
const { Search } = Input;
const suffix = (
    <AudioOutlined
        style={{
            fontSize:16,
            color: '#1890ff',
        }}
    />
);
const initialValue = {
    name: '',
    age: '',
    phone: '',
    address: '',
};
const EmployeePage = () => {
    const props = {
        name: 'file',
        action: 'https://www.mocky.io/v2/5cc8019d300000980a055e76',
        headers: {
            authorization: 'authorization-text',
        },
        onChange(info: any) {
            if (info.file.status !== 'uploading') {
                console.log(info.file, info.fileList);
            }

            if (info.file.status === 'done') {
                message.success(`${info.file.name} file uploaded successfully`);
            } else if (info.file.status === 'error') {
                message.error(`${info.file.name} file upload failed.`);
            }
        },
    };
    const [isModalVisible, setIsModalVisible] = useState<boolean>(false);
    const [isModalVisibleFix, setIsModalVisibleFix] = useState<boolean>(false);
    const [employees, setEmployees] = useState<any>([]);
    const [dataSourceEmployee, setDataSourceEmployee] = useState(dataSource);
    const [copyDataSourceEmploy, setCopyDataSourceEmploy] = useState(dataSourceEmployee);
    const [initialValues, setInitialValues] = useState(initialValue);
    const [searchKey, setSearchKey] = useState('');
    console.log('initialValues', initialValues);
    const onChange = (key: any) => {
        console.log(key);
    };
    const handleChange = (e: any) => setSearchKey(e.target.value);
    const onSearch = (arr: any, keyword: any) => {
        const matchedArr = arr.filter((ele: any) => ele.name.toLowerCase().includes(keyword.toLowerCase()));
        setDataSourceEmployee(matchedArr);
    };
    useEffect(() => {
        onSearch(copyDataSourceEmploy, searchKey);
    }, [searchKey]);

    const rowSelection = {
        onChange: (selectedRowKeys: any, selectedRows: any) => {
            console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
            setEmployees(selectedRows);
            if (selectedRows.length === 0) {
                setInitialValues(initialValue);
            }
            if (selectedRows.length > 0 && selectedRows.length < 2) {
                setInitialValues(selectedRows[0]);
            }
        },
        getCheckboxProps: (record: any) => ({
            disabled: record.name === 'Disabled User',
            name: record.name,
        }),
    };
    const onFinishFix = (values: any) => {
        const clonedDataSourceEmployee = [...dataSourceEmployee];
        clonedDataSourceEmployee.forEach((employee: any, index) => {
            if (employee.key === values.key) {
                clonedDataSourceEmployee[index] = values;
            }
        });
        console.log('object', clonedDataSourceEmployee);
        setDataSourceEmployee(clonedDataSourceEmployee);
        console.log('Success:', values);
    };
    const onFinish = (values: any) => {
        setDataSourceEmployee([...dataSourceEmployee, values]);
        setCopyDataSourceEmploy([...dataSourceEmployee, values]);
    };

    const onFinishFailed = (errorInfo: any) => {
        console.log('Failed:', errorInfo);
    };
    const handleSubmit = () => {
        setIsModalVisible(false);
        setInitialValues(initialValue);
        console.log('dataSourceEmployee :', dataSourceEmployee);
    };
    const showModal = () => {
        setIsModalVisible(true);
        setInitialValues(initialValue);
    };
    const handleOk = () => {
        setIsModalVisible(false);
    };
    const handleCancel = () => {
        setIsModalVisible(false);
    };
    const handleSubmitFix = () => {
        setIsModalVisibleFix(false);
        setInitialValues(initialValue);
        console.log('dataSourceEmployee :', dataSourceEmployee);
    };
    const showModalFix = () => {
        setIsModalVisibleFix(true);
    };
    const handleOkFix = () => {
        setIsModalVisibleFix(false);
    };
    const handleCancelFix = () => {
        setIsModalVisibleFix(false);
    };
    const handleDelete = () => {
        const clonedDataSourceEmployee = [...dataSourceEmployee];
        let filterEmployee: any = clonedDataSourceEmployee;
        employees.forEach((empl: any) => {
            filterEmployee = filterEmployee.filter((employee: any) => employee.key !== empl?.key);
        });

        console.log('filterEmployee', filterEmployee);

        setDataSourceEmployee(filterEmployee);
        setCopyDataSourceEmploy(filterEmployee);
        console.log('dataIndex :', filterEmployee);
    };
    return (
        <div>
            <h2> Danh sách nhân viên</h2>
            <div
                style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    margin: '0 16px',
                }}
            >
                <Input
                    placeholder="Nhập tên nhân viên..."
                    allowClear
                    style={{
                        width: 400,
                    }}
                    onChange={handleChange}
                />
                <div style={{ display: 'flex' }}>
                    <Upload {...props}>
                        <Button icon={<UploadOutlined />}>Upload file</Button>
                    </Upload>
                    <Button style={{ margin: ' 0 10px' }} type="primary" onClick={showModal}>
                        <PlusOutlined /> Thêm
                    </Button>
                    {employees.length === 1 && (
                        <Button style={{ margin: ' 0 10px' }} type="primary" onClick={showModalFix}>
                            <EditOutlined />
                            Sửa
                        </Button>
                    )}
                    {employees.length > 0 && (
                        <Button
                            type="dashed"
                            style={{
                                color: 'red',
                                borderColor: 'red',
                            }}
                            onClick={handleDelete}
                        >
                            <DeleteOutlined /> Xóa
                        </Button>
                    )}
                </div>
            </div>
            {
                <ModalForm
                    initialValues={initialValues}
                    handleSubmit={handleSubmit}
                    onFinishFailed={onFinishFailed}
                    onFinish={onFinish}
                    isVisible={isModalVisible}
                    onOk={handleOk}
                    onCancel={handleCancel}
                />
            }
            <ModalForm
                initialValues={initialValues}
                handleSubmit={handleSubmitFix}
                onFinishFailed={onFinishFailed}
                onFinish={onFinishFix}
                isVisible={isModalVisibleFix}
                onOk={handleOkFix}
                onCancel={handleCancelFix}
            />
            <Table
                style={{
                    margin: '32px 16px',
                }}
                dataSource={dataSourceEmployee}
                columns={columns}
                expandable={{
                    expandedRowRender: (record) => <div>{record.description}</div>,
                    rowExpandable: (record) => record.name !== 'Not Expandable',
                }}
                rowSelection={{
                    type: 'checkbox',
                    ...rowSelection,
                }}
            />
        </div>
    );
};
export default EmployeePage;
