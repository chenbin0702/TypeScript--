// 对象和函数类型结合使用
type PointType={
  x:number,
  y:number
  z?:number
}
function printCode(point:PointType)
{
  console.log('x的坐标',point.x);
  console.log('y的坐标',point.y);
}
printCode({x:22,y:111}) 