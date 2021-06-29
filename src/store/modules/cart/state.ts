export const createState = () => {
    const state = {
        cartIsLogin: true,
    }
    return state;
}
const  state = createState();
export default state;
export type State = ReturnType<typeof createState>