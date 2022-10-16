<script lang="ts">
import {Component} from 'vue-property-decorator'
import {Collection} from '~/shared/lib/mixins/Collection'

@Component
export default class CompanyPaymentCollection extends Collection {
    get appearance() {
        return {
            bik: 'Company bik',
            bank_name: 'Company bank name',
        }
    }
}
</script>

<style lang="scss" src="./CompanyPaymentCollection.critical.scss"/>
<style lang="scss" src="./CompanyPaymentCollection.main.scss"/>
