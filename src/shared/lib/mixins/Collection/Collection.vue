<template lang="pug">

.b-collection
    input.__input(
        v-for="key in keys"
        :key="key"
        :value="valueModel[key]"
        :placeholder="appearance[key]"
        @input="onInput(key, $event.target.value)"
    )

</template>

<script lang="ts">
import {Component, Vue, VModel} from 'nuxt-property-decorator'

@Component
export default class Collection extends Vue {
    @VModel() valueModel!: any

    get keys() {
        return Object.keys(this.valueModel).filter(key => !['id', 'type'].includes(key))
    }

    get appearance() {
        return {
            //
        }
    }

    onInput(key: string, value: string) {
        this.valueModel = {
            ...this.valueModel,
            [key]: value,
        }
    }
}
</script>

<style lang="scss" src="./Collection.critical.scss"/>
<style lang="scss" src="./Collection.main.scss"/>
