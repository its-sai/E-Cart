import React,{useState} from 'react'
import { Link } from 'react-router-dom'
import './Login.css'
function Login() {
        const[email,setEmail]=useState('');
        const[password,setPassword]=useState('');
        
        const signIn=e=>{
            e.preventDefault();
        } 
        const register=e=>{
            e.preventDefault();
        }
    


  return (
    <div className='login'>
    <Link to ='/'>
        <img className='login_image' src='https://www.iboxsolutions.com/wp-content/uploads/2011/08/E-Commerce-Icon.png'></img>
    </Link>
    <div className='login_container'>
        <h1>Sign-in</h1>

        <form>
            <h4>Email</h4>
            <input type='text' value={email} 
            onChange={e=>setEmail(e.target.value)}
            />
            <h4>Password</h4>
            <input type='password' value={password}
            onChange={e=>setPassword(e.target.value)}
            />
            <button className='login_signin_button' onClick={signIn} type='submit'>Sign In</button>
        </form>
        <p>By Signing In You Agree To E-Cart Conditions of use and Claim.Please see our Privacy Notice ,our Cookies Notice</p>
        <button className='login_register_button' onClick={register} type='submit'>Create your E-Cart Account</button>
    </div>

    
    </div>
  )
}


export default Login