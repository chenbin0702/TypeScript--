let fo1:string|number="111"
if(typeof fo1==='string')
{
  console.log(fo1.length);
}

function printId(id:number|string)
{
  // 类型缩小
   if(typeof id==="string")
   {
    console.log(id.length);
   }
   else
   {
    console.log(id);
   }
}
printId("111")