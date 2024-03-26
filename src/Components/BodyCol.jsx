import React from 'react'
import Post from './Post'

const BodyCol = ({ dets: data }) => {
    // console.log(data.length);
    return (

        <div className='flex flex-col gap-7'>
            {data.map((item, index) => {
                return (
                    <Post key={index} postImg={item.postImg} title={item.title} imgUser={item.user.imgUser} uid={item.user.uid} />
                )
            })}
            <Post />

        </div>
    )
}

export default BodyCol

