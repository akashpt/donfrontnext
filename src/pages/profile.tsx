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

const ProfilePage = () => {
  const userName = useAppSelector((state) => state.main.userName)
  const userEmail = useAppSelector((state) => state.main.userEmail)

  const userForm: UserForm = {
    name: userName,
    email: userEmail,
  }

  return (
    <>
      <Head>
        <title>{getPageTitle('Profile')}</title>
      </Head>

      <SectionMain>
        <SectionTitleLineWithButton icon={mdiAccount} title="Profile" main></SectionTitleLineWithButton>
        <div className="grid grid-cols-1 lg:grid-cols-1">
          <div className="flex flex-col">


            <CardBox className="flex-1" hasComponentLayout>
              <Formik
                initialValues={userForm}
                onSubmit={(values: UserForm) => alert(JSON.stringify(values, null, 2))}
              >
                <Form className="flex flex-col flex-1">
                  <CardBoxComponentBody>
                    <FormField
                        label="Name"
                        help="Required. Your name"
                        labelFor="name"
                        icons={[mdiAccount]}
                    >
                      <Field name="name" id="name" placeholder="Name"/>
                    </FormField>
                    <FormField
                        label="E-mail"
                        help="Required. Your e-mail"
                        labelFor="email"
                        icons={[mdiMail]}
                    >
                      <Field name="email" id="email" placeholder="E-mail"/>
                    </FormField>
                    <div className="grid grid-cols-2 gap-4 mb-4"> {/* Grid for Name & Username */}
                      <FormField label="Username" labelFor="username" icons={[mdiAccount]}>
                        <Field type="text" id="username" name="username" placeholder="Username"/>
                      </FormField>
                      <FormField label="Mobile" labelFor="mobile">
                        <Field type="tel" id="mobile" name="mobile" placeholder="Mobile"/>
                      </FormField>
                    </div>

                    <div className="grid grid-cols-2 gap-4 mb-4"> {/* Grid for Email & Mobile */}
                      <FormField label="Gender" labelFor="gender">
                        <Field type="text" id="gender" name="gender" placeholder="Gender"/>
                      </FormField>
                      <FormField label="Age" labelFor="age">
                        <Field type="number" id="age" name="age" placeholder="Age"/>
                      </FormField>
                    </div>
                  </CardBoxComponentBody>
                  <CardBoxComponentFooter>
                    <Buttons>
                      <Button color="info" type="submit" label="Submit"/>
                      <Button color="info" label="Options" outline/>
                    </Buttons>
                  </CardBoxComponentFooter>
                </Form>
              </Formik>
            </CardBox>
          </div>

          <CardBox hasComponentLayout>
            <Formik
                initialValues={{
                  currentPassword: '',
                  newPassword: '',
                  newPasswordConfirmation: '',
                }}
                onSubmit={(values) => alert(JSON.stringify(values, null, 2))}
            >
              <Form className="flex flex-col flex-1">
                <CardBoxComponentBody>
                  <FormField
                      label="Current password"
                      help="Required. Your current password"
                      labelFor="currentPassword"
                    icons={[mdiAsterisk]}
                  >
                    <Field
                      name="currentPassword"
                      id="currentPassword"
                      type="password"
                      autoComplete="current-password"
                    />
                  </FormField>

                  <Divider />

                  <FormField
                    label="New password"
                    help="Required. New password"
                    labelFor="newPassword"
                    icons={[mdiFormTextboxPassword]}
                  >
                    <Field
                      name="newPassword"
                      id="newPassword"
                      type="password"
                      autoComplete="new-password"
                    />
                  </FormField>

                  <FormField
                    label="Confirm password"
                    help="Required. New password one more time"
                    labelFor="newPasswordConfirmation"
                    icons={[mdiFormTextboxPassword]}
                  >
                    <Field
                      name="newPasswordConfirmation"
                      id="newPasswordConfirmation"
                      type="password"
                      autoComplete="new-password"
                    />
                  </FormField>
                </CardBoxComponentBody>

                <CardBoxComponentFooter>
                  <Buttons>
                    <Button color="info" type="submit" label="Submit" />
                    <Button color="info" label="Options" outline />
                  </Buttons>
                </CardBoxComponentFooter>
              </Form>
            </Formik>
          </CardBox>
        </div>
      </SectionMain>
    </>
  )
}

ProfilePage.getLayout = function getLayout(page: ReactElement) {
  return <LayoutAuthenticated>{page}</LayoutAuthenticated>
}

export default ProfilePage
