import Image from "next/image";

interface EventItemProps {
    image: string;
    title: string;
    location: string;
}

const EventItem: React.FC<EventItemProps> = ({ image, title, location }) => {
    return (
        <div className="flex items-center space-x-4 py-2">
            <Image src={image} alt={title} height={40} width={40} className="rounded-md" />
            <div>
                <h3 className="text-xs text-[#1D211C] dark:text-gray-400">{title}</h3>
                <p className="text-sm text-black font-semibold dark:text-white">{location}</p>
            </div>
        </div>
    );
};

export default EventItem;

