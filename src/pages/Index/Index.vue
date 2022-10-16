<template lang="pug">

.b-index
    h1 IndexPage
    button-component(
        ariaLabel="Submit"
        @click="onClick"
    ) Submit
    modal-add-company(
        v-if="isModal"
    )

</template>

<script lang="ts">
import { Component, Mutation, Vue } from 'nuxt-property-decorator'
import { Button } from '~/shared/ui/Button'
import { companyModel, ModalAddCompany } from '~/entities/company'

@Component({
    components: {
        'modal-add-company': ModalAddCompany,
        'button-component': Button,
    },
})
export default class IndexPage extends Vue {
    @Mutation('company/setActive') setActive!: companyModel.CompanyModel['setActive']

    isModal = false

    onClick() {
        this.setActive({
            general: {
                id: 1,
                name: '',
                ogrn: '',
                type: 2,
            },
            payment: {
                bik: '',
                bank_name: '',
            },
            head: {
                id: 1,
                first_name: '',
                last_name: '',
            },
        })

        this.isModal = true
    }
}
</script>

<!-- <style lang="scss" src="./Index.critical.scss" /> -->
<!-- <style lang="scss" src="./Index.main.scss" /> -->
