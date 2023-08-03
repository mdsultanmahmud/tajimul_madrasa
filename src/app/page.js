import Image from 'next/image'
import Banner from './components/home/Banner'
import UpdatedNews from './components/home/UpdatedNews'
import Department from './components/home/Department'
import Photo from './components/home/Photo'
import Sidebar from './components/home/Sidebar'

export default function Home() {
  return (
    <div className='container'>
      <div className='flex flex-col lg:flex-row gap-x-[2%] my-12'>
        <div className='w-full lg:w-[75%]'>
          <Banner />
          <UpdatedNews />
          <Department />
          <Photo />
        </div>
        <div className='w-full lg:w-[23%] bg-white lg:bg-[#F7FFF7] text-white h-[100%] shadow-lg'>
          <Sidebar />
        </div>
      </div>
    </div>
  )
}
