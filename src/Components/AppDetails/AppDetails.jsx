import React, { useState } from 'react';
import { useLoaderData, useParams } from 'react-router-dom'; 
import { addToApp } from '../../Utility/AddtoApp';
import {
  BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid, ResponsiveContainer
} from 'recharts';
import Swal from 'sweetalert2';
import errorImg from'../../assets/App-Error.png'


const AppDetails = () => {
    const {id} = useParams(); 
    const data = useLoaderData();
    const app = data.find(app => app.id.toString() === id); 



     if (!app) {
    return (
      <div className="flex flex-col justify-center items-center h-screen bg-gray-50 text-gray-700">
        <img 
          src={errorImg}
          alt="App Not Found" 
          className="w-48 h-48 mb-6 opacity-80"
        />
        <h1 className="text-3xl font-bold text-teal-600 mb-2">App Not Found</h1>
        
      </div>
    );
  }

    const {title,companyName,downloads,reviews,ratingAvg, ratings,description,size, image} = app;
   
    
    const formatCount = (num) => {
        if (num >= 1000000) return `${(num / 1000000).toFixed(1)}M`;
        if (num >= 1000) return `${(num / 1000).toFixed(1)}K`;
        return num;
    };

   const chartData = ratings.map(r => ({
    name: r.name,
    count: r.count
  })).sort((a, b) => parseInt(b.name) - parseInt(a.name));


  const [installed, setInstalled] = useState(false);
    const handleInstall =(appIdString)=>{
        addToApp(appIdString);
         setInstalled(true);
    Swal.fire({
    toast: true,
    position: "top-end",
    icon: "success",
    title: `"${title}" installed successfully!`,
    showConfirmButton: false,
    timer: 1800,
    timerProgressBar: true,
  });
    }

    


    return (
        <div>
        <div className="min-h-screen bg-gray-50 text-gray-900 p-4 sm:p-8">
            <div className="max-w-4xl mx-auto bg-white p-6 rounded-lg shadow-xl">
                
            <div className="flex items-start mb-6">
                    
                        <div className="w-20 h-20 bg-gray-200 rounded-xl flex items-center justify-center mr-4 flex-shrink-0 overflow-hidden">
                            <img src={image} 
                                alt={`${title} icon`} 
                                className="object-cover w-full h-full"
                            />
                        </div>
                        <div className="flex flex-col">
                            <h1 className="text-3xl font-bold text-gray-900">{title}</h1>
                            <p className="text-sm text-gray-600 mt-1">
                                Developed by <span className="text-teal-600 font-medium">{companyName}</span>
                            </p>
                            <p className="text-xs text-gray-400 mt-1">
                                Size: {size}MB
                            </p>
                        </div>
                    </div>

                    <div className="flex items-center justify-between border-b border-gray-200 pb-4 mb-6 flex-wrap">
                        <div className="flex space-x-8 text-center">
                            <div className="p-2">
                                
                                <p className="text-xl font-bold text-teal-600">{formatCount(downloads)}</p>
                                <p className="text-sm text-gray-500">Downloads</p>
                            </div>
                            <div className="p-2">
                                
                                <p className="text-xl font-bold text-teal-600">{ratingAvg}</p>
                                <p className="text-sm text-gray-500">Avg Rating</p>
                            </div>
                            <div className="p-2">
                                
                                <p className="text-xl font-bold text-teal-600">{formatCount(reviews)}</p>
                                <p className="text-sm text-gray-500">Total Reviews</p>
                            </div>
                        </div>
           

              <button onClick={() => handleInstall(id)}
              disabled={installed}
              className={`mt-4 sm:mt-0 px-6 py-2 font-semibold rounded-full shadow-md transition-colors  text-white bg-teal-600 hover:bg-teal-700
                ${installed }`} >
              {installed ? 'Installed' : `Install Now (${size}MB)`}
            </button>
                    </div>

                    
                    <h2 className="text-xl font-semibold mb-3 text-gray-800">Ratings ({formatCount(reviews)})</h2>
                    <div className="flex flex-col space-y-2 mb-6 p-4 bg-gray-100 rounded-md">
                     {/* Chart Section */}
        <h2 className="text-xl font-semibold mb-3 text-gray-800">Ratings Overview</h2>
        <div className="bg-gray-100 p-4 rounded-md mb-6">
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={chartData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="count" fill="#f97316" radius={[10, 10, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>   
                     
                    </div>
                <h2 className="text-xl font-semibold mb-3 text-gray-800">Description</h2>
                    <div className="text-gray-700 leading-relaxed bg-gray-100 p-4 rounded-md">
                        <p>{description}</p>
                       </div>
                </div>
            </div>
        </div>
    );
};

export default AppDetails;