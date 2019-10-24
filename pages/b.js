import { useState, useReducer, useEffect } from 'react'


function nameReducer(state, action) {
  switch (action.type) {
    case 'add':
      return state + 1
    case 'minus':
      return state - 1
    default:
      return state
  }
}

function B() {
  // const [count, setCount] = useState(0)
  const [count, dispatchName] = useReducer(nameReducer, 0)


  useEffect(() => {
    console.log('eff');
  }, [])
  return (
    <div>
      <h1>{count}</h1>
      <button onClick={() => dispatchName({type: 'add'})}>++</button>
    </div>
  )
}

export default B