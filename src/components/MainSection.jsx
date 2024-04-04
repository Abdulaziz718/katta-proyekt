import React from 'react'
import image from "./img/sapiens.png"

const MainSection = () => {
  return (
    <>
        <div className="grid grid-cols-1 md:grid-cols-2 px-8 sm:px-10 md:px-15 lg:px-24 md:mt-10">
            <div className='flex flex-col gap-10 mt-20'>
                <h1 className='text-4xl md:text-5xl font-bold '>Bizning korxona qanday ishlaydi</h1>
                <p className='text-xl text-[#AD88C6]'>20 dan ortiq ishchilarning samarali mehnatlari <br /> mahsulotlari bozorlarga taqdim etiladi </p>
                <p className='text-lg'>Toliq ma;lumotlar uchun ijtimoiy tarmoqlarimizga murojat qilishingiz mumkin. Barcha tarmoqlarda 24/7 sifatli va namunali hizmat korsatiladi</p>
                <div className='flex gap-5'>
                    <button className='px-5 sm:px-8 py-2 bg-[#AD88C6] border  border-[#AD88C6] cursor-pointer scale-effect hover:bg-transparent rounded-md transition-all duration-300'>Kuzatish</button>
                    <button className='px-5 sm:px-8 py-2 bg-transparent border border-[#AD88C6] cursor-pointer scale-effect 
                    hover:bg-[#AD88C6] rounded-md transition-all duration-300'>Buyurtma</button>

                </div>
            </div>
            <div>
                <img src={image} alt="" />
            </div>
        </div>
    </>
  )
}

export default MainSection