// add a url
import { addStaffData } from './staff';

export const addUrl = async UrlData => {
    const response = await fetch(`${import.meta.env.VITE_API_URL}/web-url`, {
        method: 'POST',
        headers: {
            'content-type': 'application/json',
            authorization: `Bearer ${localStorage.getItem('access-token')}`,
        },
        body: JSON.stringify(UrlData)
    })

    const data = await response.json()
    return data
}

export const deleteUrl = async id => {
  const response = await fetch(`${import.meta.env.VITE_API_URL}/web-url/${id}`, {
    method: 'DELETE',
    headers: {
      'content-type': 'application/json',
      authorization: `Bearer ${localStorage.getItem('access-token')}`,
    },
  })
  const result = await response.json()
  return result
}

// async function getCharacters() {
//   const response = await axios.get(
//     "https://finalspaceapi.com/api/v0/character/?limit=2"
//   );
//   console.log(response.data);
// }
// getCharacters();

// export const GetUrl = async urlData => {

// }