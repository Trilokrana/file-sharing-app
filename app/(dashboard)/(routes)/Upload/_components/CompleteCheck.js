import React from 'react';

const UploadSuccess = () => {
  return (
    <div className="flex flex-col items-center justify-center ">
      <div className="h-24 w-24 flex items-center justify-center rounded-full border-2 border-black animate-bounce">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-green-500 animate-bounce-start-end" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
        </svg>
      </div>
      <div className="text-center">
         <p className="text-3xl">File <strong className='text-primary'>Upload</strong> Successfully</p>
      </div>
    </div>
  );
};

export default UploadSuccess;
