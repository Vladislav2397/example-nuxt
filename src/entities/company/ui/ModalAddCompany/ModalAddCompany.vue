<template lang="pug">

.b-modal-add-company
    .__wrapper
        h1 Add Company
        company-general-collection.__collection(
            v-model="company"
        )
        company-payment-collection.__collection(
            v-model="payment"
        )
        template(
            v-if="!isIP"
        )
            company-head-collection.__collection(
                v-model="head"
            )

</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'

import { Field } from '~/shared/lib/decorators'

import { CompanyGeneralCollection } from '../CompanyGeneralCollection'
import { CompanyPaymentCollection } from '../CompanyPaymentCollection'
import { CompanyHeadCollection } from '../CompanyHeadCollection'
import { companyModel } from '~/entities/company'

@Component({
    components: {
        CompanyHeadCollection,
        CompanyPaymentCollection,
        CompanyGeneralCollection,
    },
})
export default class ModalAddCompany extends Vue {
    @Field('company', 'active')
    public company!: companyModel.CompanyModel['active']

    @Field('company', 'active.payment')
    public payment!: companyModel.CompanyModel['active']['payment']

    @Field('company', 'active.head')
    public head!: companyModel.CompanyModel['active']['head']

    get isIP() {
        return this.company.general.type === 1
    }
}
</script>

<style lang="scss" src="./ModalAddCompany.critical.scss" />
<style lang="scss" src="./ModalAddCompany.main.scss" />
