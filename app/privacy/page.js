import Link from 'next/link';
import { Shield, Lock, Eye, FileText, Mail } from 'lucide-react';

export const metadata = {
    title: "Privacy Policy | PixelMelt (Secure & Client-Side)",
    description: "Read how PixelMelt protects your privacy. We do not store, upload, or view your images. 100% Client-side processing.",
};

export default function Privacy() {
    return (
        <div className="bg-white dark:bg-gray-950 min-h-screen pb-20">
            {/* Header Section */}
            <div className="bg-gray-50 dark:bg-gray-900 border-b border-gray-100 dark:border-gray-800">
                <div className="max-w-4xl mx-auto px-4 py-12 text-center">
                    <h1 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                        Privacy Policy
                    </h1>
                    <p className="text-gray-500 dark:text-gray-400">
                        Last Updated: December 26, 2025
                    </p>
                </div>
            </div>

            <div className="max-w-4xl mx-auto px-4 py-12">
                
                {/* 🟢 THE TRUST BOX (Sabse Important) */}
                <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-100 dark:border-blue-800 rounded-2xl p-6 mb-12 flex flex-col md:flex-row gap-6 items-start md:items-center">
                    <div className="bg-blue-600 text-white p-3 rounded-lg shrink-0">
                        <Shield size={24} />
                    </div>
                    <div>
                        <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-1">
                            Key Takeaway: Zero-Upload Policy
                        </h3>
                        <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed">
                            Unlike other converters, <strong>PixelMelt does NOT upload your images to any server.</strong> 
                            All processing happens locally on your device (Client-Side). Your photos never leave your computer or phone.
                        </p>
                    </div>
                </div>

                {/* Legal Content */}
                <div className="prose prose-lg dark:prose-invert max-w-none text-gray-600 dark:text-gray-300">
                    
                    <section className="mb-10">
                        <h2 className="flex items-center gap-2 text-2xl font-bold text-gray-900 dark:text-white mb-4">
                            <FileText size={24} className="text-blue-600" /> 1. Introduction
                        </h2>
                        <p>
                            Welcome to <strong>PixelMelt</strong> ("we," "our," or "us"). We are committed to protecting your personal information and your right to privacy. 
                            If you have any questions or concerns about this privacy notice or our practices with regard to your personal information, please contact us.
                        </p>
                    </section>

                    <section className="mb-10">
                        <h2 className="flex items-center gap-2 text-2xl font-bold text-gray-900 dark:text-white mb-4">
                            <Lock size={24} className="text-blue-600" /> 2. Information We Collect
                        </h2>
                        <p>
                            We collect very minimal data to keep the website running securely.
                        </p>
                        <ul className="list-disc pl-6 space-y-2">
                            <li><strong>Personal Images:</strong> We DO NOT collect, store, or view your images. They remain on your device's browser cache and are deleted immediately after you close the tab.</li>
                            <li><strong>Log Data:</strong> Like most websites, we may collect standard log data such as IP address, browser type, and pages visited for analytics purposes.</li>
                        </ul>
                    </section>

                    <section className="mb-10">
                        <h2 className="flex items-center gap-2 text-2xl font-bold text-gray-900 dark:text-white mb-4">
                            <Eye size={24} className="text-blue-600" /> 3. Advertising & Cookies
                        </h2>
                        <p>
                            We may use third-party advertising companies (such as <strong>Google AdSense</strong>) to serve ads when you visit our website.
                        </p>
                        <ul className="list-disc pl-6 space-y-2">
                            <li>These companies may use cookies to serve ads based on your prior visits to our website or other websites on the Internet.</li>
                            <li>Google's use of advertising cookies enables it and its partners to serve ads to you based on your visit to PixelMelt and/or other sites on the Internet.</li>
                            <li>You can opt out of personalized advertising by visiting <a href="https://www.google.com/settings/ads" target="_blank" rel="nofollow" className="text-blue-600 hover:underline">Google Ad Settings</a>.</li>
                        </ul>
                    </section>

                    <section className="mb-10">
                        <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                            4. CCPA Privacy Rights (Do Not Sell My Info)
                        </h2>
                        <p>
                            Under the California Consumer Privacy Act (CCPA), among other rights, California consumers have the right to request that a business that collects a consumer's personal data disclose the categories and specific pieces of personal data that a business has collected about consumers.
                        </p>
                        <p>
                            Since PixelMelt does not sell your personal data or images, we are already compliant. However, if you make a request, we have one month to respond to you.
                        </p>
                    </section>

                    <section className="mb-10">
                        <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                            5. GDPR Data Protection Rights
                        </h2>
                        <p>
                            We would like to make sure you are fully aware of all of your data protection rights. Every user is entitled to the right to access, rectification, erasure, restrict processing, and data portability.
                        </p>
                    </section>

                    <section className="bg-gray-50 dark:bg-gray-900 p-6 rounded-xl border border-gray-100 dark:border-gray-800">
                        <h2 className="flex items-center gap-2 text-xl font-bold text-gray-900 dark:text-white mb-4">
                            <Mail size={20} className="text-blue-600" /> 6. Contact Us
                        </h2>
                        <p className="mb-4">
                            If you have any questions about this Privacy Policy, please contact us via email:
                        </p>
                        <a href="mailto:developer.neyabofficial@gmail.com" className="text-blue-600 font-semibold text-lg hover:underline">
                            developer.neyabofficial@gmail.com
                        </a>
                        <p className="text-sm text-gray-500 mt-4">
                            Note: Since we do not store images, we cannot "recover" or "delete" photos for you, as we never had them in the first place.
                        </p>
                    </section>

                </div>
            </div>
        </div>
    );
}