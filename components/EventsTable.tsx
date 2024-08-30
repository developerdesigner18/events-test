"use client";
import React, { useState } from 'react';
import IEvent from "@/types/IEvent";
import ConfirmationModal from './ConfirmationModal';
import Image from 'next/image';

interface EventsTableProps {
    events: IEvent[];
    onEdit?: (index: number) => void;
    onDelete?: (index: number) => void;
}

const EventsTable: React.FC<EventsTableProps> = ({ events, onEdit, onDelete }) => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedEventIndex, setSelectedEventIndex] = useState<number | null>(null);

    const openModal = (index: number) => {
        setSelectedEventIndex(index);
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
        setSelectedEventIndex(null);
    };

    const confirmDelete = () => {
        if (selectedEventIndex !== null) {
            onDelete?.(selectedEventIndex);
            closeModal();
        }
    };

    const getBannerImageUrl = (file: File | null): string => {
        if (file) {
            return URL.createObjectURL(file);
        }
        return '';
    };

    return (
        <div className="overflow-x-auto w-full border dark:border-[#3a3b3a] rounded-md">
            <table className="w-[1200px] divide-y divide-gray-200 dark:divide-gray-700">
                <thead className="bg-gray-50 dark:bg-[#212220]">
                    <tr>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider whitespace-nowrap">Event Name</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider whitespace-nowrap">Date</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider whitespace-nowrap">Time Zone</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider whitespace-nowrap">Start Time</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider whitespace-nowrap">End Time</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider whitespace-nowrap">Description</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider whitespace-nowrap">Video Link</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider whitespace-nowrap">Banner Image</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider whitespace-nowrap">Actions</th>
                    </tr>
                </thead>
                <tbody className=" divide-y divide-gray-200 dark:divide-gray-700">
                    {events.map((event, index) => (
                        <tr key={index}>
                            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-gray-100">{event.eventName}</td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">{event.date}</td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">{event.timeZone}</td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">{event.startTime}</td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">{event.endTime}</td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">{event.description}</td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-green-600 hover:text-green-800 dark:text-green-400 dark:hover:text-green-600">
                                <a href={event.videoLink} target="_blank" rel="noopener noreferrer">{event.videoLink}</a>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">
                                {event.bannerImage && (
                                    <Image src={getBannerImageUrl(event.bannerImage)} alt="Banner" className="object-cover" height={64} width={64} />
                                )}
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                                <button
                                    onClick={() => onEdit?.(index)}
                                    className="text-blue-600 hover:text-blue-900 dark:text-blue-400 dark:hover:text-blue-600 mr-4"
                                >
                                    Edit
                                </button>
                                <button
                                    onClick={() => openModal(index)}
                                    className="text-red-600 hover:text-red-900 dark:text-red-400 dark:hover:text-red-600"
                                >
                                    Delete
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>

            <ConfirmationModal
                isOpen={isModalOpen}
                onClose={closeModal}
                onConfirm={confirmDelete}
                message="Are you sure you want to delete this event?"
            />
        </div>
    );
};

export default EventsTable;
