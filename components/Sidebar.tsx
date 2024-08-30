import Image from "next/image";
import EventItem from "./EventItem"
import { RxDashboard } from "react-icons/rx";
import { CiCalendar } from "react-icons/ci";
import { CiBookmark } from "react-icons/ci";
import { IoBagCheckOutline } from "react-icons/io5";
import { VscSettings } from "react-icons/vsc";
import DarkModeSwitch from "./DarkModeSwitch";

const Sidebar = () => {
    return (
        <aside className="px-4 w-64 flex flex-col min-h-screen">
            <div className="p-6">
                <Image
                    src="/img/logo.png"
                    alt="logo"
                    height={30}
                    width={150}
                    className="dark:invert"
                />
            </div>

            <nav className="mt-6">
                <ul>
                    <li className="flex items-center gap-2 px-6 py-2 cursor-pointer text-gray-700 hover:bg-primary-accent dark:text-[#F0FDEC74] dark:hover:text-gray-700">
                        <RxDashboard /> Dashboard
                    </li>
                    <li className="flex items-center gap-2 px-6 py-2 cursor-pointer text-gray-700 hover:bg-primary-accent dark:text-[#F0FDEC74] dark:hover:text-gray-700">
                        <CiCalendar /> Calendar
                    </li>
                    <li className="flex items-center gap-2 px-6 py-2 cursor-pointer text-gray-700 hover:bg-primary-accent dark:text-[#F0FDEC74] dark:hover:text-gray-700">
                        <CiBookmark /> Events
                    </li>
                    <li className="flex items-center gap-2 px-6 py-2 cursor-pointer text-gray-700 hover:bg-primary-accent dark:text-[#F0FDEC74] dark:hover:text-gray-700">
                        <IoBagCheckOutline /> Offers & Deals
                    </li>
                    <li className="flex items-center gap-2 px-6 py-2 cursor-pointer text-gray-700 hover:bg-primary-accent dark:text-[#F0FDEC74] dark:hover:text-gray-700">
                        <VscSettings /> Settings
                    </li>
                </ul>
            </nav>

            <div className="mt-6 px-6">
                <h2
                    className="text-[#040f005d] font-semibold text-sm mb-2 dark:text-[#EDFDEB57]"
                >
                    {`Today's Events`}
                </h2>
                <EventItem
                    image="/img/user1.png"
                    title="Tourist"
                    location="The Viper Room"
                />
                <EventItem
                    image="/img/user2.png"
                    title="Jason Isbell"
                    location="The Wiltern"
                />
                <EventItem
                    image="/img/user3.png"
                    title="Brenn!"
                    location="The Troubadour"
                />
            </div>

            <div className="mt-auto p-6">
                <DarkModeSwitch />
                <div className="mt-4 text-sm text-gray-500">
                    <a href="#" className="block text-primary dark:font-semibold">Terms of Use</a>
                    <a href="#" className="block mt-2 text-primary dark:font-semibold">Privacy Policy</a>
                </div>
            </div>
        </aside>
    )
}

export default Sidebar