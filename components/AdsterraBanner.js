"use client";
import { useEffect, useRef } from 'react';

export default function AdsterraBanner() {
    const bannerRef = useRef(null);

    useEffect(() => {
        if (bannerRef.current && !bannerRef.current.firstChild) {

            const conf = document.createElement('script');
            const script = document.createElement('script');

            // Tumhari Asli Key (Screenshot se li gayi hai)
            const adsterraKey = "db54176c06786c5e955e7e6e72875ad2";

            conf.type = 'text/javascript';
            conf.innerHTML = `
                atOptions = {
                    'key' : '${adsterraKey}',
                    'format' : 'iframe',
                    'height' : 100,
                    'width' : 728,
                    'params' : {}
                };
            `;

            script.type = 'text/javascript';
            // Note: Adsterra usually 'highperformanceformat.com' ya 'variousformatscontent.com' use karta hai.
            // Agar ad load na ho, toh bas domain name change kar lena.
            script.src = `https://www.highperformanceformat.com/${adsterraKey}/invoke.js`;

            bannerRef.current.appendChild(conf);
            bannerRef.current.appendChild(script);
        }
    }, []);

    return (
        <div
            ref={bannerRef}
            className="flex justify-center items-center my-6 overflow-hidden bg-gray-50 dark:bg-gray-800 rounded-lg border border-dashed border-gray-300 dark:border-gray-700"
            style={{ minHeight: '110px', minWidth: '728px' }}
        >
            {/* Ad yahan load hoga */}
        </div>
    );
}