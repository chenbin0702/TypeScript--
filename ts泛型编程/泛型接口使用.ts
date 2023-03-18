interface Ikun<T=string>
{
  name:T
  age:number
  sex:T
}

let iku1:Ikun<number>=
{
  name:22,
  age:22,
  sex:1
}
let iku2:Ikun=
{
  name:"22",
  age:22,
  sex:"1"
}
