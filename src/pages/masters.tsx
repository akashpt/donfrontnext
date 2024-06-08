import {
    mdiAccount,
    mdiAsterisk,
    mdiFormTextboxPassword,
    mdiGithub,
    mdiMail,
    mdiOpenInNew,
    mdiTrashCan,
    mdiUpload,
} from '@mdi/js'
import Head from 'next/head'
import React, { ReactElement } from 'react'
import Button from '../components/Button'
import Buttons from '../components/Buttons'
import CardBox from '../components/CardBox'
import CardBoxComponentBody from '../components/CardBox/Component/Body'
import LayoutAuthenticated from '../layouts/Authenticated'
import SectionMain from '../components/Section/Main'
import SectionTitleLineWithButton from '../components/Section/TitleLineWithButton'
import { getPageTitle } from '../config'
import { useRouter } from 'next/router'
import { Formik } from "formik"

const MastersPage = () => {
    const router = useRouter();

    const navigateTo = (path) => {
        router.push(path);
    }

    return (
        <>
        <Head>
            <title>{getPageTitle('Masters')}</title>
        </Head>

        <SectionMain>
            <SectionTitleLineWithButton icon={mdiAccount} title="Masters" main></SectionTitleLineWithButton>
            <div className="grid grid-cols-1 lg:grid-cols-1">
                <CardBox hasComponentLayout>
                    <CardBoxComponentBody>
                        <SectionMain>
                            <CardBox>
                                <Formik
                                    initialValues={{ outline: false, small: false, rounded: false, disabled: false }}
                                    onSubmit={() => null}
                                >
                                {({ values }) => (

                                    <Buttons>
                                        <Button
                                            color="contrast"
                                            label="Gender Type"
                                            outline={values.outline}
                                            small={values.small}
                                            roundedFull={values.rounded}
                                            disabled={values.disabled}
                                            onClick={() => navigateTo('/masters/gender-type')}
                                        />
                                        <Button
                                            color="contrast"
                                            label="Donation Type"
                                            outline={values.outline}
                                            small={values.small}
                                            roundedFull={values.rounded}
                                            disabled={values.disabled}
                                            onClick={() => navigateTo('/masters/donation-type')}
                                        />
                                        <Button
                                            color="contrast"
                                            label="Users Type"
                                            outline={values.outline}
                                            small={values.small}
                                            roundedFull={values.rounded}
                                            disabled={values.disabled}
                                            onClick={() => navigateTo('/masters/users-type')}
                                        />
                                    </Buttons>

                                )}
                                </Formik>
                            </CardBox>
                        </SectionMain>
                    </CardBoxComponentBody>
                </CardBox>
            </div>
        </SectionMain>
        </>
    )
}

MastersPage.getLayout = function getLayout(page: ReactElement) {
    return <LayoutAuthenticated>{page}</LayoutAuthenticated>
}

export default MastersPage
