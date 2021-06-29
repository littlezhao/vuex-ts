import { State } from "./state";

const getters = {
    isLogin(state:State):string{
        return `isLogin:${state.isLogin}`
    }
}
export default getters;