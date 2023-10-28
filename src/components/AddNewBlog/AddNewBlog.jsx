import React from 'react'
import "../AddNewBlog/AddNewBlog.css";


const AddNewBlog = () => {
  
  return (
    <div className='main'>
      <div className='newblog'>
        <input type="file" accept="image/*" className='input' />
        <input type="text" placeholder='topic' className='input'/>
        <input type="text" placeholder='header' className='input'/>
        <textarea placeholder='title' className='input'>
        </textarea>
      </div>
      
     <button className='submitBtn'>Submit</button>
    
     
    </div>
  )
}

export default AddNewBlog