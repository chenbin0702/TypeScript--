// 区别一:type；类型使用范围更广，接口类型只能用来声明对象
type mynumber=number
type idtype=number|string
// 区别二 在声明对象时 interface 可以多次声明
interface deo{
  x:number,
  y:number
}
interface deo{
  z?:string
}
// interface 支持继承
interface IPerson
{
  name:string,
  age:number
}
interface Ikun extends IPerson
{
  kouhao:string
}
const ikun1:Ikun={
  name:"ikun",
  age:20,
  kouhao:' 哎呦 你干嘛'
}
// 4.interface 可以被类实现

