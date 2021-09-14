import React from 'react'

export default function Createform({handleForm}) {
    return (
       <div>
          <div className='main-comp flex items-center justify-center'>
        <form onSubmit={handleForm} className=" w-full max-w-lg">
          <div className="flex flex-wrap -mx-3 mb-6">
          </div>
          <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full px-3">
              <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-password">
                Location
              </label>
              <input id="location" className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" type="text"/>
             
            </div>
            <div className="w-full md:w-1/4 px-3 mb-6 md:mb-0">
              <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-first-name">
                Minimum Custamer per Hour
              </label>
              <input id="minimum" className="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"  type="text"  />
            </div>
            <div className="w-full md:w-1/4 px-3">
              <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-last-name">
               Maximum Custamer per Hour
              </label>
              <input id="maximum" name="max" className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" type="text"  />
            </div>
            <div className="w-full md:w-1/4 px-3">
              <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-last-name">
                Avarage Coocies per sales
              </label>
              <input id="average" className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" type="text"  />
            </div>

              <div className="mt-14 w-full md:w-1/4 px-3">
                        <button className=" py-2 px-4 bg-green-500 text-white font-semibold rounded-lg shadow-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-opacity-75">
                            Create
                        </button>
                    </div>
              </div>
        </form>
        </div>
        {/* <div className="flex items-center justify-center text-xl h-12 flex-col">
                    <h3> Report Table Coming Soon</h3>
                    <p >{store}</p>        
            </div> */}
        </div>
    )

}
