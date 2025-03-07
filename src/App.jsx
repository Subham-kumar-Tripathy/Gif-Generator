import './index.css';
import Random from './components/Random';
import Tag from './components/Tag';

export default function App() {
  return (
  <div className='flex flex-col backgr Background w-full h-screen relative items-center h-full'>
    <h1 className="bg-black rounded-lg text-white w-11/12 text-center mt-[40px] text-4xl font-bold px-10 py-2 italic">GIFS HUB</h1>
    <div className="flex gap-y-10 items-center flex-col w-full mt-[30px]">
    <Random/>
    <Tag/>
    </div>
  </div>)
}
