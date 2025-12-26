import { Link, NavLink } from "react-router-dom"
import Activities from "../../pages/Activities"
import { FaArrowTrendUp, FaLightbulb } from "react-icons/fa6"
import { IoPeopleOutline, IoSettings } from "react-icons/io5"
import { MdLibraryAddCheck } from "react-icons/md"
import { VscVmActive } from "react-icons/vsc"

const SideBar = () => {
  return (
    <section className='w-full h-full flex   items-center flex-col gap-3 bg-[#FFFFFF] rounded-md  shadow-sm '>
      {/* logo */}
      <div className="w-full  h-24 flex justify-center items-center border">
        <img src="../../../public/image/TESLA.png" alt="logo tesla" className="w-[138px] h-[17px]" />
      </div>

      {/* routes */}
      <div className="flex justify-center items-center gap-3 flex-col">
        <NavLink to={"/report"} className={({isActive})=>
        ` w-[173px] h-[46px]  flex  justify-center items-center gap-4 rounded-md hover:bg-[#1B59F81A]
         ${isActive ? " bg-[#1B59F81A]" :" bg-white"} `
        }>
           <span className="w-6 h-6 flex justify-center items-center"><FaArrowTrendUp /></span>
         <p className="text-sm text-[#000000B2] font-medium">  Report </p>
        </NavLink>
     

      {/* activities */}
   
        <NavLink to={"/activities"} className={({isActive})=>
        ` w-[173px] h-[46px]  flex  justify-center items-center gap-4 rounded-md hover:bg-[#1B59F81A]
         ${isActive ? " bg-[#1B59F81A]" :" bg-white"} `
        }>
           <span className="w-6 h-6 flex justify-center items-center"><VscVmActive /></span>
         <p className="text-sm text-[#000000B2] font-medium">  Activities </p>
        </NavLink>
    

   {/* library */}
        <NavLink to={"/library"}className={({isActive})=>
        ` w-[173px] h-[46px]  flex  justify-center items-center gap-4 rounded-md hover:bg-[#1B59F81A]
         ${isActive ? " bg-[#1B59F81A]" :" bg-white"} `
        }>
           <span className="w-6 h-6 flex justify-center items-center"><MdLibraryAddCheck /> </span>
         <p className="text-sm text-[#000000B2] font-medium">  Library</p>
        </NavLink>
     

      {/* people */}
        <NavLink to={"/people"} className={({isActive})=>
        ` w-[173px] h-[46px]  flex  justify-center items-center gap-4 rounded-md hover:bg-[#1B59F81A]
         ${isActive ? " bg-[#1B59F81A]" :" bg-white"} `
        }>

           <span className="w-6 h-6 flex justify-center items-center"><IoPeopleOutline /> </span>
         <p className="text-sm text-[#000000B2] font-medium">People</p>
        </NavLink>
      </div>
      
      {/* setting section */}
      <div className="flex justify-center items-center flex-col gap-3">
        <h2 className=" text-[#00000080] font-semibold capitalize ">supports</h2>
         {/* get start */}
      <NavLink to={"/people"} className={({isActive})=>
        ` w-[173px] h-[46px]  flex  justify-center items-center gap-4 rounded-md hover:bg-[#1B59F81A]
         ${isActive ? " bg-[#1B59F81A]" :" bg-white"} `
        }>
           <span className="w-6 h-6 flex justify-center  items-center"><FaLightbulb /></span>
         <p className="text-sm text-[#000000B2] font-medium"> Get start</p>
        </NavLink>
          {/* setting */}
        <NavLink to={"/people"} className={({isActive})=>
        ` w-[173px] h-[46px]  flex  justify-center items-center gap-4 hover:bg-[#1B59F81A]
         ${isActive ? " bg-[#1B59F81A]" :" bg-white"} `
        }>
           <span className="w-6 h-6 flex justify-center  items-center"><IoSettings /> </span>
         <p className="text-sm text-[#000000B2] font-medium "> Setting </p>
        </NavLink>


        {/* profile */}
        <div className="w-[173px] h-32  flex justify-center items-start flex-col gap-2">
          <div className="image w-8 h-8 ">
            <img src="../../../public/image/Photo.png" alt="profile pic" className="w-full h-full" />
          </div>
          <div className="para  ">
            <h2 className="text-sm text-[#000000] font-semibold ">Sam Wheeler</h2>
            <p className="name text-sm">samwheeler@example.com</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default SideBar