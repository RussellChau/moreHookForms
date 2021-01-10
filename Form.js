import React, {useState} from "react";


const Form = () => {
    const [state,setState] = useState ({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        confirmPassword: ""
    })

    const updateData = e => {
        setState({
            ...state,
            [e.target.name] : e.target.value
        });
    }

    return (
        <form>
            <div className="inputText">
                <label htmlFor="firstName">First Name:</label>
                <input type="text" name="firstName" onChange={updateData}/>
            </div>
            { 
                state.firstName.length < 2 && state.firstName.length !== 0 ?
                ( <p>First Name cannot have less than two letters!</p>) : 
                null
            }
            <div className="inputText">
                <label htmlFor="lastName">Last Name:</label>
                <input type="text" name="lastName" onChange={updateData}/>
            </div>
            { 
                state.lastName.length < 2 && state.lastName.length !== 0 ?
                ( <p>Last Name cannot have less than two letters!</p>) : 
                null
            }
            <div className="inputText">
                <label htmlFor="Email">Email:</label>
                <input type="text" name="email" onChange={updateData}/>
            </div>
            { 
                state.email.length < 5 && state.email.length !== 0 ?
                ( <p>Email cannot have less than five letters!</p>) : 
                null
            }
            <div className="inputText">
                <label htmlFor="Password">Password:</label>
                <input type="text" name= "password" onChange={updateData}/>
            </div>
            {
                state.password.length < 8 && state.password.length !== 0 ?
                ( <p>Password cannot have less than eight letters!</p>) : 
                null
            }           
            <div className="inputText">
                <label htmlFor="confirmPassword">Confirm Password:</label>
                <input type="text" name="confirmPassword" onChange={updateData}/>
            </div>
            {
                state.confirmPassword.length !== 0  && state.password !== state.confirmPassword?
                ( <p>Passwords must match!</p>) : 
                null
            }   
        </form>
    );

};

export default Form;
