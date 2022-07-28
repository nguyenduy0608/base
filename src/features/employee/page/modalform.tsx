import { Input, Modal, Form, Checkbox, Select, Button } from 'antd';
import { useState } from 'react';

interface ModalProps {
    isVisible: boolean;
    onOk: any;
    onCancel: any;
    onFinish: any;
    onFinishFailed: any;
    handleSubmit: any;
    onClick?: any;
    onChange?: any;
    initialValues: any;
}
const { Option } = Select;
const ModalForm = ({
    isVisible,
    onOk,
    onCancel,
    onFinish,
    onFinishFailed,
    handleSubmit,
    initialValues,
    onChange,
    onClick,
}: ModalProps) => {
    return (
        <Modal destroyOnClose title="Thêm nhân viên" visible={isVisible} onCancel={onCancel} onOk={onOk} footer={null}>
            <Form
                name="Employee"
                labelCol={{
                    span: 6,
                }}
                wrapperCol={{
                    span: 18,
                }}
                initialValues={initialValues}
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
                autoComplete="off"
            >
                <Form.Item label="STT" name="id">
                    <Input />
                </Form.Item>
                <Form.Item label="Tên nhân viên" name="name">
                    <Input />
                </Form.Item>
                <Form.Item label="Value" name="value">
                    <Input />
                </Form.Item>
                <Form.Item label="Label" name="label">
                    <Input />
                </Form.Item>
                <Form.Item label="Avatar" name="avatar">
                    <Input type="file" accept="image/png, image/gif, image/jpeg" onChange={onChange}  />{' '}
                    <Button onClick={onClick}>Upload</Button>
                </Form.Item>
                <Form.Item label="CreatedAt" name="createdAt">
                    <Input />
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
                ></Form.Item>
                <Button onClick={handleSubmit} type="primary" htmlType="submit">
                    Submit
                </Button>
            </Form>
        </Modal>
    );
};

export default ModalForm;
