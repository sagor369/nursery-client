import  { ReactNode } from 'react';

const SectionLayout = ({children}: {children: ReactNode}) => {
    return (
        <div className='my-16 font-barlow'>
            {children}
        </div>
    );
};

export default SectionLayout;