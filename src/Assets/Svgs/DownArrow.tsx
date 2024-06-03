import React from 'react'

interface Props {
    color?: string
}
const DownArrow = ({ color = "#99A0AE" }: Props) => {
    return (
        <svg width="15" height="18" viewBox="0 0 15 18" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M1.25 10.25L7.5 16.5M7.5 16.5L13.75 10.25M7.5 16.5L7.5 1.5" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
    )
}

export default DownArrow