import React from 'react';
import { Dialog, Transition } from '@headlessui/react'
import { Fragment } from 'react'
import { useState } from 'react';
import { toast } from 'react-hot-toast';

const ClientNote = ({ isOpen, setIsEditModalOpen, refetch, allClient }) => {

    
    const trueService = Object.keys(allClient?.placeOfService).filter(key => (allClient?.placeOfService)[key])

  const matchHour = Object.keys(allClient?.matchHours).filter(key => (allClient?.matchHours)[key])
  const activitie = Object.keys(allClient?.activities).filter(key => (allClient?.activities)[key])

    
    return (
        <div className='z-20 relative'>
             <Transition appear show={isOpen} as={Fragment}>
      <Dialog
        as='div'
        className='relative z-10'
        onClose={() => setIsEditModalOpen(false)}
      >
        <Transition.Child
          as={Fragment}
          enter='ease-out duration-300'
          enterFrom='opacity-0'
          enterTo='opacity-100'
          leave='ease-in duration-200'
          leaveFrom='opacity-100'
          leaveTo='opacity-0'
        >
          <div className='fixed inset-0 bg-black bg-opacity-25' />
        </Transition.Child>

        <div className='fixed inset-0 overflow-y-auto'>
          <div className='flex min-h-full items-center justify-center p-4 text-center'>
            <Transition.Child
              as={Fragment}
              enter='ease-out duration-300'
              enterFrom='opacity-0 scale-95'
              enterTo='opacity-100 scale-100'
              leave='ease-in duration-200'
              leaveFrom='opacity-100 scale-100'
              leaveTo='opacity-0 scale-95'
            >
              <Dialog.Panel className='w-full max-w-3xl transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all'>
                <Dialog.Title
                  as='h3'
                  className='text-lg font-medium text-center leading-6 text-gray-900 '
                                    >
                                         
                                            <div className="py-2 justify-between flex gap-5">
                                                <div className='text-left'>First Name: </div>
                                                <div>{allClient?.firstName || 'not added'}</div>
                                        </div>
                                         <div className="py-2 justify-between flex gap-5">
                                                <div className='text-left'>Middle Name: </div>
                                                <div>{allClient?.middleName || 'not added'}</div>
                                            </div>
                                             <div className="py-2 justify-between flex gap-5">
                                                <div className='text-left'>Last Name: </div>
                                                <div>{allClient?.lastName || 'not added'}</div>
                                            </div>
                                             <div className="py-2 justify-between flex gap-5">
                                                <div className='text-left'>Phone: </div>
                                                <div>{allClient?.phoneCell || 'not added'}</div>
                                            </div>
                                             <div className="py-2 justify-between flex gap-5">
                                                <div className='text-left'>First Name: </div>
                                                <div>{allClient?.email || 'not added'}</div>
                                            </div>
                                             <div className="py-2 justify-between flex gap-5">
                                                <div className='text-left'>First Name: </div>
                                                <div>{allClient?.program || 'not added'}</div>
                      </div>
                      
                         <div className="py-2 justify-between ">
                                            <div className='flex gap-3'>Place Of Service: {trueService.map(
                                              (pair, index) => (<div className='flex gap-2 justify-between'>
                                                <div className="flex gap-2 justify-between">{pair}
                                                     {index !== trueService.length - 1 && <span>,</span>}</div></div>)
                                                    
                                            )}</div>
                                            <div>
                                            </div>
                      </div>
                      

                                         <div className="py-2 justify-between ">
                                            <div className='mb-2 '>Diagnosis Code:</div>
                                            <div className="grid grid-cols-3 ">
                                                {allClient?.diagnosisCode.map(
                                            (pair, index) => (<div className='flex gap-2'><div className="">Diagnosis {index + 1} : {pair}</div></div>)
                                            )}
                                            </div>
                                            <div>
                                            </div>
                                        </div>

                                                                               
                                           




                                           <div className="py-2 justify-between flex gap-5">
                                                <div className='text-left'>Copay Amount: </div>
                                                <div>{allClient?.copayAmount || 'not added'}</div>
                                        </div>

                                           <div className="py-2 justify-between flex gap-5">
                                                <div className='text-left'>Inquiry Date: </div>
                                                <div>{allClient?.inquiryDate || 'not added'}</div>
                                        </div>

                                           <div className="py-2 justify-between flex gap-5">
                                                <div className='text-left'>Assessment Date: </div>
                                                <div>{allClient?.assessmentDate || 'not added'}</div>
                                        </div>

                                           <div className="py-2 justify-between flex gap-5">
                                                <div className='text-left'>Start Of Care: </div>
                                                <div>{allClient?.startOfCare || 'not added'}</div>
                                        </div>
                                          <div className="py-2 justify-between flex gap-5">
                                                <div className='text-left'>Gender: </div>
                                                <div>{allClient?.gender || 'not added'}</div>
                                        </div>
                                         <div className="py-2 justify-between flex gap-5">
                                                <div className='text-left'>Client Location Access: </div>
                                                <div>{allClient?.clientLocationAccess || 'not added'}</div>
                                        </div>
                                         <div className="py-2 justify-between flex gap-5">
                                                <div className='text-left'>SSN: </div>
                                                <div>{allClient?.ssn || 'not added'}</div>
                                        </div>
                                        <div className="py-2 justify-between flex gap-5">
                                                <div className='text-left'>Client Google Address: </div>
                                                <div>{allClient?.clientGoogleAddress || 'not added'}</div>
                                        </div>
                                        <div className="py-2 justify-between flex gap-5">
                                                <div className='text-left'>Status: </div>
                                                <div>{allClient?.status || 'not added'}</div>
                                        </div>
                                        <div className="py-2 justify-between flex gap-5">
                                                <div className='text-left'>Marital Status: </div>
                                                <div>{allClient?.maritalStatus || 'not added'}</div>
                                        </div>
                                        <div className="py-2 justify-between flex gap-5">
                                                <div className='text-left'>Physician Name: </div>
                                                <div>{allClient?.physicianName || 'not added'}</div>
                                        </div>
                                        <div className="py-2 justify-between flex gap-5">
                                                <div className='text-left'>Physician NPI: </div>
                                                <div>{allClient?.physicianNPI || 'not added'}</div>
                                        </div>
                                        
                                             <div className="py-2 justify-between ">
                                            <div className='mb-5'>Place Of Service:</div>
                                            <div className="grid grid-rows-1  justify-items-center">
                                                <div className="flex gap-2">
                                                {matchHour.length > 0 ? matchHour.map(
                                                    (pair, index) => (<div className='flex gap-2'><div className="">{pair}
                                                     {index !== matchHour.length - 1 && <span>,</span>}</div></div>)
                                                    
                                            ) : 'not added'}
                                            </div>
                                               
                                            </div>
                                            <div>
                                            </div>
                                        </div>
 
                       
                      
                      <div className="py-2 justify-between">
                        <h3>Payer Authorization: </h3>
                          <div className="py-2 justify-between flex  gap-5">
                                                <div className='text-left'>Payer Name: </div>
                                              <div className="flex gap-2">
                          <div>{allClient?.payerAuthorization.payerName}</div>
                                            </div>
                      </div>
                        <div className="py-2 justify-between flex  gap-5">
                                                <div className='text-left'>Service Name: </div>
                                              <div className="flex gap-2">
                          <div>{allClient?.payerAuthorization.serviceName}</div>
                                            </div>
                      </div>
                      <div className="py-2 justify-between flex  gap-5">
                                                <div className='text-left'>Authorization No: </div>
                                              <div className="flex gap-2">
                          <div>{allClient?.payerAuthorization.authorizationNo}</div>
                                            </div>
                      </div>
                      <div className="py-2 justify-between flex  gap-5">
                                                <div className='text-left'>Limitation Value: </div>
                                              <div className="flex gap-2">
                          <div>{allClient?.payerAuthorization.limitationValue}</div>
                                            </div>
                      </div>
                      <div className="py-2 justify-between flex  gap-5">
                                                <div className='text-left'>Limitation: </div>
                                              <div className="flex gap-2">
                          <div>{allClient?.payerAuthorization.limitation}</div>
                                            </div>
                      </div>
                      <div className="py-2 justify-between flex  gap-5">
                                                <div className='text-left'>Format: </div>
                                              <div className="flex gap-2">
                          <div>{allClient?.payerAuthorization.format}</div>
                                            </div>
                      </div>
                      <div className="py-2 justify-between flex  gap-5">
                                                <div className='text-left'>Admission Id: </div>
                                              <div className="flex gap-2">
                          <div>{allClient?.payerAuthorization.admissionId}</div>
                                            </div>
                      </div>
                       <div className="py-2 justify-between flex  gap-5">
                                                <div className='text-left'>Member Id: </div>
                                              <div className="flex gap-2">
                          <div>{allClient?.payerAuthorization.memberId}</div>
                                            </div>
                      </div>
                       <div className="py-2 justify-between flex  gap-5">
                                                <div className='text-left'>Start Date: </div>
                                              <div className="flex gap-2">
                          <div>{allClient?.payerAuthorization.authorizationStartDate}</div>
                                            </div>
                      </div>
                       <div className="py-2 justify-between flex  gap-5">
                                                <div className='text-left'>End Date: </div>
                                              <div className="flex gap-2">
                          <div>{allClient?.payerAuthorization.authorizationEndDate}</div>
                                            </div>
                      </div>
                       <div className="py-2 justify-between flex  gap-5">
                                                <div className='text-left'>Comment: </div>
                                              <div className="flex gap-2">
                          <div>{allClient?.payerAuthorization.comment}</div>
                                            </div>
                      </div>
                      </div>
                      
                      {allClient?.contact > 0 && <div className="grid grid-cols-2">
                        <h3>Contact Info</h3>
                          <div className="py-2 justify-between flex  gap-5">
                                                <div className='text-left'>Contact Name: </div>
                                              <div className="flex gap-2">
                          <div>{allClient?.contact.contactName}</div>
                                            </div>
                      </div>
<div className="py-2 justify-between flex  gap-5">
                                                <div className='text-left'>Contact Relationship: </div>
                                              <div className="flex gap-2">
                          <div>{allClient?.contact.relationship}</div>
                                            </div>
                        </div>
                        <div className="py-2 justify-between flex  gap-5">
                                                <div className='text-left'>Phone: </div>
                                              <div className="flex gap-2">
                          <div>{allClient?.contact.phone}</div>
                                            </div>
                        </div>
                        <div className="py-2 justify-between flex  gap-5">
                                                <div className='text-left'>Contact Name: </div>
                                              <div className="flex gap-2">
                          <div>{allClient?.contact.contactName}</div>
                                            </div>
                      </div>
                      </div>}
                      
                      {allClient?.addNote > 0 &&  <div className="grid grid-cols-2">
                        <h3>Notes</h3>
                          <div className="py-2 justify-between flex  gap-5">
                                                <div className='text-left'>Staff Id: </div>
                                              <div className="flex gap-2">
                          <div>{allClient?.addNote.staffId}</div>
                                            </div>
                      </div>
<div className="py-2 justify-between flex  gap-5">
                                                <div className='text-left'>Staff Note: </div>
                                              <div className="flex gap-2">
                          <div>{allClient?.addNote.staffName}</div>
                                            </div>
                        </div>
                        <div className="py-2 justify-between flex  gap-5">
                                                <div className='text-left'>Note: </div>
                                              <div className="flex gap-2">
                          <div>{allClient?.addNote.note}</div>
                                            </div>
                        </div>
                      </div>}
                      
                      {allClient?.privatePayServiceRate > 0 &&  <div className="grid grid-cols-2">
                        <h3>Private Pay Service Rate</h3>
                          <div className="py-2 justify-between flex  gap-5">
                                                <div className='text-left'>Service Name: </div>
                                              <div className="flex gap-2">
                          <div>{allClient?.privatePayServiceRate.serviceName}</div>
                                            </div>
                      </div>
<div className="py-2 justify-between flex  gap-5">
                                                <div className='text-left'>Rate: </div>
                                              <div className="flex gap-2">
                          <div>{allClient?.privatePayServiceRate.rate}</div>
                                            </div>
                        </div>
                        <div className="py-2 justify-between flex  gap-5">
                                                <div className='text-left'>StartDate: </div>
                                              <div className="flex gap-2">
                          <div>{allClient?.privatePayServiceRate.startDate}</div>
                                            </div>
                        </div>

                          <div className="py-2 justify-between flex  gap-5">
                                                <div className='text-left'>End Date: </div>
                                              <div className="flex gap-2">
                          <div>{allClient?.privatePayServiceRate.endDate}</div>
                                            </div>
                        </div>
                          <div className="py-5 flex  gap-5">
                                                <div className='text-left'>Service Type </div>
                                              <div className="flex gap-2">
                          <div>{allClient?.privatePayServiceRate.serviceType}</div>
                                            </div>
                        </div>
                          <div className="py-5 flex  gap-5">
                                                <div className='text-left'>Code: </div>
                                              <div className="flex gap-2">
                          <div>{allClient?.privatePayServiceRate.code}</div>
                                            </div>
                        </div>
                        
                      </div>}
                      
                      {allClient?.addExclusion > 0 &&  <div className="grid grid-cols-2">
                        <h3>Exclusion</h3>
                          <div className="py-5 flex  gap-5">
                                                <div className='text-left'>Staff Id </div>
                                              <div className="flex gap-2">
                          <div>{allClient?.addExclusion.staffId}</div>
                                            </div>
                      </div>
<div className="py-5 flex  gap-5">
                                                <div className='text-left'>Staff Name: </div>
                                              <div className="flex gap-2">
                          <div>{allClient?.addExclusion.staffName}</div>
                                            </div>
                        </div>
                        <div className="py-5 flex  gap-5">
                                                <div className='text-left'>StartDate: </div>
                                              <div className="flex gap-2">
                          <div>{allClient?.addExclusion.startDate}</div>
                                            </div>
                        </div>

                          <div className="py-5 flex  gap-5">
                                                <div className='text-left'>End Date: </div>
                                              <div className="flex gap-2">
                          <div>{allClient?.addExclusion.endDate}</div>
                                            </div>
                        </div>
                          <div className="py-5 flex  gap-5">
                                                <div className='text-left'>Service Type </div>
                                              <div className="flex gap-2">
                          <div>{allClient?.addExclusion.serviceType}</div>
                                            </div>
                        </div>
                          <div className="py-5 flex  gap-5">
                                                <div className='text-left'>Code: </div>
                                              <div className="flex gap-2">
                          <div>{allClient?.addExclusion.code}</div>
                                            </div>
                        </div>
                        
                      </div>}
                      

                     
                      
                        <div className="py-2  ">
                                            <div className='mb-5 '>Activities:
                                                {activitie.length > 0 ? activitie.map(
                                                    (pair, index) => (<div className="flex">{pair}
                                                    </div>)
                                                    
                                            ) : 'not added'}
                                              </div>
                                            <div>
                                            </div>
                                        </div>
                     

                                        
                                </Dialog.Title>
                                <div className='mt-2 flex mt-2 justify-around'>
                                     <button
                    type='submit'
                    className='disable:bg-text-600 inline-flex justify-center rounded-md border border-transparent bg-red-100 px-4 py-2 text-sm font-medium text-red-900 hover:bg-red-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-red-500 focus-visible:ring-offset-2'
                    onClick={() => setIsEditModalOpen(false)} 
                  >
                    Close
                  </button>
</div>

              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
        </div>
    );
};

export default ClientNote;