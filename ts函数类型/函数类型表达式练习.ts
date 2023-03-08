type CalcType=(num1:number,num2:number)=>number
function calc(calfn:CalcType){
     const num1=10
     const nmu2=20
     calfn(num1,nmu2)     
}

function sum(num1:number,num2:number)
{
   return num1+num2
}
function mul(num1:number,num2:number)
{
  return num1*num2
}
calc(sum)
calc(mul)
calc((num1:number,num2:number)=>{
   return num1/num2
})
export{}