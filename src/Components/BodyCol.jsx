import React from 'react'
import Post from './Post'

const BodyCol = ({ dets: data }) => {
    return (

        <div className='flex flex-col gap-7'>
            {data.map((item, index) => {
                // console.log(item);
                return (
                    <Post key={index} dets={item} />
                )
            })}
            <Post />

        </div>
    )
}

export default BodyCol

