import React from 'react';

const Loading = () => {
    return (
        <div className="flex justify-center items-center">
            <div className="spinner-border  animate-spin inline-block w-52 h-52 border-[22px] rounded-full text-blue-600 " role="status">
            </div>
        </div>
    );
};

export default Loading;