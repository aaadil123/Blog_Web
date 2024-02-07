import React, { useContext } from 'react'
import { AppContext } from '../context/AppContext'
import Spinner from './Spinner';

const Blogs = () => {
    const{posts, loading} = useContext(AppContext);
  return (
    <div className='w-11/12 max-w-[650px] py-8 flex flex-col justify-center items-center gap-y-7 mt-[66px] mb-[66px]'>
        {
            loading ?
            (
                <Spinner/>
            ) : 
            (
                posts.length === 0 ?
                (
                    <div>
                        <p>No Post Found</p>
                    </div>
                ) :
                (
                    posts.map( (post) => (
                        // Card
                        <div key={post.id}>
                            <p className='font-bold font-lg'>{post.title}</p>
                            <p className='text-sm'>
                                By <span className='italic'>{post.author}</span> on <span className='underline font-bold'>{post.category}</span>
                            </p>
                            <p className='text-sm mt-[4px]'>Posted On <span>{post.date}</span></p>
                            <p className='mt-[14px] text-md'>{post.content}</p>
                            <div className='flex gap-x-3'>
                                {
                                    post.tags.map( (tag, index) => (
                                        <span key={index} className='text-blue-500 text-xs font-bold underline mt-[5px]' >{`#${tag}`}</span>
                                    ))
                                }
                            </div>
                        </div>
                    ))
                )
            )
        }
    </div>
  )
}

export default Blogs