import React from 'react';

interface FormFieldProps {
    type: string;
    name: string;
    label: string;
    placeholder: string;
    className?: string;
    errors?: any;
    register?: any;
    rows?: number;

}

const FormField: React.FC<FormFieldProps> = ({
    type,
    name,
    label,
    placeholder,
    className = '',
    errors,
    register,
    rows,
    ...others
}) => {

    return (
        <div className={`mb-3 w-full ${className}`}>
            <label htmlFor={name} className="block text-gray-100 text-sm font-bold mb-2">
                {label}
            </label>
            {type === 'textarea' ? (
                <textarea
                    className="shadow appearance-none border border-[#99A0AE] rounded w-full py-4 px-3 text-gray-700 leading-tight focus:outline-daisyBush-60 focus:shadow-outline"
                    id={name}
                    placeholder={placeholder}
                    {...register}
                    {...others}
                    rows={rows}
                />
            ) : (
                <input
                    type={type}
                    className="shadow appearance-none border border-[#99A0AE] rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-daisyBush-60 focus:shadow-outline"
                    id={name}
                    placeholder={placeholder}
                    {...others}
                    {...register}
                />
            )}
            {errors && (
                <p className="text-red-500 mt-1 text-xs italic">{errors?.message?.toString()}</p>
            )}
        </div>
    );
};

export default FormField;
