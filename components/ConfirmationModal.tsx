import React from "react";

interface ConfirmationModalProps {
    isOpen: boolean;
    onClose: () => void;
    onConfirm: () => void;
    message: string;
}

const ConfirmationModal: React.FC<ConfirmationModalProps> = ({ isOpen, onClose, onConfirm, message }) => {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 flex items-center justify-center z-50">
            <div className="fixed inset-0 bg-black opacity-50"></div>
            <div className="bg-white dark:bg-gray-800 text-gray-800 dark:text-white rounded-lg overflow-hidden shadow-xl max-w-sm w-full z-50">
                <div className="px-6 py-4">
                    <h2 className="text-lg font-semibold">Confirmation</h2>
                    <p className="mt-2 text-gray-600 dark:text-gray-300">{message}</p>
                </div>
                <div className="px-6 py-4 bg-gray-100 dark:bg-gray-700 flex justify-end">
                    <button
                        onClick={onClose}
                        className="px-4 py-2 bg-gray-300 dark:bg-gray-600 text-gray-700 dark:text-white rounded-md shadow-sm hover:bg-gray-400 dark:hover:bg-gray-500 focus:outline-none mr-2"
                    >
                        Cancel
                    </button>
                    <button
                        onClick={onConfirm}
                        className="px-4 py-2 bg-red-600 dark:bg-red-700 text-white rounded-md shadow-sm hover:bg-red-700 dark:hover:bg-red-600 focus:outline-none"
                    >
                        Confirm
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ConfirmationModal;
