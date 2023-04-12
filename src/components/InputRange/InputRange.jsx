import React from 'react'
import './InputRange.css'

const InputRange = ({
  label,
  type,
  value,
  className,
  onChange,
  readOnly = false,
}) => {
  return (
    <div className='input-range '>
      <label>{label}</label>
      <input
        className={className}
        type={type}
        value={value}
        min={0}
        max={100}
        onChange={onChange}
        readOnly={readOnly}
      />
    </div>
  )
}

export default InputRange
