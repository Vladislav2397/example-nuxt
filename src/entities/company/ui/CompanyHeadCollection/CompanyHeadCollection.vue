<script lang="ts">
import {Component} from 'nuxt-property-decorator'
import {Collection} from '~/shared/lib/mixins/Collection'

@Component
export default class CompanyHeadCollection extends Collection {
    get appearance() {
        return {
            first_name: 'First name',
            last_name: 'Last name',
        }
    }
}
</script>

<style lang="scss" src="./CompanyHeadCollection.critical.scss"/>
<style lang="scss" src="./CompanyHeadCollection.main.scss"/>
