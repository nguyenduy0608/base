import React from 'react';
import {Table, Button,  Space,Input,Modal,Form,Checkbox,Select, message, Upload} from 'antd';
import { PlusOutlined, ArrowUpOutlined, DeleteOutlined,AudioOutlined,UploadOutlined } from '@ant-design/icons';
import './style.css'
import type { ColumnsType } from 'antd/es/table';
import { useState } from 'react';
import { dataSource,columns, } from './service';

const { Option } = Select;
const { Search } = Input;

const suffix = (
        <AudioOutlined
        style={{
            fontSize: 16,
            color: '#1890ff',
        }}
        />
);
const onChange = (key:any) => {
    console.log(key);
  };
const handleChange = (value:any) => {
    console.log(`selected ${value}`);
};
const onSearch = (value:any) => console.log(value);
const EmployeePage = () => {
    
    const onFinish = (values:any) => {
        console.log('Success:', values);
    };
        
    const onFinishFailed = (errorInfo : any) => {
        console.log('Failed:', errorInfo);
    };
    const rowSelection = {
        onChange: (selectedRowKeys: any, selectedRows: any) => {
            console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
        },
        getCheckboxProps: (record: any) => ({
            disabled: record.name === 'Disabled User',
            name: record.name,
        }),
    };
    const [selectionType, setSelectionType] = useState<any>('checkbox');
    const [isModalVisible, setIsModalVisible] = useState(false);

    const showModal = () => {
        setIsModalVisible(true);
    };

    const handleOk = () => {
        setIsModalVisible(false);
    };

    const handleCancel = () => {
        setIsModalVisible(false);
    };
    const props = {
        name: 'file',
        action: 'https://www.mocky.io/v2/5cc8019d300000980a055e76',
        headers: {
            authorization: 'authorization-text',
            },
            onChange(info:any) {
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
    return <div>
        <h2> Danh sách nhân viên</h2>
        <div style={{
            display: 'flex',
            justifyContent: 'space-between',
            margin: '0 16px'
        }}>    
        <Space direction="vertical">
        <Search
            placeholder="Nhập tên nhân viên..."
            allowClear
            onSearch={onSearch}
            style={{
                width: 400,
            }}
        />

    </Space>
            <div style = {{display: 'flex'}}>
                <Upload {...props}>
                    <Button icon={<UploadOutlined />}>Upload file</Button>
                </Upload>
                <Button style = {{margin : ' 0 10px'}} type="primary" onClick={showModal}>
                    <PlusOutlined /> Thêm
                </Button>
                <Button type='dashed' style={{
                    color: 'red',
                    borderColor: 'red'
                }}> <DeleteOutlined /> Xóa</Button>
            </div>

        </div>
        <Modal title="Thêm nhân viên" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
        <Form
            name="Employee"
            labelCol={{
                span: 6,
            }}
            wrapperCol={{
                span: 18,
            }}
            initialValues={{
                remember: true,
            }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            autoComplete="off"
            >
            <Form.Item
                label="Tên nhân viên"
                name="username"
            >
                <Input />
            </Form.Item>
            <Form.Item
                label="Tuổi"
                name="userage"
            >
                <Input />
            </Form.Item>
            <Form.Item
                label="Số điện thoại"
                name="usernumber"
            >
                <Input />
            </Form.Item>
            <Form.Item
                label="Địa chỉ"
                name="useraddress"
            >
                <Select
                    defaultValue="Chọn tỉnh/thành"
                    onChange={handleChange}
                    >
                    <Option value="address">Hà Nội</Option>
                    <Option value="addresss">Nam Định</Option>
                    <Option value="addressss">Ninh Bình</Option>
                </Select>
            </Form.Item>
            <Form.Item
                name="remember"
                valuePropName="checked"
                wrapperCol={{
                offset: 6,
                span: 18,
                }}
            >
            <Checkbox>Ghi nhớ thông tin của nhân viên</Checkbox>
            </Form.Item>
            <Form.Item
                wrapperCol={{
                offset: 6,
                span: 18,
                }}
            >
            </Form.Item>
            </Form>
        </Modal>
        <Table style={{
            margin: '32px 16px'
        }}
        dataSource={dataSource} columns={columns} 
        expandable={{   
            expandedRowRender: (record) => (
            <div>
                {record.description}
            </div>
            ),
            rowExpandable: (record) => record.name !== 'Not Expandable',
        }}
        rowSelection={{
            
            type: selectionType,
            ...rowSelection,
        }}/> 
    
    </div>;

};

export default EmployeePage;
