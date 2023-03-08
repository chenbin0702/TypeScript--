// public 修饰的是 在任何地方可见,公有的属性和方法,默认编写的属性就是public的
// private 修饰的是仅在同一类可见私有的属性和方法
// protected 修饰的是仅在类及子类可见受保护的属性和方法




class Person
{
   public name:string
   public age:number
   constructor(name:string,age:number)
   {
       this.name=name
       this.age=age
   }
   protected eating()
   {
    console.log(this.name);
    
   }
}
const p1=new Person("cb",20)
class People extends Person
{
  say()
  {
    console.log(this.name);
     this.eating()
  }
}
const pe1= new People("hr",17)
export{}