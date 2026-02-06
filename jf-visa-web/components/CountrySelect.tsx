'use client'

import React from 'react'
import Select, { components, SingleValueProps, OptionProps } from 'react-select'
import { groupedCountries, CountryOption } from '../lib/countries'

const CustomOption = (props: OptionProps<CountryOption>) => {
    return (
        <components.Option {...props}>
            <span className="flex items-center gap-2">
                <span className="text-xl">{props.data.flag}</span>
                <span>{props.data.label}</span>
            </span>
        </components.Option>
    )
}

const CustomSingleValue = (props: SingleValueProps<CountryOption>) => {
    return (
        <components.SingleValue {...props}>
            <span className="flex items-center gap-2">
                <span className="text-xl">{props.data.flag}</span>
                <span>{props.data.label}</span>
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
            <label className="block mb-2 font-medium" htmlFor="country">Country of Interest</label>
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
                    control: (base) => ({
                        ...base,
                        borderColor: 'var(--color-border)',
                        padding: '2px',
                        '&:hover': {
                            borderColor: 'var(--color-accent)'
                        }
                    }),
                    option: (base, state) => ({
                        ...base,
                        backgroundColor: state.isSelected ? 'var(--color-primary)' : state.isFocused ? 'var(--color-bg-light)' : 'white',
                        color: state.isSelected ? 'white' : 'var(--color-text)',
                        cursor: 'pointer'
                    })
                }}
            />
            {/* Real hidden input for form submission if using traditional FormData */}
            <input type="hidden" name="country" value={value} />
            {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
        </div>
    )
}
