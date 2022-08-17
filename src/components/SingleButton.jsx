import React, {useState} from 'react'
import '../components/SingleButton.css'

const SingleButton = (pair) => {
  const [feedback, setFeedback] = useState(
    "Oops! Try again. Remember, a noun is a person, place, or thing."
  );
  const readAloud =()=>{ console.log(pair.word)}
    const [state, setState]= useState(false);
    
    const toggle=()=>{ if (pair.isAnswer===true) {
      setState(!state)
      console.log('correct! ', pair.word, ' is a noun!')
    } else{console.log(feedback)}

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