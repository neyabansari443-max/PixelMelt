"use client";

import { Settings, Image as ImageIcon, Sliders } from 'lucide-react';

export default function SettingsBar({ format, setFormat, quality, setQuality }) {
    return (
        <div className="w-full max-w-2xl mx-auto bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700 mt-6">
            <div className="flex items-center gap-2 mb-4 text-gray-700 dark:text-gray-200">
                <Settings size={20} />
                <h3 className="font-semibold">Conversion Settings</h3>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
                {/* Format Selection */}
                <div>
                    <label className="block text-sm font-medium text-gray-600 dark:text-gray-400 mb-3 flex items-center gap-2">
                        <ImageIcon size={16} />
                        Output Format
                    </label>
                    <div className="flex gap-2">
                        {['image/jpeg', 'image/png', 'image/webp'].map((fmt) => (
                            <button
                                key={fmt}
                                onClick={() => setFormat(fmt)}
                                className={`flex-1 py-2 px-3 rounded-lg text-sm font-medium transition-all ${format === fmt
                                        ? 'bg-blue-600 text-white shadow-md'
                                        : 'bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600'
                                    }`}
                            >
                                {fmt.split('/')[1].toUpperCase()}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Quality Slider */}
                <div>
                    <label className="block text-sm font-medium text-gray-600 dark:text-gray-400 mb-3 flex items-center gap-2">
                        <Sliders size={16} />
                        Quality: {Math.round(quality * 100)}%
                    </label>
                    <input
                        type="range"
                        min="0.1"
                        max="1"
                        step="0.1"
                        value={quality}
                        onChange={(e) => setQuality(parseFloat(e.target.value))}
                        className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700 accent-blue-600"
                    />
                    <div className="flex justify-between text-xs text-gray-400 mt-1">
                        <span>Low Size</span>
                        <span>High Quality</span>
                    </div>
                </div>
            </div>
        </div>
    );
}
