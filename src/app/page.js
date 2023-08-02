import Image from 'next/image'
import Banner from './components/home/Banner'
import UpdatedNews from './components/home/UpdatedNews'
import Department from './components/home/Department'
import Photo from './components/home/Photo'

export default function Home() {
  return (
    <div className='container'>
        <div className='flex gap-x-[2%] px-4 md:px-8'>
          <div className='w-full md:w-[75%]'>
             <Banner/>
             <UpdatedNews/>
             <Department/>
             <Photo/>
          </div>
          <div className='w-full md:w-[23%] bg-black text-white'> 
              <p>right side section</p>
          </div>
        </div>
    </div>
  )
}
