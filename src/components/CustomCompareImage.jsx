import React, { useState, useRef, useEffect } from 'react';
import * as SliderPrimitive from '@radix-ui/react-slider';
import { cn } from '@/lib/utils';
import { Grab } from 'lucide-react';

const CustomCompareImage = ({ leftImageDescription, rightImageDescription, leftImageAlt, rightImageAlt }) => {
  const [sliderValue, setSliderValue] = useState(50);
  const containerRef = useRef(null);

  useEffect(() => {
    const currentRef = containerRef.current;
    if (currentRef) {
      const resizeObserver = new ResizeObserver(entries => {
        for (let entry of entries) {
          // Basic handling, you might need more complex logic if width changes drastically
        }
      });
      resizeObserver.observe(currentRef);
      return () => resizeObserver.disconnect();
    }
  }, []);

  const handleSliderChange = (value) => {
    setSliderValue(value[0]);
  };
  
  const leftImageStyle = {
    clipPath: `inset(0 ${100 - sliderValue}% 0 0)`,
  };

  return (
    <div ref={containerRef} className="relative w-full max-w-2xl mx-auto aspect-[16/9] overflow-hidden select-none group rounded-lg shadow-xl border border-gray-300">
      <div className="absolute top-0 left-0 w-full h-full">
        <img  
          src={leftImageDescription}
          alt={leftImageAlt || 'Before image'}
          className="absolute top-0 left-0 w-full h-full object-cover pointer-events-none"
          style={leftImageStyle}
         src="https://images.unsplash.com/photo-1595872018818-97555653a011" />
      </div>
      <div className="absolute top-0 left-0 w-full h-full">
        <img  
          src={rightImageDescription}
          alt={rightImageAlt || 'After image'}
          className="absolute top-0 left-0 w-full h-full object-cover pointer-events-none"
         src="https://images.unsplash.com/photo-1595872018818-97555653a011" />
      </div>
      
      <div 
        className="absolute top-0 bottom-0 w-1.5 bg-white cursor-ew-resize opacity-75 group-hover:opacity-100 transition-opacity z-20 shadow-md"
        style={{ left: `${sliderValue}%`, transform: 'translateX(-50%)' }}
      >
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 p-2 bg-white rounded-full shadow-lg border border-gray-300">
           <Grab className="w-6 h-6 text-orange-500" />
        </div>
      </div>

      <SliderPrimitive.Root
        min={0}
        max={100}
        step={0.1}
        value={[sliderValue]}
        onValueChange={handleSliderChange}
        className={cn('absolute bottom-5 left-1/2 -translate-x-1/2 w-11/12 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-30 flex items-center select-none touch-none h-5 cursor-pointer', 
        'image-compare-slider' 
        )}
        aria-label="Image comparison slider"
      >
        <SliderPrimitive.Track className="bg-gray-900/60 relative grow rounded-full h-2 shadow-inner">
          <SliderPrimitive.Range className="absolute bg-orange-500 rounded-full h-full" />
        </SliderPrimitive.Track>
        <SliderPrimitive.Thumb 
        className="block h-6 w-6 rounded-full border-2 border-orange-600 bg-white ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-500 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 shadow-md" 
        />
      </SliderPrimitive.Root>
    </div>
  );
};

export default CustomCompareImage;