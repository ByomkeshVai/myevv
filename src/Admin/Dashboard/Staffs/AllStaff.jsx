import React from 'react';
import DefaultLayout from '../../../layout/DefaultLayout';

const AllStaff = () => {
    return (
        <div>
            <div className="filter-area">

            </div>
          <div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th>Serial</th>
        <th>Staff Name</th>
        <th>Phone</th>
        <th>Title</th>
        <th>Address</th>
                            <th>Hired Date</th>
                            <th>Action</th>
      </tr>
    </thead>
    <tbody>
      {/* row 1 */}
      <tr>
        <th>1</th>
        <td>Cy Ganderton</td>
        <td>Quality Control Specialist</td>
                            <td>Blue</td>
                            <td>Blue</td>
                            <td>Blue</td>
                            <td>Blue</td>
      </tr>
    </tbody>
  </table>
</div>
        </div>

    );
};

export default AllStaff;