import React, { useEffect, useState } from 'react';
import Table, { Row } from '../../../resuble/Table';
import EmptyState from './../../../Shared/EmptyState';
import { GrNotes } from 'react-icons/Gr';
import { BiEdit } from 'react-icons/Bi';
import { MdDelete } from 'react-icons/Md';
import DeleteModal from './../../../Modal/DeleteModal';
import { deleteUrl } from '../../../api/url';
import { toast } from 'react-hot-toast';
import useAxiosSecure from '../../../hooks/useAxiosSecure';
import { useQuery } from '@tanstack/react-query';
import UrlNote from './UrlNote';
import EditUrl from './EditUrl';

const AllUrl = () => {

    let [isOpen, setIsOpen] = useState(false)
    let [isEditModalOpen, setIsEditModalOpen] = useState(false)
    let [isEditOpen, setIsEditOpen] = useState(false)
function openModal() {
    setIsOpen(true)
  }
  function closeModal() {
    setIsOpen(false)
    }


    const [axiosSecure] = useAxiosSecure()

    const { data: allUrl = [], refetch } = useQuery({
        queryKey: ['allUrl'],
        queryFn: async () => {
            const res = await axiosSecure(
                '/web-url'
            )
            return res.data
        }
    })

    
    const modalHandler = id => {
        deleteUrl(id)
            .then(data => {
                toast.success('Url deleted')
                refetch()
            })
    }
    
    const cols = [
        
    { label: "URL Name", value: "URL Name" },
    { label: "Contact Number", value: "Contact Number" },
    { label: "Contact Name", value: "Contact Name" },
        { label: "Acc Number", value: "Acc Number" },
        { label: "Acc Pin", value: "Acc Pin" },
        { label: "Acc Username", value: "Acc Username" },
        { label: "Acc Password", value: "Acc Password" },
        { label: "Action", value: "Action" },
  ];
    
    
    
    
    return (
        allUrl && Array.isArray(allUrl) && allUrl.length > 0 ? (
            <div>
      <h1 className="font-bold text-xl text-center">
        Total Web Url: {allUrl.length}
      </h1>
      <Table cols={cols}>
        {allUrl.map((allUrl, index) => (
            <Row key={index}>
                 <td className="py-3 px-6 text-left ">
              <div className="flex items-center ">
                <span className="font-medium">{allUrl?.webName}</span>
              </div>
                </td>
                  <td className="py-3 px-6 text-left ">
              <div className="flex items-center ">
                <span className="font-medium">{allUrl?.contactNumber}</span>
              </div>
            </td>
            <td className="py-3 px-6 text-left ">
              <div className="flex items-center ">
                <span className="font-medium">{allUrl?.contactName}</span>
              </div>
                </td>
                 <td className="py-3 px-6 text-left ">
              <div className="flex items-center ">
                <span className="font-medium">{allUrl?.webAccID}</span>
              </div>
            </td>
            <td className="py-3 px-6 text-left ">
              <div className="flex items-center ">
                <span className="font-medium">{allUrl?.webAccPin}</span>
              </div>
            </td>
            <td className="py-3 px-6 text-left ">
              <div className="flex items-center ">
                <span className="font-medium">{allUrl?.webUserName}</span>
              </div>
                </td>
                  <td className="py-3 px-6 text-left ">
              <div className="flex items-center ">
                <span className="font-medium">{allUrl?.webUserPass}</span>
              </div>
            </td>
            <td className="py-3 px-6 text-left ">
              <div className="flex items-center gap-3">
                        <span className="font-medium"> <button onClick={()=> setIsEditModalOpen(true)}><GrNotes size={18} /></button>
                         <UrlNote
                            isOpen={isEditModalOpen}
                            closeModal={() => setIsEditModalOpen(false)}
                            note={allUrl?.note}
                            refetch={refetch}
                            setIsEditModalOpen={setIsEditModalOpen}    
                        />
                        </span>
                        <span className="font-medium"> <button onClick={()=> setIsEditOpen(true)}><BiEdit size={18} /></button>
                         <EditUrl
                            isOpen={isEditOpen}
                            closeModal={() => setIsEditOpen(false)}
                            allUrl={allUrl}
                            id={allUrl?._id}
                            refetch={refetch}
                            setIsEditOpen={setIsEditOpen} 
                        />
                        </span>
                        <span className="font-medium"> <button onClick={openModal}><MdDelete size={21} /></button>
                            <DeleteModal closeModal={closeModal}
                                isOpen={isOpen}
                                id={allUrl?._id}
                                modalHandler={modalHandler}
                            />
                        </span>
              </div>
            </td>
          </Row>
        ))}
      </Table>
    </div>
        ) : (
        <EmptyState
          message='No Class data available.'
        />
        )
    );
};

export default AllUrl;