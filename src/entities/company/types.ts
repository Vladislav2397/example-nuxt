export type CompanyType = {
    general: {
        id: number,
        name: string,
        type: 1 | 2
    }
    payment: {
        bik: string
        bank_name: string
    },
    head: {
        id: number,
        inn: string,
    },
}
