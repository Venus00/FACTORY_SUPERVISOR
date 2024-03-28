import React from 'react'
import AuthForm from './components/AuthForm'

function Login() {
    return (
        <div className='flex h-screen w-screen bg-black'>
            <div className='w-1/2 bg-gray-700'>
                <div className='absolute bottom-0 text-black'>
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