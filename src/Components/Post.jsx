'use client'
import React from 'react'

const Post = ({ dets }) => {
    // const { imgUrl, title, user: { imgUser, uid } } = dets;
    console.log(dets.imgUrl);
    return (
        <div className="box">
            {/* Head */}
            <div className="rounded-2xl overflow-hidden">
                <img src="https://images.unsplash.com/photo-1600758208050-a22f17dc5bb9?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" className='w-full' />
            </div>
            {/* foot */}
            <div className='w-full'>
                <h3 className='text-lg font-semibold'>Nature Beauty</h3>
                <div className="data flex items-center gap-2">
                    <img src="https://images.unsplash.com/photo-1578632767115-351597cf2477?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8YW5pbWV8ZW58MHx8MHx8fDA%3D" alt="" className='w-[30px] h-[30px] bg-center bg-cover rounded-full' />

                    <p className=' hover:underline cursor-pointer'>Loura</p>
                </div>
            </div>
        </div>
    )
}

export default Post