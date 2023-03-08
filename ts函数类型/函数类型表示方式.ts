//函数类型表达式 
// 格式 (参数对象)=>返回值
type BarType=(num:number)=>number
const bar: BarType=(arg:number):number=>
{
  return arg
}
