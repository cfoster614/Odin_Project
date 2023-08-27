import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import PersonalDetailsForm from './components/personal-info/personalDetails.jsx'
import EducationDetailsForm from './components/education/educationDetails'
import ExpDetailsForm from './components/experience/experienceDetails'
import DisplayPersonalDetails from './components/personal-info/personalSection'
import DisplayEducation from './components/education/educationSection'
import DisplayExperience from './components/experience/experienceSection'
import { FormInput } from './components/formInput'

import { Form } from './components/form'


function App() {
  const [fullName, setFullName] = useState('Caity Foster');
  const [email, setEmail] = useState('cfoster614@aol.com');
  const [phone, setPhone] = useState('222-222-2222');
  const [address, setAddress] = useState('200 Cupcake Lane');
  const [personalForm, setPersonalForm] = useState({
    name: 'Caity Foster',
    email: 'cfoster@aol.com',
    phone: '222-222-2222',
    address: '200 Cupcake Lane'
  });



  



  const [company, setCompany] = useState('Wellnow');
  const [title, setTitle] = useState('Xray Tech');
  const [dates, setDates] = useState('Sept 2020 - Sept 2021');
  const [location, setLocation] = useState('Refresh, CA');
  const [duties, setDuties] = useState('Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris aliquet lacinia est. Cras pulvinar .');

  const [testForm, setTestForm] = useState(<Form />)
  console.log(testForm)


  return (
    <>
      <div className='container form-container'>

        <Form
          formInitialValues={{
            fullName: '',
            phone: '',
            email: '',
            address: ''
          }}
          formName='Personal Details'
          id='personalDetailsForm'
        >

          <FormInput
            label='Full name:'
            name='fullName'
          />
          <FormInput
            label="Phone:"
            name="phone"
          />
          <FormInput
            label="Email:"
            name="email"
          />
          <FormInput
            label="Current address:"
            name="address"
          />

        </Form>

        <Form
          formInitialValues={{
            school: '',
            degree: '',
            gradDate: ''
          }}
          formName='Education'
          id='educationForm'
        >
          <FormInput
            label="School:"
            name="school"
          />
          <FormInput
            label='Degree:'
            name="nameDegree"
          />
          <FormInput
            label='Date graduated:'
            name='gradDate'
            type='date'
          />
        </Form>

        <Form
          formInitialValues={{
            company: '',
            title: '',
            started: '',
            ended: '',
            duties: ''
          }}
          formName='Work Experience'
          id='workExpForm'
        >
          <FormInput
            label='Company name:'
            name='company'
          />

          <FormInput
            label='Job title:'
            name='title'
          />
          <FormInput
            label='Start date:'
            name='startDate'
            type='date'
          />
          <FormInput
            label='End date:'
            name='endDate'
            type='date'
          />
          <FormInput
            label='Duties:'
            name='duties'
          />
        </Form>
      </div>

      <div className='paper-container'>
        <DisplayPersonalDetails
          // fullName={fullName}
          // email={email}
          // phone={phone}
          // address={address}
          
        />

        {/* <DisplayEducation
      school={school}
      degree={degree}
      grad={grad}
      nameDegree={nameDegree}
      /> */}

        <DisplayExperience
          company={company}
          title={title}
          dates={dates}
          duties={duties}
          location={location}
        />

      </div>
    </>
  )
}

export default App
