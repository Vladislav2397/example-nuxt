import Index from './Index.vue'

export default {
    title: 'Index',
    component: Index,
    argTypes: {},
}

const Template = (args: any, { argTypes }: any) => ({
    props: Object.keys(argTypes),
    components: { Index },
    methods: {},
    template: '<Index v-bind="$props"/>',
})

export const Default = Template.bind({})
// @ts-ignore
Default.args = {}
