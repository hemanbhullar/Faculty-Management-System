import {
    UilEstate,
    UilClipboardAlt,
    UilUsersAlt,
    UilPackage,
    UilChart,
    UilUsdSquare,
} from "@iconscout/react-unicons";

//Sidebar Data
export const SidebarData = [
    {
        icon: UilEstate,
        heading: "Dashboard",
    },
    {
        icon: UilUsersAlt,
        heading: "FacultyList",
    },
    {
        icon: UilClipboardAlt,
        heading: "Assignments",
    },
    {
        icon: UilPackage,
        heading: "Rewards",
    },
    {
        icon: UilChart,
        heading:'Analytics'
    }
]

// Cards Data
export const CardsData =[
    {
        title: "Sales",
        color: {
            backGround: "linear-gradient(180deg,#bb67ff 0%, #c484f3 100%)",
            boxShadow: "0px 10px 20px 0px #e0c6f5"
        },
        barValue: 70,
        value:"25,970",
        png: UilUsdSquare,
        series: [
            {
                name: "Sales",
                data: [31, 40, 28, 51, 42, 109, 100],
            },
        ],
    },
    {
        title: "Revenue",
        color: {
            backGround: "pink",
            boxShadow: "0px 10px 20px 0px #e0c6f5"
        },
        barValue: 70,
        value:"25,970",
        png: UilUsdSquare,
        series: [
            {
                name: "Sales",
                data: [31, 40, 28, 51, 42, 109, 100],
            },
        ],
    },
    {
        title: "Expenses",
        color: {
            backGround: "orange",
            boxShadow: "0px 10px 20px 0px #e0c6f5"
        },
        barValue: 70,
        value:"25,970",
        png: UilUsdSquare,
        series: [
            {
                name: "Sales",
                data: [31, 40, 28, 51, 42, 109, 100],
            },
        ],
    },
]