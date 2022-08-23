import React, {useState} from 'react'
import '../components/SingleButton.css'

const SingleButton = ({pair, word, isAnswer, toggle}) => {
  const [disable, setDisable]=useState(false);
  const [feedback, setFeedback] = useState( 
    "Oops! Try again. Remember, a noun is a person, place, or thing."
  );


  const readAloud =()=>{
   
  //  console.log(word)
  }
    // const toggle=()=>{ if (isAnswer===true) {
    //   setState(!state) 
    //   setDisable(true);
    //   console.log('correct! ', word, ' is a noun!')
    // } else{alert(feedback)}

    // }
const handleMouseEnter=()=>{readAloud(word)}
  return (
    <button onClick={()=>{toggle({isAnswer, disable, setDisable})}}
    className={'toggle--button ' + (disable ? 'toggle--close':'')}
    disabled={disable}
    
    
    onMouseEnter={()=>{handleMouseEnter(pair)}}
    
    
    >{word}</button>
  )
}

export default SingleButton