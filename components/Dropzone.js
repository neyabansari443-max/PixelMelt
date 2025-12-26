"use client";

import { useState, useRef } from 'react';
import { UploadCloud } from 'lucide-react';

export default function Dropzone({ onFilesAdded, fileCount = 0 }) {
    const [isDragging, setIsDragging] = useState(false);
    const fileInputRef = useRef(null);

    const handleDragOver = (e) => {
        e.preventDefault();
        setIsDragging(true);
    };

    const handleDragLeave = () => {
        setIsDragging(false);
    };

    const handleDrop = (e) => {
        e.preventDefault();
        setIsDragging(false);
        if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
            onFilesAdded(Array.from(e.dataTransfer.files));
        }
    };

    const handleFileInput = (e) => {
        if (e.target.files && e.target.files.length > 0) {
            onFilesAdded(Array.from(e.target.files));
        }
    };

    const handleClick = () => {
        fileInputRef.current?.click();
    };

    return (
        <div
            className={`w-full max-w-2xl mx-auto p-10 border-2 border-dashed rounded-2xl transition-all duration-300 cursor-pointer flex flex-col items-center justify-center gap-4 ${isDragging
                    ? 'border-blue-500 bg-blue-50/10 scale-[1.02]'
                    : 'border-gray-300 hover:border-blue-400 hover:bg-gray-50/5'
                }`}
            onDragOver={handleDragOver}
            onDragLeave={handleDragLeave}
            onDrop={handleDrop}
            onClick={handleClick}
        >
            <input
                type="file"
                ref={fileInputRef}
                className="hidden"
                accept=".heic,.heif"
                multiple
                onChange={handleFileInput}
            />

            <div className={`w-20 h-20 flex items-center justify-center rounded-full transition-all ${isDragging || fileCount > 0 ? 'bg-blue-100 text-blue-600' : 'bg-gray-100 text-gray-500'}`}>
                {fileCount > 0 ? (
                    <span className="text-4xl font-bold">{fileCount}</span>
                ) : (
                    <UploadCloud size={40} />
                )}
            </div>

            <div className="text-center">
                <h3 className="text-xl font-semibold text-gray-700 dark:text-gray-200">
                    {fileCount > 0 ? 'Files Selected' : (isDragging ? 'Drop files here' : 'Drag & Drop HEIC files')}
                </h3>
                <p className="text-sm text-gray-500 mt-2">
                    {fileCount > 0 ? 'Click or drag to add more' : 'or click to browse from your device'}
                </p>
            </div>
        </div>
    );
}
