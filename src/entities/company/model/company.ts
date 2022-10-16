import {CompanyType} from '~/entities/company/types'

type DeepPartial<T> = T extends object ? {
    [P in keyof T]: DeepPartial<T[P]>
} : T

export class Company {
    state: CompanyType

    constructor(company: CompanyType) {
        this.state = company
    }

    static create(company: DeepPartial<CompanyType>) {
        const newCompany = {} as CompanyType

        return new Company({
            ...newCompany,
        })
    }
}
