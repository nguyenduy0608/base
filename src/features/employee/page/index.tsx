import React from 'react';
import { Table} from 'antd';
import {PlusOutlined,ArrowUpOutlined,SearchOutlined} from '@ant-design/icons';



const EmployeePage = () => {

        const dataSource = [
            {
            key: '1',
            name: 'Nguyen Van A',
            age: 32,
            number:1111111,
            address: 'Hà Nội',
            
            },
            {
            key: '2',
            name: 'Nguyen Van B',
            age: 33,
            number:1111111,
            address: 'Hà Nội',
            
            },
            {
            key: '3',
            name: 'Nguyen Van C',
            age: 34,
            number:1111111,
            address: 'Nam Định',
            
            },
            {
            key: '4',
            name: 'Nguyen Van D',
            age: 35,
            number:1111111,
            address: 'Ninh Bình',
            
            },
        ];
        
        const columns = [
            {
            title: 'STT',
            dataIndex: 'key',
            key: 'key',
            },
            {
            title: 'Tên',
            dataIndex: 'name',
            key: 'name',
            },
            {
            title: 'Tuổi',
            dataIndex: 'age',
            key: 'age',
            },
            {
            title: 'SĐT',
            dataIndex: 'number',
            key: 'address',
            },
            {
            title: 'Địa chỉ',
            dataIndex: 'address',
            key: 'address',
            },
        ];
        
        

    return <div> 
        <h2> Danh sách nhân viên</h2>
        <div style = {{ 
            display: 'flex',
            justifyContent:'space-between',
            margin : '0 16px'
        }}>
            <input  style={{width : "500px" , padding: "6px",}}  placeholder ="Nhập tên nhân viên..." >
            
            </input> 
            <div>
                <button> <ArrowUpOutlined /> Tải file excel </button>
                 
                <button style ={{
                    marginLeft: '8px'
                }}> <PlusOutlined /> Thêm</button>
            </div>
           
        </div>
     <Table style= {{
            margin : '0 16px' }} dataSource={dataSource} columns={columns} />;
       

    </div>;
    
};

export default EmployeePage;
