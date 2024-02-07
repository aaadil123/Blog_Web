import React, { useContext } from 'react'
import { AppContext } from '../context/AppContext'

const Pagination = () => {
  const {page, totalPages, pageChangeHandler} = useContext(AppContext)

  return (
    <div className='w-full flex justify-center items-center border-2 shadow-lg fixed bottom-0 bg-white'>
      <div className='flex justify-between items-center w-11/12 max-w-[650px] py-4 shadow-lg'>

        <div className='flex gap-x-2'>
        { page > 1 &&
          (
            <button
            className='border-2 px-4 py-1 bg-white rounded-md'
            onClick={ () => pageChangeHandler(page-1)}>
              Previous
            </button>
          )
        }

        { page < totalPages &&
          (
            <button
            className='border-2 px-4 py-1 bg-white rounded-md'
            onClick={ () => pageChangeHandler(page+1)}>
              Next
            </button>
          )
        }
        </div>
        
        <p className='font-bold text-sm'>
          Page {page} of {totalPages}
        </p>
      </div>
    </div>
  )
}

export default Pagination