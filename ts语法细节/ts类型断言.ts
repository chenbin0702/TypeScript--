// 获取DOM元素<img class="img">
const imgEl=document.querySelector('.img') as HTMLImageElement
  imgEl.src="xxx"
  imgEl.alt="YYY"
// 类型断言的规则 :断言只能断言成更加具体的类型，或者不太具体的类型(any 或unknown)
const age3:number=18
// 错误的做法
  // const age4=age as string
  const age5=age as any
