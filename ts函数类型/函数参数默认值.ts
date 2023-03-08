// 在有默认值的情况下，参数可以接受undefined
// 在有默认值的情况下，参数类型注解可以省略
function foo1(x:number,y:number=200)
{
   if(y!==undefined)
   {
    console.log(y+"20");
    
   }
}
foo1(10)
foo1(10,undefined)
export{

}