import  { ReactNode } from 'react';

const SectionLayout = ({children}: {children: ReactNode}) => {
    return (
        <div className='my-16 '>
            {children}
        </div>
    );
};

export default SectionLayout;