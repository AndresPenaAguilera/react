import { useState } from 'react'
import PropTypes from 'prop-types'

export default function CounterApp({ value })  {

const [counter, setCounter] = useState( value )

const handleOpe = (value)=>{
    setCounter(  counter+value )
}

const reset = ()=>{
    setCounter(  value )
}
  return (
    <>
     <div>CounterApp</div>
     <div>{ counter }</div>
     <button onClick={ () => handleOpe(1) }>
        +1
     </button>
     <button onClick={  () => handleOpe(-1) }>
        -1
     </button>
     <button onClick={reset}>
        Reset
     </button>
    </>
   
  )
}

CounterApp.propTypes={
    value:PropTypes.number.isRequired
}
