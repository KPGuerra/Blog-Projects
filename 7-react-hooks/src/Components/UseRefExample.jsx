import React, {useEffect} from 'react'

function useEffectExample () {
    
    useEffect (() => {
        document.body.style.color = 'blue'
    })

   
    return (
        <h1> React Hooks </h1>
    )
}

export default useEffectExample