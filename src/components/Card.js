import {FcLike, FcLikePlaceholder} from "react-icons/fc"
import { toast } from "react-toastify"



function Card ({course,setLikedCourses,likedCourses}){
    function clickHandler(){
        if(likedCourses.includes(course.id)){
            setLikedCourses((prev)=>prev.filter((cid)=>(cid !==course.id)))
            toast.warning("Like Removed")
        }
        else{
            if(likedCourses.length===0){
                setLikedCourses([course.id])
            }
            else{
                setLikedCourses((prev)=>[...prev , course.id])
            }
            toast.success("Liked Successfully")
        }
    }
    return(
        <div  className=" mx-auto bg-bgDark text-white rounded-md bg-opacity-80 lg:w-[30%] ">
            <div className="relative">
                <img src={course.image.url} className="w-[100%] rounded-md"></img>
                <div className="absolute right-1 -bottom-2 bg-white rounded-full w-[2rem] h-[2rem] flex justify-center align-center">
                    <button onClick={clickHandler}>
                    {
                        likedCourses.includes(course.id) ? (<FcLike/>) : (<FcLikePlaceholder/>)
                    }
                    </button>
                </div>
            </div>
            <div className="pr-2 pl-2 pb-2 my-2">
                <p className="font-bold">
                    {course.title}
                </p>
                <p className="opacity-80">
                {
                    course.description.length>100 ? (course.description.substr(0,100)+"...") : (course.description)
                }
                </p>
            </div>
        </div>
    )
}

export default Card