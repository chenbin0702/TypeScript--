interface IPerson
{
  name:string
  age:number
}
// 奇怪现象一
const obj={
  name:"cb",
  age:20,
  sex:"男"
}
const info:IPerson=obj
// 奇怪现象二
function fn(person:IPerson)
{

}
fn(obj)
// fn({name:"cb",age:20,sex:"nan"})
// 解释现象
// 第一次创建的对象字面量,称之为fresh
// 对于新鲜的字面量,会进行严格的类型检测