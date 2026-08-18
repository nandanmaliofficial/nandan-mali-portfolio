import axios from 'axios';
const API_URL=import.meta.env.VITE_API_URL;

export async function submitContactForm(formData) {
    console.log(API_URL)
 const res = await axios.post(`${API_URL}/api/contact`, formData);
  if (!(res.status===200)) throw new Error("Request failed");
  return true;}

