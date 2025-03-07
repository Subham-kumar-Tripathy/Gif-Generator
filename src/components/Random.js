import Spinner from './Spinner';
import Usegif from '../hooks/Usegif';


const Random = () => {
const{gif,loading,fetchdata}=Usegif();

function Clickhandler(){
  fetchdata();
}
  return (
    <div className='flex items-center flex-col w-1/2  bg-yellow-500 rounded-lg border border-black 
    gap-y-5 mt-[15px]'>
      <h1 className='mt-[15px] text-2xl uppercase underline font-bold'>Trending Gif</h1>
      {
        loading ? (<Spinner/>) : (<img src={gif} width='450' />)
      }
      
      <button className='w-10/12 bg-black  text-lg py-2 rounded-lg text-white mb-[20px]'
       onClick={Clickhandler}>Generate</button>
    </div>
  )
}

export default Random
