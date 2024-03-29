import React, { useState } from 'react'
import { FaHome } from "react-icons/fa";
import Control from '@/assets/control.png';
import { MdOutlineFactory } from "react-icons/md";
import { CiSettings } from "react-icons/ci";
import { useNavigate } from 'react-router-dom';
const Menus = [
    { title: "Dashboard", src: <FaHome size={40} /> },
    { title: "Settings", src: <CiSettings size={40} /> },
];

function SideBar() {
    const navigate = useNavigate();
    const [open, setOpen] = useState(true);
    return (
        <div className="flex bg-gray-700">
            <div
                className={` mt-3 ${open ? "w-64" : "w-20 "
                    } bg-dark-purple h-screen p-5  pt-8 relative duration-300`}
            >
                <img
                    src={Control}
                    className={`absolute cursor-pointer -right-3 top-9 w-7 border-dark-purple
           border-2 rounded-full  ${!open && "rotate-180"}`}
                    onClick={() => setOpen(!open)}
                />
                <div className="flex gap-x-4  items-center ">
                    <MdOutlineFactory size={40} color='white' className={`cursor-pointer duration-500 ${open && 'rotate-[360deg]'}`} />
                    <h1
                        className={`text-white origin-left font-medium text-xl duration-200 ${!open && "scale-0"
                            }`}
                    >
                        Device Supervisor
                    </h1>
                </div>
                <ul className="pt-6">
                    {Menus.map((Menu, index) => (
                        <li
                            key={index}
                            onClick={() => navigate('/dashboard')}
                            className={`flex  rounded-md p-2 cursor-pointer hover:bg-light-white text-gray-300 text-sm items-center gap-x-4 
              ${Menu.gap ? "mt-9" : "mt-2"} ${index === 0 && "bg-light-white"
                                } `}
                        >
                            {Menu.src}
                            <span className={`${!open && "hidden"} origin-left duration-200`}>
                                {Menu.title}
                            </span>
                        </li>
                    ))}
                </ul>
            </div>

        </div>
    )
}

export default SideBar