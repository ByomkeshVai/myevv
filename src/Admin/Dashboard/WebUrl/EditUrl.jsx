import React, { useReducer } from 'react';
import { Dialog, Transition } from '@headlessui/react'
import { Fragment } from 'react'
import { useState } from 'react';
import { toast } from 'react-hot-toast';
import { UpdateUrl } from '../../../api/url';

const EditUrl = ({ isOpen, setIsEditOpen, refetch, id, allUrl }) => {

const [loading, setLoading] = useState(false)

    const handleSubmit = (e) => {
        e.preventDefault();

        const form = e.target;
        const webName = form.webName.value;
        const webUrl = form.webUrl.value;
        const contactName = form.contactName.value;
        const contactNumber = form.contactNumber.value;
        const webAccID = form.webAccID.value;
        const webAccPin = form.webAccPin.value;
        const webUserName = form.webUserName.value;
        const webUserPass = form.webUserPass.value;
        const note = form.note.value;
            const updateUrl = {
            webName,
            webUrl,
            contactName,
                contactNumber,
                webAccID,
                webAccPin,
                webUserName,
                webUserPass,
                note,
        }

        UpdateUrl(id, updateUrl)
        .then(data => {
            setLoading(false)
            toast.success('Web Url Updated!')
            refetch()
            setIsEditOpen(false)
          })
          .catch(err => console.log(err))
          setLoading(false)

    }

    console.log(allUrl);

    
    return (
        <Transition appear show={isOpen} as={Fragment}>
      <Dialog
        as='div'
        className='relative z-10'
        onClose={() => setIsEditOpen(false)}
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
              <Dialog.Panel className='w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all'>
                <Dialog.Title
                  as='h3'
                  className='text-lg font-medium text-center leading-6 mb-5 text-gray-900'
                >
                  Update Web Url Status
                                </Dialog.Title>
                                
                                <form onSubmit={handleSubmit}>
                                     <div className=''>
                                   <div className='mx-auto  w-full'>
            
          <div className='space-y-6 mb-5'>
            <div className='space-y-1 text-sm'>

              <input
                className='w-full px-4 py-3 text-gray-800 border border-rose-300 focus:outline-rose-500 rounded-md '
                name='webName'
                id='webName'
                                                        type='text'
                                                        defaultValue={allUrl?.webName}
                                placeholder='Web Name (required)'
                               
                required
              />
                        </div>
            </div>

    <div className='space-y-6 mb-5'>
            <div className='space-y-1 text-sm'>

              <input
                className='w-full px-4 py-3 text-gray-800 border border-rose-300 focus:outline-rose-500 rounded-md '
                name='webUrl'
                id='webUrl'
                type='text'
                                placeholder='Web URL- Web Address (required)' defaultValue={allUrl?.webUrl}
                                
                required
              />
                        </div>
            </div>
                    
                     <div className='space-y-6 mb-5'>
            <div className='space-y-1 text-sm'>

              <input
                className='w-full px-4 py-3 text-gray-800 border border-rose-300 focus:outline-rose-500 rounded-md '
                name='contactName'
                id='contactName'
                type='text'
                                placeholder='Contact Name (required)' defaultValue={allUrl?.contactName}
                                
                required
              />
                        </div>
                    </div>
                    
                <div className='space-y-6 mb-5'>
            <div className='space-y-1 text-sm'>

              <input
                className='w-full px-4 py-3 text-gray-800 border border-rose-300 focus:outline-rose-500 rounded-md '
                name='contactNumber'
                id='contactNumber'
                type='text'
                                placeholder='Contact Number (required)' defaultValue={allUrl?.contactNumber}
                                
                required
              />
                        </div>
            </div>

 <div className='space-y-6 mb-5'>
            <div className='space-y-1 text-sm'>

              <input
                className='w-full px-4 py-3 text-gray-800 border border-rose-300 focus:outline-rose-500 rounded-md '
                name='webAccID'
                id='webAccID'
                type='number'
                                placeholder='Web Account Number/ID' defaultValue={allUrl?.webAccID}
                                
              />
                        </div>
            </div>

 <div className='space-y-6 mb-5'>
            <div className='space-y-1 text-sm'>

              <input
                className='w-full px-4 py-3 text-gray-800 border border-rose-300 focus:outline-rose-500 rounded-md '
                name='webAccPin'
                id='webAccPin'
                type='number'
                                placeholder='Web Account Pin' defaultValue={allUrl?.webAccPin}
                                
              />
                        </div>
                    </div>
                    
                     <div className='space-y-6 mb-5'>
            <div className='space-y-1 text-sm'>

              <input
                className='w-full px-4 py-3 text-gray-800 border border-rose-300 focus:outline-rose-500 rounded-md '
                name='webUserName'
                id='webUserName'
                type='text'
                                placeholder='Web Account Username' defaultValue={allUrl?.webUserName}
                                 
              />
                        </div>
                    </div>
                    
            <div className='space-y-6 mb-5'>
            <div className='space-y-1 text-sm'>

              <input
                className='w-full px-4 py-3 text-gray-800 border border-rose-300 focus:outline-rose-500 rounded-md '
                name='webUserPass'
                id='webUserPass'
                type='text'
                                placeholder='Web Account Password' defaultValue={allUrl?.webUserPass}
                                 
              />
                        </div>
                    </div>
                    
                    <div className='space-y-6 mb-5'>
            <div className='space-y-1 text-sm'>

              <input
                className='w-full px-4 py-3 text-gray-800 border border-rose-300 focus:outline-rose-500 rounded-md '
                name='note'
                id='note'
                type='text'
                                placeholder='Note for this record' defaultValue={allUrl?.note}
                                
              />
                        </div>
                                            </div>
                                             <div className='mt-2 flex mt-2 justify-around'>
                  <button
                    type='submit'
                    className='disable:bg-text-600 inline-flex justify-center rounded-md border border-transparent bg-green-100 px-4 py-2 text-sm font-medium text-green-900 hover:bg-green-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-green-500 focus-visible:ring-offset-2' 
                     
                  >
                    {loading ? (
            <TbFidgetSpinner className='m-auto animate-spin' size={24} />
          ) : (
            'Update'
          )}
                                    </button>
                                     <button
                    type='submit'
                    className='disable:bg-text-600 inline-flex justify-center rounded-md border border-transparent bg-red-100 px-4 py-2 text-sm font-medium text-red-900 hover:bg-red-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-red-500 focus-visible:ring-offset-2'
                    onClick={() => setIsEditOpen(false)} 
                  >
                    Close
                  </button>
                </div>
          </div>
                </div>
                                </form>
                                

              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
    );
};

export default EditUrl;