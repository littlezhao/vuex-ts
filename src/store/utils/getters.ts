import modules from "../modules";
type GetModuleGetters<Module> = Module extends { getters: infer G } ? G : unknown;
type GetGetters<Modules> = {
    [K in keyof Modules]: GetModuleGetters<Modules[K]>
}
type ModulesGetters = GetGetters<typeof modules>
type AddPrefix<P,K> = `${ P & string }/${ K & string }`
type GetModuleGettersKeys<Module, K> = AddPrefix<K, keyof Module>
type GetModulesGetters<Modules> = {
    [K in keyof Modules]: GetModuleGettersKeys<Modules[K],K>
}[keyof Modules]
// user/isLogin
// type p = GetModulesGetters<ModulesGetters>
type GetType<T,A,B> = T [A & keyof T][B & keyof T[ A & keyof T]]
/* 获取函数 即user/isLogin的类型 */
type GetGettersType<T> = {
    [K in  GetModulesGetters<T> ]: K extends `${infer A }/${infer B}` ? GetType<T,A,B>:unknown
}
type GettersType = GetGettersType<ModulesGetters>;
export type Getters ={
    [K in keyof GettersType]:ReturnType<GettersType[K]>
} 