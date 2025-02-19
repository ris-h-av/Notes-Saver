import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {removeFromPastes} from '../redux/pasteSlice'
import toast from 'react-hot-toast';
import { Link } from 'react-router-dom';
import search_icon from '../assets/search_icon.svg'

const Pastes = () => {
  const pastes = useSelector((state) => state.paste.pastes);
  
  const dispatch = useDispatch();

  const [searchTerm, setSearchTerm] = useState('');
  
  const filterData = pastes.filter((paste)=> {
    return paste.title.toLowerCase().includes(searchTerm.toLowerCase());
    }
  );

  function handleDelete(pasteId){
    if(pasteId){
      dispatch(removeFromPastes(pasteId));
    }
    else
      console.log("Invalid paste id");
  }

  return (
    <div>
        <input className='p-2 bg-black border-[1px] border-zinc-400 rounded-2xl min-w-[700px]'
          type="search"
          placeholder='search here'
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      <div className='p-4 mt-4 flex flex-col gap-5 rounded-2xl bg-black'>
      {
        filterData.length > 0 ? (
          <div className='p-4 mt-4 flex flex-col gap-5 rounded-2xl bg-black'>
            {filterData.map((paste) => (
              <div key={paste._id} className='bg-gray-800 p-2 border-zinc-400 border-[1px]'>
                <div>
                  {paste.title}
                </div>
                <div>
                  {paste.content}
                </div>

                <div className='mt-4 gap-3 flex flex-row text-green-600'>

                  <button className='bg-black p-1 rounded-md min-w-[80px] border-[1px]'>
                    <Link to={`/pastes/${paste?._id}`}>
                      View
                    </Link>
                  </button>

                  <button className='bg-black p-1 rounded-md min-w-[80px] border-[1px]'>
                    <Link to={`/?pasteId=${paste?._id}`}>
                      Edit
                    </Link>
                  </button>

                  <button className='bg-black p-1 rounded-md min-w-[80px] border-[1px]'
                    onClick={() => {
                      navigator.clipboard.writeText(paste?.content)
                      toast.success("copied to clipborad!")
                    }}
                  >
                    Copy
                  </button>

                    {/* // ToDo: share button ka logic implement karna hai */}
                  <button className='bg-black p-1 rounded-md min-w-[80px] border-[1px]'>Share</button>

                  <button
                    className='bg-black p-1 text-red-600 rounded-md min-w-[80px] border-[1px]'
                    onClick={() => handleDelete(paste?._id)}
                  >
                    Delete
                  </button>
                </div>
                <div className='text-gray-500 mt-3'>
                  {paste.createdAt}</div>
                </div>
            ))}
      </div>
    ) : (
    <p className="text-gray-500 text-center">No pastes available.</p>
  )}

      </div>  
    </div>
  )
}

export default Pastes
