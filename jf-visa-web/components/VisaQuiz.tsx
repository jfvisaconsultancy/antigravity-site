'use client';

import { useState } from 'react';
import ContactForm from './ContactForm';

type Question = {
    id: number;
    text: string;
    options: { text: string; points: number }[];
};

const QUESTIONS: Question[] = [
    {
        id: 1,
        text: "What is your primary goal?",
        options: [
            { text: "Study Abroad", points: 10 },
            { text: "Visit Visa", points: 8 },
            { text: "Work / Immigration", points: 12 },
            { text: "Refusal Recovery", points: 15 }
        ]
    },
    {
        id: 2,
        text: "Do you have valid property or family ties in Pakistan?",
        options: [
            { text: "Yes, strong ties", points: 10 },
            { text: "Some ties", points: 5 },
            { text: "No/Limited ties", points: 2 }
        ]
    },
    {
        id: 3,
        text: "What is your financial situation (bank balance/income proof)?",
        options: [
            { text: "Strong & Verifiable", points: 10 },
            { text: "Moderate", points: 6 },
            { text: "Low / Non-verifiable", points: 2 }
        ]
    },
    {
        id: 4,
        text: "Have you ever been refused a visa before?",
        options: [
            { text: "No, never", points: 10 },
            { text: "Yes, once", points: 5 },
            { text: "Yes, multiple times", points: 2 }
        ]
    }
];

export default function VisaQuiz() {
    const [step, setStep] = useState(0);
    const [score, setScore] = useState(0);
    const [showResults, setShowResults] = useState(false);

    const handleOption = (points: number) => {
        const nextScore = score + points;
        setScore(nextScore);

        if (step < QUESTIONS.length - 1) {
            setStep(step + 1);
        } else {
            setShowResults(true);
        }
    };

    const getRecommendation = () => {
        if (score >= 35) return { title: "High Approval Potential", color: "text-green-600", desc: "Your profile looks strong! We recommend proceeding with the application immediately to secure your spot." };
        if (score >= 25) return { title: "Moderate – Strategy Required", color: "text-amber-600", desc: "You have a good chance, but your documentation needs careful trajectory mapping to prevent refusal." };
        return { title: "Risk Detected – Professional Audit Mandatory", color: "text-red-600", desc: "We detected some red flags in your profile. You should NOT apply without a professional case audit." };
    };

    if (showResults) {
        const rec = getRecommendation();
        return (
            <div className="bg-white p-8 md:p-12 rounded-[2.5rem] shadow-2xl border border-slate-100 animate-in zoom-in-95 duration-500">
                <div className="text-center mb-8">
                    <div className="inline-block px-4 py-1 bg-slate-100 rounded-full text-[10px] font-bold uppercase tracking-widest mb-4">Your Evaluation Result</div>
                    <h3 className={`text-3xl font-black mb-4 ${rec.color} font-heading`}>{rec.title}</h3>
                    <p className="text-white/60 text-lg leading-relaxed">{rec.desc}</p>
                </div>

                <div className="p-8 bg-slate-50 rounded-2xl border border-dashed border-slate-200 mb-8">
                    <div className="flex justify-between items-center mb-4">
                        <span className="font-bold text-slate-800">Profile Match Score</span>
                        <span className={`text-2xl font-black ${rec.color}`}>{Math.round((score / 45) * 100)}%</span>
                    </div>
                    <div className="w-full h-3 bg-slate-200 rounded-full overflow-hidden">
                        <div className={`h-full transition-all duration-1000 ${score >= 35 ? 'bg-green-500' : score >= 25 ? 'bg-amber-500' : 'bg-red-500'}`} style={{ width: `${(score / 45) * 100}%` }}></div>
                    </div>
                </div>

                <div className="space-y-6">
                    <div className="text-center">
                        <h4 className="text-xl font-bold mb-4">Get Your Full Detailed Report</h4>
                        <p className="text-sm text-white/50 mb-8">Enter your details below to receive a personalized strategy call from our senior advisor.</p>
                    </div>
                    <ContactForm title="Get Detailed Strategy" />
                </div>

                <button
                    onClick={() => { setStep(0); setScore(0); setShowResults(false); }}
                    className="mt-8 text-xs font-bold text-slate-400 hover:text-[var(--color-primary)] transition-colors uppercase tracking-widest block mx-auto"
                >
                    Retake Quiz
                </button>
            </div>
        );
    }

    return (
        <div className="bg-white p-8 md:p-12 rounded-[2.5rem] shadow-2xl border border-slate-100 min-h-[500px] flex flex-col justify-center animate-in fade-in duration-500">
            <div className="mb-12">
                <div className="flex justify-between items-end mb-4">
                    <span className="text-xs font-bold text-[var(--color-accent)] uppercase tracking-widest">Question {step + 1} of {QUESTIONS.length}</span>
                    <span className="text-xs font-bold text-slate-300">{Math.round(((step + 1) / QUESTIONS.length) * 100)}% Complete</span>
                </div>
                <div className="w-full h-1.5 bg-slate-100 rounded-full overflow-hidden">
                    <div className="h-full bg-[var(--color-accent)] transition-all duration-500" style={{ width: `${((step + 1) / QUESTIONS.length) * 100}%` }}></div>
                </div>
            </div>

            <h3 className="text-2xl md:text-3xl font-bold text-[var(--color-primary)] mb-10 font-heading leading-tight italic">
                {QUESTIONS[step].text}
            </h3>

            <div className="grid gap-4">
                {QUESTIONS[step].options.map((opt, i) => (
                    <button
                        key={i}
                        onClick={() => handleOption(opt.points)}
                        className="p-6 text-left rounded-2xl border-2 border-slate-100 hover:border-[var(--color-accent)] hover:bg-slate-50 transition-all duration-300 font-bold group flex justify-between items-center"
                    >
                        <span>{opt.text}</span>
                        <i className="fa-solid fa-arrow-right text-slate-200 group-hover:text-[var(--color-accent)] group-hover:translate-x-1 transition-all"></i>
                    </button>
                ))}
            </div>

            <div className="mt-12 flex items-center gap-4 text-slate-400 text-xs italic">
                <i className="fa-solid fa-shield-halved"></i>
                <span>Your answers are private and used ONLY for evaluation.</span>
            </div>
        </div>
    );
}
