let foo:unknown="aaa"
foo=222
// console.log(foo.length); 不合法
// 要求必须进行类型缩减，才能根据缩小之后的类型进行对应的操作
if(typeof foo==="string") //类型缩小
{
  console.log(foo.length)
}
