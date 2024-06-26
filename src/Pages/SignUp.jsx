import React, { useContext, useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { UserContext } from '../UserProvider/UserProvider';
import { sendEmailVerification, updateProfile } from 'firebase/auth';
import ConfirmModal from '../components/ConfirmModal/ConfirmModal';
import { FaRegEyeSlash, FaRegEye } from "react-icons/fa6";

const SignUp = () => {
    const { SignUp, user } = useContext(UserContext);
    const [openModal, setOpenModal ] = useState(false);
    const [showPassword, setShowPassword] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');
    const [successMessage, setSuccessMessage] = useState('');
    const [userName, setUserName] = useState('');
    const [profileUrl, setProfileUrl] = useState('https://i.ibb.co/4dNffG6/blank-profile-picture-973460-640.webp');
    const handleOpenModal = () => {
        document.getElementById('my_modal_5').showModal();
    }

    const handleShowPassword = () => {
        setShowPassword(!showPassword);
    }

    const handleSignUp = e =>{
        setErrorMessage('');
        setSuccessMessage('');
        e.preventDefault();
        const form = e.target;
        const formData  = new FormData(form);
        const name = formData.get('name');
        const email = formData.get('email');
        const password = formData.get('password');
        const userProfileUrl = formData.get('profileUrl');

        setUserName(name);
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
            alert('Please enter a valid email address');
            return;
        }
        if (!/^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*\W)(?!.* ).{8,16}$/.test(password)) {
            alert('Password must be at least 8 characters long and contain at least one uppercase letter, one lowercase letter, one number and one special character');
            return;
        }
        if (userProfileUrl){
            setProfileUrl(userProfileUrl);
        }
        SignUp(email, password)
        .then(result =>{
            const user = result.user
            updateProfile(user,{
                displayName: name,
                photoURL: userProfileUrl ? userProfileUrl : profileUrl
            });
            sendEmailVerification(user)
            .then(()=>{
                alert('Please Check your email and verify now')
 
            });
            setOpenModal(true)
            form.reset();
        })
        .catch(error =>{
             console.log(error.message)
        })
    }

    useEffect(()=>{
        if(openModal){
            handleOpenModal();
        }
    },[openModal]);


    
    return (
        <div className='w-10/12 lg:w-9/12 mx-auto grid grid-cols-1 lg:grid-cols-2 py-10 lg:py-20'>
            <Helmet>
                <title>Sign Up</title>
            </Helmet>
            {/* Modal */}
            {user && <ConfirmModal content={'Sign Up Account'} userName={userName} img={profileUrl} navigate={'/signin'}>
                
            </ConfirmModal>}
            {/* Modal */}
            <div className='p-5 lg:p-20 bg-gray-100'>
                <h1 className='py-4 font-bold uppercase text-3xl mb-5 border-b border-slate-500'>Sign Up</h1>
                <form onSubmit={handleSignUp} className='mb-4'>
                    <input className='bg-white focus:outline-none w-full mb-5 py-4 px-5 placeholder:text-lg placeholder:text-slate-500 rounded block' type="text" name="name" id="name" placeholder='User Name:-'/>

                    <input className='bg-white focus:outline-none w-full mb-5 py-4 px-5 placeholder:text-lg placeholder:text-slate-500 rounded block' type="text" name="profileUrl" id="profileUrl" placeholder='profileUrl:-'/>

                    <input className='bg-white focus:outline-none w-full mb-5 py-4 px-5 placeholder:text-lg placeholder:text-slate-500 rounded block' type="email" name="email" id="" placeholder='Email:-'/>

                    <div className='relative flex'>
                        <input className='bg-white focus:outline-none w-full mb-5 py-4 px-5 placeholder:text-lg placeholder:text-slate-500 rounded block' type={showPassword ? 'text' : 'password'} name="password" id="" placeholder='Password:-'/>
                        <span onClick={handleShowPassword} className='absolute right-5 top-5'>{showPassword ? <FaRegEyeSlash></FaRegEyeSlash> : <FaRegEye></FaRegEye>} </span>
                    </div>

                    <input className='bg-emerald-500 py-3 px-10 rounded font-semibold text-white' type="submit" value="Sign Up" />

                    {
                        errorMessage ? <p className='text-red-500 text-center'>{errorMessage}</p> : ''
                    }
                    {
                        successMessage ? <p className='text-green-500 text-center'>{successMessage}</p> : ''
                    }
                </form>
                <p>Already have an account? <Link className='underline text-emerald-500 font-semibold' to={'/signin'}>Sign In</Link></p>
            </div>
            <div className='hidden lg:inline-block'>
                <img src="https://i.ibb.co/pPz9PYp/xsignup-jpg-pagespeed-ic-Ppdz-PWC00-M.webp" alt="" />
            </div>
        </div>
    );
};

export default SignUp;