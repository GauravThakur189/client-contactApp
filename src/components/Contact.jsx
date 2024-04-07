import React from 'react'
import { FaTrashAlt } from "react-icons/fa";
import { CiEdit } from "react-icons/ci";

const Contact = ({contact}) => {
    const {fullName,email,phoneNumber,image,birth} = contact;  //destructuring assignment
  return (
    <div className='w-[17rem] shadow-md shadow-gray-400 overflow-hidden rounded-lg'>
        <img className='w-full h-[12rem] object-cover' src={image} alt='profile pic'/>
        <div className='p-3 text-sm flex flex-col gap-1'>
            <p>fullName :{fullName}</p>
            <p>email :{email}</p>
            <p>phoneNumber :{phoneNumber}</p>
            <p>date of birth :{birth}</p>
        </div>
        <div className='p-3 flex items-center justify-end gap-2'>
            <button className='text-red-400 hover: opacity-75'><FaTrashAlt/></button>
            <button className='text-xl text-blue-600 hover: opacity-75'><CiEdit/></button>
        </div>
    </div>
  )
}

export default Contact