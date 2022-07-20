import { Input, Modal, Form, Checkbox, Select, Button } from 'antd';
import { useState } from 'react';

interface ModalProps {
    isVisible: boolean;
    onOk: any;
    onCancel: any;
    onFinish: any;
    onFinishFailed: any;
    handleSubmit: any;

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
                <Form.Item label="STT" name="key">
                    <Input />
                </Form.Item>
                <Form.Item label="Tên nhân viên" name="name">
                    <Input />
                </Form.Item>
                <Form.Item label="Tuổi" name="age">
                    <Input />
                </Form.Item>
                <Form.Item label="Số điện thoại" name="phone">
                    <Input />
                </Form.Item>
                <Form.Item label="Địa chỉ" name="address">
                    <Select
                        placeholder="Chọn tỉnh/thành"
                        // onChange={handleChange}
                    >
                        <Option value="Hà Nội">Hà Nội</Option>
                        <Option value="Nam Định">Nam Định</Option>
                        <Option value="Ninh Bình">Ninh Bình</Option>
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
                ></Form.Item>
                <Button onClick={handleSubmit} type="primary" htmlType="submit">
                    Submit
                </Button>
            </Form>
        </Modal>
    );
};

export default ModalForm;
