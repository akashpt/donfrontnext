import React from 'react';
import LayoutAuthenticated from '../../layouts/Authenticated';

const DonationTypePage = () => {
    return (
        <div>
            <h1>Donation Type Page</h1>
            <p>This is the Donation Type page content.</p>
        </div>
    );
}

DonationTypePage.getLayout = function getLayout(page) {
    return <LayoutAuthenticated>{page}</LayoutAuthenticated>;
}

export default DonationTypePage;
