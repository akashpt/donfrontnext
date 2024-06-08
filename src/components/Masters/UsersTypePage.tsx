import React from 'react';
import LayoutAuthenticated from '../../layouts/Authenticated';

const UsersTypePage = () => {
    return (
        <div>
            <h1>Users Type Page</h1>
            <p>This is the Users Type page content.</p>
        </div>
    );
}

UsersTypePage.getLayout = function getLayout(page) {
    return <LayoutAuthenticated>{page}</LayoutAuthenticated>;
}

export default UsersTypePage;
