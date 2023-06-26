import React, { useState } from 'react';
import { useForm, Controller } from "react-hook-form";
import { TbFidgetSpinner } from 'react-icons/tb';
import { addClient } from '../../../api/client';
      

const AddClient = () => {
  const [loading, setLoading] = useState(false)
  const [showPayerAuthorization, setShowPayerAuthorization] = useState(false);
  const [showContact, setShowContact] = useState(false);
  const [showAddNote, setShowAddNote] = useState(false);
  const [showPrivatePayServiceRate, setShowPrivatePayServiceRate] = useState(false);
  const [showAddExclusion, setShowAddExclusion] = useState(false);

        const { handleSubmit, control } = useForm();
    const onSubmit = (data) => {
        addClient(data);
    }
    const activityOptions = [
    'Complete/Partial Bath',
    'Dress/Undress',
    'Assist with Toileting',
    'Transferring',
    'Personal Grooming',
    'Assist with Eating/Feeding',
    'Ambulation',
    'Turn/Change Position',
    'Vital Signs',
    'Assist with Self-Admin. Medication',
    'Bowel/Bladder',
    'Wound Care',
    'ROM',
    'Supervision',
    'Prepare Breakfast',
    'Prepare Lunch',
    'Prepare Dinner',
    'Clean Kitchen/Wash Dishes',
    'Make/Change Bed Linen',
    'Clean Areas Used by Individual',
    'Listing Supplies/Shopping',
    'Individual’s Laundry',
    'Medical Appointments',
    'Work/School/Social',
    'Other',
  ];
    return (
        <div className='mx-auto  max-w-2xl'>
                <form onSubmit={handleSubmit(onSubmit)}>
      <div className='p-2'>
          <label className='mr-5'>Medical Record Number</label>
                    <Controller
                        
          name="medicalRecordNumber"
          control={control}
          defaultValue={100}
          render={({ field }) => <input className="w-full px-4 py-3 text-gray-800 border border-rose-300 focus:outline-rose-500 rounded-md" {...field} type="number" readOnly /> }
        />
      </div>

      <div className='p-2'>
        <label className='mr-5'>First Name</label>
        <Controller
          name="firstName"
          control={control}
          rules={{ required: true }}
          render={({ field }) => <input  className="w-full px-4 py-3 text-gray-800 border border-rose-300 focus:outline-rose-500 rounded-md" {...field} type="text" />}
        />
      </div>

      <div className='p-2'>
        <label>Middle Name</label>
        <Controller
          name="middleName"
          control={control}
          render={({ field }) => <input className="w-full px-4 py-3 text-gray-800 border border-rose-300 focus:outline-rose-500 rounded-md" {...field} type="text" />}
        />
      </div>

      <div className='p-2'>
        <label >Last Name</label>
        <Controller
          name="lastName"
          control={control}
          rules={{ required: true }}
          render={({ field }) => <input className="w-full px-4 py-3 text-gray-800 border border-rose-300 focus:outline-rose-500 rounded-md" {...field} type="text" />}
        />
      </div>

      <div className='p-2'>
        <label >Phone Cell</label>
        <Controller
          name="phoneCell"
          control={control}
          rules={{ required: true }}
          render={({ field }) => <input className="w-full px-4 py-3 text-gray-800 border border-rose-300 focus:outline-rose-500 rounded-md" {...field} type="number" />}
        />
      </div>

      <div className='p-2'>
        <label>Phone Home</label>
        <Controller
          name="phoneHome"
          control={control}
          render={({ field }) => <input className="w-full px-4 py-3 text-gray-800 border border-rose-300 focus:outline-rose-500 rounded-md" {...field} type="number" />}
        />
      </div>

      <div className='p-2'>
        <label>Email</label>
        <Controller
          name="email"
          control={control}
          render={({ field }) => <input className="w-full px-4 py-3 text-gray-800 border border-rose-300 focus:outline-rose-500 rounded-md" {...field} type="email" />}
        />
      </div>

      <div className='p-2'>
        <label>Program</label>
        <Controller
          name="program"
          control={control}
          render={({ field }) => (
           <select {...field} className="w-full px-4 py-3 text-gray-800 border border-rose-300 focus:outline-rose-500 rounded-md">
                        <option value="">Select</option>
              <option value="EDCD Program">EDCD Program</option>
            </select>
          )}
        />
      </div>
            
      <div className='p-2'>
        <label>Diagnosis Code</label>
        {[...Array(12)].map((_, index) => (
          <Controller
            key={index}
            name={`diagnosisCode[${index}]`}
            control={control}
            render={({ field }) => (
              <input className="w-full px-4 py-3 mt-5 text-gray-800 border border-rose-300 focus:outline-rose-500 rounded-md" {...field} type="text" placeholder={`Diagnosis ${index + 1}`} />
            )}
          />
        ))}
      </div>

      <div className='p-2'>
        <label className=''>Place of Service</label>
        {[
          "Home",
          "TeleHealth",
          "School",
          "Assisted Living Facility",
          "Homeless Shelter",
          "Group Home",
          "Mobile Unit",
          "Temporary Lodging",
          "Inpatient Hospital",
          "Skilled Nursing Facility",
          "Nursing Facility"
        ].map((option) => (
          <div key={option} className=''>
            <Controller
              name={`placeOfService[${option}]`}
              control={control}
              defaultValue={false}
              render={({ field }) => (
                <input  {...field} type="checkbox" className='mr-5' value={option} />
              )}
            />
            <label>{option}</label>
          </div>
        ))}
      </div>

      <div className='p-2'>
        <label>Copay Amount</label>
        <Controller
          name="copayAmount"
          control={control}
          render={({ field }) => <input className="w-full px-4 py-3 text-gray-800 border border-rose-300 focus:outline-rose-500 rounded-md" {...field} type="number" />}
        />
      </div>

      <div className='p-2'>
        <label>Inquiry Date</label>
        <Controller
          name="inquiryDate"
          control={control}
          render={({ field }) => <input className="w-full px-4 py-3 text-gray-800 border border-rose-300 focus:outline-rose-500 rounded-md" {...field} type="date" />}
        />
      </div>

      <div className='p-2'>
        <label>Assessment Date</label>
        <Controller
          name="assessmentDate"
          control={control}
          render={({ field }) => <input className="w-full px-4 py-3 text-gray-800 border border-rose-300 focus:outline-rose-500 rounded-md" {...field} type="date" />}
        />
      </div>

      <div className='p-2'>
        <label>Start of Care</label>
        <Controller
          name="startOfCare"
          control={control}
          rules={{ required: true }}
          render={({ field }) => <input className="w-full px-4 py-3 text-gray-800 border border-rose-300 focus:outline-rose-500 rounded-md" {...field} type="date" />}
        />
      </div>

      <div className='p-2'>
        <label>End Date</label>
        <Controller
          name="endDate"
          control={control}
          render={({ field }) => <input className="w-full px-4 py-3 text-gray-800 border border-rose-300 focus:outline-rose-500 rounded-md" {...field} type="date" />}
        />
      </div>

      <div className='p-2'>
        <label>Gender</label>
        {["Male", "Female"].map((option, index) => (
          <div key={index}>
            <Controller
              name="gender"
              control={control}
              render={({ field }) => (
                <input className='mr-2' {...field} type="radio" value={option} />
              )}
            />
            <label>{option}</label>
          </div>
        ))}
      </div>

      <div className='p-2'>
        <label>Date Of Birth</label>
        <Controller
          name="dateOfBirth"
          control={control}
          rules={{ required: true }}
          render={({ field }) => <input className="w-full px-4 py-3 text-gray-800 border border-rose-300 focus:outline-rose-500 rounded-md" {...field} type="date" />}
        />
      </div>

      <div className='p-2'>
        <label>Client's Location Access</label>
        {["On Bus Route", "Not On Bus Route"].map((option, index) => (
          <div key={index}>
            <Controller
              name="clientLocationAccess"
              control={control}
              render={({ field }) => (
                <input className='mr-2' {...field} type="radio" value={option} />
              )}
            />
            <label>{option}</label>
          </div>
        ))}
      </div>

      <div className='p-2'>
        <label>Case Manager</label>
        <Controller
          name="caseManager"
          control={control}
          render={({ field }) => <input className="w-full px-4 py-3 text-gray-800 border border-rose-300 focus:outline-rose-500 rounded-md" {...field} type="text" />}
        />
      </div>

      <div className='p-2'>
        <label>Office Location</label>
        <Controller
          name="officeLocation"
          control={control}
          render={({ field }) => <input className="w-full px-4 py-3 text-gray-800 border border-rose-300 focus:outline-rose-500 rounded-md" {...field} type="text" />}
        />
      </div>

      <div className='p-2'>
        <label>SSN No.</label>
        <Controller
          name="ssn"
          control={control}
          render={({ field }) => <input className="w-full px-4 py-3 text-gray-800 border border-rose-300 focus:outline-rose-500 rounded-md" {...field} type="number" />}
        />
      </div>

      <div className='p-2'>
        <label>Client's Google Address</label>
        <Controller
          name="clientGoogleAddress"
          control={control}
          render={({ field }) => <input className="w-full px-4 py-3 text-gray-800 border border-rose-300 focus:outline-rose-500 rounded-md" {...field} type="text" />}
        />
      </div>

      <div className='p-2'>
        <label>Street</label>
        <Controller
          name="street"
          control={control}
          render={({ field }) => <input className="w-full px-4 py-3 text-gray-800 border border-rose-300 focus:outline-rose-500 rounded-md" {...field} type="text" />}
        />
      </div>

      <div className='p-2'>
        <label>Apt/Unit/Suite</label>
        <Controller
          name="aptUnitSuite"
          control={control}
          render={({ field }) => <input className="w-full px-4 py-3 text-gray-800 border border-rose-300 focus:outline-rose-500 rounded-md" {...field} type="text" />}
        />
      </div>

      <div className='p-2'>
        <label>City</label>
        <Controller
          name="city"
          control={control}
          render={({ field }) => <input className="w-full px-4 py-3 text-gray-800 border border-rose-300 focus:outline-rose-500 rounded-md" {...field} type="text" />}
        />
      </div>

      <div className='p-2'>
        <label>State</label>
        <Controller
          name="state"
          control={control}
          render={({ field }) => <input className="w-full px-4 py-3 text-gray-800 border border-rose-300 focus:outline-rose-500 rounded-md" {...field} type="text" />}
        />
      </div>

      <div className='p-2'>
        <label>Zip Code</label>
        <Controller
          name="zipCode"
          control={control}
          render={({ field }) => <input className="w-full px-4 py-3 text-gray-800 border border-rose-300 focus:outline-rose-500 rounded-md" {...field} type="number" />}
        />
      </div>

      <div className='p-2'>
        <label>Client's Google Address 2</label>
        <Controller
          name="clientGoogleAddress2"
          control={control}
          render={({ field }) => <input className="w-full px-4 py-3 text-gray-800 border border-rose-300 focus:outline-rose-500 rounded-md" {...field} type="text" />}
        />
      </div>

      <div className='p-2'>
        <label>Status</label>
        {["Active", "Discharge", "On Hold", "Potential"].map((option, index) => (
          <div key={index}>
            <Controller
              name="status"
              control={control}
              render={({ field }) => (
                <input className='mr-2' {...field} type="radio" value={option} />
              )}
            />
            <label>{option}</label>
          </div>
        ))}
      </div>

      <div className='p-2'>
        <label>Marital Status</label>
        {["Married", "Single", "Separated", "Divorced", "Widowed", "Unknown"].map((option, index) => (
          <div key={index}>
            <Controller
              name="maritalStatus"
              control={control}
              render={({ field }) => (
                <input className='mr-2' {...field} type="radio" value={option} />
              )}
            />
            <label>{option}</label>
          </div>
        ))}
      </div>

      <div className='p-2'>
        <label>Physician Name</label>
        <Controller
          name="physicianName"
          control={control}
          render={({ field }) => <input className="w-full px-4 py-3 text-gray-800 border border-rose-300 focus:outline-rose-500 rounded-md" {...field} type="text" />}
        />
      </div>

      <div className='p-2'>
        <label>Physician NPI</label>
        <Controller
          name="physicianNPI"
          control={control}
          render={({ field }) => <input className="w-full px-4 py-3 text-gray-800 border border-rose-300 focus:outline-rose-500 rounded-md" {...field} type="text" />}
        />
      </div>

      <div className='p-2'>
        <label>Match Actual Hours with Schedule for Services?</label>
        {["Personal Care", "Respite Care", "Companion Care"].map((option) => (
          <div key={option}>
            <Controller
                    name={`matchHours[${option}]`}
                    defaultValue={false}
              control={control}
              render={({ field }) => (
                <input className='mr-2' {...field} type="checkbox" value={option} />
              )}
            />
            <label>{option}</label>
          </div>
        ))}
      </div>



                                <div className='p-2 mr-2'>
        <label>
                        <input
                            className='mr-2'
                 type="checkbox"
            checked={showContact}
            onChange={() => setShowContact(!showContact)}
          />  
          Contact
        </label>
        {showContact && (
          <div>
            <div>
              <label>Contact Name</label>
              <Controller
                 name="contact.contactName"
                control={control}
                render={({ field }) => <input className="w-full px-4 py-3 text-gray-800 border border-rose-300 focus:outline-rose-500 rounded-md"  {...field} type="text" />}
              />
            </div>
            <div>
              <label>Contact Relationship</label>
              <Controller
                 name="contact.relationship"
                control={control}
                render={({ field }) => <input className="w-full px-4 py-3 text-gray-800 border border-rose-300 focus:outline-rose-500 rounded-md" {...field} type="text" />}
              />
            </div>
            <div>
              <label>Contact Phone</label>
              <Controller
                name="contact.phone"
                control={control}
                render={({ field }) => <input className="w-full px-4 py-3 text-gray-800 border border-rose-300 focus:outline-rose-500 rounded-md" {...field} type="number" />}
              />
                </div>
          </div>
        )}
      </div>

                
                      <div className='p-2 mr-2'>
        <label>
         
                        <input
                            className='mr-2'
            type="checkbox"
            checked={showPayerAuthorization}
            onChange={() => setShowPayerAuthorization(!showPayerAuthorization)}
          />  
          Payer/Authorization
        </label>
        {showPayerAuthorization && (
          <div>
            <div>
              <label>Payer Name</label>
              <Controller
                name="payerAuthorization.payerName"
                control={control}
                render={({ field }) => (
                    <select {...field} className="w-full px-4 py-3 text-gray-800 border border-rose-300 focus:outline-rose-500 rounded-md">
                        <option value="">Select</option>
                    <option value="United Healthcare">United Healthcare</option>
                    <option value="Vargina">Vargina</option>
                  </select>
                )}
              />
            </div>
            <div>
              <label>Service Name</label>
              <Controller
                name="payerAuthorization.serviceName"
                control={control}
                render={({ field }) => (
                  <select {...field} className="w-full px-4 py-3 text-gray-800 border border-rose-300 focus:outline-rose-500 rounded-md">
                        <option value="">Select</option>
                    <option value="Personal">Personal</option>
                    <option value="Despite">Despite</option>
                    <option value="Companion">Companion</option>
                  </select>
                )}
              />
            </div>
            <div>
              <label>Authorization No</label>
              <Controller
                name="payerAuthorization.authorizationNo"
                control={control}
                render={({ field }) => <input className="w-full px-4 py-3 text-gray-800 border border-rose-300 focus:outline-rose-500 rounded-md"  {...field} type="text" />}
              />
            </div>
            <div>
              <label>Limitation Value</label>
              <Controller
                name="payerAuthorization.limitationValue"
                control={control}
                render={({ field }) => <input className="w-full px-4 py-3 text-gray-800 border border-rose-300 focus:outline-rose-500 rounded-md" {...field} type="number" />}
              />
            </div>
            <div>
              <label>Limitation</label>
              <Controller
                name="payerAuthorization.limitation"
                control={control}
                render={({ field }) => (
                  <select {...field} className="w-full px-4 py-3 text-gray-800 border border-rose-300 focus:outline-rose-500 rounded-md">
                        <option value="">Select</option>
                    <option value="Per Day">Per Day</option>
                    <option value="Per Week">Per Week</option>
                    <option value="Per Month">Per Month</option>
                    <option value="Per Year">Per Year</option>
                  </select>
                )}
              />
            </div>
            <div>
              <label>Format</label>
              <Controller
                name="payerAuthorization.format"
                control={control}
                render={({ field }) => (
                 <select {...field} className="w-full px-4 py-3 text-gray-800 border border-rose-300 focus:outline-rose-500 rounded-md">
                        <option value="">Select</option>
                    <option value="Hourly">Hourly</option>
                    <option value="Unit">Unit</option>
                    <option value="Visit">Visit</option>
                  </select>
                )}
              />
            </div>
            <div>
              <label>Admission Id</label>
              <Controller
                name="payerAuthorization.admissionId"
                control={control}
                render={({ field }) => <input className="w-full px-4 py-3 text-gray-800 border border-rose-300 focus:outline-rose-500 rounded-md" {...field} type="text" />}
              />
            </div>
            <div>
              <label>Member Id</label>
              <Controller
                name="payerAuthorization.memberId"
                control={control}
                render={({ field }) => <input className="w-full px-4 py-3 text-gray-800 border border-rose-300 focus:outline-rose-500 rounded-md" {...field} type="text" />}
              />
            </div>
            <div>
              <label>Authorization Start Date</label>
              <Controller
                name="payerAuthorization.authorizationStartDate"
                control={control}
                render={({ field }) => <input className="w-full px-4 py-3 text-gray-800 border border-rose-300 focus:outline-rose-500 rounded-md" {...field} type="date" />}
              />
            </div>
            <div>
              <label>Authorization End Date</label>
              <Controller
                name="payerAuthorization.authorizationEndDate"
                control={control}
                render={({ field }) => <input className="w-full px-4 py-3 text-gray-800 border border-rose-300 focus:outline-rose-500 rounded-md" {...field} type="date" />}
              />
            </div>
            <div>
              <label>Comment</label>
              <Controller
                name="payerAuthorization.comment"
                control={control}
                render={({ field }) => <input className="w-full px-4 py-3 text-gray-800 border border-rose-300 focus:outline-rose-500 rounded-md" {...field} type="text" />}
              />
            </div>
            <div>
              <label>Show In List</label>
              <Controller
                name="payerAuthorization.showInList"
                control={control}
                render={({ field }) => (
                  <div>
                    <label>
                      Yes
                      <input className="mr-2" {...field} type="radio" value="Yes" />
                    </label>
                    <label>
                      No
                      <input className="mr-2" {...field} type="radio" value="No" />
                    </label>
                  </div>
                )}
              />
            </div>
          </div>
        )}
      </div>

      <div className='p-2 mr-2'>
        <label>
         
          <input className='mr-2'
            type="checkbox"
            checked={showAddNote}
            onChange={() => setShowAddNote(!showAddNote)}
                        />
                         Add Note
        </label>
        {showAddNote && (
          <div>
            <div>
              <label>Staff Id</label>
              <Controller
                name="addNote.staffId"
                control={control}
                render={({ field }) => (
                  <select {...field} className="w-full px-4 py-3 text-gray-800 border border-rose-300 focus:outline-rose-500 rounded-md">
                        <option value="">Select</option>
                    
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                  </select>
                )}
              />
            </div>
            <div>
              <label>Staff Name</label>
              <Controller
                name="addNote.staffName"
                control={control}
                render={({ field }) => (
                  <select {...field} className="w-full px-4 py-3 text-gray-800 border border-rose-300 focus:outline-rose-500 rounded-md">
                        <option value="">Select</option>
                    <option value="Shamim">Shamim</option>
                    <option value="Rahim">Rahim</option>
                    <option value="Nilima">Nilima</option>
                  </select>
                )}
              />
            </div>
            <div>
              <label>Note</label>
              <Controller
                name="addNote.note"
                control={control}
                render={({ field }) => <textarea className="w-full px-4 py-3 text-gray-800 border border-rose-300 focus:outline-rose-500 rounded-md" {...field} />}
              />
            </div>
          </div>
        )}
      </div>

      <div className='p-2 mr-2'>
        <label>
          
          <input className='mr-2'
            type="checkbox"
            checked={showPrivatePayServiceRate}
            onChange={() => setShowPrivatePayServiceRate(!showPrivatePayServiceRate)}
                        />
                        Private Pay Service Rate
        </label>
        {showPrivatePayServiceRate && (
          <div>
            <div>
              <label>Service Name</label>
              <Controller
                name="privatePayServiceRate.serviceName"
                control={control}
                render={({ field }) => (
                 <select {...field} className="w-full px-4 py-3 text-gray-800 border border-rose-300 focus:outline-rose-500 rounded-md">
                        <option value="">Select</option>
                    <option value="Personal">Personal</option>
                    <option value="Despite">Despite</option>
                    <option value="Companion">Companion</option>
                  </select>
                )}
              />
            </div>
            <div>
              <label>Rate</label>
              <Controller
                name="privatePayServiceRate.rate"
                control={control}
                render={({ field }) => <input className="w-full px-4 py-3 text-gray-800 border border-rose-300 focus:outline-rose-500 rounded-md" {...field} type="number" />}
              />
            </div>
            <div>
              <label>Start Date</label>
              <Controller
                name="privatePayServiceRate.startDate"
                control={control}
                render={({ field }) => <input className="w-full px-4 py-3 text-gray-800 border border-rose-300 focus:outline-rose-500 rounded-md" {...field} type="date" />}
              />
            </div>
            <div>
              <label>End Date</label>
              <Controller
                name="privatePayServiceRate.endDate"
                control={control}
                render={({ field }) => <input className="w-full px-4 py-3 text-gray-800 border border-rose-300 focus:outline-rose-500 rounded-md" {...field} type="date" />}
              />
            </div>
            <div>
              <label>Service Type</label>
              <Controller
                name="privatePayServiceRate.serviceType"
                control={control}
                render={({ field }) => (
                 <select {...field} className="w-full px-4 py-3 text-gray-800 border border-rose-300 focus:outline-rose-500 rounded-md">
                        <option value="">Select</option>
                    <option value="Hourly">Hourly</option>
                    <option value="Unit">Unit</option>
                    <option value="Visit">Visit</option>
                  </select>
                )}
              />
            </div>
            <div>
              <label>Code</label>
              <Controller
                name="privatePayServiceRate.code"
                control={control}
                render={({ field }) => <input className="w-full px-4 py-3 text-gray-800 border border-rose-300 focus:outline-rose-500 rounded-md" {...field} type="number" />}
              />
            </div>
          </div>
        )}
      </div>

      <div className='p-2 mr-2'>
        <label>
          
          <input className='p-2 mr-2'
            type="checkbox"
            checked={showAddExclusion}
            onChange={() => setShowAddExclusion(!showAddExclusion)}
                        />
                        Add Exclusion (Did Not Like)
        </label>
        {showAddExclusion && (
          <div>
            <div>
              <label>Staff Id</label>
              <Controller
                name="addExclusion.staffId"
                control={control}
                render={({ field }) => (
                 <select {...field} className="w-full px-4 py-3 text-gray-800 border border-rose-300 focus:outline-rose-500 rounded-md">
                        <option value="">Select</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                  </select>
                )}
              />
            </div>
            <div>
              <label>Staff Name</label>
              <Controller
                name="addExclusion.staffName"
                control={control}
                render={({ field }) => (
                 <select {...field} className="w-full px-4 py-3 text-gray-800 border border-rose-300 focus:outline-rose-500 rounded-md">
                        <option value="">Select</option>
                    <option value="Shamim">Shamim</option>
                    <option value="Rahim">Rahim</option>
                    <option value="Nilima">Nilima</option>
                  </select>
                )}
              />
            </div>
          </div>
        )}
      </div>

      <div className='p-2 mr-2'>
        <label>
          Plan of care
          <input className="w-full px-4 py-3 text-gray-800 border border-rose-300 focus:outline-rose-500 rounded-md" name="planOfCare" type="file" />
        </label>
                </div>

                 <div className='p-2 mr-2'>
        <label>Activities</label>
        {activityOptions.map((activity) => (
          <div key={activity}>
            <label>
              <Controller
                name={`activities[${activity}]`}
                control={control}
                defaultValue={true} // Checkbox is checked by default
                render={({ field }) => (
                  <input type="checkbox" className='mr-2' {...field} defaultChecked/>
                )}
              />
              {activity}
            </label>
          </div>
        ))}
      </div>
                

                <button
          type='submit'
          className='w-full p-3 mt-5 text-center font-medium text-white transition duration-200 rounded shadow-md bg-[#085885]'
        >
          {loading ? (
            <TbFidgetSpinner className='m-auto animate-spin' size={24} />
          ) : (
            'Add Client'
          )}
        </button>
    </form>
        </div>
    );
};

export default AddClient;