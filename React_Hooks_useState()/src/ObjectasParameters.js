import React,{useState} from 'react';


//usestate doesnot automatically merge objects
//we need to use the spred operator of the object 
//so that all values in the objects are maintained and not removed when only one value is being set
//here name is the object which takes -> firstname and lastname as properties
const Fullname = () => {
    const [name, setname] = useState({firstname : '', lastname : ''});
    
    const [obj, setobj] = useState({age : 20 , prevage : 19 });

    return (
        <div>
           <label>ENTER FIRST NAME :</label>
            <input type = 'text' onChange ={(e) => setname({...name, firstname : e.target.value})}></input>
    
            <br></br>
            <label>ENTER LAST NAME  : </label>
            <input type = 'text' onChange={(e)=>setname({...name, lastname : e.target.value})}></input>
<hr></hr>
            <label>first name :  {name.firstname} </label> 
            <label>last name :  {name.lastname}</label>
            <br></br>      <br></br>
            <div> previous Age : {obj.prevage} &ensp; age : {obj.age} &ensp;
            <button onClick ={ () => setobj( { age : obj.age + 1 , prevage : obj.age}) } > increase age  </button>
            </div> 
            
        </div>
    );
}

export default Fullname;
