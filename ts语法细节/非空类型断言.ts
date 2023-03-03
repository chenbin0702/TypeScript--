// 定义接口
interface IPeople
{
  name:string,
  age:number,
  friend?:
  {
    name:string
  }
}
const cbinfo:IPeople={
  name:"chenbin",
  age:20
}
// 访问属性 可选链接
console.log(cbinfo.friend?.name);
// 属性赋值
// cbinfo.friend?.name="hr"
// 类型缩小
if(cbinfo.friend)
{
  cbinfo.friend.name="hr"
}
// 非空类型断言（有点危险，只有确保friend一定有值的情况下，才能使用）
cbinfo.friend!.name="cbcb"