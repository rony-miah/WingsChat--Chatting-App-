import React, { useState } from 'react'
import {BsEyeSlashFill,BsEyeFill} from 'react-icons/bs'
import { getAuth, createUserWithEmailAndPassword, sendEmailVerification } from "firebase/auth";
import { ToastContainer, toast } from 'react-toastify';
import { Link, useNavigate } from 'react-router-dom';
import Login from '../Login/Login';

const Registration = () => {
    const auth = getAuth();
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [fullname, setFullName] = useState('');
    const [password, setPassword] = useState('');
    const [success, setSuccess] = useState('');

    const [emailerror, setEmailerror] = useState('');
    const [fullnameerror, setFullNameerror] = useState('');
    const [passworderror, setPassworderror] = useState('');
    const [passwordshow, setPasswordshow] = useState('false');

    const handleEmail = (e) => {
        setEmail(e.target.value);
        setEmailerror('');
    }
    const handleFullName = (e) => {
        setFullName(e.target.value);
        setFullNameerror('');
    }
    const handlePassword = (e) => {
        setPassword(e.target.value);
        setPassworderror('');
    }
    const handleSubmit = (e) => {
        if (!email) {
            setEmailerror('Enter your email address!');
        }else{
            if(!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)){
                setEmailerror('Enter your valid email address!');
            }
        }
        if (!fullname) {
            setFullNameerror('Enter your full name!');
        }
        if (!password) {
            setPassworderror('Enter your password!');
        }
        // else{
        //     if (!/^(?=.*[a-z])/.test(password)) {
        //         setPassworderror('Your password must contain at least one lowercase letter!'); 
        //     }else if (!/^(?=.*[A-Z])/.test(password)) {
        //         setPassworderror('Your password must contain at least one uppercase letter!');
        //     }else if (!/^(?=.*[0-9])/.test(password)) {
        //         setPassworderror('Your password must contain at least one digit!');
        //     }else if (!/^(?=.*[!@#$%^&*])/.test(password)) {
        //         setPassworderror('Your password must contain at least one symbol!');
        //     }else if (!/^(?=.{8,})/.test(password)) {
        //         setPassworderror('Your password must be at least 8 characters!');
        //     }
        // }
        if (email && fullname && password && (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email))) {
            createUserWithEmailAndPassword(auth, email, password) .then(() =>{
                sendEmailVerification(auth.currentUser) .then(()=>{
                    toast.success('Registration complete! Please verify your email');
                    setEmail('');
                    setFullName('');
                    setPassword('');
                    setTimeout(() => {
                        navigate('/login')
                    }, 5000);
                })
            }).catch((error) =>{
                if (error.code.includes('auth/email-already-in-use')) {
                    setEmailerror('Already in use');
                }
                // if (error.code.includes('auth/weak-password')) {
                //     setPassworderror('Already in use');
                // }
            })
        }
    }

  return (
    <>
        <section>
            <div className='flex'>
                <div className='w-full sm:w-1/2 sm:flex sm:justify-end mx-[10px] sm:mx-[50px] mt-[60px] sm:mt-[10px] md:mt-[60px] sm:mr-[20px]  md:mr-[69px]'>
                    <div>
                        <h1 className='font-nunito text-2xl sm:text-[25px] md:text-[34px] text-[#11175D] font-semibold md:font-bold'>Get started with easily register</h1>
                        <h4 className='font-nunito text-base sm:text-xl text-[#808080] font-normal mt-[13px] sm:mt-2 md:mt-[13px]'>Free register and you can enjoy it</h4>

                        <div className='relative mt-[39px] sm:mt-4 md:mt-[39px]'>
                            <input onChange={handleEmail} value={email} className='w-full md:w-[368px] py-[20px] sm:py-[10px] md:py-[20px] pl-[35px] sm:pl-[52px] pr-[35px] sm:pr-[65px] border border-[#b7b9ce] rounded-[8.6px] focus:outline-none sm:text-sm md:text-base' type="email" placeholder='Email Address' />
                            <p className='absolute top-[-9px] left-[30px] sm:left-[46px] px-[6px] sm:px-[6px] bg-white font-nunito text-[13px] text-[#585d8e] tracking-widest font-semibold'>Email Address</p>
                            
                            {
                                emailerror &&
                                <p className='w-1/2 font-nunito text-[13px] text-center text-white font-semibold rounded-md bg-red-500 p-1 mt-1'>{emailerror}</p>
                            } 
                        </div>
                        <div className='relative mt-[39px] sm:mt-4 md:mt-[39px]'>
                            <input onChange={handleFullName} value={fullname} className='w-full md:w-[368px] py-[20px] sm:py-[10px] md:py-[20px] pl-[35px] sm:pl-[52px] pr-[35px] sm:pr-[65px] border border-[#b7b9ce] rounded-[8.6px] focus:outline-none sm:text-sm md:text-base' type="text" placeholder='Full Name' />
                            <p className='absolute top-[-9px] left-[30px] sm:left-[46px] px-[6px] sm:px-[6px] bg-white font-nunito text-[13px] text-[#585d8e] tracking-widest font-semibold'>Full Name</p>
                            {
                                fullnameerror &&
                                <p className='w-1/2 font-nunito text-[13px] text-center text-white font-semibold rounded-md bg-red-500 p-1 mt-1'>{fullnameerror}</p>
                            }
                        </div>
                        <div className='relative mt-[39px] sm:mt-4 md:mt-[39px]'>
                            <input onChange={handlePassword} value={password} className='w-full md:w-[368px] py-[20px] sm:py-[10px] md:py-[20px] pl-[35px] sm:pl-[52px] pr-[35px] sm:pr-[65px] border border-[#b7b9ce] rounded-[8.6px] focus:outline-none sm:text-sm md:text-base' type={!passwordshow ? 'text' : 'password'} placeholder='Password' />
                            <p className='absolute top-[-9px] left-[30px] sm:left-[46px] px-[6px] sm:px-[6px] bg-white font-nunito text-[13px] text-[#585d8e] tracking-widest font-semibold'>Password</p>
                            {
                                passwordshow ? <BsEyeSlashFill onClick={()=> setPasswordshow(!passwordshow)} className='absolute top-6 left-[335px] cursor-pointer'/>
                                :
                                <BsEyeFill onClick={()=> setPasswordshow(!passwordshow)} className='absolute top-6 left-[335px] cursor-pointer'/>
                            }
                            {
                                passworderror &&
                                <p className='w-[368px] font-nunito text-[13px] text-white font-semibold rounded-md bg-red-500 p-1 mt-1'>{passworderror}</p>
                            }
                        </div>
                        <button onClick={handleSubmit} className='w-full md:w-[368px] py-[15px] sm:py-[10px] md:py-5 mt-[31px] sm:mt-[10px] md:mt-[31px] font-nunito text-xl text-white font-semibold text-center bg-[#5F35F5] rounded-[86px] cursor-pointer'>Sign up</button>
                        <p className='w-[354px] sm:w-[368px] font-openSans text-[13px] text-[#03014C] font-normal text-center mt-[35px] sm:mt-[10px] md:mt-[35px]'>Already  have an account ?<Link to='/login' className='font-openSans text-[13px] text-[#EA6C00] font-bold'> Sign In</Link></p>
                    </div>
                    <ToastContainer position="top-center" theme="dark" />
                </div>
                <div className='w-0 sm:w-1/2'>
                    <img className='w-full h-screen object-cover' src="images/registration.png" alt="image" />
                </div>
            </div>
        </section>
    </>
  )
}

export default Registration