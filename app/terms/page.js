import Link from 'next/link';
import { ScrollText, CheckCircle, AlertTriangle, Gavel, FileX } from 'lucide-react';

export const metadata = {
    title: "Terms of Service | PixelMelt",
    description: "Read the Terms of Service for using PixelMelt's secure HEIC converter tool.",
};

export default function Terms() {
    return (
        <div className="bg-white dark:bg-gray-950 min-h-screen pb-20">
            {/* Header Section */}
            <div className="bg-gray-50 dark:bg-gray-900 border-b border-gray-100 dark:border-gray-800">
                <div className="max-w-4xl mx-auto px-4 py-12 text-center">
                    <h1 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                        Terms of Service
                    </h1>
                    <p className="text-gray-500 dark:text-gray-400">
                        Last Updated: December 26, 2025
                    </p>
                </div>
            </div>

            <div className="max-w-4xl mx-auto px-4 py-12">
                
                {/* 🟢 QUICK SUMMARY BOX */}
                <div className="bg-gray-50 dark:bg-gray-900/50 border border-gray-200 dark:border-gray-800 rounded-2xl p-6 mb-12 flex flex-col md:flex-row gap-6 items-start md:items-center">
                    <div className="bg-gray-200 dark:bg-gray-800 text-gray-700 dark:text-gray-300 p-3 rounded-lg shrink-0">
                        <ScrollText size={24} />
                    </div>
                    <div>
                        <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-1">
                            In Plain English
                        </h3>
                        <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed">
                            PixelMelt is a free tool. Since conversion happens on your device, we are not responsible for your files. 
                            Use the tool as much as you want for personal or commercial use, but please don't try to hack or crash our site.
                        </p>
                    </div>
                </div>

                {/* Legal Content */}
                <div className="prose prose-lg dark:prose-invert max-w-none text-gray-600 dark:text-gray-300">
                    
                    <section className="mb-10">
                        <h2 className="flex items-center gap-2 text-2xl font-bold text-gray-900 dark:text-white mb-4">
                            <CheckCircle size={24} className="text-blue-600" /> 1. Acceptance of Terms
                        </h2>
                        <p>
                            By accessing and using <strong>PixelMelt</strong>, you accept and agree to be bound by the terms and provision of this agreement. 
                            If you do not agree to abide by these terms, please do not use this service.
                        </p>
                    </section>

                    <section className="mb-10">
                        <h2 className="flex items-center gap-2 text-2xl font-bold text-gray-900 dark:text-white mb-4">
                            <Gavel size={24} className="text-blue-600" /> 2. Use License
                        </h2>
                        <p>
                            Permission is granted to use PixelMelt for personal and commercial file conversion. However, you are restricted from:
                        </p>
                        <ul className="list-disc pl-6 space-y-2">
                            <li>Attempting to reverse engineer or extract the source code of the application.</li>
                            <li>Using the website to distribute malware or harmful content.</li>
                            <li>Running automated bots that may overload our systems (DDoS).</li>
                        </ul>
                    </section>

                    <section className="mb-10">
                        <h2 className="flex items-center gap-2 text-2xl font-bold text-gray-900 dark:text-white mb-4">
                            <AlertTriangle size={24} className="text-blue-600" /> 3. Disclaimer
                        </h2>
                        <p>
                            The materials on PixelMelt's website are provided on an 'as is' basis. Since the file conversion process happens securely in your browser (Client-Side), 
                            <strong> we cannot guarantee that every file will convert perfectly</strong> (e.g., corrupted files).
                        </p>
                        <p>
                            We do not store backups of your files. If you clear your browser cache, your converted files will be lost if not downloaded.
                        </p>
                    </section>

                    <section className="mb-10">
                        <h2 className="flex items-center gap-2 text-2xl font-bold text-gray-900 dark:text-white mb-4">
                            <FileX size={24} className="text-blue-600" /> 4. Limitations of Liability
                        </h2>
                        <p>
                            In no event shall PixelMelt be liable for any damages (including, without limitation, damages for loss of data or profit) arising out of the use or inability to use the materials on PixelMelt's website.
                        </p>
                    </section>

                    <section className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-xl border border-blue-100 dark:border-blue-800 mt-8">
                        <p className="font-medium text-gray-900 dark:text-white mb-2">
                            Need clarification?
                        </p>
                        <p className="text-sm">
                            If you have specific questions about these terms, feel free to email us at <span className="font-bold text-blue-600">developer.neyabofficial@gmail.com</span>.
                        </p>
                    </section>

                </div>
            </div>
        </div>
    );
}