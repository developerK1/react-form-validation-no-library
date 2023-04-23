import { useEffect, useState } from 'react'

const Login = () => {

    const defaultValues = {
        name : "",
        lastname : "",
        email : "",
        password : "",
        confirmpassword : "",
        body : "",
    }
    const [formValues, setFormValues] = useState(defaultValues);
    const [errors, setErrors] = useState({});
    const [readyInputs, setReadyInputs] = useState(false);

    const handleChange = e =>{
        const {name , value} = e.target;
        setFormValues({...formValues,[name] : value})
    }
  
    const handleSubmit = e =>{
        e.preventDefault();
        setErrors(validateValues(formValues));
        setReadyInputs(true)
    }

    const validateValues = formValues =>{
        const Errors = {};
        const emailReg = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
        const emptyReg = "^\s+$";

        
        
        const checkValues = ( val , input ) =>{

            if(input === "email"){
                if(emptyReg.match(val)){
                    Errors.email = `${input} cannot be empty!`;
                }
                else if(!emailReg.test(val)){
                    Errors.email = "Enter a valid email adress" ;
                }
            }

            if(input === "password"){
                if(emptyReg.match(val)){
                    Errors.password = `${input} cannot be empty!`;
                } else if (val.length < 5 && val.length > 10){
                    Errors.password = "PassWord Must Be more than 6 character less than 10" ;
                }
            }


            if(input === "confirmpassword"){
                if(emptyReg.match(val)){
                    Errors.confirmpassword = `${input} cannot be empty!`;
                } else if(val.length < 5 && val.length > 10){
                    Errors.confirmpassword = "PassWord Must Be more than 6 character less than 10" ;
                }else{
                    if(formValues.password !== val ){
                        Errors.confirmpassword = "PassWord do not match" ;
                    }
                }
            }

            if(input === "lastname"){
                if(emptyReg.match(val)){
                    Errors.lastname = `${input} cannot be empty!`;
                } else if(val.length < 3){
                    Errors.lastname = "Last Name cannot be less than 2 characters" ;
                }
            }

            if(input === "name"){
                if(emptyReg.match(val)){
                    Errors.name = `${input} cannot be empty!`;
                } else if(val.length < 3){
                    Errors.name = "Name cannot be less than 2 characters"  ;
                }
            }

            if(input === "body"){
                if(emptyReg.match(val)){
                    Errors.body = `${input} cannot be empty!`;
                }
            }
        
        
        }

        checkValues(formValues.name, "name");
        checkValues(formValues.lastname, "lastname");
        checkValues(formValues.email, "email");
        checkValues(formValues.password, "password");
        checkValues(formValues.confirmpassword, "confirmpassword");
        checkValues(formValues.body, "body");   

        return Errors;
    }


    useEffect(() => {
      if(Object.keys(errors).length === 0 && readyInputs){
        console.log("well done, valid inputs")
      }else{
        console.log(errors)
    }
    }, [errors])
    

    return (
    <section className="centerfy">
        <article>
            <form onSubmit={(e)=>handleSubmit(e)}>
                <div className='centerfy-col'>
                    <label>Name</label>
                    <input type='text' placeholder='Name here..' name="name"  value={formValues.name}
                    onChange={(e)=>handleChange(e)}/>
                    <p className='error-red'>{errors.name}</p>
                </div>
                <div className='centerfy-col'>
                    <label>Last Name</label>
                    <input type='text' placeholder='Name here..' name='lastname' value={formValues.lastname}
                    onChange={(e)=>handleChange(e)}/>
                    <p className='error-red'>{errors.lastname}</p>
                </div>
                <div className='centerfy-col'>
                    <label>Email</label>
                    <input type='text' placeholder='Name here..' name='email' value={formValues.email}
                    onChange={(e)=>handleChange(e)}/>
                    <p className='error-red'>{errors.email}</p>
                </div>
                <div className='centerfy-col'>
                    <label>Password</label>
                    <input type='password' name='password' value={formValues.password}
                    onChange={(e)=>handleChange(e)}/>
                    <p className='error-red'>{errors.password}</p>
                </div>
                <div className='centerfy-col'>
                    <label>Confirm Password</label>
                    <input type='password'  name='confirmpassword' value={formValues.confirmpassword}
                    onChange={(e)=>handleChange(e)}/>
                    <p className='error-red'>{errors.confirmpassword}</p>
                </div>
                <div className='body'>
                    <textarea placeholder='How can we help' name="body" value={formValues.body}
                    onChange={(e)=>handleChange(e)}></textarea>
                    <p className='error-red'>{errors.body}</p>
                </div>
                <div className='centerfy-col'>
                    <label>You are not robot</label>
                    <input type='checkbox' name='checkbox'
                    onChange={(e)=>handleChange(e)}/>
                </div>
                <div className='centerfy-col'>
                    <button>Register</button>
                </div>
            </form>
        </article>
    </section>
  )
}

export default Login