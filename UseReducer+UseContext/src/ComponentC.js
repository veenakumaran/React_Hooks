import React from 'react';
import ComponentB from './ComponentB';
import ComponentD from './ComponentD';
import ComponentE from './ComponentE';

const ComponentC = () => {
    return (
        <div>
            <ComponentD/>
            <ComponentE/>
        </div>
    );
}

export default ComponentC;
