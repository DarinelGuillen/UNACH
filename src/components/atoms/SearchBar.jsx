import React from 'react'

const SearchBar = () => {
    return (
        <>
            {/* shadow-xl */}
            <div className="relative justify-center">
                <div className="w-[90%] mx-auto relative bg-white px-6 pt-10 pb-8 ring-gray-900/5 sm:mx-auto md:w-[80%] xl:w-[70%] sm:px-10">
                    <form action="" className="relative w-full">
                        <input type="search" className="cursor-pointer relative z-10 h-12 w-12 rounded-full border bg-transparent pl-12 outline-none w-full focus:cursor-text focus:pl-16 focus:pr-4" />
                        <svg xmlns="http://www.w3.org/2000/svg" className="absolute inset-y-0 my-auto h-8 w-12 border-r border-transparent stroke-gray-500 px-3.5 border-black border-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                        </svg>
                    </form>

                </div>
            </div>
        </>
    )
}

export default SearchBar