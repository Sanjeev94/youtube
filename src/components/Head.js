import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { toggleMenu } from '../utils/appSlice';
import { YOUTUBE_SERACH_API } from '../utils/constants';

const Head = () => {

    const [searchQuery, setSearchQuery] = useState("");
    const [suggestions, SetSuggestions] = useState([]); 
    
    useEffect(() => {
        
        //make an api call after every key press
        //but if the diff bet 2 api calls is <200ms -decline api call
        const timer = setTimeout(() => getSearchSuggestions(), 200);
        return () => {
            clearTimeout(timer);
        }
    }, [searchQuery]);

    const getSearchSuggestions = async () => {
        console.log("API call -"+searchQuery);
        const data = await fetch(YOUTUBE_SERACH_API + searchQuery);
        const json = await data.json();
        //console.log(json[1]);
        SetSuggestions(json[1]);
    };

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
        <div>
        <input className="px-5 w-1/2 border border-gray-400 p-2 rounded-l-full" 
        type="text" 
        value={searchQuery} 
        onChange={(e) => setSearchQuery(e.target.value)} />

        <button className="border border-gray-400 p-2 rounded-r-full bg-gray-100">Search</button>
    </div>
    <div className='fixed bg-white px-2 py-2 px-5 w-[37rem] shadow-lg rounded-lg border border-gray-100'>
        <ul>
            {suggestions.map((s)=> (
                <li key={s} className='py-2 px-3 shadow-sm hover:bg-gray-100'>{s}</li>
            ) )}
        </ul>
    </div>
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