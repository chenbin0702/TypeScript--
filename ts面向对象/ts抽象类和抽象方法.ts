abstract class Shap 
{
  abstract getArae()
}
class Rectangle extends Shap{
  constructor(public width:number,public height:number)
  {
     super()
  }
  getArae()
  {
     return this.width*this.height
  }
}

class Circle extends Shap{
  constructor(public r:number)
  {
     super()
  }
  getArae()
  {
     return 3.14*this.r*this.r
  }
}
function calcArea(shap:Shap)
{
    shap.getArae() 
}
calcArea(new Rectangle(10,20))
calcArea(new Circle(10))