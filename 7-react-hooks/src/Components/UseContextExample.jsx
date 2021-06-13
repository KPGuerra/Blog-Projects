import React, {createContext, useContext} from 'react'

const background = {
    light: {
      background: "#eeeeee"
    },
    dark: {
      background: "#222222"
    }
  };

  const BackgroundContext = createContext(background.light)

function useContextExample () {
    const background = useContext(BackgroundContext)
    
    function changeBackground () {
    

    document.body.style.background = background.dark.background
}

return (
        <>
            <h1> React Hooks </h1>
            <button onClick={changeBackground} > The background is {background} </button>
        </>
    )
}

export default useContextExample