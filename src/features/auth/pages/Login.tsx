import { Input } from 'antd';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import FormComponent from '~/components/FormComponent';
import { Notification } from '~/utils';
import AuthLayout from '../components/AuthLayout';
import { HeaderStyled } from '../styles/Login.styles';

const LoginPage: React.FC = () => {
    const navigate = useNavigate();

    const handleSubmit = React.useCallback(
        (data: any) => {
            const { username, password } = data;
            if (username === 'admin@gmail.com' && password === '123456') {
                Notification('success', 'Đăng nhập thành công');
                localStorage.setItem('isLogged', 'true');
                navigate('/');
            } else {
                Notification('error', 'Tài khoản mật khẩu không chính xác');
            }
        },
        [navigate]
    );

    return (
        <AuthLayout>
            <HeaderStyled>Đăng nhập</HeaderStyled>
            <div>
                <FormComponent
                    layoutType="vertical"
                    formItems={[
                        {
                            label: 'Tài khoản212',
                            name: 'username',
                            initialValue: 'admin@gmail.com',
                            rules: [{ required: true, message: 'Vui lòng nhập tài khoản!' }],
                            inputField: <Input placeholder="Địa chỉ email"></Input>,
                        },
                        {
                            label: 'Mật khẩu',
                            name: 'password',
                            initialValue: '123456',
                            rules: [{ required: true, message: 'Vui lòng nhập mật khẩu!' }],
                            inputField: <Input.Password placeholder="Nhập mật khẩu"></Input.Password>,
                        },
                    ]}
                    onSubmit={handleSubmit}
                    buttonPosition="end"
                    buttonTitle="Đăng nhập"
                />
            </div>
        </AuthLayout>
    );
};

export default LoginPage;
