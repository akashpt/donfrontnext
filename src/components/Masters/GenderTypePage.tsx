import React from 'react';
import LayoutAuthenticated from '../../layouts/Authenticated';

const GenderTypePage = () => {
    return (
        <div>
            <h1>Gender Type Page</h1>
            <p>This is the Gender Type page content.</p>
        </div>
    );
}

GenderTypePage.getLayout = function getLayout(page) {
    return <LayoutAuthenticated>{page}</LayoutAuthenticated>;
}

export default GenderTypePage;
