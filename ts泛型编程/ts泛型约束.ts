interface Ilength
{
  length:number
}
function getInfo<T extends Ilength>(agrs:T):T{
   return agrs
}

const info1=getInfo("111")
getInfo(["1111","22"])
getInfo({length:1111})