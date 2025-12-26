import { Mail, MessageCircle, MapPin, ChevronDown } from 'lucide-react';

export const metadata = {
    title: "Contact Us | PixelMelt Support",
    description: "Get in touch with the PixelMelt team for support, feedback, or business inquiries.",
};

export default function Contact() {
    return (
        <div className="bg-white dark:bg-gray-950 min-h-screen pb-20">
            {/* Header */}
            <div className="bg-gray-50 dark:bg-gray-900 border-b border-gray-100 dark:border-gray-800">
                <div className="max-w-4xl mx-auto px-4 py-16 text-center">
                    <h1 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                        Contact Support
                    </h1>
                    <p className="text-gray-500 dark:text-gray-400 max-w-xl mx-auto">
                        Have a question about HEIC conversion? Found a bug?
                        We are here to help.
                    </p>
                </div>
            </div>

            <div className="max-w-4xl mx-auto px-4 py-12">
                <div className="grid md:grid-cols-2 gap-8 items-center">

                    {/* Left Side: Contact Info */}
                    <div className="space-y-6">
                        <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-2xl border border-blue-100 dark:border-blue-800">
                            <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
                                <Mail className="text-blue-600" /> Email Us
                            </h3>
                            <p className="text-gray-600 dark:text-gray-300 mb-4 text-sm">
                                For general inquiries, bug reports, or partnership opportunities, send us an email directly.
                            </p>
                            <a
                                href="mailto:developer.neyabofficial@gmail.com"
                                className="text-xl font-bold text-blue-600 hover:underline"
                            >
                                developer.neyabofficial@gmail.com
                            </a>
                        </div>

                        <div className="bg-gray-50 dark:bg-gray-900 p-6 rounded-2xl border border-gray-100 dark:border-gray-800">
                            <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2 flex items-center gap-2">
                                <MessageCircle className="text-green-600" /> Response Time
                            </h3>
                            <p className="text-gray-600 dark:text-gray-400 text-sm">
                                We usually reply within <strong>24-48 hours</strong> on business days.
                            </p>
                        </div>
                    </div>

                    {/* Right Side: FAQ (User ko rokne ke liye) */}
                    <div className="bg-white dark:bg-gray-950 p-6 rounded-2xl border border-gray-100 dark:border-gray-800 shadow-sm">
                        <h3 className="font-bold text-gray-900 dark:text-white mb-6">Before you email us...</h3>

                        <div className="space-y-4">
                            <details className="group">
                                <summary className="flex cursor-pointer items-center justify-between font-medium text-gray-700 dark:text-gray-200">
                                    <span>My file conversion failed</span>
                                    <span className="transition group-open:rotate-180"><ChevronDown size={16} /></span>
                                </summary>
                                <p className="group-open:animate-fadeIn mt-2 text-sm text-gray-500">
                                    Please check if your file is corrupted. Try refreshing the page and uploading again.
                                </p>
                            </details>

                            <hr className="border-gray-100 dark:border-gray-800" />

                            <details className="group">
                                <summary className="flex cursor-pointer items-center justify-between font-medium text-gray-700 dark:text-gray-200">
                                    <span>Where are my photos saved?</span>
                                    <span className="transition group-open:rotate-180"><ChevronDown size={16} /></span>
                                </summary>
                                <p className="group-open:animate-fadeIn mt-2 text-sm text-gray-500">
                                    Photos are saved to your device's "Downloads" folder. We do not store them on our servers.
                                </p>
                            </details>

                            <hr className="border-gray-100 dark:border-gray-800" />

                            <details className="group">
                                <summary className="flex cursor-pointer items-center justify-between font-medium text-gray-700 dark:text-gray-200">
                                    <span>Is PixelMelt really free?</span>
                                    <span className="transition group-open:rotate-180"><ChevronDown size={16} /></span>
                                </summary>
                                <p className="group-open:animate-fadeIn mt-2 text-sm text-gray-500">
                                    Yes! PixelMelt is 100% free to use for both personal and commercial purposes. No hidden fees.
                                </p>
                            </details>

                            <hr className="border-gray-100 dark:border-gray-800" />

                            <details className="group">
                                <summary className="flex cursor-pointer items-center justify-between font-medium text-gray-700 dark:text-gray-200">
                                    <span>Does it work on Mobile?</span>
                                    <span className="transition group-open:rotate-180"><ChevronDown size={16} /></span>
                                </summary>
                                <p className="group-open:animate-fadeIn mt-2 text-sm text-gray-500">
                                    Absolutely. You can use PixelMelt on iPhone (iOS) and Android. You can even install it as an app.
                                </p>
                            </details>

                            <hr className="border-gray-100 dark:border-gray-800" />

                            <details className="group">
                                <summary className="flex cursor-pointer items-center justify-between font-medium text-gray-700 dark:text-gray-200">
                                    <span>Why is conversion slow?</span>
                                    <span className="transition group-open:rotate-180"><ChevronDown size={16} /></span>
                                </summary>
                                <p className="group-open:animate-fadeIn mt-2 text-sm text-gray-500">
                                    Since we process images locally on your device for privacy, the speed depends on your computer or phone's processor power.
                                </p>
                            </details>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}
