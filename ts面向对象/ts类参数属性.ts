class Person
{
  // 语法糖
   constructor(public name:string,readonly age:number)
   {

   }
}
const p1=new Person("cb",20)
p1.name
p1.age
export{}