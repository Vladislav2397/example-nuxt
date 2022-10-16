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
import {Component, Vue} from 'nuxt-property-decorator'
import { mapFields } from 'vuex-map-fields'

import { CompanyGeneralCollection } from '../CompanyGeneralCollection'
import { CompanyPaymentCollection } from '../CompanyPaymentCollection'
import { CompanyHeadCollection } from '../CompanyHeadCollection'
import { companyModel } from '~/entities/company'

@Component({
    components: {
        CompanyHeadCollection,
        CompanyPaymentCollection,
        CompanyGeneralCollection
    },
    computed: {
        ...mapFields('company', {
            company: 'active',
            payment: 'active.payment',
            head: 'active.head',
        }),
    }
})
export default class ModalAddCompany extends Vue {
    declare company: companyModel.CompanyModel['active']
    declare payment: companyModel.CompanyModel['active']['payment']
    declare head: companyModel.CompanyModel['active']['head']

    get isIP() {
        return this.company.general.type === 1
    }
}
</script>

<style lang="scss" src="./ModalAddCompany.critical.scss" />
<style lang="scss" src="./ModalAddCompany.main.scss" />
