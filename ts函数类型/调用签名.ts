interface IBar
{
  name:string,
  age:number,
  // 函数可以调用 ：函数调用签名
  (num1:number):number
}
const bar:IBar=(num1:number):number=>{
  return 123
}
bar.name="chenbin"
bar.age=20
bar(123)
// 开发中选择
// 1如果只是描述函数类型本身（函数可以被调用），使用函数表达式
// 2 如果在描述函数作为对象可以被调用，同时有其他属性，用函数调用签名
export{}