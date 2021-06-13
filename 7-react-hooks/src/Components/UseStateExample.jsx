import React, {useState} from 'react'

function useStateExample () {
    const [message, setMessege] = useState('Unclicked')

    function changeMessage () {
        setMessege('Clicked')
    }
    return (
        <h1 onClick={changeMessage}> {message} </h1>
    )
}

export default useStateExample
