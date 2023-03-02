// 如果返回值是void类型,也可以返回undefined
function sum1(num1:number,num2:number):void
{
   console.log(num1+num2);
  //  return num1+num2 不能有返回值
}
// 应用场景 用来指定函数类型的返回值是void
type FooType=()=>void
const foo1:FooType=()=>{}
// 举个例子
// 1.定义要求传入的函数类型
type ExecFnType=(...arg:any[])=>void
// 2.定义一个函数，并且接受的参数也是一个函数，而且这个函数的类型必须是ExecFnType
function delayExecFn(fn:ExecFnType)
{
  setTimeout(() => {
    fn("why",20)
  }, 1000);
}
delayExecFn((name,age)=>{
  console.log(name,age);
})
