
import { useState } from "react"
import Card from "./Card"
import { filterData } from "../data"

const Cards =(props) =>{
    let courses =props.courses
    let category = props.category 
    console.log(filterData[0].title)
    function getCourses(){
        let allCourses=[]
        if(category==="All"){
                 
            Object.values(courses).forEach(array=>{
                array.forEach(courseData =>{
                    allCourses.push(courseData)
                })
            })
            
            return allCourses
        }
    else{
        return courses[category]
    }
    }

    const [likedCourses , setLikedCourses] = useState([])
    return (
        <div className="flex w-[70%] flex-wrap m-auto gap-2 justify-center align-center">
        {
            getCourses().map((course) => {
                return(
                <Card key={course.id} course={course} likedCourses={likedCourses} setLikedCourses={setLikedCourses}></Card>)
            })
            }
        </div>
    )
}

export default Cards