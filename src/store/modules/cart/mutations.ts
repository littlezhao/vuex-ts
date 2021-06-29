import { GET_DATA } from "./constant";
import { State } from "./state";

const mutations = {
    [GET_DATA](state:State,payload:boolean):void{
        state.cartIsLogin=payload;
    }
}
export default mutations