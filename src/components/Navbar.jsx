import React from 'react'

const Navbar = (padding) => {
    console.log(padding.padding);
  return (
    
    <>
        <div className="flex justify-between  items-center px-3 sm:px-10 md:px-15 lg:px-24 mt-5">
            <div>
                <h1 className=' text-xl md:text-4xl font-bold '>Aisha.Cake</h1>  
            </div>
            <div className='items-center lg:flex justify-center hidden'>
                <ul className='flex gap-5 justify-center items-center'>
                    <li className='text-2xl font-semibold cursor-pointer border-[#7469B6]'>Bosh sahifa</li>
                    <li className='text-2xl font-semibold cursor-pointer border-[#7469B6]'>Haqida</li>
                    <li className='text-2xl font-semibold cursor-pointer border-[#7469B6]'>Boglanish</li>
                    <li className='text-2xl font-semibold cursor-pointer border-[#7469B6]'>Buyurtma</li>
                    <li className='text-2xl font-semibold cursor-pointer border-[#7469B6]'>Takliflar</li>
                </ul>
            </div>
            <div className='flex justify-center items-center gap-5 '>
                <button className='md:text-xl px-3 md:px-5 lg:px-7 py-3 rounded-md border text-white scale-effect hover:bg-transparent hover:text-black transition-all duration-300 border-[#7469B6] bg-[#7469B6]'>Royxatdan O'tish</button>
                <button className='md:text-xl px-3 md:px-5 lg:px-7 py-3 rounded-md border border-[#7469B6] bg-transparent hover:bg-[#7469B6] hover:text-white scale-effect transition-all duration-300'>Kirish</button>
            </div>
        </div>
    </>
  )
}

export default Navbar