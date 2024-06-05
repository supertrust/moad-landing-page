import React from 'react'

interface Props {
    color?: string
}

const Logo = ({ color = "#fff" }: Props) => {
    return (
        <svg width="96" height="32" viewBox="0 0 96 32" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clip-path="url(#clip0_1_5836)">
                <path d="M0 8.57373H5.28497L12.0743 22.1792H12.3239L19.0633 8.57373H24.3495V31.0937H18.7202V20.7094H18.4705L13.4966 31.0937H10.1807L5.19151 20.7094H4.94185V31.0937H0V8.57373Z" fill={color} />
                <path d="M27.6385 19.4419C27.6385 12.2647 32.0171 8.55322 38.8051 8.55322C45.5765 8.55322 49.9409 12.2647 49.9409 19.4419C49.9409 26.6204 45.5765 31.0937 38.8051 31.0937C32.0171 31.0937 27.6385 26.6217 27.6385 19.4419ZM44.0273 19.4419C44.0273 15.267 41.9955 13.3082 38.8038 13.3082C35.6147 13.3082 33.5496 15.267 33.5496 19.4419C33.5496 23.6182 35.6147 26.3388 38.8038 26.3388C41.9955 26.3388 44.0273 23.6182 44.0273 19.4419Z" fill={color} />
                <path d="M58.9707 8.55322H64.8203L73.0614 31.0732H66.9327L65.3375 26.4758H57.378L55.7341 31.0732H50.7296L58.9707 8.55322ZM63.8664 22.2534L61.5223 15.6229H61.27L58.8926 22.2534H63.8664Z" fill={color}/>
                <path d="M75.9202 8.55322H85.4595C92.1989 8.55322 96 12.5259 96 19.5943C96 26.9917 92.2462 31.0732 85.4595 31.0732H75.9202V8.55322ZM84.4263 26.4284C88.1494 26.4284 90.089 24.1137 90.089 19.6724C90.089 15.4654 87.9945 13.1981 84.4263 13.1981H81.7685V26.4284H84.4263Z" fill={color} />
                <path fill-rule="evenodd" clip-rule="evenodd" d="M53.8995 1.4194C54.4155 1.75227 54.8098 2.22341 55.0492 2.76113C55.4576 3.67652 55.3988 4.77627 54.966 5.62637C54.568 6.40833 54.3769 6.63122 53.9516 7.12758C53.9159 7.16921 53.8786 7.21276 53.8394 7.25872C53.3324 7.85149 52.7422 8.54924 52.7422 8.54924C52.5629 8.80146 52.3274 8.9282 52.0918 8.9282C51.8562 8.92692 51.6207 8.80146 51.4414 8.54924C51.4414 8.54924 50.8512 7.85277 50.3442 7.25872C50.305 7.21274 50.2677 7.16918 50.232 7.12754C49.8066 6.63121 49.6156 6.40832 49.2176 5.62637C48.7849 4.77627 48.726 3.67652 49.1344 2.76113C49.3738 2.22469 49.7681 1.75227 50.2841 1.4194C50.7232 1.13518 51.2481 0.950815 51.8421 0.913687C51.9254 0.908566 52.0086 0.906006 52.0918 0.906006C52.1763 0.906006 52.2595 0.908566 52.3415 0.913687C52.9355 0.952095 53.4604 1.13646 53.8995 1.4194ZM53.6473 4.0956C53.6473 4.9547 52.9508 5.65113 52.0917 5.65113C51.2326 5.65113 50.5362 4.9547 50.5362 4.0956C50.5362 3.2365 51.2326 2.54007 52.0917 2.54007C52.9508 2.54007 53.6473 3.2365 53.6473 4.0956Z" fill={color}/>
            </g>
            <defs>
                <clipPath id="clip0_1_5836">
                    <rect width="96" height="32" fill={color} />
                </clipPath>
            </defs>
        </svg>

    )
}

export default Logo