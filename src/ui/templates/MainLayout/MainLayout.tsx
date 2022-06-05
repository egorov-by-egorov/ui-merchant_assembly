import React from 'react';
import '#ui/templates/MainLayout/style.scss'

interface MainLayoutProps {
    children: React.ReactNode;
}

const MainLayout = ( { children }: MainLayoutProps ) => {

    return (
        <>
            <div className='wrapper'>

                {/*<Header />*/ }
                {/*<Sidebar />*/ }

                <main>
                    { children }
                </main>
            </div>
        </>
    );
};

export default MainLayout;
