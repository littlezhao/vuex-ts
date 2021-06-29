import { State } from "./state";

const getters = {
    cartIsLogin(state:State):string{
        return `cartIsLogin:${state.cartIsLogin}`
    }
}
export default getters;