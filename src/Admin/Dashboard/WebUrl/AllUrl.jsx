import React, { useEffect, useState } from 'react';
import Table, { Row } from '../../../resuble/Table';
import EmptyState from './../../../Shared/EmptyState';
import { GrNotes } from 'react-icons/Gr';
import { BiEdit } from 'react-icons/Bi';
import { MdDelete } from 'react-icons/Md';

const AllUrl = () => {
    const [allUrl, setAllUrl] = useState([])
    
     useEffect(() => {
    fetch(`http://localhost:5000/web-url`)
      .then((res) => res.json())
      .then((data) => {
            setAllUrl(data);
      });
     }, []);
    
    
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
                <span className="font-medium">{allUrl.webName}</span>
              </div>
                </td>
                  <td className="py-3 px-6 text-left ">
              <div className="flex items-center ">
                <span className="font-medium">{allUrl.contactNumber}</span>
              </div>
            </td>
            <td className="py-3 px-6 text-left ">
              <div className="flex items-center ">
                <span className="font-medium">{allUrl.contactName}</span>
              </div>
                </td>
                 <td className="py-3 px-6 text-left ">
              <div className="flex items-center ">
                <span className="font-medium">{allUrl.webAccID}</span>
              </div>
            </td>
            <td className="py-3 px-6 text-left ">
              <div className="flex items-center ">
                <span className="font-medium">{allUrl.webAccPin}</span>
              </div>
            </td>
            <td className="py-3 px-6 text-left ">
              <div className="flex items-center ">
                <span className="font-medium">{allUrl.webUserName}</span>
              </div>
                </td>
                  <td className="py-3 px-6 text-left ">
              <div className="flex items-center ">
                <span className="font-medium">{allUrl.webUserPass}</span>
              </div>
            </td>
            <td className="py-3 px-6 text-left ">
              <div className="flex items-center gap-3">
                        <span className="font-medium"> <button><GrNotes size={18} /></button></span>
                        <span className="font-medium"> <button><BiEdit  size={18}/></button></span>
                        <span className="font-medium"> <button><MdDelete size={21}/></button></span>
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