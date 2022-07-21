import { Tabs, Table } from 'antd';
const { TabPane } = Tabs;
const contract1 = [
    {
        key: '1',
        id: 'HD01',
        name: 'BA',
        time: '2 years',
    },
];
const contract2 = [
    {
        key: '1',
        id: 'HD01',
        name: 'FE',
        time: '2 years',
    },
];
const contract3 = [
    {
        key: '1',
        id: 'HD01',
        name: 'BE',
        time: '2 years',
    },
];
const contract4 = [
    {
        key: '1',
        id: 'HD01',
        name: 'Tester',
        time: '2 years',
    },
];
const contractColumns = [
    {
        title: 'STT',
        dataIndex: 'key',
        key: 'stt',
    },
    {
        title: 'Mã hợp đồng',
        dataIndex: 'id',
        key: 'id',
    },
    {
        title: 'Vị trí công việc',
        dataIndex: 'name',
        key: 'name',
    },
    {
        title: 'THời hạn hợp đồng',
        dataIndex: 'time',
        key: 'time',
    },
];
export const dataSource = [
    {
        key: '1',
        name: 'Nguyen Van Anh',
        age: 32,
        phone: 1111111,
        address: 'Hà Nội',
        description: (
            <Tabs defaultActiveKey="1">
                <TabPane tab="Thông tin nhân viên" key="1">
                    <Table />
                </TabPane>
                <TabPane tab="Hợp đồng chính thức" key="2">
                    <Table dataSource={contract1} columns={contractColumns} />
                </TabPane>
            </Tabs>
        ),
    },
    {
        key: '2',
        name: 'Nguyen Van Binh',
        age: 33,
        phone: 1111111,
        address: 'Hà Nội',
        description: (
            <Tabs defaultActiveKey="1">
                <TabPane tab="Thông tin nhân viên" key="1"></TabPane>
                <TabPane tab="Hợp đồng chính thức" key="2">
                    <Table dataSource={contract2} columns={contractColumns} />
                </TabPane>
            </Tabs>
        ),
    },
    {
        key: '3',
        name: 'Ngo Van Huy',
        age: 34,
        phone: 1111111,
        address: 'Nam Định',
        description: (
            <Tabs defaultActiveKey="1">
                <TabPane tab="Thông tin nhân viên" key="1"></TabPane>
                <TabPane tab="Hợp đồng chính thức" key="2">
                    <Table dataSource={contract3} columns={contractColumns} />
                </TabPane>
            </Tabs>
        ),
    },
    {
        key: '4',
        name: 'Tran Van Duong',
        age: 35,
        phone: 1111111,
        address: 'Ninh Bình',
        description: (
            <Tabs defaultActiveKey="1">
                <TabPane tab="Thông tin nhân viên" key="1">
                    <p></p>
                </TabPane>
                <TabPane tab="Hợp đồng chính thức" key="2">
                    <Table dataSource={contract4} columns={contractColumns} />
                </TabPane>
            </Tabs>
        ),
    },
];
export const columns = [
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
        dataIndex: 'phone',
        key: 'phone',
    },
    {
        title: 'Địa chỉ',
        dataIndex: 'address',
        key: 'address',
    },
    {
        title: '',
        dataIndex: 'type',
        key: 'type',
    },
];
