<template lang="pug">

.b-index
    h1 IndexPage
    button-component(
        ariaLabel="Submit"
    ) Submit

</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'
import { Button } from '~/shared/ui/Button'

@Component({
    components: {
        'button-component': Button,
    },
})
export default class IndexPage extends Vue {
    //
}
</script>

<!-- <style lang="scss" src="./Index.critical.scss" /> -->
<!-- <style lang="scss" src="./Index.main.scss" /> -->
