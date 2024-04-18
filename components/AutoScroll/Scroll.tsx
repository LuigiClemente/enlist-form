import React, { useEffect, useState } from "react";
import Image from 'next/image';


interface InfiniteLoopSliderProps {
    children: React.ReactNode;
    duration: number;
    reverse?: boolean;
  }
  
  interface TagProps {
    text: string;
  }
  
  interface ScrollProps {
    items: string[];
  }


const DURATION: number = 130000;

const InfiniteLoopSlider: React.FC<InfiniteLoopSliderProps> = ({ children, duration, reverse = false }) => {
    return (
        <div className='loop-slider' style={{
            '--duration': `${duration}ms`,
            '--direction': reverse ? 'reverse' : 'normal'
        } as React.CSSProperties}>
           
                {children}
            
        </div>
    );
};

export const Scroll: React.FC<ScrollProps> = ({ items }) => {
    const [displayItems, setDisplayItems] = useState([...items, ...items,...items,...items,...items,...items,...items,...items,...items]);

   
    return (
        <div className='tag-list'>
            <InfiniteLoopSlider duration={DURATION}>
                {displayItems.map((tag, index) => (
                    <React.Fragment key={index}>
                        <Image alt={`Tag ${tag}`} src={tag} width={300} height={300} className="object-contain rounded-lg h-[268px] w-[268px] md:h-[238px] md:w-[238px] 2xl:h-[300px] 2xl:w-[300px]" />
                    </React.Fragment>
                ))}
            </InfiniteLoopSlider>
            <div className='fade' />
        </div>
    );
};