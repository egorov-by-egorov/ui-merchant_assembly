import React from 'react';

interface MainLayoutProps {
    children: React.ReactNode;
}

const MainLayout = ( { children }: MainLayoutProps ) => {

    return (
        <>
            <div>

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
