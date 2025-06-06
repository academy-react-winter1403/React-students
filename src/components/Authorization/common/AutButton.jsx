import React from 'react'


const AutButton = ({type , SvgTitle , isSubmittingTitle , isSubmitting }) => {
  return (
    <div>
        <button
        type={type}
        className="group relative w-full flex justify-center py-3 px-4 border border-transparent text-sm font-medium rounded-2xl text-white bg-login hover:bg-purple-600 outline-none"
        disabled={isSubmitting}
        >
        {isSubmitting ? (
            <span className="flex items-center">
            <svg className="animate-spin ml-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg>
            {SvgTitle}
            </span>
        ) : isSubmittingTitle}
        </button>
    </div>
  )
}

export default AutButton