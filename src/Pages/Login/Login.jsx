import React, { useState } from 'react'
import loginImg from '../../assets/login-img.png'
import {BsEyeSlashFill} from 'react-icons/bs'
import {BsEyeFill} from 'react-icons/bs'
import {FcGoogle} from 'react-icons/fc'
import { Link, useNavigate } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import { getAuth, signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { useDispatch } from 'react-redux'
import { userLoginInfo } from '../../Slices/userSlice'
import { ColorRing } from 'react-loader-spinner'

const Login = () => {
    const auth = getAuth();
    const dispatch = useDispatch();
    const provider = new GoogleAuthProvider();
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [emailerror, setEmailerror] = useState('');
    const [passworderror, setPassworderror] = useState('');
    const [passwordshow, setPasswordshow] = useState('false');
    const [loading, setLoading] = useState(false);

    const handleEmail = (e) => {
        setEmail(e.target.value);
        setEmailerror('');
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
                setEmailerror('Invalid email address!');
            }
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
        if (email && password && (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email))) {
            setLoading(true)
            signInWithEmailAndPassword(auth, email, password)
                .then((user) => {
                    console.log(user.user);
                    toast.success('login successful')
                    dispatch(userLoginInfo(user))
                    localStorage.setItem('userLoginInfo', JSON.stringify((user)))
                    setTimeout(() => {
                        navigate('/')
                    }, 2000);
                })
                .catch((error) => {
                    const errorCode = error.code;
                    // console.log(errorCode);
                    // if (errorCode.includes('auth/invalid-login-credentials')) {
                    //     setEmailerror('Email not match!');
                    // }
                    // if (errorCode.includes('auth/wrong-password')) {
                    //     setPassworderror('Wrong password!');
                    // }
                });
        }
    }

    const handleGoogle = () =>{
        signInWithPopup(auth, provider)
            .then(() => {
                setTimeout(() => {
                    navigate('/')
                }, 2000);
            }).catch((error) => {
                const errorCode = error.code;
            });
                }

  return (
    <>
        <section>
            <div className='flex'> 
                <div className='w-1/2 flex justify-end mt-[65px] mb-[75px] mr-[130px] ml-[147px]'>
                    <div className=''>
                        <h1 className='font-openSans text-[34px] text-[#03014C] font-bold mb-[30px]'>Login to your account!</h1>
                        <div onClick={handleGoogle} className='w-[235px] flex pt-[23px] pb-[21px] pr-[42px] pl-[30px] border border-[#b7b9ce] rounded-[8.3px] cursor-pointer'>
                            <FcGoogle/>
                            <h4 className='font-openSans text-[13px] text-[#03014C] font-semibold tracking-widest ml-[10px]'>Login with Google</h4>
                        </div>
                        <div className='relative mt-8'>
                            <input onChange={handleEmail} className='w-[372px] py-4  border-b border-[#b7b9ce] focus:outline-none font-openSans text-base text-[#03014C] font-semibold' type="email" placeholder='youraddres@email.com'/>
                            <p className='absolute top-[-9px] left-0 bg-white font-openSans text-[13px] text-[#818045] tracking-widest font-normal'>Email Address</p>
                            
                            {
                                emailerror &&
                                <p className='w-[372px] font-nunito text-[13px] text-center text-white font-semibold rounded-md bg-red-500 p-1 mt-1'>{emailerror}</p>
                            } 
                        </div>

                        <div className='relative mt-[50px]'>
                            <input onChange={handlePassword} className='w-[372px] py-4 border-b border-[#b7b9ce] focus:outline-none font-openSans text-base text-[#03014C] font-semibold' type={!passwordshow ? 'text' : 'password'} placeholder='Enter your password' />
                            <p className='absolute top-[-9px] left-0 font-openSans text-[13px] text-[#818045] tracking-widest font-normal'>Password</p>
                            {
                                passwordshow ?
                                <BsEyeSlashFill onClick={()=> setPasswordshow(!passwordshow)} className='absolute top-6 left-[335px] cursor-pointer'/>
                                :
                                <BsEyeFill onClick={()=> setPasswordshow(!passwordshow)} className='absolute top-6 left-[335px] cursor-pointer'/>
                            }
                            {
                                passworderror &&
                                <p className='w-[368px] font-nunito text-[13px] text-white font-semibold rounded-md bg-red-500 p-1 mt-1'>{passworderror}</p>
                            }
                        </div>
                        {
                            loading ?
                            <ColorRing
                            height="50"
                            width="50"
                            color="#4fa94d"
                            wrapperStyle={{}}
                            wrapperClass=""
                            visible={true}
                            outerCircleColor=""
                            innerCircleColor=""
                            barColor=""
                            ariaLabel='circles-with-bar-loading'
                            />
                            :
                            <button onClick={handleSubmit} className='w-[425px] py-5 mt-[55px] font-openSans text-xl text-white font-semibold text-center bg-[#5F35F5] rounded-[8.7px] cursor-pointer'>Login to Continue</button>
                            
                        }
                        <p className='w-full font-openSans text-[13px] text-[#03014C] font-normal mt-[25px] text-center'>Don’t have an account ?<Link to='/registration' className='font-openSans text-[13px] text-[#EA6C00] font-bold'> Sign up</Link></p>
                        <p className='w-full font-openSans text-[13px] text-[#03014C] font-normal mt-[20px] text-center'><Link to='/forgotpassword'>Forgot password</Link></p>
                    </div>
                </div>
                <ToastContainer position="top-center" theme="dark" />
                <div className='w-1/2'>
                    <img className='w-full h-screen object-cover' src={loginImg} alt="image" />
                </div>
            </div>
        </section>
    </>
  )
}

export default Login