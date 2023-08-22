import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Form from './components/personal-info/personalDetails.jsx'
import PersonalDetailsForm from './components/personal-info/personalDetails.jsx'
import EducationDetailsForm from './components/education/educationDetails'
import ExpDetailsForm from './components/experience/experienceDetails'
import DisplayPersonalDetails from './components/personal-info/personalSection'
import DisplayEducation from './components/education/educationSection'
import DisplayExperience from './components/experience/experienceSection'

function App() {
  const [fullName, setFullName] = useState('Caity Foster');
  const [email, setEmail] = useState('cfoster614@aol.com');
  const [phone, setPhone] = useState('222-222-2222');
  const [address, setAddress] = useState('200 Cupcake Lane');

  const [school, setSchool] = useState('Oswego');
  const [degree, setDegree] = useState('Wellness Management');
  const [grad, setGrad] = useState('May 2017');

  const [company, setCompany] = useState('Wellnow');
  const [title, setTitle] = useState('Xray Tech');
  const [dates, setDates] = useState('Sept 2020 - Sept 2021');
  const [location, setLocation] = useState('Refresh, CA');
  const [duties, setDuties] = useState('Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris aliquet lacinia est. Cras pulvinar metus ut nulla gravida viverra. Quisque aliquam metus lectus, vel rutrum magna laoreet eget. Nunc vitae scelerisque turpis. Duis tellus leo, efficitur sed hendrerit at, sodales in eros. Sed eleifend tortor id auctor interdum. Nunc imperdiet ante quis odio tincidunt pellentesque. Sed nec justo vitae dui ultrices convallis a et sem. Vivamus tempor consectetur leo, sit amet ultricies lectus ultrices ut. Nulla tempor odio at ante dictum viverra.');
  

  return (
    <>
    <div className='container form-container'>
      <PersonalDetailsForm 
      fullName={fullName} setFullName={setFullName}
      email={email} setEmail={setEmail}
      phone={phone} setPhone={setPhone}
      address={address} setAddress={setAddress}
      />

      <EducationDetailsForm 
      school={school} setSchool={setSchool}
      degree={degree} setDegree={setDegree}
      grad={grad} setGrad={setGrad}
      />
      
      <ExpDetailsForm 
      company={company} setCompany={setCompany}
      title={title} setTitle={setTitle}
      dates={dates} setDates={setDates}
      duties={duties} setDuties={setDuties}
      location={location} setLocation={setLocation}
      />

    </div>

    <div className='paper-container'>
      <DisplayPersonalDetails 
      fullName={fullName}
      email={email}
      phone={phone}
      address={address}
      />

      <DisplayEducation
      school={school}
      degree={degree}
      grad={grad}
      />

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
