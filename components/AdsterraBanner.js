"use client";
import React, { useEffect, useRef } from 'react';

export default function AdsterraBanner({
    placementKey = "db54176c06786c5e955e7e6e72875ad2",
    width = 728,
    height = 90
}) {
    const adsterraKey = placementKey;
    const scrollContainerRef = useRef(null);
    const animationRef = useRef(null);

    // Construct the HTML content for the iframe
    // We use a data URI or srcDoc to isolate the script execution context
    const srcDoc = `
        <!DOCTYPE html>
        <html>
        <head>
            <style>
                body {
                    margin: 0;
                    padding: 0;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    background: transparent;
                    height: 100vh;
                    width: 100vw;
                }
            </style>
        </head>
        <body>
            <script type="text/javascript">
                atOptions = {
                    'key' : '${adsterraKey}',
                    'format' : 'iframe',
                    'height' : ${height},
                    'width' : ${width},
                    'params' : {}
                };
            </script>
            <script type="text/javascript" src="https://www.highperformanceformat.com/${adsterraKey}/invoke.js"></script>
        </body>
        </html>
    `;

    useEffect(() => {
        const container = scrollContainerRef.current;
        if (!container) return;

        let direction = 1; // 1 for right, -1 for left
        let speed = 0.5; // pixels per frame (slower for better readability)
        let isPaused = false;
        let waitTime = 0;

        const animate = () => {
            if (!container) return;

            if (!isPaused) {
                // Check if scrolling is needed
                if (container.scrollWidth > container.clientWidth) {

                    if (waitTime > 0) {
                        waitTime--;
                    } else {
                        container.scrollLeft += speed * direction;

                        // Reverse direction at edges with a pause
                        if (container.scrollLeft + container.clientWidth >= container.scrollWidth - 1) {
                            direction = -1;
                            waitTime = 100; // Pause for ~1.6 seconds (at 60fps)
                        } else if (container.scrollLeft <= 0) {
                            direction = 1;
                            waitTime = 100;
                        }
                    }
                }
            }
            animationRef.current = requestAnimationFrame(animate);
        };

        // Start animation
        animationRef.current = requestAnimationFrame(animate);

        // Event listeners for pausing
        const pause = () => isPaused = true;
        const resume = () => isPaused = false;

        container.addEventListener('mouseenter', pause);
        container.addEventListener('mouseleave', resume);
        container.addEventListener('touchstart', pause);
        container.addEventListener('touchend', resume);

        return () => {
            if (animationRef.current) cancelAnimationFrame(animationRef.current);
            if (container) {
                container.removeEventListener('mouseenter', pause);
                container.removeEventListener('mouseleave', resume);
                container.removeEventListener('touchstart', pause);
                container.removeEventListener('touchend', resume);
            }
        };
    }, []);

    return (
        <div className="w-full flex justify-center my-6">
            {/* Container that allows scrolling on small screens without breaking layout */}
            <div
                ref={scrollContainerRef}
                className="overflow-x-auto max-w-full no-scrollbar"
                style={{ scrollBehavior: 'auto' }} // Ensure smooth programmatic scrolling
            >
                <div
                    style={{ width: `${width}px`, height: `${height}px` }}
                    className="bg-gray-50 dark:bg-gray-800 rounded-lg border border-dashed border-gray-300 dark:border-gray-700 flex justify-center items-center mx-auto shrink-0"
                >
                    <iframe
                        title="Adsterra Banner"
                        width={width}
                        height={height}
                        srcDoc={srcDoc}
                        style={{ border: 'none', overflow: 'hidden' }}
                        scrolling="no"
                    />
                </div>
            </div>
        </div>
    );
}