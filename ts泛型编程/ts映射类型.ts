// ts提供了映射类型 ：函数
// 映射类型不能使用interface
// Type=IPerson
// keyof="name"|"age"
type MapPerson<Type>=
{
  [property in keyof Type]:Type[property]
}
interface IPerson{
  name:string,
  age:number
}
// 拷贝一份IPerson
// interface NewPerson
// {
//   name:string,
//   age:number
// }
type NewPerson=MapPerson<IPerson>