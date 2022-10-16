// We use default Nuxt index-based store,
// read more about it here:
// https://nuxtjs.org/guide/vuex-store

import Vue from 'vue'
import Vuex, { Store, Plugin } from 'vuex'
import { createVuexStore } from 'vuex-simple'
// @ts-ignore
import { getField, updateField } from 'vuex-map-fields'

import TypedStore from './root'

type StateType = {}

Vue.use(Vuex)

/**
 * Creates Vuex.Store to be used and called by Nuxt.
 *
 * We also use this store in tests.
 *
 * @param ssrContext - Is passed via Nuxt, represents current req / res.
 * @param extraContext - Extra options to be used in tests.
 * @param extraContext.plugins - Allows to pass additional plugin to the store.
 * @returns Global store instance.
 */
export default function store(
    ssrContext: unknown,
    extraContext: { plugins: Plugin<StateType>[] },
): Store<StateType> {
    const typedStore = new TypedStore()

    return createVuexStore(typedStore, {
        plugins: extraContext ? extraContext.plugins : [],
    })
}
