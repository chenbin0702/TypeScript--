// 字面量类型的基本使用
const name:"why"="why"
let age:18=18
// 将多个字面量类型联合起来
type Direction="left"|"right"|"up"|"down"
const d1:Direction="left"
// 封装请求方法
type MethodType="get"|"post"
function request(url:string,method:MethodType)
{

}
// request("http://ssss.cn","post")
// ts细节
// const info=
// {
//   url:"sss",
//   method:"post"
// }
// request(info.url,info.method as "post")
const info1=
{
  url:"sss",
  method:"post"
} as const
request(info1.url,info1.method)
export{}