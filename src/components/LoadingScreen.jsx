import { useEffect, useState } from 'react';
import Lottie from 'lottie-react';
import loadingAnimation from '../assets/loading-animation.json';

const LoadingScreen = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [val, setVal] = useState(0);
  const [val2, setVal2] = useState(0);

  useEffect(() => {
    setTimeout(() => {
      setVal(100);
    }, 500);
    setTimeout(() => {
      setVal2(100);
    }, 2500);
    setTimeout(() => {
      setIsLoading(false);
    }, 4000);
  }, []);
  return (
    <>
      {isLoading && (
        <div className='w-screen h-screen fixed top-0 left-0 z-[9999] bg-white flex flex-col justify-center items-center overflow-hidden transition-all'>
          <Lottie animationData={loadingAnimation} style={{ width: '400px' }} />
          <div className='text-4xl'>
            <span className={`opacity-${val} transition-all`}>Hi! </span>
            <span className={`opacity-${val2} transition-all`}>
              I&apos;m Xenon
            </span>
          </div>
        </div>
      )}
    </>
  );
};

export default LoadingScreen;
