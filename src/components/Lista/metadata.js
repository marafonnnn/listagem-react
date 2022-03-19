export const columns = [
    {
        name: 'ID da cobrança',
        selector: row => row.id,
    },
    {
        name: 'Data da criação',
        selector: row => row.createdAt,
    },
    {
        name: 'Valor da cobrança',
        selector: row => row.requestAmount,
    },
];