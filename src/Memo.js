import React from 'react'
import { useSelector, useDispatch } from "react-redux";
import ChangeLocation from './ActionCreators/ChangeLocation';
function Memo() {
    const location = useSelector(state => state.location);
    const dispatch = useDispatch();

    console.log(location);
    return (
        <div>
            Memo <span data-testid="memoText">{location}</span><br />
            <button onClick={() => dispatch(ChangeLocation("New York"))}>Click Here</button>
        </div>
    )
}

export default Memo
