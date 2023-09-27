import React, { useEffect }  from "react";
import {filterData , apiUrl}  from "./data"
import Filter from "./components/Filter";
import NavBar from "./components/NavBar";
import { toast } from "react-toastify";
import { useState} from "react"
import Cards from "./components/Cards";


const App = () => {
  const [courses , setCourses] = useState('')
  const [category , setCategory] = useState(filterData[0].title)
  useEffect(()=>{
    const fetchData = async()=>{
      try{
        const result = await fetch (apiUrl)
        const data = await result.json()
        setCourses(data.data)

      }
      catch(error){
        toast.error("Something Went Wrong")
      }
    }
    fetchData()
  },[])
  return(
    <div className="flex flex-col min-h-screen gap-4 align-center  bg-bgDark2">
    <div className="justify-start">
    <NavBar/>
    </div>
    <div >
    <Filter filterData={filterData} category={category} setCategory={setCategory}/>
    </div>
    <div>
    <Cards courses={courses} category={category}/>
    </div>
    </div>

  )
};

export default App;
