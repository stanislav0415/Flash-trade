export default function DeleteModal({ message, onConfirm, onCancel }) {
    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
            
            <div
                className="absolute inset-0 bg-black/50"
                onClick={onCancel}
            />
        
            <div className="relative z-10 w-full max-w-xs bg-[#31363F] p-6 rounded-2xl shadow-2xl text-center">
                <h3 className="text-white text-lg font-bold mb-4">
                    {message}
                </h3>
                <div className="flex gap-3 justify-center">
                    <button
                        className="flex-1 py-2 rounded-xl font-bold text-white shadow-md bg-red-600 hover:bg-red-500"
                        onClick={onConfirm}
                    >
                        Yes, Delete
                    </button>
                    <button
                        className="flex-1 py-2 rounded-xl font-bold text-[#222831] shadow-md bg-gray-400 hover:bg-gray-300"
                        onClick={onCancel}
                    >
                        Cancel
                    </button>
                </div>
            </div>
        </div>
    );
}
