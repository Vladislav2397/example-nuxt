import Button from './Button.vue'

export default {
    title: 'shared/lib/Button',
    component: Button,
    argTypes: {},
}

const Template = (args: any, { argTypes }: any) => ({
    props: Object.keys(argTypes),
    components: {
        Button,
    },
    methods: {},
    template: '<Button v-bind="$props">Button</Button>',
})

export const Default = Template.bind({})
// @ts-ignore
Default.args = {
    tag: 'button',
    size: 'm',
    loading: false,
    disabled: false,
    view: 'brand',
    icon: 'arrow-down',
    iconLeft: false,
    ariaLabel: 'Кнопка',
}
