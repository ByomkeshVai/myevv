import React, { useContext } from 'react';
import DefaultLayout from '../../../layout/DefaultLayout';
import AddStaffForm from './AddStaffForm';
import toast from 'react-hot-toast'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react';
import { AuthContext } from '../../../providers/AuthProvider';
import { imageUpload } from '../../../api/utilits';
import { addStaffData } from '../../../api/staff';

const AddStaff = () => {
     const navigate = useNavigate()
  const { user } = useContext(AuthContext)

  const [loading, setLoading] = useState(false)
    const [uploadButtonText, setUploadButtonText] = useState('Upload Image')

    const [hiredDate, setHiredDate] = useState(null);
    const [terminateDate, seTerminateDate] = useState(null);
    const [birthDate, setBirthDate] = useState(null);
    const [noteDate, setNoteDate] = useState(null);

      const handleHired = date => {
          setHiredDate(date);
    };

    const handleTerminate = date => {
          seTerminateDate(date);
    };

    const handleBirthDate = date => {
          setBirthDate(date);
    };

    const handleNoteDate = date => {
          setNoteDate(date);
    };


    const [selectedTime, setSelectedTime] = useState(null);

  const handleTimeChange = (time) => {
    setSelectedTime(time);
  };



    const [gender, setGender] = useState('');

  const handleGenderChange = (event) => {
    setGender(event.target.value);
    };
    
        const [status, setStatus] = useState('');

  const handleStatusChange = (event) => {
    setStatus(event.target.value);
  };

  // handle form submit
  const handleSubmit = event => {
    event.preventDefault()
    setLoading(true)
      const firstName = event.target.firstName.value
      const lastName = event.target.lastName.value
      const googleAdrs = event.target.googleAdrs.value
      const street = event.target.street.value
      const apt = event.target.apt.value
      const zip = event.target.zip.value
      const state = event.target.state.value
      const country = event.target.country.value
      const gender = gender
      const city = event.target.city.value
      const transport = event.target.transport.value
      const ssn = event.target.ssn.value
      const license = event.target.license.value
      const title = event.target.title.value
      const caseN = event.target.caseN.value
      const phone = event.target.phone.value
      const phone2 = event.target.phone2.value
      const email = event.target.email.value
      const hireDates = hiredDate
      const terminateDates = terminateDate
      const status = status
      const loginEmail = event.target.loginEmail.value
      const loginPassword = event.target.loginPassword.value
      const birthDates = birthDate

      // Relation Category
      const relation = event.target.relation.value
      const contact = event.target.contact.value
      const contactNo = event.target.contactNo.value

      // notes
      const mrNumber = event.target.mrNumber.value
      const client = event.target.client.value
      const noteDate = selectedTime
      const noteTime = selectedTime
      const note = event.target.note.value

      // Aide Pay Rate
      const mrNumberAide = event.target.mrNumberAide.value
      const clientNameAide = event.target.clientNameAide.value
      const service = event.target.service.value
      const rate = event.target.rate.value
      
    const image = event.target.image.files[0]
    setUploadButtonText('Uploading...')
    // Upload image
    imageUpload(image)
      .then(data => {
        const classData = {
            firstName: firstName,
            lastName: lastName,
            googleAdrs: googleAdrs,
            apt: apt,
            street: street,
            zip: zip,
            state: state,
            gender: gender,
            country: country,
            city: city,
            transport: transport,
            ssn: ssn,
            license: license,
            title: title,
            caseN: caseN,
            phone: phone,
            phone2: phone2,
            email: email,
            hireDates: hireDates,
            terminateDates: terminateDates,
            status: status,
            birthDates: birthDates,

          relation: {
            relation: relation,
            contact: contact,
            contactNo: contactNo,
            },
           notes: {
            mrNumber: mrNumber,
            client: client,
            note: note,
            },
            AidePayRate: {
            mrNumberAide: mrNumberAide,
            clientNameAide: clientNameAide,
            service: service,
            rate: rate,
            },
            login: {
            loginEmail: loginEmail,
            loginPassword: loginPassword,
            },
          image: data.data.display_url,
          }
          
          // post room data to server
          
            addStaffData(classData)
            .then(data => {
                console.log(data);
            setUploadButtonText('Uploaded!')
            setLoading(false)
            toast.success('Class Added!')
            // navigate('/instructor/dashboard/myclass')
          })
          .catch(err => console.log(err))

        setLoading(false)
      
      })
      .catch(err => {
        console.log(err.message)
        setLoading(false)
      })
  }

  const handleImageChange = image => {
    setUploadButtonText(image.name)
  }
    return (
        <>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-6 xl:grid-cols-4 2xl:gap-7.5">
            <h2>Add From add staff</h2>
            </div>
             <div className=''>
            <AddStaffForm
             handleSubmit={handleSubmit}
        loading={loading}
                    handleImageChange={handleImageChange}
                    gender ={gender}
                    handleGenderChange={handleGenderChange}
                    status ={status}
                    handleStatusChange ={handleStatusChange}
                    uploadButtonText={uploadButtonText}
                    hiredDate ={hiredDate}
                    terminateDate ={terminateDate}
                    birthDate = {birthDate}
                    handleHired ={handleHired}
                    handleTerminate ={handleTerminate}
                    handleBirthDate={handleBirthDate}
                    selectedTime ={selectedTime}
                    handleTimeChange={handleTimeChange}
                    noteDate ={noteDate}
                    handleNoteDate ={handleNoteDate}
                    
            ></AddStaffForm>
        </div>

        </>
        

    );
};

export default AddStaff;