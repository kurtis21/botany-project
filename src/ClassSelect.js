import React , {useState} from 'react';
 

export default function ClassSelect (props){

    const [ClassOfPollen , setClassOfPollen] = useState();
    
    const handleSubmit = (event) => {
        event.preventDefault()
        props.onSubmit();
    }


    return(
        <div>
        <h1>Enter Class code from the following options:</h1>
        
        <form onSubmit={handleSubmit}>
            <input type="text" value={ClassOfPollen} onChange={event =>
            setClassOfPollen(event.target.value)} />
            <input type="submit" value="Submit" />
        </form>

        <img src="Class selection.png" alt="Class list failed to load"/>
        
        <p>Key:</p>
        <img src="Class key.png" alt="Class key failed to load"/>

        

        </div>

    )
    

}