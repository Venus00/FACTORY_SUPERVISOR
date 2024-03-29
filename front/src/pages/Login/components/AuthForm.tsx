import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function AuthForm() {
    const notifyError = () => toast.error('Error Login', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
    });

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const navigate = useNavigate();
    const onsubmit = () => {
        if (email === 'admin' && password === 'admin') {
            navigate('/dashboard')
        }
        else {
            notifyError();
        }

    }
    return (
        <div className='h-screen  flex flex-col gap-6 justify-center items-center text-white'>
            <ToastContainer
            />
            <div className=''>Login</div>
            <div className=''>Enter Credentials</div>
            <div className='w-64 flex flex-col gap-2 text-black'>
                <Label>Email</Label>
                <Input value={email} placeholder="Email" onChange={(e) => setEmail(e.target.value)}></Input>
            </div>
            <div className=' w-64 flex flex-col gap-2  text-black'>
                <Label>Pasword</Label>
                <Input type='password' value={password} placeholder="Password" onChange={(e) => setPassword(e.target.value)}></Input>
            </div>
            <div>
                <Button onClick={onsubmit}>Login</Button>
            </div>
        </div>
    )
}

export default AuthForm