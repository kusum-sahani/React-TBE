import React from 'react';
import ComponentB from './ComponentB';

function ComponentA(params) {
 // Data to pass to Component B
    const dataToPass = "This is the first component by Kusum!";

    return(
     <div>
        <h2>ComponentA</h2>
        {/* pass data from A to B */}
        <ComponentB data={dataToPass} />  
     </div> 
    );
};
export default ComponentA;