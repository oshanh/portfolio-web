import React, { useEffect, useRef, useState } from 'react';
import styles from './CustomCursor.module.css';

const TAIL_LENGTH = 12;

function CustomCursor() {
    const dotRef = useRef(null);
    const tailRefs = useRef([]);
    const mouse = useRef({ x: -100, y: -100 });
    const positions = useRef(Array.from({ length: TAIL_LENGTH }, () => ({ x: -100, y: -100 })));
    const raf = useRef(null);
    const [hovering, setHovering] = useState(false);
    const [hidden, setHidden] = useState(false);

    useEffect(() => {
        const onMove = (e) => {
            mouse.current = { x: e.clientX, y: e.clientY };
        };

        const onEnter = () => setHidden(false);
        const onLeave = () => setHidden(true);

        const onHoverStart = (e) => {
            if (
                e.target.closest('a, button, [role="button"], input, textarea, select, .hover')
            ) {
                setHovering(true);
            }
        };
        const onHoverEnd = (e) => {
            if (
                e.target.closest('a, button, [role="button"], input, textarea, select, .hover')
            ) {
                setHovering(false);
            }
        };

        window.addEventListener('mousemove', onMove, { passive: true });
        document.addEventListener('mouseenter', onEnter);
        document.addEventListener('mouseleave', onLeave);
        document.addEventListener('mouseover', onHoverStart);
        document.addEventListener('mouseout', onHoverEnd);

        const animate = () => {
            // Main dot follows mouse directly
            if (dotRef.current) {
                dotRef.current.style.transform = `translate(${mouse.current.x}px, ${mouse.current.y}px)`;
            }

            // Tail segments follow with increasing delay
            let prev = mouse.current;
            positions.current.forEach((pos, i) => {
                const speed = 0.35 - i * 0.018;
                pos.x += (prev.x - pos.x) * Math.max(speed, 0.08);
                pos.y += (prev.y - pos.y) * Math.max(speed, 0.08);

                if (tailRefs.current[i]) {
                    tailRefs.current[i].style.transform = `translate(${pos.x}px, ${pos.y}px)`;
                }
                prev = pos;
            });

            raf.current = requestAnimationFrame(animate);
        };
        raf.current = requestAnimationFrame(animate);

        return () => {
            window.removeEventListener('mousemove', onMove);
            document.removeEventListener('mouseenter', onEnter);
            document.removeEventListener('mouseleave', onLeave);
            document.removeEventListener('mouseover', onHoverStart);
            document.removeEventListener('mouseout', onHoverEnd);
            cancelAnimationFrame(raf.current);
        };
    }, []);

    // Hide on touch devices
    if (typeof window !== 'undefined' && 'ontouchstart' in window) return null;

    return (
        <div className={`${styles.cursor} ${hidden ? styles.hidden : ''}`}>
            {/* Tail segments */}
            {Array.from({ length: TAIL_LENGTH }).map((_, i) => (
                <div
                    key={i}
                    ref={(el) => (tailRefs.current[i] = el)}
                    className={styles.tail}
                    style={{
                        width: `${Math.max(8 - i * 0.5, 2)}px`,
                        height: `${Math.max(8 - i * 0.5, 2)}px`,
                        opacity: 1 - i / TAIL_LENGTH,
                    }}
                />
            ))}
            {/* Main dot */}
            <div
                ref={dotRef}
                className={`${styles.dot} ${hovering ? styles.dotHover : ''}`}
            />
        </div>
    );
}

export default CustomCursor;
