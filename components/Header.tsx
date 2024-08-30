import Image from "next/image";
import { CiSearch } from "react-icons/ci";
import { IoIosNotificationsOutline } from "react-icons/io";

const Header = () => {
    return (
        <header className="h-20 p-6 flex justify-between items-center">
            <div className="flex justify-center items-center gap-4 w-[300px] h-10 px-2 border dark:border-[#3a3b3a] rounded bg-white dark:bg-[#212220]">
                <CiSearch className="text-black dark:text-white text-xl" />
                <input
                    type="text"
                    placeholder="Search ShowOps"
                    className="flex-1 h-full text-sm text-gray-700 dark:text-gray-300 bg-transparent outline-none"
                />
            </div>
            <div className="flex items-center space-x-4">
                <button className="w-10 h-10 relative text-gray-500 dark:text-gray-300 bg-gray-100 dark:bg-[#212220] p-1 rounded-md">
                    <IoIosNotificationsOutline className="text-2xl mx-auto" />
                </button>
                <Image
                    src={"/img/profile.png"}
                    alt="profile"
                    height={40}
                    width={40}
                    className="rounded-md"
                />
            </div>
        </header>
    );
};

export default Header;
