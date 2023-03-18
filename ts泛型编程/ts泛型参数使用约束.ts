interface Ikun{
  name:string,
  age:number
}
type IkunKeys=keyof Ikun //"name"|"age"

function getObjectProperty<O,K extends keyof O>(obj:O,key:K)
{
   return obj[key]
}
const info={
  name:"why",
  age:18,
  height:1.88
}

getObjectProperty(info,"age")
export{

}