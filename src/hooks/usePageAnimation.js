import { useEffect, useRef } from 'react';

export const usePageAnimation = () => {
    const containerRef = useRef(null);

    useEffect(() => {
        if (containerRef.current) {
            containerRef.current.style.opacity = 0;
            containerRef.current.style.transform = 'translateY(20px)';
            
            setTimeout(() => {
                containerRef.current.style.transition = 'opacity 0.6s cubic-bezier(0.4, 0, 0.2, 1), transform 0.6s cubic-bezier(0.4, 0, 0.2, 1)';
                containerRef.current.style.opacity = 1;
                containerRef.current.style.transform = 'translateY(0)';
            }, 50);
        }
    }, []);

    return containerRef;
};
