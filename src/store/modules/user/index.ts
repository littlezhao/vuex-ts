import  userState  from './state'
import getters from './getters';
import mutations from './mutations'
import actions from './actions'
export default {
    namespace: true,
    state:userState,
    getters,
    mutations,
    actions
}