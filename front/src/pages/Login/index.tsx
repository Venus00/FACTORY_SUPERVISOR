import React from 'react'
import AuthForm from './components/AuthForm'

function Login() {
    return (
        <div className='flex h-screen w-screen bg-black'>
            <div className='w-1/2 bg-orange-600'>
                <div className='absolute bottom-0 text-white text-2xl'>
                    Devices Supervisor Platform
                </div>
            </div>
            <div className='flex-1'>
                <AuthForm />
            </div>
        </div>
    )
}

export default Login