// typeof 使用的最多
function printId(id:number|string)
{
  if(typeof id ==="string")
  {
    console.log(id.length);
    
  }
}
printId("2222")

// 方向的类型判断 平等缩小
type Direction="left"|"right"|"up"|"dowm"
function swDirection(direction:Direction)
{
  if(direction==="dowm")
  {
    console.log("向下移动");
  }
}
// 传入一个日期 打印日期
function printDate(date:string|Date)
{
   if(date instanceof Date)
   {
    console.log(date.getTime());
    
   }
   else
   {
    console.log(date);
    
   }
}
// 判断是否有一个属性
interface Iswim{
  swim:()=>void
}
interface IRun{
  run:()=>void
}
function move(animal:Iswim|IRun)
  {
      if("swim" in animal)
      {
        animal.swim()
      }
      else if("run" in animal)
      {
         animal.run()   
      }
  }
  const fish:Iswim={
    swim:()=>{
      console.log("SWIM");
      
    }
  }
  const dog:IRun={
    run:()=>{
      console.log("run");
      
    }
  }
  move(fish)
export{}