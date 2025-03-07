import Spinner from './Spinner';
import Usegif from '../hooks/Usegif';
import { useState } from 'react';

const Tag = () => {
const[tag,settag]=useState("");

const{gif,loading,fetchdata}=Usegif(tag);

function Clickhandler(){
  fetchdata(tag);
}
function changehandler(event){
  settag(event.target.value);
}
  return (
    <div className='flex items-center flex-col w-1/2  bg-red-500 rounded-lg border border-black 
    gap-y-5 mt-[15px]'>
      <h1 className='mt-[15px] text-2xl uppercase underline font-bold'>Generate {tag} Gif</h1>
      {
        loading ? (<Spinner/>) : (<img src={gif} width='450' />)
      }

      <input
      className='w-10/12 bg-black  text-lg py-2 rounded-lg text-white mb-[3px] text-center'
      onChange={changehandler}
      value={tag}
      />

      <button className='w-10/12 bg-black  text-lg py-2 rounded-lg text-white mb-[20px]'
       onClick={Clickhandler}>Generate</button>
    </div>
  )
}

export default Tag

