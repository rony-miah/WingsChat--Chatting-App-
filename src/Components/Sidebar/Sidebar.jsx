import React, { createRef, useState } from 'react'
import profilepic from '../../assets/profilepic.png'
import {AiOutlineHome, AiFillMessage} from 'react-icons/ai'
import {IoMdNotificationsOutline} from 'react-icons/io'
import {FaCloudUploadAlt} from 'react-icons/fa'
import {SlSettings} from 'react-icons/sl'
import {TbLogout} from 'react-icons/tb'
import { getAuth, signOut, updateProfile } from "firebase/auth";
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { userLoginInfo } from '../../Slices/userSlice'
import Cropper from "react-cropper";
import "cropperjs/dist/cropper.css";
import { getDownloadURL, getStorage, ref, uploadString } from "firebase/storage";
import { RotatingLines } from 'react-loader-spinner'

const Sidebar = () => {
    const auth = getAuth();
    const storage = getStorage();
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const data = useSelector(state => state.userLoginInfo.userInfo);
    console.log(data, 'data');

    const [loading, setLoading] = useState(false);
    const [profileImgUploadModal, setProfileImgUploadModal] = useState(false);

    const [image, setImage] = useState('');
    const [cropData, setCropData] = useState("");
    const cropperRef = createRef();

    const handleLogOut = () => {
        signOut(auth).then(() => {
            dispatch(userLoginInfo(null))
            localStorage.removeItem('userLoginInfo')
            navigate('/login')
          }).catch((error) => {

          });
    }

    const handleProfileImgUpload = () => {
        setProfileImgUploadModal(true)
    }
    const handleProfileImgUploadCancel = () => {
        setProfileImgUploadModal(false)
        setImage('');
        setCropData('')
    }

    const handleProfileImgChange = (e) => {
        
        e.preventDefault();
        let files;
        if (e.dataTransfer) {
          files = e.dataTransfer.files;
        } else if (e.target) {
          files = e.target.files;
        }
        const reader = new FileReader();
        reader.onload = () => {
          setImage(reader.result);
        };
        reader.readAsDataURL(files[0]);
    }
        
    const getCropData = () =>{
        setLoading(true)
        if (typeof cropperRef.current?.cropper !== "undefined") {
            setCropData(cropperRef.current?.cropper.getCroppedCanvas().toDataURL());
            const storageRef = ref(storage, auth.currentUser.uid);
            const message4 = cropperRef.current?.cropper.getCroppedCanvas().toDataURL();
            uploadString(storageRef, message4, 'data_url').then((snapshot) => {
            console.log('Uploaded a data_url string!');
            getDownloadURL(storageRef).then((downloadURL) => {
                console.log('File available at', downloadURL);
                updateProfile(auth.currentUser, { 
                    photoURL: downloadURL
                  })
                  .then(()=>{
                    setProfileImgUploadModal(false);
                    setImage('');
                    setCropData('')
                    setLoading(false)
                  })
              });
              
            });
        }
    };

  return (
    <>
        <div className='bg-[#5F35F5] h-screen rounded-[20px] pt-[38px]'>
            <div className='group relative w-[100px] h-[100px] mx-auto'>
                <img src={data.photoURL} alt="img" className='mx-auto rounded-full'/>
                <div className='absolute w-full h-full top-0 left-0 opacity-0 group-hover:opacity-100 group-hover:bg-[#00000069] rounded-full cursor-pointer flex justify-center items-center'>
                    <FaCloudUploadAlt onClick={handleProfileImgUpload} className='w-[25px] h-[18px] text-[#EBEAEA]'/>
                </div>
            </div>
            <h2 className='font-poppins text-[25px] text-white text-center font-semibold mt-3'>{data.displayName}</h2>
            <div className='relative flex justify-center pt-[20px] pb-[25px] mt-[25px] after:absolute after:content-[""] after:top-0 after:right-0 after:w-[160px] after:h-full after:bg-white after:z-[-1] after:rounded-l-[20px] z-[1] before:absolute before:content-[""] before:top-0 before:right-0 before:w-[8px] before:h-full before:bg-[#5F35F5] before:rounded-l-[20px]'>
                <AiOutlineHome className='text-5xl text-[#5F35F5] cursor-pointer'/>
            </div>
            <div className='flex justify-center mt-[78px]'>
                <AiFillMessage className='text-5xl text-[#BAD1FF] cursor-pointer'/>
            </div>
            <div className='flex justify-center mt-[78px]'>
                <IoMdNotificationsOutline className='text-5xl text-[#BAD1FF] cursor-pointer'/>
            </div>
            <div className='flex justify-center mt-[78px]'>
                <SlSettings className='text-5xl text-[#BAD1FF] cursor-pointer'/>
            </div>
            <div className='flex justify-center mt-[78px]'>
                <TbLogout onClick={handleLogOut} className='text-5xl text-[#BAD1FF] cursor-pointer'/>
            </div>
            {
                profileImgUploadModal &&
                <div className='absolute top-0 left-0 z-50 h-screen w-full bg-[#5F35F5]  flex justify-center items-center'>
                    <div className='w-1/2 p-5 bg-white shadow-boxShadow rounded-[20px]'>
                        <h2 className='font-openSans text-[34px] text-[#03014C] font-bold mb-[20px]'>Upload profile picture</h2>
                        <div className='group relative w-[100px] h-[100px] mx-auto overflow-hidden rounded-full'>
                            {
                                image ?
                                <div className="img-preview w-full h-full"
                                    style={{ width: "100%", float: "left", height: "300px" }}
                                />
                                :
                                <img src={data.photoURL} alt="" className='mx-auto w-full h-full'/>
                            }    
                        </div>
                        
                        <input onChange={handleProfileImgChange} type="file" className='text-2xl cursor-pointer my-5'/>
                        {
                            image &&
                            <Cropper
                                ref={cropperRef}
                                style={{ height: 400, width: "100%" }}
                                zoomTo={0.5}
                                initialAspectRatio={1}
                                preview=".img-preview"
                                src={image}
                                viewMode={1}
                                minCropBoxHeight={10}
                                minCropBoxWidth={10}
                                background={false}
                                responsive={true}
                                autoCropArea={1}
                                checkOrientation={false} // https://github.com/fengyuanchen/cropperjs/issues/671
                                guides={true}
                            />
                        }
                        
                        <div className='mt-[55px]'>
                        {
                            loading ?
                            <RotatingLines
                                strokeColor="lime"
                                strokeWidth="5"
                                animationDuration="0.75"
                                width="96"
                                visible={true}
                                />
                            :
                            <button onClick={getCropData} className='p-5 mr-5 font-openSans text-xl text-white font-semibold text-center bg-[#5F35F5] rounded-[8px] cursor-pointer'>Upload</button>
                        }
                            <button onClick={handleProfileImgUploadCancel} className='p-5 font-openSans text-xl text-white font-semibold text-center bg-red-700 rounded-[8px] cursor-pointer'>Cancel</button>
                        </div>
                    </div>
                </div>
            }
        </div>
    </>
  )
}

export default Sidebar