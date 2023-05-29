import Http from "./Http";
export const getProducts=(config)=>{
    return Http.get("products",config);
}
// export const getPost=(config)=>{
//     return Http.get("posts",config);
// }