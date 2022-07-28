import { DeleteOutlined, EditOutlined, PlusOutlined, UploadOutlined } from '@ant-design/icons';
import { Button, Input, message, Table, Upload, Pagination } from 'antd';
import axios from 'axios';
import { error } from 'console';
import { useState, useEffect } from 'react';
import ModalForm from './modalform';
import { columns } from './service';

const initialValue = {
    name: '',
    value: '',
    label: '',
    avatar: '',
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
    const [employees, setEmployees] = useState([]);
    const [dataSourceEmployee, setDataSourceEmployee] = useState([]);
    const [initialValues, setInitialValues] = useState(initialValue);
    const [searchKey, setSearchKey] = useState('');
    const [callback, setCallback] = useState(false);
    const [current, setCurrent] = useState(1);
    const [loading, setLoading] = useState(false);
    const [count, setCount] = useState();
    const [image, setImage] = useState('');
    const [img,setImg]  =useState('');
    const handleUpload = (e: any) => {
        setImage(e.target.files[0]);
    };
    const uploadImage = async (e: any) => {
        const formData = new FormData();
        formData.append('file', image);
        formData.append('upload_preset', 'waz4uzbu');
        formData.append('cloud_name', 'duydzvl');
        const res = await fetch('https://api.cloudinary.com/v1_1/duydzvl/image/upload', {
            method: 'POST',
            body: formData,
        });
        const data = await res.json();
        console.log('🚀 ~ file: index.tsx ~ line 53 ~ uploadImage ~ res', data);
        setImg(data.secure_url)
        
        if (res.status === 200) {
            setCallback(!callback);
        }
    };

    const onChange = (page: number) => { 
        console.log(page);
        setCurrent(page);
    };
    const handleChange = (e: any) => setSearchKey(e.target.value);
    const axios = require('axios');
    const rowSelection: object = {
        onChange: (selectedRowKeys: number, selectedRows: any) => {
            console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
            setEmployees(selectedRows);
            if (selectedRows.length === 0) {
                setInitialValues(initialValue);
            }
            if (selectedRows.length > 0 && selectedRows.length < 2) {
                setInitialValues(selectedRows[0]);
            }
        },
    };

    const onFinish = async (values: any) => {
        const { createdAt, name, value, label } = values;

        const res = await axios.post('https://60bc9e1fb8ab37001759f62c.mockapi.io/api/todo/user', {
            createdAt,
            name,
            avatar: img,
            value,
            label,
        });
        console.log(values);
        if (res.status === 201) {
            setCallback(!callback);
        }
    };
    const onFinishFix = (values: any) => {
        const { createdAt, name, value, label } = values;
        const clonedDataSourceEmployee = [...dataSourceEmployee];
        clonedDataSourceEmployee.forEach(async (employee: any, index) => {
            if (employee.id === values.id) {
                console.log('ID:', values.id);
                const res = await axios.put(`https://60bc9e1fb8ab37001759f62c.mockapi.io/api/todo/user/${values.id}`, {
                    createdAt,
                    name,
                    avatar: img,
                    value,
                    label,
                });
                if (res.status === 200) {
                    setCallback(!callback);
                }
            }
        });

        console.log('Success:', values);
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

    // FIX
    const handleSubmitFix = () => {
        setIsModalVisibleFix(false);
        setInitialValues(initialValue);
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
        const clonedDataSourceEmployee = [...employees];
        console.log('clonedDataSourceEmployee:', clonedDataSourceEmployee);
        clonedDataSourceEmployee.forEach(async (empl: any, index: number) => {
            const res = await axios.delete(`https://60bc9e1fb8ab37001759f62c.mockapi.io/api/todo/user/${empl.id}`);
            if (index === employees.length - 1) {
                console.log('delete');
                setCallback(!callback);
            }
            if (res.status === 200) {
                setCallback(!callback);
            }
        });
    };
    const fetchApi = async () => {
        setLoading(true);
        try {
            const url = searchKey
                ? `https://60bc9e1fb8ab37001759f62c.mockapi.io/api/todo/user?name=${searchKey}`
                : `https://60bc9e1fb8ab37001759f62c.mockapi.io/api/todo/user?page=${current}&limit=10`;
            const res = await axios.get(url);
            setDataSourceEmployee(res.data.items);
            console.log(res.data.items);
            setLoading(false);
            setCount(res.data.count);
        } catch (error) {
            setLoading(false);
            console.log(error);
        }
    };

    useEffect(() => {
        fetchApi();
    }, [current, searchKey, callback]);

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
            <ModalForm
                initialValues={initialValues}
                handleSubmit={handleSubmit}
                onFinishFailed={onFinishFailed}
                onFinish={onFinish}
                isVisible={isModalVisible}
                onOk={handleOk}
                onCancel={handleCancel}
                onClick={uploadImage}
                onChange={handleUpload}
            />
            <ModalForm
                initialValues={initialValues}
                handleSubmit={handleSubmitFix}
                onFinishFailed={onFinishFailed}
                onFinish={onFinishFix}
                isVisible={isModalVisibleFix}
                onOk={handleOkFix}
                onCancel={handleCancelFix}
                onClick={uploadImage}
                onChange={handleUpload}
            />
            <Table
                loading={loading}
                style={{
                    margin: '32px 16px',
                }}
                dataSource={dataSourceEmployee}
                rowKey={(record: any) => record?.id}
                columns={columns}
                rowSelection={{
                    type: 'checkbox',
                    ...rowSelection,
                }}
                pagination={false}
            />
            <Pagination current={current} onChange={onChange} total={count} />;
        </div>
    );
};
export default EmployeePage;
