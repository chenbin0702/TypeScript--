// 元组类型中可以存放不同类型的数据类型，取出来的item也是有明确的类型
const info:[string,number,boolean]=["chenbin",20,true]
// 使用场景 在函数中使用类型是最多的（函数返回值）
function useState(init:any):[any,(newValue:any)=>void]
{
   let value=init
   function setValue(newValue:any)
   {
    value=newValue
   }
   return [value,setValue]
}
const [count,setValue]=useState(12)
setValue(222)