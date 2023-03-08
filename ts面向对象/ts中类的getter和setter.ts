class Person
{
  private _name:string
  age:number
  constructor(name:string,age:number)
  {
      this._name=name
      this.age=age
  }
  set name(newValue:string)
  {
      this._name=newValue
  }
  get name()
  {
    return this._name
  }
}
let p1= new Person("CB",20)
p1.name="cb"
// getter 和setter 用于访问私有属性 对属性的访问进行拦截
export{}