<script lang="ts">
import { Component } from 'nuxt-property-decorator'
import { Collection } from '~/shared/lib/mixins/Collection'

@Component
export default class CompanyOOOCollection extends Collection {
    get appearance() {
        return {
            name: 'Company name',
            ogrn: 'Company ogrn',
        }
    }
}
</script>

<style lang="scss" src="./CompanyOOOCollection.critical.scss"/>
<style lang="scss" src="./CompanyOOOCollection.main.scss"/>
