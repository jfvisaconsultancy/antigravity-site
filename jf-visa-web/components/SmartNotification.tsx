'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function SmartNotification() {
    const [isVisible, setIsVisible] = useState(false);
    const [isMinimized, setIsMinimized] = useState(false);
    const [shouldRender, setShouldRender] = useState(false);

    useEffect(() => {
        // Check session storage to only show once per session
        const hasShown = sessionStorage.getItem('jf_notification_shown');
        if (hasShown) return;

        setShouldRender(true);

        // Show after 4 seconds delay
        const showTimer = setTimeout(() => {
            setIsVisible(true);
            sessionStorage.setItem('jf_notification_shown', 'true');
        }, 4000);

        return () => clearTimeout(showTimer);
    }, []);

    if (!shouldRender) return null;

    if (isMinimized) {
        return (
            <div 
                className={`fixed z-[1000] transition-transform duration-500 ease-in-out ${isVisible ? 'translate-x-0' : 'translate-x-[150%]'} 
                bottom-[140px] right-4 lg:bottom-[120px] lg:right-10`}
            >
                <button 
                    onClick={() => setIsMinimized(false)}
                    className="bg-white rounded-full shadow-[0_5px_20px_rgba(0,0,0,0.15)] border border-gray-100 w-12 h-12 hover:shadow-[0_8px_25px_rgba(0,0,0,0.2)] transition-all flex items-center justify-center text-[var(--color-primary)]"
                    aria-label="Expand notification"
                >
                    <i className="fa-solid fa-bell text-xl animate-pulse"></i>
                    <span className="absolute top-0 right-0 w-3.5 h-3.5 bg-red-500 rounded-full border-2 border-white"></span>
                </button>
            </div>
        );
    }

    return (
        <div 
            className={`fixed z-[1000] transition-transform duration-700 ease-in-out ${isVisible ? 'translate-x-0' : 'translate-x-[150%]'} 
            bottom-[140px] right-4 w-[90vw] max-w-[360px] 
            lg:bottom-[120px] lg:right-10`}
        >
            <div className="bg-white rounded-2xl shadow-[0_15px_50px_rgba(0,0,0,0.2)] border border-gray-100 overflow-hidden flex flex-col max-h-[60vh] sm:max-h-[70vh]">
                
                {/* Header */}
                <div className="bg-gray-50 border-b border-gray-100 p-3 flex justify-between items-center sticky top-0 z-10">
                    <div className="flex items-center gap-2 text-[var(--color-primary)] font-bold text-sm">
                        <i className="fa-solid fa-bolt text-yellow-500"></i>
                        <span>Live Updates</span>
                    </div>
                    <div className="flex gap-2">
                        <button 
                            onClick={() => setIsMinimized(true)}
                            className="text-gray-400 hover:text-gray-800 bg-white hover:bg-gray-100 rounded-full w-7 h-7 flex items-center justify-center transition-colors shadow-sm border border-gray-100"
                            aria-label="Minimize notification"
                        >
                            <i className="fa-solid fa-minus text-xs"></i>
                        </button>
                        <button 
                            onClick={() => setIsVisible(false)}
                            className="text-gray-400 hover:text-gray-800 bg-white hover:bg-gray-100 rounded-full w-7 h-7 flex items-center justify-center transition-colors shadow-sm border border-gray-100"
                            aria-label="Close notification"
                        >
                            <i className="fa-solid fa-xmark text-xs"></i>
                        </button>
                    </div>
                </div>

                {/* Content - Scrollable */}
                <div className="p-4 overflow-y-auto custom-scrollbar flex flex-col gap-5" style={{ scrollbarWidth: 'thin' }}>
                    
                    {/* SECTION 1 - RECENT APPROVALS */}
                    <div>
                        <h4 className="font-bold text-gray-900 text-[13px] mb-2 flex items-center gap-2 uppercase tracking-wide">
                            <span className="text-lg">🎉</span> Recent Approvals
                        </h4>
                        <ul className="space-y-2 text-[13px] text-gray-600 pl-1">
                            <li className="flex gap-2 items-start">
                                <i className="fa-solid fa-check text-green-500 mt-1 text-[10px]"></i>
                                <span><strong>Mr. Shakeel Khan & family</strong> – Canada Visa Approved</span>
                            </li>
                            <li className="flex gap-2 items-start">
                                <i className="fa-solid fa-check text-green-500 mt-1 text-[10px]"></i>
                                <span><strong>Mr. Abdullah</strong> – Canada Visa Approved & Travelled</span>
                            </li>
                            <li className="flex gap-2 items-start">
                                <i className="fa-solid fa-check text-green-500 mt-1 text-[10px]"></i>
                                <span><strong>Mr. Jawad Haider & family</strong> – USA & Canada Visas Approved</span>
                            </li>
                        </ul>
                    </div>

                    {/* SECTION 2 - LATEST UPDATES */}
                    <div>
                        <h4 className="font-bold text-gray-900 text-[13px] mb-2 flex items-center gap-2 uppercase tracking-wide">
                            <span className="text-lg">🚨</span> Latest Updates
                        </h4>
                        <ul className="space-y-2 text-[13px] text-gray-600 pl-1">
                            <li className="flex gap-2 items-start">
                                <i className="fa-solid fa-arrow-right text-[var(--color-primary)] mt-1 text-[10px]"></i>
                                <span>VFS Global appointment procedure updated</span>
                            </li>
                            <li className="flex gap-2 items-start">
                                <i className="fa-solid fa-arrow-right text-[var(--color-primary)] mt-1 text-[10px]"></i>
                                <span>USA early appointment slots available</span>
                            </li>
                            <li className="flex gap-2 items-start">
                                <i className="fa-solid fa-arrow-right text-[var(--color-primary)] mt-1 text-[10px]"></i>
                                <span>Tasheer fingerprint appointments available</span>
                            </li>
                        </ul>
                    </div>

                    {/* SECTION 3 - SPECIAL OFFER */}
                    <div className="bg-blue-50 border border-blue-100 rounded-xl p-3">
                        <h4 className="font-bold text-blue-900 text-[13px] mb-1 flex items-center gap-2 uppercase tracking-wide">
                            <span className="text-lg">💰</span> Special Offer
                        </h4>
                        <p className="text-[13px] text-blue-800 font-semibold mb-1">Malaysia Study Visa</p>
                        <p className="text-[12px] text-blue-600 leading-snug">No consultation fee (Limited Time Offer)</p>
                    </div>

                </div>

                {/* Footer CTA */}
                <div className="p-3 border-t border-gray-100 bg-white">
                    <Link 
                        href="/contact" 
                        className="flex items-center justify-center gap-2 w-full py-3 text-center bg-[var(--color-primary)] text-white text-[13px] font-bold rounded-xl hover:opacity-90 active:scale-[0.98] transition-all shadow-md"
                    >
                        View All Updates
                        <i className="fa-solid fa-arrow-right"></i>
                    </Link>
                </div>
                
            </div>
        </div>
    );
}
