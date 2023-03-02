// 一个函数是死循环
function foo2():never
{
    //  while(true)
    //  {

    //  }
    throw new Error("1233")
}
foo2()
// 2.解析歌词的工具
function parseLyric()
  {
    return []
  }
  // 封装框架/工具库的时候可以使用一下never
  function handleMessage(message:string|number)
  {
      switch(typeof message)
      {
        case "string":
          console.log(message);
          break;
        case "number":
            console.log(message);
            break;   
        default:
              const check:never=message
      }
  }