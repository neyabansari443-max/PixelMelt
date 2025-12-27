"use client";

import { useState } from 'react';
import Link from 'next/link';
import { Clock, Calendar, ChevronRight, Tag, User, Users, Star, ShieldCheck, X } from 'lucide-react';
import AdsterraBanner from '@/components/AdsterraBanner';

// FULL CONTENT STRATEGY (8 Posts)
const BLOG_POSTS = [
    {
        id: 1,
        slug: "danger-of-uploading-photos",
        title: "WARNING: Stop Uploading Your Personal Photos to Online Converters",
        excerpt: "Did you know most 'Free' converters store your images on their servers? Discover the hidden privacy risks and why running conversion locally is the only safe option.",
        category: "Privacy Alert",
        author: "Neyab (Security Expert)",
        date: "Dec 26, 2025",
        readTime: "5 min read",
        image: "/blog_privacy.png",
        content: `
            <p>In today's digital age, we take photos of everything: our families, our documents, our private moments. But when we need to convert these photos from HEIC to JPG, we often turn to the first "Free Online Converter" we find on Google.</p>
            <p><strong>Here is the scary truth:</strong> Most of these websites require you to upload your photos to their servers. Once your photo leaves your device, you lose control over it.</p>
            <h3>The Hidden Risks</h3>
            <ul>
                <li><strong>Data Breaches:</strong> If the server is hacked, your photos could be leaked.</li>
                <li><strong>Data Mining:</strong> Some services analyze your photos to train AI models or sell data to advertisers.</li>
                <li><strong>Permanent Storage:</strong> Even if they say they delete files after 24 hours, backups might exist for years.</li>
            </ul>
            <h3>The Solution: Client-Side Conversion</h3>
            <p>This is why we built PixelMelt. Unlike other tools, PixelMelt runs entirely in your browser. Your photos never leave your computer or phone. The conversion happens right on your device's processor (CPU), ensuring 100% privacy.</p>
            <p>Next time you need to convert a file, ask yourself: Is it worth the risk?</p>
        `
    },
    {
        id: 2,
        slug: "how-to-open-heic-windows-11",
        title: "How to Open HEIC Files on Windows 10 & 11 (Free Methods)",
        excerpt: "Frustrated that your PC can't see iPhone photos? You don't need to buy paid software. Here is the ultimate guide to viewing and converting HEIC files for free.",
        category: "Windows Guide",
        author: "Tech Team",
        date: "Dec 25, 2025",
        readTime: "6 min read",
        image: "/blog_speed.png", // Fallback image
        content: `
            <p>If you are an iPhone user with a Windows PC, you know the struggle. You transfer your photos, and suddenly... nothing opens. Windows tells you that you need a "HEIF Image Extension" which often costs money in the Microsoft Store.</p>
            <h3>Method 1: The Paid Way (Microsoft Store)</h3>
            <p>Microsoft offers an official extension, but it sometimes costs $0.99. While cheap, it's annoying to pay for something that should be free.</p>
            <h3>Method 2: The Free & Fast Way (PixelMelt)</h3>
            <p>Instead of installing system extensions that might slow down your PC, you can simply drag your HEIC files into PixelMelt. We convert them to JPG instantly, which every computer can open.</p>
            <h3>Method 3: iPhone Settings</h3>
            <p>You can also change your iPhone settings to save photos as JPG. Go to <strong>Settings > Camera > Formats</strong> and select "Most Compatible". However, this will use more storage space on your phone.</p>
        `
    },
    {
        id: 3,
        slug: "heic-vs-jpg-quality-comparison",
        title: "HEIC vs JPG: Which Format is Better for Photography?",
        excerpt: "We compared file size and image quality. HEIC saves space, but JPG works everywhere. Find out which format you should be using for your backups.",
        category: "Comparison",
        author: "Sarah Jenkin",
        date: "Dec 24, 2025",
        readTime: "4 min read",
        image: "/blog_comparison.png",
        content: `
            <p>Apple switched to HEIC (High Efficiency Image Container) for a reason. It's technically superior to JPG. But is it better for <em>you</em>?</p>
            <h3>1. File Size</h3>
            <p>HEIC files are about 50% smaller than JPGs with the same quality. This means you can store twice as many photos on your iPhone.</p>
            <h3>2. Image Quality</h3>
            <p>HEIC supports 16-bit color, while JPG only supports 8-bit. This means HEIC captures more vibrant colors and smoother gradients, especially in sky and skin tones.</p>
            <h3>3. Compatibility (The Dealbreaker)</h3>
            <p>This is where JPG wins. Every device, from a 10-year-old TV to a brand new Android phone, can open a JPG. HEIC is still struggling with compatibility on Windows and the web.</p>
            <h3>Verdict</h3>
            <p>Shoot in HEIC to save space, but convert to JPG using PixelMelt before sharing or backing up to a PC.</p>
        `
    },
    {
        id: 4,
        slug: "bulk-convert-iphone-photos",
        title: "How to Convert 100+ iPhone Photos to JPG in Seconds",
        excerpt: "Manually converting photos one by one is a waste of time. Learn how to use PixelMelt's bulk processing engine to convert entire albums instantly.",
        category: "Productivity",
        author: "Alex Morgan",
        date: "Dec 23, 2025",
        readTime: "3 min read",
        image: "/blog_speed.png",
        content: `
            <p>Imagine you just came back from a vacation with 500 photos. You want to share them with your family, but they can't open HEIC files. Converting them one by one would take hours.</p>
            <h3>The Power of Bulk Processing</h3>
            <p>PixelMelt is designed for speed. Our bulk engine processes files in parallel.</p>
            <ol>
                <li><strong>Drag & Drop:</strong> Select all 500 photos and drop them into the PixelMelt window.</li>
                <li><strong>Auto-Process:</strong> The app immediately starts converting them.</li>
                <li><strong>Download ZIP:</strong> Once done, click "Download All" to get a single ZIP file with all your JPGs.</li>
            </ol>
            <p>It's that simple. No software to install, no waiting for uploads.</p>
        `
    },
    {
        id: 5,
        slug: "what-is-client-side-conversion",
        title: "What is 'Client-Side' Conversion and Why It Matters?",
        excerpt: "PixelMelt uses WebAssembly to run code inside your browser. This means your data never travels the internet. A deep dive into modern web security.",
        category: "Technology",
        author: "Dev Team",
        date: "Dec 22, 2025",
        readTime: "7 min read",
        image: "/blog_privacy.png",
        content: `
            <p>Traditional web tools work like this: You upload a file -> Server processes it -> You download the result. This is slow and insecure.</p>
            <h3>The Modern Approach: WebAssembly</h3>
            <p>PixelMelt uses advanced browser technologies to run the conversion code <em>inside</em> your Chrome or Edge browser. It's like having a mini-program running on your computer, but without installing anything.</p>
            <h3>Benefits</h3>
            <ul>
                <li><strong>Privacy:</strong> Data never leaves your device.</li>
                <li><strong>Speed:</strong> No upload/download time.</li>
                <li><strong>Offline:</strong> Works without internet once loaded.</li>
            </ul>
        `
    },
    {
        id: 6,
        slug: "fix-photoshop-heic-error",
        title: "Fixed: Photoshop Cannot Open HEIC Files",
        excerpt: "Getting an error when dragging iPhone photos into Photoshop? Here is the quickest workflow to fix compatibility issues for designers and editors.",
        category: "Design Tips",
        author: "Sarah Jenkin",
        date: "Dec 20, 2025",
        readTime: "4 min read",
        image: "/blog_speed.png", // Fallback
        content: `
            <p>Adobe Photoshop is the industry standard, but it can be picky with file formats. Many users report errors when trying to open HEIC files directly from an iPhone.</p>
            <h3>Why does this happen?</h3>
            <p>Photoshop relies on the operating system's codecs. If Windows doesn't have the HEIC codec, Photoshop can't read the file.</p>
            <h3>The Fix</h3>
            <p>The quickest fix isn't to reinstall Photoshop. It's to convert the asset to a high-quality PNG or JPG first. PixelMelt allows you to convert to PNG (which supports transparency and high quality) perfect for design work.</p>
        `
    },
    {
        id: 7,
        slug: "reduce-image-size-web",
        title: "WebP vs JPEG: Reducing Image Size for Websites",
        excerpt: "Making your website faster starts with image optimization. Learn how converting HEIC to WebP can reduce file size by 40% without losing quality.",
        category: "Web Dev",
        author: "Neyab",
        date: "Dec 18, 2025",
        readTime: "5 min read",
        image: "/blog_comparison.png",
        content: `
            <p>If you are a web developer or blogger, you know that page speed is everything. Large images slow down your site and hurt your SEO.</p>
            <h3>Enter WebP</h3>
            <p>WebP is a modern image format developed by Google. It provides superior lossless and lossy compression for images on the web.</p>
            <p>PixelMelt allows you to convert your high-res HEIC photos directly to WebP. This often results in files that are 30-50% smaller than a comparable JPG, with no visible loss in quality.</p>
        `
    },
    {
        id: 8,
        slug: "transfer-photos-iphone-pc",
        title: "The Easiest Way to Transfer Photos from iPhone to PC",
        excerpt: "USB cables often fail or transfer incompatible files. Use this browser-based method to get your memories onto your computer in a universal format.",
        category: "Apple Tips",
        author: "Alex Morgan",
        date: "Dec 15, 2025",
        readTime: "5 min read",
        image: "/blog_speed.png", // Fallback
        content: `
            <p>We've all been there. You plug in your iPhone, open the DCIM folder, and see a bunch of random folders with strange names. You copy the files, but they are all .HEIC and you can't view them.</p>
            <h3>The Wireless Workflow</h3>
            <p>Instead of fighting with cables and drivers, try this:</p>
            <ol>
                <li>AirDrop or transfer your photos to your Mac/PC.</li>
                <li>Open PixelMelt.com.</li>
                <li>Drag the entire folder of HEIC files in.</li>
                <li>Convert and Download.</li>
            </ol>
            <p>It turns a frustrating 30-minute ordeal into a 2-minute task.</p>
        `
    }
];

export default function Blog() {
    const [selectedPost, setSelectedPost] = useState(null);

    // Schema Markup
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "Blog",
        "name": "PixelMelt Knowledge Hub",
        "description": "Privacy focused guides on HEIC conversion.",
        "url": "https://pixelmelt.com/blog"
    };

    return (
        <div className="bg-white dark:bg-gray-950 min-h-screen pb-20">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />

            {/* Header Section */}
            <div className="bg-gray-50 dark:bg-gray-900 border-b border-gray-100 dark:border-gray-800">
                <div className="max-w-6xl mx-auto px-4 py-10 md:py-16 text-center">
                    <span className="text-blue-600 font-semibold tracking-wide uppercase text-sm mb-2 block">
                        Knowledge Hub
                    </span>
                    {/* Changed text-xl to text-3xl for mobile visibility */}
                    <h1 className="text-3xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
                        Everything about <br />
                        <span className="text-blue-600">Secure Image Conversion</span>
                    </h1>
                    <p className="text-gray-500 dark:text-gray-400 max-w-2xl mx-auto text-lg">
                        Guides, privacy tips, and technical deep-dives. Learn why thousands of users trust Client-Side conversion.
                    </p>
                </div>
            </div>

            {/* Blog Grid */}
            <div className="max-w-6xl mx-auto px-4 py-8 md:py-12">
                {/* Added grid-cols-1 for explicit mobile layout */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 md:gap-8">
                    {BLOG_POSTS.map((post, index) => (
                        <div key={post.id} className="contents">
                            <article
                                className="group flex flex-col bg-white dark:bg-gray-900 rounded-2xl border border-gray-100 dark:border-gray-800 overflow-hidden hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
                            >
                                {/* Image Area */}
                                <div className="h-48 md:h-56 w-full overflow-hidden relative bg-gray-100">
                                    <img
                                        src={post.image}
                                        alt={post.title}
                                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                                    />
                                    <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-semibold text-blue-600 flex items-center gap-1 shadow-sm">
                                        <Tag size={12} /> {post.category}
                                    </div>
                                </div>

                                <div className="p-5 md:p-6 flex-1 flex flex-col">
                                    <div className="flex items-center gap-4 text-xs font-medium text-gray-500 dark:text-gray-400 mb-3">
                                        <span className="flex items-center gap-1"><Calendar size={12} /> {post.date}</span>
                                        <span className="flex items-center gap-1"><Clock size={12} /> {post.readTime}</span>
                                    </div>

                                    <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-blue-600 transition-colors cursor-pointer" onClick={() => setSelectedPost(post)}>
                                        {post.title}
                                    </h2>
                                    <p className="text-sm text-gray-600 dark:text-gray-400 mb-6 leading-relaxed line-clamp-3">
                                        {post.excerpt}
                                    </p>

                                    <div className="mt-auto pt-4 border-t border-gray-100 dark:border-gray-800">
                                        <button
                                            onClick={() => setSelectedPost(post)}
                                            className="flex items-center gap-1 text-sm font-semibold text-blue-600 hover:gap-2 transition-all"
                                        >
                                            Read Article <ChevronRight size={16} />
                                        </button>
                                    </div>
                                </div>
                            </article>

                            {/* Insert Ad after every 4 posts */}
                            {(index + 1) % 4 === 0 && (
                                <div className="col-span-1 md:col-span-2 flex justify-center">
                                    {(index + 1) === 4 ? (
                                        <AdsterraBanner />
                                    ) : (
                                        <AdsterraBanner
                                            placementKey="f5705adaff384f3131579da6032b0d65"
                                            width={300}
                                            height={250}
                                        />
                                    )}




                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>

            {/* TRUSTED BY USERS SECTION */}
            <div className="max-w-4xl mx-auto px-4 mt-8 mb-12">
                <div className="bg-gradient-to-r from-blue-600 to-indigo-700 rounded-2xl p-6 md:p-8 text-center text-white shadow-xl relative overflow-hidden">
                    <div className="absolute top-0 right-0 -mr-10 -mt-10 w-40 h-40 bg-white opacity-10 rounded-full blur-2xl"></div>
                    <div className="absolute bottom-0 left-0 -ml-10 -mb-10 w-40 h-40 bg-white opacity-10 rounded-full blur-2xl"></div>

                    <div className="relative z-10 flex flex-col items-center">
                        <div className="flex -space-x-3 mb-4">
                            {[1, 2, 3, 4].map((i) => (
                                <div key={i} className="w-10 h-10 rounded-full border-2 border-blue-500 bg-gray-200 flex items-center justify-center text-gray-500 text-xs font-bold overflow-hidden">
                                    <img src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${i}`} alt="User" />
                                </div>
                            ))}
                            <div className="w-10 h-10 rounded-full border-2 border-blue-500 bg-white text-blue-600 flex items-center justify-center text-xs font-bold">
                                1k+
                            </div>
                        </div>

                        <h3 className="text-2xl font-bold mb-2 flex items-center gap-2 flex-wrap justify-center">
                            Trusted by 1,000+ Users <ShieldCheck size={24} className="text-green-300" />
                        </h3>
                        <p className="text-blue-100 mb-6 max-w-lg">
                            Join the community of privacy-conscious users who convert their images securely every day.
                        </p>

                        <div className="flex items-center gap-1 text-yellow-300 bg-white/10 px-4 py-1 rounded-full text-sm font-medium">
                            <Star size={14} fill="currentColor" />
                            <Star size={14} fill="currentColor" />
                            <Star size={14} fill="currentColor" />
                            <Star size={14} fill="currentColor" />
                            <Star size={14} fill="currentColor" />
                            <span className="ml-1 text-white">4.9/5 Rating</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* Modal */}
            {selectedPost && (
                <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm animate-in fade-in duration-200">
                    <div className="bg-white dark:bg-gray-900 w-full max-w-3xl max-h-[85vh] md:max-h-[90vh] rounded-2xl shadow-2xl overflow-hidden flex flex-col animate-in zoom-in-95 duration-200">
                        {/* Modal Header Image */}
                        <div className="h-40 md:h-48 w-full relative shrink-0">
                            <img
                                src={selectedPost.image}
                                alt={selectedPost.title}
                                className="w-full h-full object-cover"
                            />
                            <button
                                onClick={() => setSelectedPost(null)}
                                className="absolute top-4 right-4 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-colors"
                            >
                                <X size={20} />
                            </button>
                        </div>

                        {/* Modal Content */}
                        <div className="p-5 md:p-8 overflow-y-auto">
                            <div className="flex items-center gap-3 text-sm text-blue-600 font-medium mb-4">
                                <span className="bg-blue-50 dark:bg-blue-900/30 px-3 py-1 rounded-full">
                                    {selectedPost.category}
                                </span>
                                <span className="text-gray-400">•</span>
                                <span className="text-gray-500 dark:text-gray-400">{selectedPost.date}</span>
                            </div>

                            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-6">
                                {selectedPost.title}
                            </h2>

                            <div
                                className="prose dark:prose-invert max-w-none text-gray-600 dark:text-gray-300 text-sm md:text-base"
                                dangerouslySetInnerHTML={{ __html: selectedPost.content }}
                            />

                            {/* Responsive Footer: Stacks on mobile */}
                            <div className="mt-8 pt-6 border-t border-gray-100 dark:border-gray-800 flex flex-col sm:flex-row items-center justify-between gap-4">
                                <div className="flex items-center gap-3 w-full sm:w-auto">
                                    <div className="w-10 h-10 bg-gray-200 rounded-full overflow-hidden shrink-0">
                                        <img src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${selectedPost.author}`} alt="Author" />
                                    </div>
                                    <div>
                                        <p className="text-sm font-bold text-gray-900 dark:text-white">{selectedPost.author}</p>
                                        <p className="text-xs text-gray-500">Author</p>
                                    </div>
                                </div>
                                <button
                                    onClick={() => setSelectedPost(null)}
                                    className="w-full sm:w-auto px-6 py-3 md:py-2 bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-lg font-medium transition-colors text-center"
                                >
                                    Close Article
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}