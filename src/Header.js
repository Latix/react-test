import React, { useContext, useEffect } from 'react'
import { AppContext } from "./Context";

function Header() {
    const [user, setUser] = useContext(AppContext);
    
    useEffect(() => {
        setUser(Object.assign({car: "bentley"}, user, { age: 28 }))
    }, [])
    console.log(user);
    return (
        <div>
            <h2>Header</h2>
        </div>
    )
}

export default Header
