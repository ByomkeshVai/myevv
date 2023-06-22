import React, { useReducer, useState } from 'react';
import { TbFidgetSpinner } from 'react-icons/tb';
import { addUrl } from '../../../api/url';
import { toast } from 'react-hot-toast';

const AddUrl = () => {
    const [loading, setLoading] = useState(false)
    const initialState = {
        webName: "",
        webUrl: "",
        contactName: "",
        contactNumber: "",
        webAccID: "",
        webAccPin: "",
        webUserName: "",
        webUserPass: "",
        note: "",

    }

    const reducer = (state, action) => {
        switch (action.type) {
            case "INPUT":
                return {
                    ...state,
                    [action.payload.name] : action.payload.value
                }
            default: 
                return state
        }
    }

    const [state, dispatch] = useReducer(reducer, initialState)

    const handleSubmit = (e) => {
        e.preventDefault();
        addUrl(state)
        .then(data => {
            setLoading(false)
            toast.success('Url Added!')
            reset()
          })
          .catch(err => console.log(err))
          setLoading(false)

    }

    return (
       <div className='max-w-screen-xl mx-auto min-h-[calc(100vh-270px)] flex flex-col justify-center  text-gray-800 rounded-xl bg-gray-50'>
      <form onSubmit={handleSubmit}>
          <div className='mx-auto lg:w-3/6 w-full'>
            
          <div className='space-y-6 mb-5'>
            <div className='space-y-1 text-sm'>

              <input
                className='w-full px-4 py-3 text-gray-800 border border-rose-300 focus:outline-rose-500 rounded-md '
                name='webName'
                id='webName'
                type='text'
                                placeholder='Web Name (required)'
                                onBlur={(e) => dispatch({
                                    type: "INPUT",
                                    payload: {name: e.target.name, value: e.target.value},
                                })
                                }
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
                                placeholder='Web URL- Web Address (required)'
                                 onBlur={(e) => dispatch({
                                    type: "INPUT",
                                    payload: {name: e.target.name, value: e.target.value},
                                })
                                }
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
                                placeholder='Contact Name (required)'
                                 onBlur={(e) => dispatch({
                                    type: "INPUT",
                                    payload: {name: e.target.name, value: e.target.value},
                                })
                                }
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
                                placeholder='Contact Number (required)'
                                 onBlur={(e) => dispatch({
                                    type: "INPUT",
                                    payload: {name: e.target.name, value: e.target.value},
                                })
                                }
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
                                placeholder='Web Account Number/ID'
                                 onBlur={(e) => dispatch({
                                    type: "INPUT",
                                    payload: {name: e.target.name, value: e.target.value},
                                })
                                }
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
                                placeholder='Web Account Pin'
                                 onBlur={(e) => dispatch({
                                    type: "INPUT",
                                    payload: {name: e.target.name, value: e.target.value},
                                })
                                }
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
                                placeholder='Web Account Username'
                                 onBlur={(e) => dispatch({
                                    type: "INPUT",
                                    payload: {name: e.target.name, value: e.target.value},
                                })
                                }
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
                                placeholder='Web Account Password'
                                 onBlur={(e) => dispatch({
                                    type: "INPUT",
                                    payload: {name: e.target.name, value: e.target.value},
                                })
                                }
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
                                placeholder='Note for this record'
                                 onBlur={(e) => dispatch({
                                    type: "INPUT",
                                    payload: {name: e.target.name, value: e.target.value},
                                })
                                }
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
            'Add Web Url'
          )}
        </button>
          </div>
         
       
      </form>
    </div>
    );
};

export default AddUrl;