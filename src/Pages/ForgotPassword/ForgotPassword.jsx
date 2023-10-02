import { useState } from 'react'
import { Link } from 'react-router-dom'
import { getAuth, sendPasswordResetEmail } from "firebase/auth";
// import { ToastContainer, toast } from 'react-toastify';

const ForgotPassword = () => {
    const [email, setEmail] = useState('');
    const auth = getAuth();
    const handleResetPassword = () =>{
        sendPasswordResetEmail(auth, email)
            .then(() => {
                // toast.success('Check your email')
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                // ..
            });
    }
 
  return (
    <>
        <div className='w-full h-screen bg-[#5F35F5] flex items-center justify-center'>
            <div className='bg-white p-20 rounded-md'>
                <h1 className='font-openSans text-[34px] text-[#03014C] font-bold mb-[30px]'>Forgot password</h1>
                <div className='relative mt-8'>
                    <input onChange={(e) => setEmail(e.target.value)} className='w-[372px] py-4  border-b border-[#b7b9ce] focus:outline-none font-openSans text-base text-[#03014C] font-semibold' type="email" placeholder='youraddres@email.com'/>
                    <p className='absolute top-[-9px] left-0 bg-white font-openSans text-[13px] text-[#818045] tracking-widest font-normal'>Email Address</p>
                </div>
                <div className='flex gap-x-5 mt-5'>
                    <button onClick={handleResetPassword} className='p-4 font-nunito text-xl text-white font-semibold text-center bg-[#5F35F5] rounded-md cursor-pointer'>Reset</button>
                    <button className='p-4 font-nunito text-xl text-white font-semibold text-center bg-[#5F35F5] rounded-md cursor-pointer'><Link to='/login'>Back to login</Link></button>
                </div>
            </div>
        </div>
    </>
  )
}

export default ForgotPassword