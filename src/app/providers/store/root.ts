import {Module} from 'vuex-simple'
import { companyModel } from '~/entities/company'

export default class RootStore {
    @Module()
    company = new companyModel.CompanyModel()
}
