import React from 'react'
import "../UpdateBlog/UpdateBlog.css"

const UpdateBlog = () => {
  return (
    <div>
        <div className='main'>
      <div className='newblog'>
        <input type="file" accept="image/*" className='input' />
        <input type="text" placeholder='topic' className='input'/>
        <input type="text" placeholder='header' className='input'/>
        <textarea placeholder='title' className='input'>
        </textarea>
      </div>
      
     <button className='submitBtn'>Update</button>
     <button className='deleteBtn'>Delete</button>
    
     
    </div>
    </div>
  )
}

export default UpdateBlog