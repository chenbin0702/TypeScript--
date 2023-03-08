class Father
{
  name:string
  constructor(name:string)
  {
     this.name=name
  }
  speak()
  {
    console.log("我叫"+this.name);
    
  }
}

class Son extends Father
{

}
const son1=new Son("cb")
son1.speak()