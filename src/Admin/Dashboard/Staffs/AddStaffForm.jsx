import React from 'react';
import { TbFidgetSpinner } from 'react-icons/tb';
import { mrnumber } from '../../../mrnumber';
import { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import moment from 'moment';
import { draftClient } from '../../../draftClient';

const AddStaffForm = ({
    handleSubmit,
  loading,
  handleImageChange,
  uploadButtonText,
  gender,
  handleGenderChange,
  status,
  handleStatusChange,
  hiredDate,
  terminateDate,
  birthDate,
  handleHired,
  handleTerminate,
  handleBirthDate,
  selectedTime,
  handleTimeChange,
  noteDate,
  handleNoteDate
}) => {

  const [isDrawerOpen, setDrawerOpen] = useState(false);
  const [isDrawerOpen2, setDrawerOpen2] = useState(false);
  const [isDrawerOpen3, setDrawerOpen3] = useState(false);

  const toggleDrawer = () => {
    setDrawerOpen(!isDrawerOpen);
  };

  const toggleDrawer2 = () => {
    setDrawerOpen2(!isDrawerOpen2);
  };


  const toggleDrawer3 = () => {
    setDrawerOpen3(!isDrawerOpen3);
  };



    return (
                <div className='max-w-screen-xl mx-auto min-h-[calc(100vh-270px)] flex flex-col justify-center  text-gray-800 rounded-xl bg-gray-50'>
      <form onSubmit={handleSubmit}>
          <div className='mx-auto lg:w-3/6 w-full'>
            
          <div className='space-y-6 mb-5'>
            <div className='space-y-1 text-sm'>

              <input
                className='w-full px-4 py-3 text-gray-800 border border-rose-300 focus:outline-rose-500 rounded-md '
                name='firstName'
                id='firstName'
                type='text'
                placeholder='First Name (required)'
                required
              />
                        </div>
            </div>

             <div className='space-y-6 mb-5'>
            <div className='space-y-1 text-sm'>

              <input
                className='w-full px-4 py-3 text-gray-800 border border-rose-300 focus:outline-rose-500 rounded-md '
                name='lastName'
                id='lastName'
                type='text'
                placeholder='Last Name (required)'
                required
              />
                        </div>
            </div>


              <div className='space-y-6 mb-5'>
            <div className='space-y-1 text-sm'>

              <input
                className='w-full px-4 py-3 text-gray-800 border border-rose-300 focus:outline-rose-500 rounded-md '
                name='googleAdrs'
                id='googleAdrs'
                type='text'
                placeholder="Staff Google Address"
                
              />
                        </div>
            </div>


              <div className='space-y-6 mb-5'>
            <div className='space-y-1 text-sm'>

              <input
                className='w-full px-4 py-3 text-gray-800 border border-rose-300 focus:outline-rose-500 rounded-md '
                name='street'
                id='street'
                type='text'
                placeholder='Street'
                
              />
                        </div>
            </div>



              <div className='space-y-6 mb-5'>
            <div className='space-y-1 text-sm'>

              <input
                className='w-full px-4 py-3 text-gray-800 border border-rose-300 focus:outline-rose-500 rounded-md '
                name='apt'
                id='apt'
                type='text'
                placeholder='Apt/Unit/Suite'
                
              />
                        </div>
            </div>



              <div className='space-y-6 mb-5'>
            <div className='space-y-1 text-sm'>

              <input
                className='w-full px-4 py-3 text-gray-800 border border-rose-300 focus:outline-rose-500 rounded-md '
                name='city'
                id='city'
                type='text'
                placeholder='City'
                
              />
                        </div>
            </div>


              <div className='space-y-6 mb-5'>
            <div className='space-y-1 text-sm'>

              <input
                className='w-full px-4 py-3 text-gray-800 border border-rose-300 focus:outline-rose-500 rounded-md '
                name='state'
                id='state'
                type='text'
                placeholder='State'
                
              />
                        </div>
            </div>


              <div className='space-y-6 mb-5'>
            <div className='space-y-1 text-sm'>

              <input
                className='w-full px-4 py-3 text-gray-800 border border-rose-300 focus:outline-rose-500 rounded-md '
                name='country'
                id='country'
                type='text'
                placeholder='Country'
                
              />
                        </div>
            </div>


              <div className='space-y-6 mb-5'>
            <div className='space-y-1 text-sm'>

              <input
                className='w-full px-4 py-3 text-gray-800 border border-rose-300 focus:outline-rose-500 rounded-md '
                name='zip'
                id='zip'
                type='text'
                placeholder='Zip Code'
                
              />
                        </div>
            </div>


              <div className='space-y-6 mb-5'>
            <div className='space-y-1 text-sm'>

             <label className='mr-3'>
        <input className='mr-3'
          type="radio"
          value="male"
          checked={gender === 'male'}
          onChange={handleGenderChange}
        />
        Male
      </label>

      <label className='mr-3'>
        <input className='mr-3'
          type="radio"
          value="female"
          checked={gender === 'female'}
          onChange={handleGenderChange}
        />
        Female
      </label>

      <label className='mr-3'>
        <input className='mr-3'
          type="radio"
          value="other"
          checked={gender === 'other'}
          onChange={handleGenderChange}
        />
        Other
      </label>

                        </div>
            </div>


          


             <div className='space-y-1 text-sm mx-auto mt-2 '>
              <label htmlFor='transport' className='block text-gray-600'>
                Transport
              </label>
              <select
                
                className='w-full px-4 py-3  border-rose-300 focus:outline-rose-500 rounded-md'
                name='transport'
              >
                <option className='text-gray-600' value="public">Public</option>
                <option className='text-gray-600' value="own">Own</option>
              </select>
            </div>


            
            
    <div className='space-y-6 mb-5 mt-4'>
            <div className='space-y-1 text-sm'>

              <input
                className='w-full px-4 py-3 text-gray-800 border border-rose-300 focus:outline-rose-500 rounded-md '
                name='ssn'
                id='ssn'
                type='text'
                placeholder='SSN No.'
                
              />
                        </div>
            </div>


              <div className='space-y-6 mb-5'>
            <div className='space-y-1 text-sm'>

              <input
                className='w-full px-4 py-3 text-gray-800 border border-rose-300 focus:outline-rose-500 rounded-md '
                name='license'
                id='license'
                type='number'
                placeholder='Professional License Number'
              />
                        </div>
            </div>

            
  <div className='space-y-6 mb-5'>
            <div className='space-y-1 text-sm'>

              <input
                className='w-full px-4 py-3 text-gray-800 border border-rose-300 focus:outline-rose-500 rounded-md '
                name='title'
                id='title'
                type='text'
                  placeholder='Title (required)'
                  required
              />
                        </div>
            </div>





        <div className='space-y-1 text-sm mx-auto mt-2 mb-4'>
              <label htmlFor='caseN' className='block text-gray-600'>
                Case Manager
              </label>
              <select
                
                className='w-full px-4 py-3  border-rose-300 focus:outline-rose-500 rounded-md'
                name='caseN'
              >
                <option className='text-gray-600' value="no">No</option>
                <option className='text-gray-600' value="yes">Yes</option>
              </select>
            </div>




 <div className='space-y-6 mb-5'>
            <div className='space-y-1 text-sm'>

              <input
                className='w-full px-4 py-3 text-gray-800 border border-rose-300 focus:outline-rose-500 rounded-md '
                name='phone'
                id='phone'
                type='number'
                  placeholder='Phone (required)'
                  required
              />
                        </div>
            </div>

            
             <div className='space-y-6 mb-5'>
            <div className='space-y-1 text-sm'>

              <input
                className='w-full px-4 py-3 text-gray-800 border border-rose-300 focus:outline-rose-500 rounded-md '
                name='phone2'
                id='phone2'
                type='number'
                  placeholder='phone 2'
              />
                        </div>
            </div>


              <div className='space-y-6 mb-5'>
            <div className='space-y-1 text-sm'>

              <input
                className='w-full px-4 py-3 text-gray-800 border border-rose-300 focus:outline-rose-500 rounded-md '
                name='email'
                id='email'
                type='email'
                  placeholder='Email (required)'
              />
                        </div>
            </div>


              <div className='space-y-6 mb-5 w-full'>
            <div className='space-y-1 text-sm  px-4 py-3 text-gray-800 border border-rose-300 focus:outline-rose-500 rounded-md' >

                      <DatePicker className='w-full'
                selected={hiredDate}
                onChange={handleHired}
                  dateFormat="MM/dd/yyyy"
                  placeholderText="Last Hired Date"
              />
                        </div>
            </div>

             <div className='space-y-6 mb-5 w-full'>
            <div className='space-y-1 text-sm  px-4 py-3 text-gray-800 border border-rose-300 focus:outline-rose-500 rounded-md' >

                      <DatePicker className='no-outline'
                selected={terminateDate}
                onChange={handleTerminate}
                  dateFormat="MM/dd/yyyy"
                  placeholderText="Termination Date"
              />
                        </div>
            </div>

            <div className='space-y-6'>
              
 <div className='space-y-1 text-sm mx-auto mt-2 mb-4'>
              <label htmlFor='status' className='block text-gray-600 text-base mb-3'>
                Status
              </label>
             <label className='mr-3'>
        <input className='mr-3'
          type="radio"
          value="active"
          checked={status === 'active'}
          onChange={handleStatusChange}
        />
        Active
      </label>

      <label className='mr-3'>
        <input className='mr-3'
          type="radio"
          value="inactive"
          checked={status === 'inactive'}
          onChange={handleStatusChange}
        />
        Inactive
      </label>

      <label className='mr-3'>
        <input className='mr-3'
          type="radio"
          value="hold"
          checked={status === 'hold'}
          onChange={handleStatusChange}
        />
        Hold
                </label>
                 <label className='mr-3'>
        <input className='mr-3'
          type="radio"
          value="applied"
          checked={status === 'applied'}
          onChange={handleStatusChange}
        />
        Applied
      </label>
              </div>

              </div>

            
            <div className='space-y-6 mb-5 w-full'>
            <div className='space-y-1 text-sm  px-4 py-3 text-gray-800 border border-rose-300 focus:outline-rose-500 rounded-md' >

                      <DatePicker className='w-full'
                selected={birthDate}
                onChange={handleBirthDate}
                  dateFormat="MM/dd/yyyy"
                  placeholderText="Select Birth Date"
              />
                        </div>
            </div>

            


            <div className='mb-6 '>
       <button className='text-gray-800 w-full px-4 py-3 text-gray-800 border border-rose-300 focus:outline-rose-500 rounded-md' onClick={toggleDrawer}>Contact (Add Here)  </button>

     {isDrawerOpen && (
                <div className=" mt-4 border border-2 p-8">
                  <div className='lg:flex lg:flex-row flex-col justify-between gap-2'>
              <div className='space-y-1 text-sm'>
              <label htmlFor='relation' className='block text-gray-600'>
                Relation
              </label>
              <input
                className='w-full px-4 py-3 text-gray-800 border border-rose-300 focus:outline-rose-500 rounded-md '
                name='relation'
                id='relation'
                type='text'
                placeholder='Relation'
              
              />
                        </div>

              <div className='space-y-1 text-sm'>
                <label htmlFor='seats' className='block text-gray-600'>
                  Enter Contact Name
                </label>
                <input
                  className='w-full px-4 py-3 text-gray-800 border border-rose-300 focus:outline-rose-500 rounded-md '
                  name='contact'
                  id='contact'
                  type='text'
                  placeholder='Enter Contact Name'
                  
                />
              </div>
                  </div>
                  












                      <div className='space-y-6'>
            <div className='space-y-1 text-sm'>
              <label htmlFor='contactNo' className='block text-gray-600'>
                Enter Contact No.
              </label>
              <input
                className='w-full px-4 py-3 text-gray-800 border border-rose-300 focus:outline-rose-500 rounded-md '
                name='contactNo'
                id='contactNo'
                type='number'
                placeholder='Enter Contact No.'
                required
              />
                        </div>
                        </div>
        </div>
      )}
            </div>
            
            
             <div className='mb-6 '>
       <button className='text-gray-800 w-full px-4 py-3 text-gray-800 border border-rose-300 focus:outline-rose-500 rounded-md' onClick={toggleDrawer2}>Notes (Add Here)  </button>

     {isDrawerOpen2 && (
                <div className=" mt-4 border border-2 p-8">
                  <div className='w-full justify-between gap-2 mb-4'>
              <div className='space-y-1 text-sm mb-4'>
              <label htmlFor='relation' className='block text-gray-600'>
                MR Number
              </label>
                <select
                
                className='w-full px-4 py-3 border-rose-300 focus:outline-rose-500 rounded-md'
                name='mrnumber'
              >
                {mrnumber.map(mrnumber => (
                  <option value={mrnumber.title} key={mrnumber.title}>
                    {mrnumber.title}
                  </option>
                ))}
              </select>
                        </div>

              <div className='space-y-1 text-sm mb-4'>
                <label htmlFor='seats' className='block text-gray-600'>
                  Client Name
                </label>
               <select
                
                className='w-full px-4 py-3 border-rose-300 focus:outline-rose-500 rounded-md'
                name='client'
              >
                {draftClient.map(draftClient => (
                  <option value={draftClient.title} key={draftClient.title}>
                    {draftClient.title}
                  </option>
                ))}
              </select>
              </div>
                  </div>

                    <div className='lg:flex lg:flex-row flex-col justify-between gap-2'>
              <div className='space-y-1 text-sm'>
              <label htmlFor='relation' className='block text-gray-600'>
                Select Date
              </label>
               <DatePicker className='w-full'
                selected={noteDate}
                onChange={handleNoteDate}
                  dateFormat="MM/dd/yyyy"
                        placeholderText="Select Date"
                        
              />
                        </div>

              <div className='space-y-1 text-sm'>
                <label htmlFor='seats' className='block text-gray-600'>
                  Enter Contact Name
                </label>
               <DatePicker className='w-full'
                selected={selectedTime}
          onChange={handleTimeChange}
          showTimeSelect
          showTimeSelectOnly
          timeIntervals={15}
          dateFormat="h:mm aa"
          placeholderText="Select time"
                        
              />
              </div>
                  </div>
                  
                  
                      <div className='space-y-6 mb-4'>
            <div className='space-y-1 text-sm'>
              <label htmlFor='contactNo' className='block text-gray-600'>
                MR Number
              </label>
              <input
                className='w-full px-4 py-3 text-gray-800 border border-rose-300 focus:outline-rose-500 rounded-md '
                name='contactNo'
                id='contactNo'
                type='number'
                placeholder='Enter Contact No.'
                required
              />
                        </div>
                        </div>
        </div>
      )}
    </div>









            <div className='space-y-6'>
              
 <div className='space-y-1 text-sm mx-auto mt-2'>
              <label htmlFor='category' className='block text-gray-600'>
                Category
              </label>
              <select
                required
                className='w-full px-4 py-3 border-rose-300 focus:outline-rose-500 rounded-md'
                name='category'
              >
                {mrnumber.map(mrnumber => (
                  <option value={mrnumber.title} key={mrnumber.title}>
                    {mrnumber.title}
                  </option>
                ))}
              </select>
              </div>
              


          <div className='space-y-6'>
            <div className='space-y-1 text-sm'>
              <label htmlFor='name' className='block text-gray-600'>
                Class Name
              </label>
              <input
                className='w-full px-4 py-3 text-gray-800 border border-rose-300 focus:outline-rose-500 rounded-md '
                name='name'
                id='name'
                type='text'
                placeholder='Class Name'
                required
              />
                        </div>
                        </div>

            <div className=' p-4 bg-white w-full  m-auto rounded-lg'>
              <div className='file_upload px-5 py-3 relative border-4 border-dotted border-gray-300 rounded-lg'>
                <div className='flex flex-col w-max mx-auto text-center'>
                  <label>
                    <input
                      onChange={event => {
                        handleImageChange(event.target.files[0])
                      }}
                      className='text-sm cursor-pointer w-36 hidden'
                      type='file'
                      name='image'
                      id='image'
                      accept='image/*'
                      hidden
                    />
                    <div className='bg-[#085885] text-white border border-gray-300 rounded font-semibold cursor-pointer p-1 px-3 hover:bg-info-500'>
                      {uploadButtonText}
                    </div>
                  </label>
                </div>
              </div>
            </div>
            <div className='lg:flex lg:flex-row flex-col justify-between gap-2'>
              <div className='space-y-1 text-sm'>
                <label htmlFor='price' className='block text-gray-600'>
                  Price
                </label>
                <input
                  className='w-full px-4 py-3 text-gray-800 border border-rose-300 focus:outline-rose-500 rounded-md '
                  name='price'
                  id='price'
                  type='number'
                  placeholder='Price'
                  required
                />
              </div>

              <div className='space-y-1 text-sm'>
                <label htmlFor='seats' className='block text-gray-600'>
                  Available Seats
                </label>
                <input
                  className='w-full px-4 py-3 text-gray-800 border border-rose-300 focus:outline-rose-500 rounded-md '
                  name='seats'
                  id='seats'
                  type='number'
                  placeholder='Total seats'
                  required
                />
              </div>
              </div>
               <button
          type='submit'
          className='w-full p-3 mt-5 text-center font-medium text-white transition duration-200 rounded shadow-md bg-[#085885]'
        >
          {loading ? (
            <TbFidgetSpinner className='m-auto animate-spin' size={24} />
          ) : (
            'Save & Continue'
          )}
        </button>
           
                    </div>
                    </div>
       
      </form>
    </div>
    );
};

export default AddStaffForm;