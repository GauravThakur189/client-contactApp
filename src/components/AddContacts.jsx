import React from 'react'
import { useNavigate} from 'react-router-dom';
const AddContacts = () => {
    const navigate = useNavigate();
  return (
   <section>
    <button 
    onClick={()=>navigate(-1)}
     className='absolute top-[2rem] left-[4rem] button px-5 text-sm'
    >Go Back</button>

    <div className='border border-gray-400 w-[30rem] p-5 flex flex-col gap-5 rounded-md shadow-md shadow-gray-400 m-5 lg:m-0'>
        <form>
            <input className='input' type='text' placeholder='Write Your Name..'></input>
            <input className='input' type ='text' placeholder='Email...'/>
            <input className='input' type='number' placeholder="Phone Number..." />
            <input className='input' type='Date'/>
            <input  type='file' />
            <button className='button'>Submit</button>
        </form>
    </div>
   </section>
  )
}

export default AddContacts