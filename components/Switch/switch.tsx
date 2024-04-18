import React from 'react';

const Switch = ({ isChecked, isDisabled, onChange }:any) => {
    return (
      <label className="switch" style={{ opacity: isDisabled ? 0.4 : 1 }}>
        <input
          type="checkbox"
          checked={isChecked}
          disabled={isDisabled}
          onChange={onChange}  // Add onChange handler
          readOnly={isDisabled}
        />
      <div className="slider">
        <div className="circle">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          version="1.1"
        
          width="6"
          height="6"
          x="0"
          y="0"
          viewBox="0 0 365.696 365.696"
       
         
          className="cross"
        >
          <g>
            <path
              d="M243.188 182.86 356.32 69.726c12.5-12.5 12.5-32.766 0-45.247L341.238 9.398c-12.504-12.503-32.77-12.503-45.25 0L182.86 122.528 69.727 9.374c-12.5-12.5-32.766-12.5-45.247 0L9.375 24.457c-12.5 12.504-12.5 32.77 0 45.25l113.152 113.152L9.398 295.99c-12.503 12.503-12.503 32.769 0 45.25L24.48 356.32c12.5 12.5 32.766 12.5 45.247 0l113.132-113.132L295.99 356.32c12.503 12.5 32.769 12.5 45.25 0l15.081-15.082c12.5-12.504 12.5-32.77 0-45.25zm0 0"
              fill="currentColor"
              data-original="#000000"
            ></path>
          </g>
        </svg>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          version="1.1"
          width="10"
          height="10"
          x="0"
          y="0"
          viewBox="0 0 24 24"
          
          
          className="checkmark"
        >
          <g>
            <path
              d="M9.707 19.121a.997.997 0 0 1-1.414 0l-5.646-5.647a1.5 1.5 0 0 1 0-2.121l.707-.707a1.5 1.5 0 0 1 2.121 0L9 14.171l9.525-9.525a1.5 1.5 0 0 1 2.121 0l.707.707a1.5 1.5 0 0 1 0 2.121z"
              fill="currentColor"
              data-original="#000000"
              className=""
            ></path>
          </g>
        </svg>
      </div>
    </div>
  </label>
  
  )
}

export default Switch