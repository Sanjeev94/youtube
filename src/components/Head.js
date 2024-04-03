import React from 'react'
import { useDispatch } from 'react-redux'
import { toggleMenu } from '../utils/appSlice';

const Head = () => {
    const dispatch = useDispatch();
    const toggleMenuHandeler=() => {
        dispatch(toggleMenu());
    };
  return (
    <div className="grid grid-flow-col p-5 m-2 shadow-lg">
    <div className='flex col-span-1'>
        <img
        onClick={()=>toggleMenuHandeler()}
        className="h-8 cursor-pointer"
        alt="menu"
        src="https://static.vecteezy.com/system/resources/previews/002/292/406/large_2x/hamburger-menu-line-icon-free-vector.jpg" 
        />
        <a href="/">
        <img
        className="h-8 mx-2" 
        alt="youtube-menu"
        src="https://logodownload.org/wp-content/uploads/2014/10/youtube-logo-0.png" 
        />
        </a>
    </div>
    <div className="col-span-10 px-10">
        <input className="w-1/2 border border-gray-400 p-2 rounded-l-full" type="text" />
        <button className="border border-gray-400 p-2 rounded-r-full bg-gray-100">Search</button>
    </div>
    <div className="col-span-1">
    <img 
    className="h-8" alt="user" src="https://th.bing.com/th/id/R.7ea4af7d8401d2b43ee841bfa2abe89d?rik=xidyUKdveUKULQ&riu=http%3a%2f%2fpluspng.com%2fimg-png%2fuser-png-icon-download-icons-logos-emojis-users-2240.png&ehk=2%2bOqgdMZqFkKaBclc%2fPL9B86vLju3iBGiFmH64kXaTM%3d&risl=&pid=ImgRaw&r=0"
    />
    </div>
    </div>
  )
}

export default Head