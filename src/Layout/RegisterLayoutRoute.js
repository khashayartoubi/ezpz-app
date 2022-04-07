import React from 'react';

const Register = ({children}) => {
    return (
        <>
            {children}
        </>
    )
}

export default function RegisterLayoutRoute({component: Component}) {
    return (
        <div>
            <Register>
                <Component/>
            </Register>
        </div>
    )
}