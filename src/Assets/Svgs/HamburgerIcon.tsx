import React from 'react'

interface Props {
    color?: string
}

const HamburgerIcon = ({ color = "#EEEFF3" }: Props) => {
    return (
        <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M4.63635 6H20.6364M4.63635 12H20.6364M13.6364 18H20.6364" stroke={color} stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
        </svg>

    )
}

export default HamburgerIcon