function bar<T>(arg:T)
{
  return arg
}
// 完整写法
const res1=bar<number>(123)
const res2=bar<string>("122")
// 省略写法
let res4=bar("21212")
const res5=bar("21212")