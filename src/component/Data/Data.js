import {
    UilEstate,
    UilClipboardAlt,
    UilUsersAlt,
    UilChart,
} from "@iconscout/react-unicons";

import { BsFillPersonFill } from "react-icons/bs";
// Recent Card Imports
import img1 from "./imgs/img1.png";
import img2 from "./imgs/img2.png";
import img3 from "./imgs/img3.png";

//Sidebar Data
export const SidebarData = [
    {
        icon: UilEstate,
        heading: "Dashboard",
        component: "dashboard",
    },
    {
        icon: UilUsersAlt,
        heading: "FacultyList",
        component: "facultyList",
    },
    {
        icon: UilClipboardAlt,
        heading: "Assignments",
        component: "assignments",
    },
    {
        icon: UilChart,
        heading:'Analytics',
        component: "analytics"
    }
]

// Cards Data
export const CardsData =[
    {
        title: "No of faculties",
        color: {
            backGround: "linear-gradient(180deg,#bb67ff 0%, #c484f3 100%)",
            boxShadow: "0px 10px 20px 0px #e0c6f5"
        },
        barValue:((500/(500+25970))*100).toFixed(2),
        value:"450",
        png: BsFillPersonFill,
        series: [
            {
                name: "Faculties",
                data: [31, 40, 28, 51, 42, 109, 100],
            },
        ],
    },
    {
        title: "Students",
        color: {
            backGround: "pink",
            boxShadow: "0px 10px 20px 0px #e0c6f5"
        },
        barValue: ((25970/(500+25970))*100).toFixed(2),
        value:"25,970",
        png: BsFillPersonFill,
        series: [
            {
                name: "Students",
                data: [10000, 12000, 14000, 13000, 18000, 17000, 25970],
            },
        ],
    },
]

// Recent Update Card Data
export const UpdatesData = [
    {
      img: img1,
      name: "Andrew Thomas",
      noti: "There is an event on communication skills",
      time: "10:00 am to 11:30 am",
    },
    {
      img: img2,
      name: "James Bond",
      noti: "The course of FEE is completed",
      time: "1-july-2023 to 9-oct-2023",
    },
    {
      img: img3,
      name: "Iron Man",
      noti: "There is an event on Time management",
      time: "2 hours ago",
    },
  ];