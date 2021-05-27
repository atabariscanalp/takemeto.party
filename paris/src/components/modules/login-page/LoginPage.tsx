import React from 'react'
import { Button } from '../../ui/Button'
import GoogleIcon from '../../../icons'


export const LoginPage: React.FC  = () => {

    
    return (
        <div className='flex items-center justify-center w-full h-full'>
            <Button icon={<GoogleIcon width={32} height={32} />} color={'outline'} className={'border-2'}>
                Sign in with Google
            </Button>
        </div>
    )
}