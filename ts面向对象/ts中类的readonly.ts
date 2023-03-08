class Person
{
  readonly name:string
  age:number
  constructor(name:string,age:number)
  {
      this.name=name
      this.age=age
  }
}
let p1= new Person("CB",20)
// readonly 只读
// p1.name="111"
export{}