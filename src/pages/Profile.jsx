import { getAuth, updateProfile } from 'firebase/auth'
import { doc, updateDoc } from 'firebase/firestore'
import { useState } from 'react'
import { useNavigate } from 'react-router'
import { Link } from 'react-router-dom'
import { toast } from 'react-toastify'
import { db } from '../firebase'
import { FcHome } from "react-icons/fc";

export default function Profile() {

  const auth = getAuth()
  const navigate = useNavigate()
  const [changeDetails, setChangeDetails] = useState(false)

  const [formData, setFormData] = useState({
    name: auth.currentUser.displayName,
    email: auth.currentUser.email
  })

  const { name, email} = formData
 

  function onLogout(){
    auth.signOut()
    navigate("/")
  }

  function onChange(e){
    setFormData((prevState) => ({
      ...prevState,
      [e.target.id]: e.target.value
    }))
  }

  async function onSubmit() {
  
    try {
      if(auth.currentUser.displayName !== name){
        // update displayName in firebase auth

        await updateProfile(auth.currentUser, {
          displayName: name,
        })

        // update name in firestore

        const docRef = doc(db, "users", auth.currentUser.uid)
        await updateDoc(docRef, {
          name
        })

        toast.success("Profile updated")
      }
    } catch (error) {
      toast.error("Could not update profile details")
    }
  }

  return (
    <>
      <section className='max-w-6xl mx-auto flex justify-center items-center flex-col'>
        <h1 className='text-center text-3xl font-bold mt-6'>My Profile</h1>

        <div className='w-full md:w-[50%] mt-6 px-3'>
          <form>
            <input type="text" id='name' value={name} disabled={!changeDetails} onChange={onChange} className={`w-full px-4 py-2 text-xl text-gray-700 bg-white border border-gray-300 rounded transition ease-in-out mb-6 ${changeDetails && "bg-red-200 focus:bg-red-200"}`}/>

            <input type="email" id='email' value={email} disabled className='w-full px-4 py-2 text-xl text-gray-700 bg-white border border-gray-300 rounded transition ease-in-out mb-6'/>

            <div className='flex justify-between whitespace-nowrap text-sm lg:text-lg mb-6'>
              <p className='flex items-center '>Do you want to change your name? <span onClick={() => {
                changeDetails && onSubmit()
                setChangeDetails((prevState) => !prevState)
              } } className='text-red-600 hover:text-red-700 transition ease-in-out duration-200 ml-1 cursor-pointer'>{ changeDetails ? "Apply Changes" : "Edit"}</span></p>
              <p onClick={onLogout} className='text-blue-600 hover:text-blue-800 transition duration-200 ease-in-out cursor-pointer'>Sign Out</p>
            </div>
          </form>
          <button type="submit" className='w-full bg-blue-600 text-white uppercase px-7 py-3 text-sm font-medium rounded shadow-md hover:bg-blue-700 transition duration-150 hover:shadow-lg ease-in-out active:bg-blue-800'>
            <Link to="/create-listing" className='flex items-center justify-center gap-2'>
              <FcHome className='bg-red-200 rounded-full text-3xl p-1 border-2'/> Sell or rent your home
            </Link>
          </button>
        </div>
      </section>
    </>
  )
}
 