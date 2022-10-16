<script lang="ts">
import {Component} from 'nuxt-property-decorator'
import {Collection} from '~/shared/lib/mixins/Collection'

@Component
export default class CompanyIPCollection extends Collection {
    get appearance() {
        return {
            name: 'Company name',
            first_name: 'First name',
            last_name: 'Last name',
        }
    }
}
</script>

<style lang="scss" src="./CompanyIPCollection.critical.scss"/>
<style lang="scss" src="./CompanyIPCollection.main.scss"/>
