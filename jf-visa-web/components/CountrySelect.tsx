'use client'

import React from 'react'
import Select, { components, SingleValueProps, OptionProps } from 'react-select'
import { groupedCountries, CountryOption } from '../lib/countries'

const CustomOption = (props: OptionProps<CountryOption>) => {
    return (
        <components.Option {...props}>
            <span className="flex items-center gap-2">
                <span className="text-xl">{props.data.flag}</span>
                <span className="font-semibold">{props.data.label}</span>
            </span>
        </components.Option>
    )
}

const CustomSingleValue = (props: SingleValueProps<CountryOption>) => {
    return (
        <components.SingleValue {...props}>
            <span className="flex items-center gap-2">
                <span className="text-xl">{props.data.flag}</span>
                <span className="font-bold text-text-primary">{props.data.label}</span>
            </span>
        </components.SingleValue>
    )
}

interface CountrySelectProps {
    onChange: (value: string) => void;
    value: string;
    error?: string;
}

export default function CountrySelect({ onChange, value, error }: CountrySelectProps) {
    const selectedOption = groupedCountries.flatMap(g => g.options).find(o => o.label === value)

    return (
        <div className="form-group mb-6 animate-in fade-in slide-in-from-top-2 duration-300">
            <label className="block mb-3 font-bold text-sm uppercase tracking-widest text-text-secondary" htmlFor="country">
                <i className="fa-solid fa-earth-americas mr-2 text-[var(--color-accent)]"></i>
                Country of Interest
            </label>
            <Select
                id="country-select"
                instanceId="country-select"
                options={groupedCountries}
                onChange={(newValue) => onChange((newValue as CountryOption)?.label || '')}
                value={selectedOption}
                placeholder="Select or search for a country..."
                className="country-select-container"
                classNamePrefix="country-select"
                components={{ Option: CustomOption, SingleValue: CustomSingleValue }}
                isSearchable={true}
                styles={{
                    control: (base, state) => ({
                        ...base,
                        borderColor: state.isFocused ? 'var(--border-focus)' : 'var(--border-soft)',
                        backgroundColor: 'var(--bg-surface)',
                        color: 'var(--text-primary)',
                        padding: '8px 4px',
                        borderRadius: '12px',
                        boxShadow: state.isFocused ? '0 0 0 2px rgba(196, 155, 70, 0.1)' : 'none',
                        borderWidth: '2px',
                        '&:hover': {
                            borderColor: 'var(--border-focus)'
                        }
                    }),
                    option: (base, state) => ({
                        ...base,
                        backgroundColor: state.isSelected ? 'var(--bg-contrast)' : state.isFocused ? 'var(--bg-soft)' : 'var(--bg-surface)',
                        color: state.isSelected ? 'var(--text-inverse)' : 'var(--text-primary)',
                        cursor: 'pointer',
                        padding: '12px 16px',
                        fontWeight: state.isSelected ? '800' : '600'
                    }),
                    groupHeading: (base) => ({
                        ...base,
                        color: 'var(--color-accent)',
                        fontWeight: '800',
                        fontSize: '10px',
                        textTransform: 'uppercase',
                        letterSpacing: '2px',
                        padding: '12px 16px 8px'
                    }),
                    menu: (base) => ({
                        ...base,
                        backgroundColor: 'var(--bg-surface)',
                        borderRadius: '16px',
                        overflow: 'hidden',
                        boxShadow: '0 20px 40px rgba(0, 0, 0, 0.1)',
                        border: '1px solid var(--border-soft)',
                        marginTop: '8px'
                    }),
                    singleValue: (base) => ({
                        ...base,
                        color: 'var(--text-primary)',
                    }),
                    placeholder: (base) => ({
                        ...base,
                        color: 'var(--text-muted)',
                        fontWeight: '500'
                    })
                }}
            />
            {/* Real hidden input for form submission if using traditional FormData */}
            <input type="hidden" name="country" value={value} />
            {error && (
                <p className="text-red-500 text-xs font-bold mt-2 flex items-center gap-1">
                    <i className="fa-solid fa-circle-exclamation"></i>
                    {error}
                </p>
            )}
        </div>
    )
}
