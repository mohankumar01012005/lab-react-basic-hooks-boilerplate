import React, { createContext, useState } from 'react'

export const AppContext = createContext()

const ParentContext = ({children}) => {
    const [mainCount,setMainCount]= useState(50000)
    const [isDark,setisDark] = useState(false)
    const decreaseCount =()=>{
        setMainCount(mainCount-1000)
    }
    const increaseCount=()=>{
      setMainCount(mainCount+1000)
    }

  return <AppContext.Provider value={{mainCount,setMainCount,decreaseCount,isDark,setisDark,increaseCount}}>
    {children}
    
  </AppContext.Provider>
}

export default  ParentContext