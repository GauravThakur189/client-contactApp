import React from 'react'
import Contact from './contact'

const Contacts = () => {
  return (
    <div className='w-[80%] mx-auto my-[3rem] border-2 border-blue-100 shadow-md shadow-gray-400 rounded-lg'>
    <h1 className='p-6 text-center flex-1 text-2xl font-bold text-gray-700'>
        Contact Application
    </h1>
    <div className='text-right mr-10'>
        <button className='button text-sm px-4'>Add Contact</button>
    </div>
    <div className='p-4 lg:p-7 flex items-center flex-wrap gap-5 w-[95%] mx-auto'>
   {data1.map((contact,i)=>(
    <Contact contact={contact} key ={i}/>
   ))}
    </div>
    </div>
  )
}

export default Contacts