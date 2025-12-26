"use client";

import { FileImage, CheckCircle, XCircle, Loader2, Download, Trash2 } from 'lucide-react';

export default function FileList({ files, onRemove, onDownload, onDownloadAll, onClearAll }) {
    if (files.length === 0) return null;

    const allDone = files.every(f => f.status === 'done');
    const anyDone = files.some(f => f.status === 'done');

    return (
        <div className="w-full max-w-2xl mx-auto mt-8">
            <div className="flex justify-between items-center mb-4">
                <h3 className="font-semibold text-gray-700 dark:text-gray-200">
                    Files ({files.length})
                </h3>
                <div className="flex gap-2">
                    {anyDone && (
                        <button
                            onClick={onDownloadAll}
                            className="flex items-center gap-2 px-4 py-2 bg-green-600 text-white rounded-lg text-sm hover:bg-green-700 transition-colors"
                        >
                            <Download size={16} />
                            Download All (ZIP)
                        </button>
                    )}
                    <button
                        onClick={onClearAll}
                        className="flex items-center gap-2 px-4 py-2 bg-red-50 text-red-600 rounded-lg text-sm hover:bg-red-100 transition-colors"
                    >
                        <Trash2 size={16} />
                        Clear All
                    </button>
                </div>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700 overflow-hidden">
                {files.map((file, index) => (
                    <div
                        key={`${file.name}-${index}`}
                        className="flex items-center justify-between p-4 border-b last:border-b-0 border-gray-100 dark:border-gray-700"
                    >
                        <div className="flex items-center gap-3 overflow-hidden">
                            <div className="p-2 bg-gray-100 dark:bg-gray-700 rounded-lg">
                                <FileImage size={24} className="text-gray-500 dark:text-gray-400" />
                            </div>
                            <div className="min-w-0">
                                <p className="font-medium text-sm text-gray-700 dark:text-gray-200 truncate max-w-[200px]">
                                    {file.name}
                                </p>
                                <p className="text-xs text-gray-500">
                                    {(file.size / 1024 / 1024).toFixed(2)} MB
                                </p>
                            </div>
                        </div>

                        <div className="flex items-center gap-4">
                            {file.status === 'converting' && (
                                <span className="flex items-center gap-2 text-xs text-blue-600 bg-blue-50 px-2 py-1 rounded-full">
                                    <Loader2 size={12} className="animate-spin" />
                                    Converting...
                                </span>
                            )}
                            {file.status === 'done' && (
                                <span className="flex items-center gap-2 text-xs text-green-600 bg-green-50 px-2 py-1 rounded-full">
                                    <CheckCircle size={12} />
                                    Ready
                                </span>
                            )}
                            {file.status === 'error' && (
                                <span className="flex items-center gap-2 text-xs text-red-600 bg-red-50 px-2 py-1 rounded-full">
                                    <XCircle size={12} />
                                    Failed
                                </span>
                            )}

                            <div className="flex gap-2">
                                {file.status === 'done' && (
                                    <button
                                        onClick={() => onDownload(file)}
                                        className="p-2 text-gray-500 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors"
                                        title="Download"
                                    >
                                        <Download size={18} />
                                    </button>
                                )}
                                <button
                                    onClick={() => onRemove(index)}
                                    className="p-2 text-gray-400 hover:text-red-600 hover:bg-red-50 rounded-lg transition-colors"
                                    title="Remove"
                                >
                                    <Trash2 size={18} />
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
