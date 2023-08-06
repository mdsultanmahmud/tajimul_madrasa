"use client"
import undercon from '/public/assets/undercon.jpg'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
export default function NotFound() {
    const router = useRouter()
    return (
        <div className="h-[70vh] w-full grid place-items-center">
            <div>
                <h1 className='font-bold   text-red-500 uppercase text-center text-2xl'>This Page is Underconstruction...</h1>
                <h2 onClick={() => router.push("/")} className='mt-3 mb-8 font-bold text-xl text-center cursor-pointer text-black hover:text-red-500'>Go to Home</h2>
                <Image src={undercon} alt='page is underconstraction' width={500} height={500} />
            </div>
        </div>
    );
};