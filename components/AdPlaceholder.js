export default function AdPlaceholder({ className }) {
    return (
        <div className={`w-full bg-gray-100 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg flex items-center justify-center text-gray-400 text-sm ${className}`}>
            <div className="text-center p-4">
                <p className="font-semibold">Advertisement</p>
                <p className="text-xs mt-1">Ad Space</p>
            </div>
        </div>
    );
}
