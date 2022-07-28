
export const columns = [
    {
        title: 'STT',
        dataIndex: 'id',
    },
    {
        title: 'Name',
        dataIndex: 'name',
    },
    {
        title: 'Value',
        dataIndex: 'value',
    },
    {
        title: 'Label',
        dataIndex: 'label',
    },
    {
        title: 'Avatar',
        dataIndex: 'avatar',
        render: (value: string) => <img src={value} alt="alt" />,
    },
    {
        title: 'CreatedAt',
        dataIndex: 'createdAt',
    },
];
