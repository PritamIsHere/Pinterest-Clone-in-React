import React from 'react'

const Post = ({ postImg, title, imgUser, uid }) => {
    return (
        <div className="post">
            {/* Head */}
            <div className="rounded-2xl overflow-hidden">
                <img src={postImg} alt="" className='w-full' />
            </div>
            {/* foot */}
            <div className='w-full px-2'>
                <h3 className='text-lg  leading-5 py-2'>{title}</h3>
                <div className="data flex items-center gap-2">
                    <img src={imgUser} alt="" className='w-[30px] h-[30px] bg-center bg-cover rounded-full' />

                    <p className=' text-sm hover:underline cursor-pointer'>{uid}</p>
                </div>
            </div>
        </div>
    )
}

export default Post