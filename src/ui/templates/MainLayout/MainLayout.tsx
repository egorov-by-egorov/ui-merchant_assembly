import React from 'react';

interface LayoutProps {
	children: React.ReactNode;
}

const MainLayout = ( { children }: LayoutProps ) => {

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
