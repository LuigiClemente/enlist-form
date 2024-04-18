import React from 'react'

const FooterShape = ({footerBg}:{footerBg : string}) => {
  return (
    
    <svg  width="100%" viewBox="0 0 1577 4307" fill="none" xmlns="http://www.w3.org/2000/svg">
            
    <path fill={'red'}>
      <animate
        attributeName="d"
        dur="30s"

        repeatCount="indefinite"
        values="M0 356.759V2126H1577V218.07C1514.33 161.85 1445.22 112.053 1369.5 72.4841C993.38 -124.064 412.605 117.161 0 356.759Z;
      M0 300.446V2126H1577V504.101C1360.04 335.784 1108.8 171.677 918.5 72.2294C571.912 -108.886 269.554 81.8469 0 300.446Z;
      M0 283.735V2056H1577V317.047C1369.34 129.452 1125.7 -19.1374 918.5 2.22934C525.4 42.7656 247.64 143.295 0 283.735Z;
      M0 356.759V2126H1577V218.07C1514.33 161.85 1445.22 112.053 1369.5 72.4841C993.38 -124.064 412.605 117.161 0 356.759Z"
      ></animate>
    </path>
  </svg>
  )
}

export default FooterShape