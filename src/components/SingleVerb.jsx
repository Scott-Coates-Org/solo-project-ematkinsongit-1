import React from 'react'

const SingleVerb = (pair, verb, pathName) => {
  return (
     <button draggable="true"
      className="singleVerb"
    value={pair.verb}
    >{pair.verb}</button>
  )
}

export default SingleVerb