import Link from 'next/link';
import { Shield, Zap, Lock, Globe, Heart, Code } from 'lucide-react';

export const metadata = {
    title: "About PixelMelt - The Privacy-First HEIC Converter",
    description: "Learn how PixelMelt protects your privacy by converting HEIC images directly in your browser without uploading to any server.",
};

export default function About() {
    return (
        <div className="bg-white dark:bg-gray-950 min-h-screen">
            {/* Hero Section */}
            <div className="max-w-4xl mx-auto px-4 pt-20 pb-12 text-center">
                <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
                    We Believe Your Photos <br />
                    <span className="text-blue-600">Should Stay Yours.</span>
                </h1>
                <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto leading-relaxed">
                    Most online converters upload your personal images to cloud servers. PixelMelt is different. 
                    We built a <strong>Client-Side Engine</strong> that converts files directly on your device. 
                    Zero Uploads. Zero Privacy Risk.
                </p>
            </div>

            {/* Features Grid (SEO & Trust) */}
            <div className="max-w-6xl mx-auto px-4 py-12">
                <div className="grid md:grid-cols-3 gap-8">
                    {/* Feature 1 */}
                    <div className="bg-gray-50 dark:bg-gray-900 p-8 rounded-2xl border border-gray-100 dark:border-gray-800">
                        <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center mb-6">
                            <Shield className="text-blue-600 dark:text-blue-400" size={24} />
                        </div>
                        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">100% Privacy Focused</h3>
                        <p className="text-gray-600 dark:text-gray-400">
                            Unlike other tools, your photos never leave your computer or phone. The conversion logic runs inside your browser using WebAssembly technology.
                        </p>
                    </div>

                    {/* Feature 2 */}
                    <div className="bg-gray-50 dark:bg-gray-900 p-8 rounded-2xl border border-gray-100 dark:border-gray-800">
                        <div className="w-12 h-12 bg-green-100 dark:bg-green-900/30 rounded-lg flex items-center justify-center mb-6">
                            <Zap className="text-green-600 dark:text-green-400" size={24} />
                        </div>
                        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">Lightning Fast</h3>
                        <p className="text-gray-600 dark:text-gray-400">
                            Since there is no "Uploading" or "Downloading" wait time, conversion happens instantly. Perfect for bulk converting hundreds of photos.
                        </p>
                    </div>

                    {/* Feature 3 */}
                    <div className="bg-gray-50 dark:bg-gray-900 p-8 rounded-2xl border border-gray-100 dark:border-gray-800">
                        <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900/30 rounded-lg flex items-center justify-center mb-6">
                            <Globe className="text-purple-600 dark:text-purple-400" size={24} />
                        </div>
                        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">Works Offline</h3>
                        <p className="text-gray-600 dark:text-gray-400">
                            PixelMelt is a Progressive Web App (PWA). Once loaded, you can turn off your internet and still convert HEIC to JPG securely.
                        </p>
                    </div>
                </div>
            </div>

            {/* The Story Section */}
            <div className="max-w-4xl mx-auto px-4 py-16">
                <div className="prose prose-lg dark:prose-invert mx-auto">
                    <h2>The Story Behind PixelMelt</h2>
                    <p>
                        It started with a simple frustration. We wanted to convert iPhone photos (HEIC) to JPG for a Windows laptop. 
                        Every website we found asked us to "Upload" our files.
                    </p>
                    <p>
                        We asked ourselves: <em>"Why do I need to send my family photos to a server in another country just to change the file format?"</em>
                    </p>
                    <p>
                        We realized there was no fast, secure, and modern tool for this simple task. So, we coded <strong>PixelMelt</strong>. 
                        By leveraging modern browser capabilities, we eliminated the need for backend servers, making this tool free for everyone forever.
                    </p>
                    
                    <h3>Our Tech Stack</h3>
                    <p>
                        For the developers out there, PixelMelt is built with:
                    </p>
                    <ul>
                        <li><strong>Next.js 14</strong> for speed and SEO.</li>
                        <li><strong>Tailwind CSS</strong> for a clean interface.</li>
                        <li><strong>Client-Side Libraries</strong> for privacy-first processing.</li>
                    </ul>
                </div>

                {/* CTA Box */}
                <div className="mt-16 bg-blue-600 rounded-2xl p-8 md:p-12 text-center text-white">
                    <h2 className="text-3xl font-bold mb-4">Ready to convert securely?</h2>
                    <p className="text-blue-100 mb-8 max-w-2xl mx-auto">
                        Join thousands of users who trust PixelMelt for their image conversion needs. No signup required.
                    </p>
                    <Link 
                        href="/" 
                        className="inline-block bg-white text-blue-600 font-bold py-3 px-8 rounded-full hover:bg-gray-100 transition-transform hover:scale-105 shadow-lg"
                    >
                        Start Converting Now
                    </Link>
                </div>
            </div>
            
            {/* Contact Footer Area */}
            <div className="max-w-4xl mx-auto px-4 pb-20 text-center text-gray-500 text-sm">
                <p>Designed & Developed with <Heart size={14} className="inline text-red-500" /> by the PixelMelt Team.</p>
                <p className="mt-2">Contact: hello@pixelmelt.com</p>
            </div>
        </div>
    );
}