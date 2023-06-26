import React, { useState } from 'react';
import useAxiosSecure from '../../../hooks/useAxiosSecure';
import { useQuery } from '@tanstack/react-query';
import EmptyState from '../../../Shared/EmptyState';
import Table, { Row } from '../../../resuble/Table';
import { GrNotes } from 'react-icons/Gr';
import { FaEye } from 'react-icons/Fa';

import { BiEdit } from 'react-icons/Bi';
import { MdDelete } from 'react-icons/Md';
import { toast } from 'react-hot-toast';
import { deleteClient } from '../../../api/client';
import UrlNote from '../WebUrl/UrlNote';
import ClientNote from './ClientNote';
import DeleteModal from '../../../Modal/DeleteModal';

const AllClient = () => {
    const [axiosSecure] = useAxiosSecure()
        let [isOpen, setIsOpen] = useState(false)
    let [isEditModalOpen, setIsEditModalOpen] = useState(false)
    let [isEditOpen, setIsEditOpen] = useState(false)
function openModal() {
    setIsOpen(true)
  }
  function closeModal() {
    setIsOpen(false)
    }

    
    const {data: allClient = [], refetch } = useQuery({
        queryKey: ['allClient'],
        queryFn: async () => {
            const res = await axiosSecure(
                '/client'
            )
            return res.data
        }
    })
  
  const modalHandler = id => {
        deleteClient(id)
            .then(data => {
                toast.success('Client deleted')
                refetch()
            })
    }

        const cols = [
        
    { label: "Client Name", value: "Client Name" },
    { label: "Phone", value: "Phone" },
        { label: "Address", value: "Address" },
        { label: "Date of Birth", value: "Date of Birth" },
        { label: "Start Date", value: "Start Date" },
            { label: "End Date", value: "End Date" },
        { label: "Status", value: "Status" },
        { label: "Action", value: "Action" },
  ];
    
    return (
         allClient && Array.isArray(allClient) && allClient.length > 0 ? (
            <div>
      <Table cols={cols}>
        {allClient.map((allClient, index) => (
            <Row key={index}>
                 <td className="py-3 px-6 text-left ">
              <div className="flex items-center ">
                <span className="font-medium">{allClient?.firstName}</span>
              </div>
                </td>
                  <td className="py-3 px-6 text-left ">
              <div className="flex items-center ">
                <span className="font-medium">{allClient?.phoneCell}</span>
              </div>
            </td>
            <td className="py-3 px-6 text-left ">
              <div className="flex items-center ">
                <span className="font-medium">{allClient?.street}, {allClient?.aptUnitSuite}, {allClient?.city}, {allClient?.state}</span>
              </div>
                </td>
                 <td className="py-3 px-6 text-left ">
              <div className="flex items-center ">
                <span className="font-medium">{allClient?.dateOfBirth}</span>
              </div>
            </td>
            <td className="py-3 px-6 text-left ">
              <div className="flex items-center ">
                <span className="font-medium">{allClient?.startOfCare}</span>
              </div>
            </td>
            <td className="py-3 px-6 text-left ">
              <div className="flex items-center ">
                <span className="font-medium">{allClient?.endDate}</span>
              </div>
                </td>
                  <td className="py-3 px-6 text-left ">
              <div className="flex items-center ">
                <span className="font-medium">{allClient?.status}</span>
              </div>
            </td>
                <td className="py-3 px-6 text-left ">
                    hello
              <div className="flex items-center gap-3">
                        <span className="font-medium"> <button onClick={()=> setIsEditModalOpen(true)}><FaEye size={18} /></button>
                         <ClientNote
                            isOpen={isEditModalOpen}
                            closeModal={() => setIsEditModalOpen(false)}
                            allClient={allClient}
                            refetch={refetch}
                            setIsEditModalOpen={setIsEditModalOpen}    
                        />
                        </span>
                        {/* <span className="font-medium"> <button onClick={()=> setIsEditOpen(true)}><BiEdit size={18} /></button>
                         <EditUrl
                            isOpen={isEditOpen}
                            closeModal={() => setIsEditOpen(false)}
                            allUrl={allUrl}
                            id={allUrl?._id}
                            refetch={refetch}
                            setIsEditOpen={setIsEditOpen} 
                        />
                        </span> */}
                        <span className="font-medium"> <button onClick={openModal}><MdDelete size={21} /></button>
                            <DeleteModal closeModal={closeModal}
                                isOpen={isOpen}
                                id={allClient?._id}
                                modalHandler={modalHandler}
                            />
                        </span>
              </div>
            </td>
          </Row>
        ))}
      </Table>
    </div>
        ) : (  <EmptyState
          message='No Client data available.'
        />
        )
    );
};

export default AllClient;