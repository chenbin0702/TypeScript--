interface Collection
{
  // 索引签名
  [index:number]:string
  length:number
}

function fn(collection:Collection)
{
  console.log(collection[0]);
  
}
const tuple:[string,string]=["cb","hr"]
fn(tuple)
export{}