import {
    mdiAccount,
    mdiAsterisk,
    mdiFormTextboxPassword,
    mdiGithub,
    mdiMail,
    mdiUpload,
} from '@mdi/js'
import { Formik, Form, Field } from 'formik'
import Head from 'next/head'
import type { ReactElement } from 'react'
import Button from '../components/Button'
import Buttons from '../components/Buttons'
import Divider from '../components/Divider'
import CardBox from '../components/CardBox'
import CardBoxComponentBody from '../components/CardBox/Component/Body'
import CardBoxComponentFooter from '../components/CardBox/Component/Footer'
import FormField from '../components/Form/Field'
import FormFilePicker from '../components/Form/FilePicker'
import LayoutAuthenticated from '../layouts/Authenticated'
import SectionMain from '../components/Section/Main'
import SectionTitleLineWithButton from '../components/Section/TitleLineWithButton'
import CardBoxUser from '../components/CardBox/User'
import type { UserForm } from '../interfaces'
import { getPageTitle } from '../config'
import { useAppSelector } from '../stores/hooks'
import DonationList from "../components/Donation/DonationList";

const DonationPage = () => {
    const userName = useAppSelector((state) => state.main.userName)
    const userEmail = useAppSelector((state) => state.main.userEmail)

    const userForm: UserForm = {
        name: userName,
        email: userEmail,
    }

    return (
        <>
        <Head>
            <title>{getPageTitle('Donation')}</title>
        </Head>

        <SectionMain>
            <SectionTitleLineWithButton icon={mdiAccount} title="Donation" main></SectionTitleLineWithButton>
            <Buttons>
                <Button color="info" type="submit" label="Add Donation" className="mb-6"/>
            </Buttons>
            <div className="grid grid-cols-1 lg:grid-cols-1">
                <CardBox hasComponentLayout>
                    <CardBoxComponentBody>

                        <DonationList />

                    </CardBoxComponentBody>
                </CardBox>
            </div>
        </SectionMain>
        </>
    )
}

DonationPage.getLayout = function getLayout(page: ReactElement) {
    return <LayoutAuthenticated>{page}</LayoutAuthenticated>
}

export default DonationPage
