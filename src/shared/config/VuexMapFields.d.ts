declare module 'vuex-map-fields' {
    export type UpdateFieldOptions = { path: string, value: string }

    const mapFields: (namespace: string, obj: Record<string, string>) => object
    export const getField: (instance: any) => unknown
    export const updateField: (instance: any, options: UpdateFieldOptions) => unknown
}
