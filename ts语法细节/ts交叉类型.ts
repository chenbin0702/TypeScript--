// 交叉类型 两种从（多种）类型同时满足
interface ikun1{
  name :string,
  age:number
}
interface Icoder{
  name:string
  code:()=>void
}
const info2:Icoder&ikun1={
  name:"chenbin",
  age:20,
  code:()=>{
    console.log("sss");
  }
}