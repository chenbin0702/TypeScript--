type MapPerson<Type>=
{
 readonly [property in keyof Type]?:Type[property]
}
interface IPerson{
  name:string,
  age:number
}
type newPerson=MapPerson<IPerson>
const p1:newPerson={

}
export{}