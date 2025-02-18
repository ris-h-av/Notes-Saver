import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { useSearchParams } from 'react-router-dom';
import { addToPastes, updateToPastes } from '../redux/pasteSlice';

const Home = () => {
  const [title,setTitle] = useState();
  const [value,setValue] = useState();
  const [searchParams, setSearchParams] = useSearchParams();
  const pasteId = searchParams.get("pasteId");
  const dispatch = useDispatch();

  function createPaste(){
    const paste = {
      title: title,
      content: value,
      _id : pasteId || Date.now().toString(20),
      createdAt: new Date().toISOString(),
    }
    if(pasteId){
      // update paste
      dispatch(updateToPastes(paste));
    }
    else{
      // create paste
      dispatch(addToPastes(paste));
    }

    // after creation or updation clear the input fields and query paramaeters
    setTitle('');
    setValue('');
    setSearchParams({});
  };

  if(pasteId){
    console.log(pasteId);
  }
  return (
    <div>
      <div className='flex flex-row gap-10 place-content-between'>
        <input className='p-2 bg-black border-1 border-zinc-400 m-2 rounded-md'
          type="text"
          placeholder='enter paste title'
          value={title}
          onChange={(e)=> setTitle(e.target.value)}
        />
        <button onClick={createPaste} className='p-2 bg-black border-1 border-zinc-400 m-2 rounded-md'> 
          {
            pasteId ? 
            "Edit My Paste":
            "Create Paste"
          }
        </button>
      </div>
      <div>
        <textarea 
        className='p-2 bg-black border-1 border-zinc-400 m-2 rounded-md' 
        value={value}
        placeholder='Paste Your Content Here!'
        onChange={(e)=> setValue(e.target.value)}
        rows={20}
        cols={100}
        />
      </div>
    </div>
  )
}

export default Home
