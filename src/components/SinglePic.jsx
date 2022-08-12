import React, {useEffect, useState} from 'react'
import {useDownloadURL} from 'react-firebase-hooks/storage';
import { getStorage, ref } from 'firebase/storage';
import {app} from '../firebase/client'

const SinglePic = (pair, verb, pathName) => {
    const storage= getStorage(app);
    const [value, loading, error] = useDownloadURL(
    ref(storage, `${pair.pathName}`)
  );
  return ( <div> 
   {error && <strong>Error: {error}</strong>}
        {loading && <span>Download URL: Loading...</span>}
        {!loading && value && (
          <div className='picDiv'>
            <img className='innerPic' src={value} id={pair.verb}/>
          </div>
        )}
        </div>
  )
}

export default SinglePic