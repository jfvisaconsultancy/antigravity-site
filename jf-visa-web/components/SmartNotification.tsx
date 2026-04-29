'use client';

import { useState, useEffect } from 'react';
import { CONFIG } from '@/lib/config';

type NotificationMessage = {
    id: number;
    title: string;
    description: string;
    icon: string;
    link: string;
};

const MESSAGES: NotificationMessage[] = [
    { id: 1, title: '🎉 Congratulations to Mr. Shakeel Khan & family', description: 'Canada Visa Approved — This Week', icon: '🎉', link: '/contact' },
    { id: 2, title: '✈️ Mr. Abdullah successfully received Canada visa', description: 'and has already travelled this week', icon: '✈️', link: '/contact' },
    { id: 3, title: '🎉 Congratulations to Mr. Asfand', description: 'Canada Visa Approved', icon: '🎉', link: '/contact' },
    { id: 4, title: '🎉 Congratulations to Mr. Jawad Haider & family', description: 'USA & Canada Visas Approved', icon: '🎉', link: '/contact' },
    { id: 5, title: '🚨 Update', description: 'VFS Global appointment procedure has been updated. Apply with correct process to avoid delays', icon: '🚨', link: '/contact' },
    { id: 6, title: '🇺🇸 USA Visa Update', description: 'Early appointment slots now available. Limited availability — apply quickly', icon: '🇺🇸', link: '/contact' },
    { id: 7, title: '📢 NAVTTC Test Appointments Available', description: 'Book your test slot with proper guidance', icon: '📢', link: '/contact' },
    { id: 8, title: '🖐️ Tasheer Fingerprint Appointments Available', description: 'Secure your slot with complete assistance', icon: '🖐️', link: '/contact' },
    { id: 9, title: '📄 Soft Skills Certificate Services Available', description: 'Required for selected visa categories', icon: '📄', link: '/contact' },
    { id: 10, title: '🎓 Malaysia Study Visa', description: 'Apply without consultation fee (Limited Time Offer)', icon: '🎓', link: '/contact' },
];

export default function SmartNotification() {
    const [isVisible, setIsVisible] = useState(false);
    const [message, setMessage] = useState<NotificationMessage | null>(null);
    const [isHovered, setIsHovered] = useState(false);
    const [shouldRender, setShouldRender] = useState(false);

    useEffect(() => {
        // Check session storage to only show once per session
        const hasShown = sessionStorage.getItem('jf_notification_shown');
        if (hasShown) return;

        // Select random message
        const randomMsg = MESSAGES[Math.floor(Math.random() * MESSAGES.length)];
        setMessage(randomMsg);
        setShouldRender(true);

        // Show after 4 seconds delay
        const showTimer = setTimeout(() => {
            setIsVisible(true);
            sessionStorage.setItem('jf_notification_shown', 'true');
        }, 4000);

        return () => clearTimeout(showTimer);
    }, []);

    useEffect(() => {
        if (!isVisible || isHovered) return;

        // Auto-hide after 9 seconds of being visible
        const hideTimer = setTimeout(() => {
            setIsVisible(false);
        }, 9000);

        return () => clearTimeout(hideTimer);
    }, [isVisible, isHovered]);

    if (!shouldRender || !message) return null;

    return (
        <div 
            className={`fixed z-[1000] transition-transform duration-700 ease-in-out ${isVisible ? 'translate-x-0' : 'translate-x-[150%]'} 
            bottom-[140px] right-4 w-[90vw] max-w-[360px] 
            lg:bottom-[120px] lg:right-10`}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <div className="bg-white rounded-2xl shadow-[0_10px_40px_rgba(0,0,0,0.15)] border border-gray-100 p-4 pl-5 relative overflow-hidden group hover:shadow-[0_15px_50px_rgba(0,0,0,0.2)] transition-shadow">
                <a 
                    href={`https://wa.me/${CONFIG.whatsapp}`} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="flex gap-4 items-start"
                >
                    <div className="pr-6">
                        <h4 className="font-bold text-gray-900 text-[15px] leading-tight mb-1.5">{message.title}</h4>
                        <p className="text-gray-600 text-[13px] leading-snug">{message.description}</p>
                    </div>
                </a>
                
                {/* Close Button */}
                <button 
                    onClick={(e) => {
                        e.preventDefault();
                        e.stopPropagation();
                        setIsVisible(false);
                    }}
                    className="absolute top-3 right-3 text-gray-400 hover:text-gray-800 bg-gray-50 hover:bg-gray-200 rounded-full w-7 h-7 flex items-center justify-center transition-colors shadow-sm"
                    aria-label="Close notification"
                >
                    <i className="fa-solid fa-xmark text-sm"></i>
                </button>
                
                {/* Subtle Progress Bar for Auto-hide (Desktop only) */}
                <div className={`absolute bottom-0 left-0 h-[3px] bg-primary transition-all duration-[9000ms] ease-linear hidden lg:block ${isVisible && !isHovered ? 'w-full' : 'w-0 duration-0'}`} style={{ backgroundColor: 'var(--color-primary)' }}></div>
            </div>
        </div>
    );
}
