import modules from "../modules";

type GetModuleActions<Module> = Module extends { actions: infer A } ? A : unknown;
type GetActions<Modules> = {
    [K in keyof Modules]: GetModuleActions<Modules[K]>
}
type ModulesActions = GetActions<typeof modules>
type AddPrefix<P,K> = `${ P & string }/${ K & string }`
type GetModuleActionsKeys<Module, K> = AddPrefix<K, keyof Module>
type GetModulesActions<Modules> = {
    [K in keyof Modules]: GetModuleActionsKeys<Modules[K],K>
}[keyof Modules]
// user/isLogin
 //type p = GetModulesActions<ModulesActions>
type GetType<T,A,B> = T [A & keyof T][B & keyof T[ A & keyof T]]
/* 获取函数 即user/isLogin的类型 */
type GetActionsType<T> = {
    [K in  GetModulesActions<T> ]: K extends `${infer A }/${infer B}` ? GetType<T,A,B>:unknown
}
type ActionsType =  GetActionsType<ModulesActions>;
type ActionsTypes = {
    [K in keyof ActionsType]: ReturnType<ActionsType[K]>
}

export type Dispatch = <T extends keyof ActionsTypes>(action:T)=>ActionsTypes[T]
