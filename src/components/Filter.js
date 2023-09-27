import React from "react";
const Filter=({filterData,setCategory,category})=>{
    function filterHandler(title){
        setCategory(title)
    }
    return(
        <div className="text-center flex-wrap flex gap-2 justify-center align-center w-[100%]">
            {filterData.map((data)=>{
                return(
                    <button className={`py-1 px-4 rounded-md  text-center bg-black text-white hover:bg-gray-800
                    ${category === data.title ? ("border-2 border-white") : ("border-transparent opacity-60")}
                    `} key={data.id}
                    onClick={()=> filterHandler(data.title)}>{data.title}</button>  
                )
                
            })}
        </div>
    )
}

export default Filter