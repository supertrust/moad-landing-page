import React from 'react';

interface FormFieldProps {
    type: string;
    name: string;
    label: string;
    placeholder: string;
    className?: string;
    errors?: any;
    register?: any;
}

const FormField: React.FC<FormFieldProps> = ({
    type,
    name,
    label,
    placeholder,
    className = '',
    errors,
    register,
}) => {

    return (
        <div className={`mb-6 w-full ${className}`}>
            <label htmlFor={name} className="block text-gray-100 text-sm font-bold mb-2">
                {label}
            </label>
            {type === 'textarea' ? (
                <textarea
                    className="shadow appearance-none border border-[#99A0AE] rounded w-full py-4 px-3 text-gray-700 leading-tight focus:outline-daisyBush-60 focus:shadow-outline"
                    id={name}
                    placeholder={placeholder}
                    {...register}
                    rows={15}
                />
            ) : (
                <input
                    type={type}
                    className="shadow appearance-none border border-[#99A0AE] rounded w-full py-4 px-3 text-gray-700 leading-tight focus:outline-daisyBush-60 focus:shadow-outline"
                    id={name}
                    placeholder={placeholder}
                    {...register}
                />
            )}
            {errors && (
                <p className="text-red-500 text-xs mt-2 italic">{errors?.message?.toString()}</p>
            )}
        </div>
    );
};

export default FormField;
