import React from 'react';
import FormField from './FormField';

interface FormInputProps {
  label: string;
  value: string;
  onChange: (value: string) => void;
  type?: string;
  placeholder?: string;
  error?: string;
  required?: boolean;
  className?: string;
}

export default function FormInput({
  label,
  value,
  onChange,
  type = 'text',
  placeholder,
  error,
  required = false,
  className = '',
}: FormInputProps) {
  return (
    <FormField
      label={label}
      error={error}
      required={required}
      className={className}
    >
      <input
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className={`w-full border rounded p-2 ${
          error ? 'border-red-500' : 'border-gray-300'
        } focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent`}
      />
    </FormField>
  );
}