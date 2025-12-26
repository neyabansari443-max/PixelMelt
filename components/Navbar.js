"use client";

import Link from 'next/link';
import { Zap } from 'lucide-react';

export default function Navbar() {
    return (
        <nav className="w-full bg-white/80 dark:bg-gray-900/80 backdrop-blur-md border-b border-gray-100 dark:border-gray-800 sticky top-0 z-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    <Link href="/" className="flex items-center gap-2">
                        <div className="bg-blue-600 p-1.5 rounded-lg text-white">
                            <Zap size={20} fill="currentColor" />
                        </div>
                        <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-400 dark:to-indigo-400">
                            PixelMelt
                        </span>
                    </Link>

                    <div className="hidden md:flex items-center gap-8">
                        <Link href="/blog" className="text-sm font-medium text-gray-600 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400 transition-colors">
                            Blog
                        </Link>
                        <Link href="/about" className="text-sm font-medium text-gray-600 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400 transition-colors">
                            About
                        </Link>
                        <Link href="/contact" className="text-sm font-medium text-gray-600 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400 transition-colors">
                            Contact
                        </Link>
                    </div>
                </div>
            </div>
        </nav>
    );
}
