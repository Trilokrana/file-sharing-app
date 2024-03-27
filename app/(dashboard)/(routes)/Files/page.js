import React from 'react'
import { UserButton } from '@clerk/nextjs'
const Files = () => {
    return (
        <div className=''>
            files
            <UserButton afterSignOutUrl='/' />
        </div>
    )
}

export default Files
