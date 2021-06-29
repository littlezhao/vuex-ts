import { createStore,Store,useStore as baseUseStore } from 'vuex'
import { InjectionKey } from 'vue'
import modules from './modules'
import userState from './modules/user/state'
const rootState = {
    rootIsLogin: Boolean,
    user:userState
}
export const key: InjectionKey<Store<State>> = Symbol()
export type State = typeof rootState
const store = createStore<State>({
    state: rootState,
    modules
});
export function useStore(){
    return baseUseStore(key);
}
export default store