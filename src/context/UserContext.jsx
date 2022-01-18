import React, { useState } from "react";

const Context = React.createContext({})

export function UserContextProvider ({children}){
  const [userNumbers, setUserNumbers] = useState('')
  
  return (
    <Context.Provider value={{userNumbers, setUserNumbers}}>
      {children}
    </Context.Provider>
  )
}

export default Context