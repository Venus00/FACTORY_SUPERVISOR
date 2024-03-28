import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import React from 'react'
import { useNavigate } from 'react-router-dom'

function AuthForm() {
    const navigate = useNavigate();
    const onsubmit = () => {
        navigate('/dashboard')
    }
    return (
        <div className='h-screen flex flex-col gap-6 justify-center items-center text-white'>
            <div className=''>Login</div>
            <div className=''>Enter Credentials</div>
            <div className='flex flex-col gap-2'>
                <Label>Email</Label>
                <Input></Input>
            </div>
            <div className='flex flex-col gap-2'>
                <Label>Pasword</Label>
                <Input></Input>
            </div>
            <div>
                <Button onClick={onsubmit}>Login</Button>
            </div>
        </div>
    )
}

export default AuthForm