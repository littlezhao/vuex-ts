import { useStore } from "..";
import { State } from ".."
import { Getters,Dispatch } from "../utils"
interface EnhanceStore{
    state:State,
    getters:Getters,
    dispatch:Dispatch
}
const useEnhanceStore = ():EnhanceStore=>{
    const {state, getters,dispatch} :EnhanceStore = useStore();
    return { state, getters , dispatch};
}
export { useEnhanceStore };
export default useEnhanceStore;