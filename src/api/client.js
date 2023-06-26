export const addClient = async (ClientData) => {
    const response = await fetch(`${import.meta.env.VITE_API_URL}/client`, {
        method: 'POST',
        headers: {
            'content-type': 'application/json',
            authorization: `Bearer ${localStorage.getItem('access-token')}`,
        },
        body: JSON.stringify(ClientData)
    })

    const data = await response.json()
    return data
}


export const deleteClient = async id => {
  const response = await fetch(`${import.meta.env.VITE_API_URL}/client/${id}`, {
    method: 'DELETE',
    headers: {
      'content-type': 'application/json',
      authorization: `Bearer ${localStorage.getItem('access-token')}`,
    },
  })
  const result = await response.json()
  return result
}

export const UpdateClient = async (id, status) => {
  const response = await fetch(
    `${import.meta.env.VITE_API_URL}/client/status/${id}`,
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
