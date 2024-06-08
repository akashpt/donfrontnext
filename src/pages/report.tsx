import {
    mdiAccount,
    mdiAsterisk, mdiEye,
    mdiFormTextboxPassword,
    mdiGithub,
    mdiMail, mdiTrashCan,
    mdiUpload,
} from '@mdi/js'
import Head from 'next/head'
import React, {ReactElement, useState} from 'react'
import Button from '../components/Button'
import Buttons from '../components/Buttons'
import CardBox from '../components/CardBox'
import CardBoxComponentBody from '../components/CardBox/Component/Body'
import LayoutAuthenticated from '../layouts/Authenticated'
import SectionMain from '../components/Section/Main'
import SectionTitleLineWithButton from '../components/Section/TitleLineWithButton'
import type { UserForm } from '../interfaces'
import { getPageTitle } from '../config'
import { useAppSelector } from '../stores/hooks'
import UserAvatar from "../components/UserAvatar";

const ReportsPage = () => {
    const [report, setUsers] = useState([]);



    return (
        <>
            <Head>
                <title>{getPageTitle('Reports')}</title>
            </Head>

            <SectionMain>
                <SectionTitleLineWithButton icon={mdiAccount} title="Reports" main></SectionTitleLineWithButton>
                <div className="grid grid-cols-1 lg:grid-cols-1">
                    <CardBox hasComponentLayout>
                        <CardBoxComponentBody>
                            <table>
                                <thead>
                                <tr>
                                    <th>Sr. No</th>
                                    <th>Reports Name</th>
                                    <th>Action</th>
                                </tr>
                                </thead>
                                <tbody>
                                {report.map((report) => (
                                    <tr key={report.id}>
                                        <td className="border-b-0 lg:w-6 before:hidden">
                                            <UserAvatar username={report.name} className="w-24 h-24 mx-auto lg:w-6 lg:h-6"/>
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


                        </CardBoxComponentBody>
                    </CardBox>
                </div>
            </SectionMain>
        </>
    )
}

ReportsPage.getLayout = function getLayout(page: ReactElement) {
    return <LayoutAuthenticated>{page}</LayoutAuthenticated>
}

export default ReportsPage
