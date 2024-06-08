import {mdiEye,mdiTrashCan} from '@mdi/js'
import React, {useState, useEffect} from 'react'
import Button from '../Button'
import Buttons from '../Buttons'
import UserAvatar from "../UserAvatar";
import axios from 'axios';

const DonationList = () => {
    const [donation, setUsers] = useState([]);

    useEffect(() => {
        fetchDonations();
    }, []);

    const fetchDonations = () => {
        // Fetch users from the backend
        const token = sessionStorage.getItem('jwtToken');

        if (token) {
            axios.get('http://localhost:8081/donation/getdonations', {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            })
                .then(response => {
                    setUsers(response.data);
                })
                .catch(error => {
                    console.error('Error fetching users:', error);
                });
        } else {
            console.error('Token not found in session storage');
        }
    };
    return (
        <>
            <table>
                <thead>
                <tr>
                    <th>Name</th>
                    <th>Mobile</th>
                    <th>Amount</th>
                    <th>Type</th>
                    <th>By User</th>
                    <th>Transactions</th>
                    <th>Action</th>
                </tr>
                </thead>
                <tbody>
                {donation.map((donation) => (
                    <tr key={donation.id}>
                        <td className="border-b-0 lg:w-6 before:hidden">
                            <UserAvatar username={donation.name} className="w-24 h-24 mx-auto lg:w-6 lg:h-6"/>
                        </td>
                        <td data-label="Name">{donation.name}</td>
                        <td data-label="Company">{donation.company}</td>
                        <td data-label="City">{donation.city}</td>
                        <td data-label="Progress" className="lg:w-32">
                            <progress
                                className="flex w-2/5 self-center lg:w-full"
                                max="100"
                                value={donation.progress}
                            >
                                {donation.progress}
                            </progress>
                        </td>
                        <td data-label="Created" className="lg:w-1 whitespace-nowrap">
                            <small className="text-gray-500 dark:text-slate-400">{donation.created}</small>
                        </td>
                        <td className="before:hidden lg:w-1 whitespace-nowrap">
                            <Buttons type="justify-start lg:justify-end" noWrap>
                                <Button
                                    color="info"
                                    icon={mdiEye}
                                    onClick={() => setIsModalInfoActive(true)}
                                    small
                                />
                                <Button
                                    color="danger"
                                    icon={mdiTrashCan}
                                    onClick={() => setIsModalTrashActive(true)}
                                    small
                                />
                            </Buttons>
                        </td>
                    </tr>
                ))}
                </tbody>
            </table>
        </>
    )
}


export default DonationList
