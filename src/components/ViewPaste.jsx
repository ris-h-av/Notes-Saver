import React from 'react'
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom'

const ViewPaste = () => {
  const { id } = useParams();
  const allPastes = useSelector((state) => state.paste.pastes);
  const paste = allPastes.find((p) => p._id === id);
  return (
    <div>
      <div className='flex flex-row gap-10 place-content-between'>
        <input className='p-2 bg-black border-1 border-zinc-400 m-2 rounded-md'
          type="text"
          placeholder='enter paste title'
          value={paste.title}
          onChange={(e)=> setTitle(e.target.value)}
          disabled
        />
      </div>
      <div>
        <textarea 
        className='p-8 bg-black border-1 border-zinc-400 m-2 rounded-md' 
        value={paste.content}
        placeholder='Paste Your Content Here!'
        onChange={(e)=> setValue(e.target.value)}
        rows={20}
        cols={100}
        disabled
        />
      </div>
    </div>
  )
}

export default ViewPaste
