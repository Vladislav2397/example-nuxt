import { createDecorator } from 'vue-class-component'
import {mapFields} from 'vuex-map-fields'

// export const Field = createDecoratorFactory('computed', mapFields)

export const Field = (namespace: string, value: string) => {
    return createDecorator((options, key) => {
        const mapObject = { [key]: value }
        const optionsKey = 'computed'

        if (typeof options[optionsKey] === 'undefined') {
            options[optionsKey] = {}
        }

        if (typeof options[optionsKey]![key] !== 'undefined') {
            return
        }

        // @ts-ignore
        options[optionsKey]![key] = mapFields(namespace, mapObject)[key]
    })
}

// function createDecoratorFactory<ArgType = string>(
//     optionsKey: 'computed' | 'methods',
//     mapFn: any,
// ) {
//     return (value: ArgType) => {
//         return createDecorator((options, key) => {
//             const mapObject = { [key]: value }
//
//             if (typeof options[optionsKey] === 'undefined') {
//                 options[optionsKey] = {}
//             }
//
//             if (typeof options[optionsKey]![key] !== 'undefined') {
//                 return
//             }
//
//             options[optionsKey]![key] = mapFn(mapObject)[key]
//         })
//     }
// }
