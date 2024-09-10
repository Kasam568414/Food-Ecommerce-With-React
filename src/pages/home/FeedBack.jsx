import React from 'react'
import Frame1 from "../../assets/Frame 580.png"

const FeedBack = () => {
  return (
    <div>
        <h1 className='text-7xl font-bold text-center mt-16'>FeedBack</h1>
        <div className=' mt-16 mb-10 flex gap-6'>
            <div className='bg-gray-100 w-96 h-60 p-4 relative'>
                <p className='w-52 h-14 top-[30%] absolute'>Thank you for all, you service was soo good and safe, i will suggest my friends about your fantastic services</p>

            </div>
            <div className='bg-gray-100 w-[600px] h-60 p-4 flex-1'>
                <div className='flex items-center justify-center  gap-3'>
                    <img src={Frame1} />
                    <div className=''>
                        <h4 className='text-2xl font-bold mb-2'>Anjelina</h4>
                        <h4 className='text-xl text-yellow-300 font-bold mb-2'>Student</h4>
                        <p>Thank you for all, you service was soo good and safe, i will suggest my friends about your fantastic services</p>

                    </div>
                </div>

            </div>
            <div className='bg-gray-100 w-96 h-60 p-4 '>
                <div className='flex items-center justify-center  gap-3'>
                    <img src={Frame1} />
                    <div className=''>
                        <h4 className='text-2xl font-bold mb-2'>Anjelina</h4>
                        <h4 className='text-xl text-yellow-300 font-bold mb-2'>Student</h4>
                        <p>Thank you for all, you service was soo good and safe, i will suggest my friends about your fantastic services</p>

                    </div>
                </div>

            </div>
            <div></div>
        </div>
    </div>
  )
}

export default FeedBack