import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom'; 
import { addToApp } from '../../Utility/AddtoApp';

const AppDetails = () => {
    const {id} = useParams(); 
    const data = useLoaderData();
    const app = data.find(app => app.id.toString() === id); 

    
    if (!app) {
        return <div className="p-8 text-center text-gray-700 bg-gray-50 min-h-screen">App Data Not Available. Check your loader data or ID.</div>;
    }
    
    const {title,companyName,downloads,reviews,ratingAvg, ratings,description,size, image} = app;
   
    
    const formatCount = (num) => {
        if (num >= 1000000) return `${(num / 1000000).toFixed(1)}M`;
        if (num >= 1000) return `${(num / 1000).toFixed(1)}K`;
        return num;
    };
    const totalReviews = reviews;
    const fiveStarCount = ratings.find(r => r.name === "5 star")?.count || 0;

    const handleInstall =(appIdString)=>{
        addToApp(appIdString);
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
                        
                        <button onClick={()=>handleInstall(id)} className="mt-4 sm:mt-0 px-6 py-2 bg-green-600 hover:bg-green-700 text-white font-semibold rounded-full shadow-md transition-colors">
                            Install Now ({size}MB)
                        </button>
                    </div>

                    
                    <h2 className="text-xl font-semibold mb-3 text-gray-800">Ratings ({formatCount(reviews)})</h2>
                    <div className="flex flex-col space-y-2 mb-6 p-4 bg-gray-100 rounded-md">
                        
                        
                        <div className="flex items-center space-x-4 mb-4">
                            
                            <div className="text-4xl font-bold text-orange-500">
                                {ratingAvg.toFixed(1)}
                            </div>
                            <div className="flex flex-col text-sm">
                                <p className="text-gray-700">{formatCount(fiveStarCount)} 5-star ratings</p>
                                <p className="text-gray-500">{totalReviews} total reviews</p>
                            </div>
                        </div>

                        
                        {[...ratings].sort((a, b) => parseInt(b.name) - parseInt(a.name)).map((rating) => {
                            const starLevel = rating.name.split(' ')[0];
                            const percentage = (rating.count / totalReviews) * 100;
                            
                            return (
                                <div key={rating.name} className="flex items-center text-sm">
                                    <span className="w-8 text-right text-gray-600 mr-2">{starLevel}</span>
                                    <div className="flex-1 h-3 bg-gray-300 rounded-full overflow-hidden">
                                        
                                        <div 
                                            className="h-full bg-orange-500" 
                                            style={{ width: `${percentage.toFixed(0)}%` }}
                                            title={`${percentage.toFixed(1)}%`}
                                        ></div>
                                    </div>
                                    <span className="w-12 text-right text-gray-600 ml-2 text-xs">{formatCount(rating.count)}</span>
                                </div>
                            );
                        })}
                    </div>
                <h2 className="text-xl font-semibold mb-3 text-gray-800">Description</h2>
                    <div className="text-gray-700 leading-relaxed bg-gray-100 p-4 rounded-md">
                        <p>{description}</p>
                        <p className="mt-3 text-sm text-gray-500">
                            Take control of your finances with powerful tracking tools, insightful reports, and customized savings goals. Never lose track of your spending again.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AppDetails;