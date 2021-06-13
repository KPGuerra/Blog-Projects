import React, {useRef} from 'react'

function useRefExample () {

    function clearInput() {
        inputRef.current.value = " "
        inputRef.current.focus()
    }

   
    return (
        <>
        <form>
            <input type='text' ref={inputRef}></input>
        </form>

        <button onClick={clearInput}> Clear the input! </button>
        </>
    )
}

export default useRefExample