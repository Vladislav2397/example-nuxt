<template lang="pug">

component.b-button(
    v-bind="attrs"
    :is="tag",
    ref="button"
    v-on:click="clickEmit"
)
    .__content(
        v-if="!loading"
    )
        .__slot(
            v-if="isSlot"
        )
            slot

</template>

<script lang="ts">
import { Component, Emit, Prop, Ref, Vue } from 'nuxt-property-decorator'

export type ButtonEmitClick = void

export type ButtonProps = {
    tag?: 'a' | 'button' | 'router-link'
    size?: 'l' | 'm' | 's'
    loading?: boolean
    disabled?: boolean
    view?: 'brand' | 'outline' | 'secondary-brand' | 'secondary-outline'
    href?: string
    ariaLabel: string
}
@Component
export default class Button extends Vue {
    @Prop({ default: 'button' }) readonly tag!: ButtonProps['tag']
    @Prop({ default: 'm' }) readonly size!: ButtonProps['size']
    @Prop({ default: 'brand' }) readonly view!: ButtonProps['view']
    @Prop() readonly loading!: ButtonProps['loading']
    @Prop() readonly disabled!: ButtonProps['disabled']
    @Prop() readonly href!: ButtonProps['href']
    @Prop({ required: true }) readonly ariaLabel!: ButtonProps['ariaLabel']
    @Ref('button') buttonsRef!: HTMLElement

    @Emit('click') clickEmit(): ButtonEmitClick {
        /**/
    }

    get attrs(): Record<string, unknown> {
        return {
            ...(this.tag === 'button' && {
                'aria-label': this.ariaLabel,
            }),

            class: this.classes,
            disabled: this.disabled,
        }
    }

    get isSlot() {
        return this.$slots.default
    }

    get sizeButton() {
        const mapView: Record<NonNullable<ButtonProps['size']>, 'm' | 's'> = {
            l: 'm',
            m: 'm',
            s: 's',
        }

        if (this.isSlot) {
            return this.size
        }

        return mapView[this.size ?? 'm']
    }

    get classes(): string[] {
        const classes = [
            `button--view-${this.view}`,
            `button--size-${this.sizeButton}`,
        ]

        if (this.disabled) {
            classes.push('is-disabled')
        }

        if (this.loading) {
            classes.push('is-loading')
        }

        return classes
    }
}
</script>

<!--<style lang="scss" src="./Button.critical.scss"></style>-->
<!--<style lang="scss" src="./Button.main.scss"></style>-->
