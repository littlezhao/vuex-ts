export const createState = () => {
    const state = {
        isLogin: true,
    }
    return state;
}
const  State = createState();
export default State;
export type State = ReturnType<typeof createState>