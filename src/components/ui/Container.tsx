import React, { ReactNode } from 'react';

type TcontainerProps = {
    children: ReactNode
}

const Container = ({children}: TcontainerProps) => {
    return (
        <div className='w-full max-w-7xl mx-auto'>
            {children}
        </div>
    );
};

export default Container;