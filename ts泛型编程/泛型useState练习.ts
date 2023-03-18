function useState<T>(init:T):[T,(newState:T)=>void]
{
  let state=init
  function setState(newState:T)
  {
      state=newState
  }
  return [state,setState]
}
const [count,setCount]=useState<number>(10)