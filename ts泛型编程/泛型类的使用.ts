class Point<T>
{
  constructor(public x:T,public y:T)
  {

  }
  getxy()
  {
    console.log(this.x,this.y);
    
  }
}
let demo1:Point<number>=new Point(12,11)
