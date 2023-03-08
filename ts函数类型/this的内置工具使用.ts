function foo( this:{name:string},info:{name:string})
{
  console.log(this,info);
  
}
type FooType=typeof foo
// ThisParameterType 获取FooType类型中this的类型
type FoothisType=ThisParameterType<FooType>
// OmitThisParameter :删除this 类型,剩余的函数类型
type PureFooType=OmitThisParameter<FooType>
// ThisType
interface State{
 name:string,
 age:number
}
interface Store
{
  state:State
  eating:()=>void
  sleppong:()=>void
}
const store:Store & ThisType<State>=
{
  state:{
    name:"cb",
    age:20
  },
  eating: function(){
     console.log(this.name);
  },
  sleppong:function()
  {
    console.log(this.age);
  }
}
store.eating.call(store.state)
export{}