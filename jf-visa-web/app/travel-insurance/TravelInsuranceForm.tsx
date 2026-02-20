'use client'

import { useActionState, useState, useEffect } from 'react'
import { submitTravelInsurance } from '@/app/actions'
import { SubmitButton } from '@/components/SubmitButton'

const initialState = {
    success: false,
    message: '',
    errors: {},
}

const COUNTRIES = [
    "Schengen Area", "USA", "United Kingdom", "UAE", "Canada", "Australia", "Turkey", "Saudi Arabia", "Qatar", "Kuwait", "Oman", "Bahrain", "Malaysia", "Thailand", "Singapore", "China", "Japan", "South Korea", "Europe (Other)", "Other Worldwide"
];

export default function TravelInsuranceForm() {
    const [state, formAction] = useActionState(submitTravelInsurance, initialState)
    const [planType, setPlanType] = useState('Individual')
    const [visaType, setVisaType] = useState('')
    const [coverage, setCoverage] = useState('50000')
    const [familyMembers, setFamilyMembers] = useState<{ name: string; dob: string }[]>([])
    const [destination, setDestination] = useState('')
    const [startDate, setStartDate] = useState('')
    const [endDate, setEndDate] = useState('')
    const [duration, setDuration] = useState(0)

    // Calculate duration
    useEffect(() => {
        if (startDate && endDate) {
            const start = new Date(startDate)
            const end = new Date(endDate)
            if (!isNaN(start.getTime()) && !isNaN(end.getTime())) {
                const diffTime = end.getTime() - start.getTime()
                const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24)) + 1 // Inclusive
                setDuration(diffDays > 0 ? diffDays : 0)
            }
        }
    }, [startDate, endDate])

    const addFamilyMember = () => {
        setFamilyMembers([...familyMembers, { name: '', dob: '' }])
    }

    const removeFamilyMember = (index: number) => {
        const newMembers = [...familyMembers]
        newMembers.splice(index, 1)
        setFamilyMembers(newMembers)
    }

    const updateFamilyMember = (index: number, field: 'name' | 'dob', value: string) => {
        const newMembers = [...familyMembers]
        newMembers[index][field] = value
        setFamilyMembers(newMembers)
    }

    return (
        <div className="bg-white p-6 md:p-8 rounded-2xl shadow-xl border border-gray-100 sticky top-4" id="apply-form">
            <div className="text-center mb-8">
                <h3 className="text-3xl font-bold text-[var(--color-primary)] mb-2">
                    Apply Now
                </h3>
                <p className="text-gray-600">Get your embassy-approved policy in minutes</p>
            </div>

            {state?.message && !state.success && (
                <div className="p-4 mb-6 rounded-lg bg-red-50 text-red-700 border border-red-100 flex items-center gap-3">
                    <i className="fa-solid fa-circle-exclamation"></i>
                    <p className="text-sm font-medium">{state.message}</p>
                </div>
            )}

            {state?.success ? (
                <div className="text-center py-10">
                    <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6 text-4xl">
                        <i className="fa-solid fa-check"></i>
                    </div>
                    <h4 className="text-2xl font-bold text-gray-800 mb-2">Application Sent!</h4>
                    <p className="text-gray-600 mb-6">{state.message}</p>
                    <div className="bg-blue-50 p-4 rounded-lg border border-blue-100">
                        <p className="text-blue-800 font-semibold flex items-center justify-center gap-2">
                            <i className="fa-solid fa-clock"></i> Your advisor will contact you within 5 minutes
                        </p>
                    </div>
                    <button
                        onClick={() => window.location.reload()}
                        className="mt-8 text-[var(--color-primary)] font-bold hover:underline"
                    >
                        Submit another application
                    </button>
                </div>
            ) : (
                <form action={formAction} className="space-y-10">
                    {/* Honeypot */}
                    <div style={{ display: 'none' }}>
                        <input type="text" name="website_url" tabIndex={-1} autoComplete="off" />
                    </div>

                    {/* Personal Info */}
                    <div className="space-y-6">
                        <h4 className="font-bold text-sm uppercase tracking-wider text-gray-400 border-b pb-3 flex items-center gap-2">
                            <i className="fa-solid fa-user-circle text-[var(--color-accent)]"></i> Personal Information
                        </h4>
                        <div className="grid md:grid-cols-2 gap-x-6 gap-y-4">
                            <div className="space-y-1.5">
                                <label className="block text-sm font-semibold text-gray-700">Full Name</label>
                                <input name="fullName" type="text" required className="form-input" placeholder="As on Passport" />
                                {state?.errors?.fullName && <p className="text-red-500 text-xs mt-1">{state.errors.fullName}</p>}
                            </div>
                            <div className="space-y-1.5">
                                <label className="block text-sm font-semibold text-gray-700">Date of Birth</label>
                                <input name="dob" type="date" required className="form-input" />
                                {state?.errors?.dob && <p className="text-red-500 text-xs mt-1">{state.errors.dob}</p>}
                            </div>
                            <div className="space-y-1.5">
                                <label className="block text-sm font-semibold text-gray-700">Passport Number</label>
                                <input name="passportNumber" type="text" required className="form-input" placeholder="Enter Passport No." />
                                {state?.errors?.passportNumber && <p className="text-red-500 text-xs mt-1">{state.errors.passportNumber}</p>}
                            </div>
                            <div className="space-y-1.5">
                                <label className="block text-sm font-semibold text-gray-700">Nationality</label>
                                <input name="nationality" type="text" required className="form-input" placeholder="e.g. Pakistani" />
                            </div>
                            <div className="space-y-1.5">
                                <label className="block text-sm font-semibold text-gray-700">Phone (WhatsApp)</label>
                                <input name="phone" type="tel" required className="form-input" placeholder="+92 3XX XXXXXXX" />
                            </div>
                            <div className="space-y-1.5">
                                <label className="block text-sm font-semibold text-gray-700">Email</label>
                                <input name="email" type="email" required className="form-input" placeholder="yourname@email.com" />
                            </div>
                        </div>
                    </div>

                    {/* Travel Details */}
                    <div className="space-y-6">
                        <h4 className="font-bold text-sm uppercase tracking-wider text-gray-400 border-b pb-3 flex items-center gap-2">
                            <i className="fa-solid fa-plane-departure text-[var(--color-accent)]"></i> Travel Details
                        </h4>
                        <div className="grid md:grid-cols-2 gap-x-6 gap-y-4">
                            <div className="space-y-1.5">
                                <label className="block text-sm font-semibold text-gray-700">Country of Travel</label>
                                <div className="relative">
                                    <input
                                        name="destination"
                                        list="countries-list"
                                        type="text"
                                        required
                                        className="form-input"
                                        placeholder="Search countries..."
                                        value={destination}
                                        onChange={(e) => setDestination(e.target.value)}
                                    />
                                    <datalist id="countries-list">
                                        {COUNTRIES.map(c => <option key={c} value={c} />)}
                                    </datalist>
                                    <i className="fa-solid fa-search absolute right-3 top-4 text-gray-400"></i>
                                </div>
                            </div>
                            <div className="space-y-1.5">
                                <label className="block text-sm font-semibold text-gray-700">Visa Type</label>
                                <select
                                    name="visaType"
                                    required
                                    className="form-select"
                                    value={visaType}
                                    onChange={(e) => setVisaType(e.target.value)}
                                >
                                    <option value="">Select Visa Type</option>
                                    <option value="Visit Visa">Visit / Tourist Visa</option>
                                    <option value="Study Visa">Study / Student Visa</option>
                                    <option value="Work Visa">Work / Employment</option>
                                    <option value="Immigration">Immigration / PR</option>
                                    <option value="Other">Other</option>
                                </select>
                            </div>
                            <div className="space-y-1.5">
                                <label className="block text-sm font-semibold text-gray-700">Travel Start Date</label>
                                <input
                                    name="startDate"
                                    type="date"
                                    required
                                    className="form-input"
                                    value={startDate}
                                    onChange={(e) => setStartDate(e.target.value)}
                                />
                            </div>
                            <div className="space-y-1.5">
                                <label className="block text-sm font-semibold text-gray-700">Travel End Date</label>
                                <input
                                    name="endDate"
                                    type="date"
                                    required
                                    className="form-input"
                                    value={endDate}
                                    onChange={(e) => setEndDate(e.target.value)}
                                />
                            </div>
                        </div>
                        {duration > 0 && (
                            <div className="bg-[var(--color-accent-light)] text-[var(--color-primary)] p-3 rounded-lg border border-[var(--color-accent)] inline-block mt-4">
                                <p className="text-sm font-bold flex items-center gap-2">
                                    <i className="fa-solid fa-calendar-check"></i>
                                    Duration: {duration} Days (Auto-calculated)
                                    <input type="hidden" name="duration" value={duration} />
                                </p>
                            </div>
                        )}
                    </div>

                    {/* Insurance Selection */}
                    <div className="space-y-6">
                        <h4 className="font-bold text-sm uppercase tracking-wider text-gray-400 border-b pb-3 flex items-center gap-2">
                            <i className="fa-solid fa-shield-halved text-[var(--color-accent)]"></i> Plan Selection
                        </h4>

                        <div className="space-y-3.5">
                            <label className="block text-sm font-semibold text-gray-700">Plan Type</label>
                            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                                {[
                                    { id: 'Individual', label: 'Individual', icon: 'fa-user' },
                                    { id: 'Family', label: 'Family', icon: 'fa-users' },
                                    { id: 'Student', label: 'Student', icon: 'fa-user-graduate' },
                                    { id: 'Multi-Trip', label: 'Multi-Trip', icon: 'fa-rotate' },
                                    { id: 'Long Stay', label: 'Long Stay', icon: 'fa-house-user' }
                                ].map((type) => (
                                    <label key={type.id} className={`cursor-pointer border-2 p-4 rounded-xl text-center text-sm transition-all flex flex-col items-center gap-2 ${planType === type.id ? 'bg-[var(--color-primary)] text-white border-[var(--color-primary)] shadow-md' : 'bg-white border-gray-200 hover:border-[var(--color-accent)] hover:bg-gray-50'}`}>
                                        <input
                                            type="radio"
                                            name="planType"
                                            value={type.id}
                                            checked={planType === type.id}
                                            onChange={() => setPlanType(type.id)}
                                            className="hidden"
                                        />
                                        <i className={`fa-solid ${type.icon} text-lg`}></i>
                                        <span className="font-bold">{type.label}</span>
                                    </label>
                                ))}
                            </div>
                        </div>

                        <div className="space-y-3.5">
                            <div className="flex justify-between items-center">
                                <label className="block text-sm font-semibold text-gray-700">Coverage Amount</label>
                                <span className="bg-yellow-100 text-yellow-800 text-[10px] font-bold px-2 py-0.5 rounded-full uppercase tracking-widest">Required for Visa</span>
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                                {[
                                    { val: '30000', label: '€30,000', badge: 'Basic' },
                                    { val: '50000', label: '€50,000', badge: 'Popular' },
                                    { val: '100000', label: '€100,000', badge: 'Premium' }
                                ].map((opt) => (
                                    <label key={opt.val} className={`relative cursor-pointer border-2 p-5 rounded-xl text-center transition-all ${coverage === opt.val ? 'bg-[var(--color-accent)] text-white border-[var(--color-accent)] shadow-md' : 'bg-white border-gray-200 hover:bg-gray-50'}`}>
                                        <input
                                            type="radio"
                                            name="coverageAmount"
                                            value={opt.val}
                                            checked={coverage === opt.val}
                                            onChange={() => setCoverage(opt.val)}
                                            className="hidden"
                                        />
                                        {opt.badge === 'Popular' && (
                                            <span className="absolute -top-2 left-1/2 -translate-x-1/2 bg-blue-600 text-white text-[9px] px-2 py-0.5 rounded-full font-bold">RECOMMENDED</span>
                                        )}
                                        <div className="text-xl font-black">{opt.label}</div>
                                        <div className={`text-[10px] font-bold ${coverage === opt.val ? 'text-white/80' : 'text-gray-400'}`}>{opt.badge}</div>
                                    </label>
                                ))}
                            </div>
                        </div>

                        {/* Travelers Detail Section */}
                        <div className="grid md:grid-cols-2 gap-x-6 gap-y-4 pt-2">
                            <div className="space-y-1.5">
                                <label className="block text-sm font-semibold text-gray-700">Number of Travelers</label>
                                <input name="travelersCount" type="number" min="1" defaultValue="1" className="form-input" />
                            </div>
                            <div className="space-y-1.5">
                                <label className="block text-sm font-semibold text-gray-700">Age of Traveler(s)</label>
                                <input name="travelersAges" type="text" className="form-input" placeholder="e.g. 25, 30, 5" />
                                <p className="text-[10px] text-gray-500">Separated by commas if multiple</p>
                            </div>
                        </div>

                        {/* Conditional Fields */}
                        {planType === 'Student' && (
                            <div className="p-5 bg-gray-50 rounded-xl border-l-4 border-[var(--color-primary)] animate-in slide-in-from-left duration-300 shadow-sm mt-4">
                                <label className="block text-sm font-bold mb-2">University / College Name</label>
                                <input name="universityName" type="text" className="form-input" placeholder="Enter institution name" />
                            </div>
                        )}

                        {planType === 'Multi-Trip' && (
                            <div className="p-5 bg-gray-50 rounded-xl border-l-4 border-[var(--color-primary)] animate-in slide-in-from-left duration-300 shadow-sm mt-4">
                                <label className="block text-sm font-bold mb-2">Trip Frequency</label>
                                <select name="multiTripFreq" className="form-select">
                                    <option value="30 Days per trip">30 Days max per trip (Annual Policy)</option>
                                    <option value="60 Days per trip">60 Days max per trip (Annual Policy)</option>
                                    <option value="90 Days per trip">90 Days max per trip (Annual Policy)</option>
                                </select>
                            </div>
                        )}

                        {/* Family Members Dynamic Fields */}
                        {planType === 'Family' && (
                            <div className="bg-gray-50 p-6 rounded-2xl border border-gray-200 space-y-5 mt-4">
                                <div className="flex justify-between items-center">
                                    <label className="block text-sm font-bold text-gray-800">Family Member Details</label>
                                    <span className="text-[10px] text-gray-500 font-medium">Add spouse & children under 18</span>
                                </div>
                                {familyMembers.map((member, index) => (
                                    <div key={index} className="flex gap-3 items-start bg-white p-4 rounded-lg border border-gray-100 shadow-sm animate-in zoom-in-95">
                                        <div className="flex-grow grid grid-cols-1 md:grid-cols-2 gap-4">
                                            <input
                                                type="text"
                                                placeholder="Name"
                                                className="form-input"
                                                value={member.name}
                                                onChange={(e) => updateFamilyMember(index, 'name', e.target.value)}
                                                required
                                            />
                                            <input
                                                type="date"
                                                className="form-input"
                                                value={member.dob}
                                                onChange={(e) => updateFamilyMember(index, 'dob', e.target.value)}
                                                required
                                            />
                                        </div>
                                        <button type="button" onClick={() => removeFamilyMember(index)} className="text-red-400 hover:text-red-600 p-3 transition-colors">
                                            <i className="fa-solid fa-trash-can"></i>
                                        </button>
                                    </div>
                                ))}
                                <button type="button" onClick={addFamilyMember} className="w-full py-3 px-4 border-2 border-dashed border-gray-300 text-gray-500 rounded-xl hover:border-[var(--color-primary)] hover:text-[var(--color-primary)] transition-all flex items-center justify-center gap-2 font-semibold min-h-[44px]">
                                    <i className="fa-solid fa-plus"></i> Add Family Member
                                </button>
                                <input type="hidden" name="familyMembers" value={JSON.stringify(familyMembers)} />
                            </div>
                        )}
                    </div>

                    {/* Urgency */}
                    <div className="flex items-center gap-4 p-5 bg-orange-50 border border-orange-100 rounded-2xl">
                        <input
                            type="checkbox"
                            id="urgentProcessing"
                            name="urgentProcessing"
                            className="w-6 h-6 rounded-lg border-orange-300 text-orange-600 focus:ring-orange-500"
                        />
                        <div>
                            <label htmlFor="urgentProcessing" className="text-sm font-bold text-orange-900 cursor-pointer block">
                                Urgent Processing Required?
                            </label>
                            <p className="text-xs text-orange-700">Receive your policy PDF within 30-60 minutes</p>
                        </div>
                    </div>

                    <div className="pt-6">
                        <div className="mb-6">
                            <SubmitButton label="Generate My Policy Quote" />
                        </div>
                        <div className="flex items-center justify-center gap-8 mt-6 pb-2">
                            <div className="flex flex-col items-center gap-1.5">
                                <i className="fa-solid fa-lock text-green-500 text-xs"></i>
                                <span className="text-[9px] font-bold text-gray-400 uppercase tracking-widest">Secure</span>
                            </div>
                            <div className="flex flex-col items-center gap-1.5">
                                <i className="fa-solid fa-bolt text-blue-500 text-xs"></i>
                                <span className="text-[9px] font-bold text-gray-400 uppercase tracking-widest">Instant</span>
                            </div>
                            <div className="flex flex-col items-center gap-1.5">
                                <i className="fa-solid fa-shield-check text-purple-500 text-xs"></i>
                                <span className="text-[9px] font-bold text-gray-400 uppercase tracking-widest">Verified</span>
                            </div>
                        </div>
                    </div>

                    <p className="text-[10px] text-center text-gray-400 leading-relaxed px-4">
                        By clicking "Generate Quote", you agree to be contacted by JF Visa advisors regarding your insurance policy via Email and WhatsApp.
                        <br />No payment is required at this stage.
                    </p>
                </form>
            )}
        </div>
    )
}
