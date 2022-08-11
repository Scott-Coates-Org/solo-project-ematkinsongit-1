import React, {useEffect, useState} from 'react'
import {useDownloadURL} from 'react-firebase-hooks/storage';
import { getStorage, ref } from 'firebase/storage';
import {app} from '../firebase/client'
import './SinglePic.css'

const SinglePic = (pair, verb, pathName) => {
    const storage= getStorage(app);
    const [value, loading, error] = useDownloadURL(
    ref(storage, `${pair.pathName}`)
  );
  return ( <div> 
    <h3>Hello World</h3>
   {error && <strong>Error: {error}</strong>}
        {loading && <span>Download URL: Loading...</span>}
        {!loading && value && (
          <div className='picDiv'>
            <span>Download URL: {value}</span>
            <img className='innerPic' src={value}/>
          </div>
        )}
        </div>
  )
}

export default SinglePic