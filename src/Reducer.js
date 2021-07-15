import React, { useReducer} from 'react'

const reducer = (state, action) => {
    switch (action.type) {
        case "INCREASE_AGE":
            return Object.assign({}, state, { age: state.age++})
            break;
    
        default:
            return state;
            break;
    }
}

function Reducer() {
    const [{age}, dispatch] = useReducer(reducer, { age:23 }) ;
    return (
        <div>
            Reducer {age} <br />
            <button onClick={() => dispatch({ type: "INCREASE_AGE" })}>Click here</button>
        </div>
    )
}

export default Reducer
