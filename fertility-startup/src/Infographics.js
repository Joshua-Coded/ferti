import React from 'react';

const Infographics = ({ data }) => {
    return (
        <div className="flex flex-col md:flex-row flex-wrap justify-center mt-5">
            {data.map((item, index) => (
                <div key={index} className="bg-white border border-gray-300 rounded-lg p-4 text-center shadow-md w-full md:w-1/2 lg:w-1/3 m-2">
                    <h3 className="text-lg font-bold mb-2">{item.title}</h3>
                    <h1 className="text-4xl font-bold mb-2 text-teal-500">{item.value}</h1>
                    <p className="text-gray-700">{item.description}</p>
                </div>
            ))}
        </div>
    );
};

export default Infographics;
