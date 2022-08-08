import { useReducer } from "react"

type StateProp ={
 count: number
}
// below three types are example of union type
type IncDecProp ={
    type: 'increement' | 'decreement' 
    payload: number
}
type ResetProp ={
    type: 'reset' 
}
type ActionProp = IncDecProp | ResetProp 

// type ActionProp ={
//     //type: string
//     type: 'increement' | 'decreement' | 'reset'
//     payload: number
// }
const initialState ={count: 0}


function reducer(state: StateProp, action: ActionProp){
    switch (action.type) {
        case 'increement':
            return {count: state.count + action.payload}
        case 'decreement':
            return {count : state.count - action.payload}
        case 'reset':
            return initialState
        default:
            return state;
    }
}

function Reducers() {

    const [state, dispatch] = useReducer(reducer, initialState)

  return (
    <>
        {state.count}
        <button onClick={() => dispatch({type: 'increement', payload: 5})}>Increement by 5</button>
        <button onClick={() => dispatch({type: 'decreement', payload: 5})}>Decreement by 5</button>
        <button onClick={() => dispatch({type: 'reset'})}>Reset</button>

    </>
  )
}

export default Reducers

// import { useReducer } from 'react'

// type CounterState = {
//   count: number
// }

// type UpdateAction = {
//   type: 'increment' | 'decrement'
//   payload: number
// }

// type ResetAction = {
//   type: 'reset'
// }

// type CounterAction = UpdateAction | ResetAction

// const initialState = { count: 0 }

// function reducer(state: CounterState, action: CounterAction) {
//   switch (action.type) {
//     case 'increment':
//      // return { count: state.count + (action.payload || 0) }
//       return { count: state.count + action.payload }
//     case 'decrement':
//       return { count: state.count - action.payload }
//     case 'reset':
//       return initialState
//     default:
//       return state
//   }
// }

// export const Reducers = () => {
//   const [state, dispatch] = useReducer(reducer, initialState)
//   return (
//     <>
//       Count: {state.count}
//       <button onClick={() => dispatch({ type: 'increment', payload: 10 })}>
//         Increment 10
//       </button>
//       <button onClick={() => dispatch({ type: 'decrement', payload: 10 })}>
//         Decrement 10
//       </button>
//       <button onClick={() => dispatch({ type: 'reset' })}>Reset</button>
//     </>
//   )
// }