// add a Staff
export const addStaffData = async StaffData => {
  const response = await fetch(`${import.meta.env.VITE_API_URL}/staff`, {
    method: 'POST',
    headers: {
      'content-type': 'application/json',
      authorization: `Bearer ${localStorage.getItem('access-token')}`,
    },
    body: JSON.stringify(StaffData),
  })

  const data = await response.json()
  return data
}

// Delete a Staff
export const deleteStaff = async id => {
  const response = await fetch(`${import.meta.env.VITE_API_URL}/staff/${id}`, {
    method: 'DELETE',
    headers: {
      'content-type': 'application/json',
      authorization: `Bearer ${localStorage.getItem('access-token')}`,
    },
  })
  const result = await response.json()
  return result
}

// update Staff status
export const UpdateStaff = async (id, status) => {
  const response = await fetch(
    `${import.meta.env.VITE_API_URL}/staff/status/${id}`,
    {
      method: 'PATCH',
      headers: {
        'content-type': 'application/json',
        authorization: `Bearer ${localStorage.getItem('access-token')}`,
      },
      body: JSON.stringify(status),
    }
  )
  const data = await response.json()
  return data
}
