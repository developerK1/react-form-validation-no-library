import { useEffect, useState } from 'react';
import PopUp from '../components/modals/PopUp';

const Login = () => {

    const defaultValues = {
        name : "",
        email : "",
        password : "",
    }
    const [formValues, setFormValues] = useState(defaultValues);
    const [errors, setErrors] = useState({});
    const [readyInputs, setReadyInputs] = useState(false);
    const [popUpShow, setPopUpShow] = useState(false);

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

            if(input === "name"){
                if(emptyReg.match(val)){
                    Errors.name = `${input} cannot be empty!`;
                } else if(val.length < 3){
                    Errors.name = "Name cannot be less than 2 characters"  ;
                }
            }
        
        }

        checkValues(formValues.name, "name");
        checkValues(formValues.email, "email");
        checkValues(formValues.password, "password"); 

        return Errors;
    }


    useEffect(() => {
      if(Object.keys(errors).length === 0 && readyInputs){
        setPopUpShow(true)
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
                </div>
                <h6 className='error-red'>{errors.name}</h6>
                <div className='centerfy-col'>
                    <label>Email</label>
                    <input type='text' placeholder='Name here..' name='email' value={formValues.email}
                    onChange={(e)=>handleChange(e)}/>
                </div>
                <h6 className='error-red'>{errors.email}</h6>
                <div className='centerfy-col'>
                    <label>Password</label>
                    <input type='password' name='password' value={formValues.password}
                    onChange={(e)=>handleChange(e)}/>
                </div>
                <h6 className='error-red'>{errors.password}</h6>
                <div className='centerfy-col'>
                    <button>Sign In</button>
                </div>
            </form>
        </article>
        {popUpShow ? <h6opUp setState={setPopUpShow}/> : ""}
    </section>
  )
}

export default Login;