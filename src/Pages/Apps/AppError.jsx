import React from 'react';
import appErrorImg from '../../assets/App-Error.png'

const AppError = () => {
    return (
         <div className="flex flex-col justify-center items-center h-screen  text-gray-700">
                <img 
                  src={appErrorImg}
                  alt="App Not Found" 
                  className="w-48 h-48 mb-6 opacity-80"
                />
                <h1 className="text-3xl font-bold text-teal-600 mb-2">App Not Found</h1>
                
              </div>
    );
};

export default AppError;