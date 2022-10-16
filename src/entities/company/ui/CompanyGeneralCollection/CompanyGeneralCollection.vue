<script lang="ts">
import {Component, VModel, Vue} from 'nuxt-property-decorator'

import {CompanyIPCollection} from '../CompanyIPCollection'
import {CompanyOOOCollection} from '../CompanyOOOCollection'
import {CreateElement, VNode} from 'vue'

@Component
export default class CompanyGeneralCollection extends Vue {
    @VModel() valueModel!: any

    get companyIP() {
        const { general, head } = this.valueModel

        return {
            name: general.name,
            first_name: head.first_name,
            last_name: head.last_name,
        }
    }
    set companyIP(value) {
        this.valueModel = {
            ...this.valueModel,
            general: {
                ...this.valueModel.general,
                name: value.name,
            },
            head: {
                ...this.valueModel.head,
                first_name: value.first_name,
                last_name: value.last_name,
            }
        }
    }

    get companyOOO() {
        return this.valueModel.general
    }
    set companyOOO(value) {
        this.valueModel = {
            ...this.valueModel,
            general: {
                ...this.valueModel.general,
                ...value
            }
        }
    }

    render(h: CreateElement): VNode {
        if (this.valueModel.general.type === 1) {
            return h(CompanyIPCollection, {
                props: {
                    value: this.companyIP,
                },
                on: {
                    input: (value: any) => { this.companyIP = value }
                }
            })
        }

        return h(CompanyOOOCollection,
            {
                props: {
                    value: this.companyOOO
                },
                on: {
                    input: (value: any) => { this.companyOOO = value }
                }
            }
        )
    }
}
</script>

<style lang="scss" src="./CompanyGeneralCollection.critical.scss" />
<style lang="scss" src="./CompanyGeneralCollection.main.scss" />
