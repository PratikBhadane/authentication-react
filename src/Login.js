import React,{useState} from 'react';
import bootstrap from '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import './Login.css'
import swal from 'sweetalert'
function Login()
{
    const[username,setUsername]=useState('');
    const[password,setPassword]=useState('');
 
    function validate(event)
    {
        event.preventDefault();
        if(username=='Pratik' && password=='Pratik@123' )
        {
            // message using sweetalert library
            swal('Login Successful','Congratulations','success')
        }
        else{
            swal('Invalid login details','please give valid datails','error')
        }
    }
    

    return <div>
      {/*
         //row default have 12 columns
         // webgradient.com for background color
      */}
      <div className='row justify-content-center'>
        <div className='col-md-4'>
          <h1>User Authentication</h1>
           <form action="" onSubmit={validate} >
              <input type="text" placeholder='username'   className='form-control' value={username} onChange={
                  (e)=>{
                        setUsername(e.target.value);
                       }} />
              <input type="password" placeholder='password'   className='form-control' value={password} onChange={
                  (e)=>{
                         setPassword(e.target.value);
                       }}  />
              <input type="submit" className='btn-primary'  value='submit' />

           </form>
        </div>
      </div>

    </div>
}

export default Login;