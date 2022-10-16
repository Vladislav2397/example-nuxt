import { Getter, Mutation, State } from 'vuex-simple'
import { CompanyType } from '../types'
import {getField, updateField, UpdateFieldOptions} from 'vuex-map-fields'

export default class CompanyModel {
    @State() pool = {}
    @State() active = {} as CompanyType

    @Mutation()
    public updatePool(pool: any) {
        this.pool = {
            ...this.pool,
            ...pool,
        }
    }

    @Mutation()
    public setActive(active: any) {
        this.active = active
    }

    @Getter()
    public get getActive() {
        return this.active
    }

    @Getter()
    get getField() {
        return getField(this)
    }

    @Mutation()
    public updateField(options: UpdateFieldOptions) {
        return updateField(this, options)
    }
}
