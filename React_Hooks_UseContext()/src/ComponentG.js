import React, { Component,useContext } from 'react'
import {userContext, ageContext} from './index';



const ComponentG = () => {

const name = useContext(userContext);
const age = useContext(ageContext);

    return (
        <div>
            {name} - {age}
        </div>
    );
}

export default ComponentG;
