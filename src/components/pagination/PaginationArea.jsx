import React from 'react'

const PaginationArea = ({pageNumber , paginte ,currentpage ,next ,prev}) => {

  
  
    
  return (
    <>
    <nav className='py-5' aria-label="Page navigation example">
      <ul className="inline-flex -space-x-px text-sm">
        <li>
          <a onClick={prev} className="flex items-center justify-center px-3 h-8 ms-0 leading-tight text-gray-500 bg-white border border-e-0 border-gray-300 rounded-s-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white cursor-pointer"
          >
            Previous
          </a>
        </li>
        {pageNumber.map((item , i)=>(

        <li onClick={()=>(paginte(item))} className={currentpage == i + 1 ? "flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-[#FB2E86] border border-gray-300 cursor-pointer " : "flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-[#fff] border border-gray-300 cursor-pointer"}>
         
            {item + 1}
          
        </li>
        ))}
       
        <li>
          <a onClick={next} className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 rounded-e-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white cursor-pointer"
          >
            Next
          </a>
        </li>
      </ul>
    </nav>
   
  </>
  
  )
}

export default PaginationArea