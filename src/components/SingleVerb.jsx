import React from 'react'

const SingleVerb = (pair, verb, pathName) => {
    const handleClick =(verb)=>{if (verb==='fly') {
        console.log('success')
    }else{console.log('failure')}}
  return (
    <div> <p onClick={()=>handleClick(pair.verb)} id={pair.verb}
    value={pair.verb}
    >{pair.verb}</p></div>
  )
}

export default SingleVerb