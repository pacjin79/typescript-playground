
interface IDictionary <T> {
    [index:string]: T;
}
interface IAppState {
    pages: IDictionary<any>;
    products: IDictionary<any>;   
}