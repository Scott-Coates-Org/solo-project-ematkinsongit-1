import React, {useState} from 'react'
import { uuidv4 } from '@firebase/util';
import '../components/SingleButton.css'

const SingleButton = (pair, word, isAnswer) => {
  const readAloud=()=>{}
    const [state, setState]= useState(false);
    
    const toggle=()=>{ if (pair.isAnswer===true) {
      setState(!state)
      console.log('correct! ', pair.word, ' is a noun!')
    } else{console.log('sorry! incorrect')}

    }
const handleMouseEnter=()=>{readAloud(pair.word)}
  return (
    <button onClick={()=>{toggle(pair)}}
    className={'toggle--button ' + (state ? 'toggle--close':'')}
    
    
    onMouseEnter={()=>{handleMouseEnter(pair)}}
    
    
    >{pair.word}</button>
  )
}

export default SingleButton