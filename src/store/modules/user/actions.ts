import { ActionContext } from "vuex";
import { GET_DATA } from "./constant";
import { State as UserState } from "./state";
import { State } from "../..";
export default {
    [GET_DATA]({ commit }:ActionContext<UserState,State>):Promise<String> {
        console.log("action 执行成功！");
        setTimeout(() =>{
            commit(GET_DATA,false);
        },2000)
      return  Promise.resolve("ok");
    }
}