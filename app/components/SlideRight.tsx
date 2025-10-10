'use client';

import React, { useEffect, useRef, useState } from 'react';

export default function SlideRight({ children }: { children: React.ReactNode }) {
    const ref = useRef<HTMLDivElement>(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const el = ref.current;
        if (!el) return;

        if(typeof IntersectionObserver === 'undefined') { //Ignore for older browsers
            setIsVisible(true);
            return;
        }

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    setIsVisible(entry.isIntersecting);
                    if(entry.isIntersecting && el) {
                        observer.unobserve(el);
                    }
                });
            }, {
                root: null,
                rootMargin: '-100px',
                threshold: 0.05
            }
        );

        observer.observe(el);

        return () => observer.disconnect();
    }, []);

    return (
        <div ref={ref} className={
            `transform transition-transform transition-opacity duration-1000 ease-out ${isVisible ? 'translate-x-0 opacity-100' : '-translate-x-50 opacity-0'}`
        } aria-hidden={!isVisible}>
            {children}
        </div>
    );
}