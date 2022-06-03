import Auth from '#ui/pages/Auth';
import MainLayout from '#ui/templates/MainLayout/MainLayout';
import React, { FC } from 'react';

const App: FC = () => {
    return (
        <MainLayout>
            <Auth />
        </MainLayout>
    );
};

export default App;
