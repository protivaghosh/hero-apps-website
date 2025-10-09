import React from 'react';
import appErrorImg from '../../assets/App-Error.png'

const AppError = () => {
    return (
        <div className='flex flex-col justify-center items-center w-full min-h-[300px] p-10'>
            <div>
                <img src={appErrorImg} alt=""  className="max-w-full h-auto"/>

            </div>
        </div>
    );
};

export default AppError;