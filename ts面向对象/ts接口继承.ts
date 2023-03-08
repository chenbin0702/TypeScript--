interface IPerson{
  name:string
  age:number
}
interface Ikun extends IPerson{
  slonan:string
  playBasketball:()=>void
}
// 可以从其他的接口中继承过来属性
// 1.可以减少相同代码的重复编写
// 2.使用第三方库 继承第三方库的所有属性

const ikun:Ikun={
  name:'chenbin',
  age:20,
  slonan:'哎呦你干嘛',
  playBasketball:function()
  {
    
  }

}
class Person implements Ikun
{

  age:number
  slonan:string
  name: string
  playBasketball()
  {

  }
}
const p1:Person=new Person()
p1.age


export{}