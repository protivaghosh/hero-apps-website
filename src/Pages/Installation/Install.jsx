import React, { useEffect, useState } from 'react';
import { getStoreApp, removeFromApp } from '../../Utility/AddtoApp';
import { IoMdArrowDropdown } from "react-icons/io";
import Swal from 'sweetalert2';



const formatCount = (num) => {
    if (num >= 1000000) return `${(num / 1000000).toFixed(1)}M`;
    if (num >= 1000) return `${(num / 1000).toFixed(1)}K`;
    return num;
};

const Install = ({data}) => {
    const [installedApps, setInstalledApps] = useState([]);
     const [sortType, setSortType] = useState("");

    
    useEffect(() => {
  const installedAppData = getStoreApp();
  const myInstallApps = data.filter(app => installedAppData.includes(app.id.toString()));  
  setInstalledApps(myInstallApps);
}, [data]);



     //Sorting Function
  const handleSort = (type) => {
    setSortType(type);

    let sorted = [...installedApps];
    if (type === "high-low") {
      sorted.sort((a, b) => b.downloads - a.downloads); 
    } else if (type === "low-high") {
      sorted.sort((a, b) => a.downloads - b.downloads);
    }
    setInstalledApps(sorted);
  };

   // Uninstall Function
  const handleUninstall = (id, title) => {
    const updated = installedApps.filter(app => app.id !== id);
    setInstalledApps(updated);
    removeFromApp(id);
     Swal.fire({
      toast: true,
      position: "top-end",
      icon: "success",
      title: `"${title}" uninstalled successfully!`,
      showConfirmButton: false,
      timer: 1800,
      timerProgressBar: true,
    });
  };
    return (
        <div>
            <div className='flex justify-between items-center py-10'>
    <h1 className='font-bold '>({installedApps.length}) Apps Found</h1>
            <details className="dropdown">
  <summary className="btn m-1">Sort By Size<IoMdArrowDropdown /></summary>
  <ul className="menu dropdown-content bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
    <li><button onClick={() => handleSort("high-low")}>High-Low</button></li>
    <li><button onClick={() => handleSort("low-high")}>Low-High</button></li>
  </ul>
</details>
  </div>
    <div className="min-h-screen p-2 sm:p-4">
             {installedApps.length === 0 ? (
         <p className="text-gray-500">You haven't installed any apps yet.</p>
            ) : (
          <div className="flex flex-col space-y-4 max-w-4xl mx-auto">
            {installedApps.map(app => (<div key={app.id} className="flex flex-col sm:flex-row sm:items-center items-center justify-between p-4 bg-white border border-gray-200 rounded-lg shadow-md"> 
                <div className="flex items-center flex-grow">
                     <div className="w-16 h-16 mr-4 flex-shrink-0 rounded-xl overflow-hidden bg-gray-100">
        <img src={app.image}  alt={`${app.title} icon`} 
             className="object-cover w-full h-full"
                                    />
                                </div>
              <div className="flex flex-col">
                     <h3 className="text-lg font-semibold text-gray-800">{app.title}</h3>
                                    
                      <div className="flex items-center text-sm mt-1 space-x-3 text-gray-500">
                                        
                         <span className="flex items-center text-green-600">
                         <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"></path></svg>
                             <span className="font-medium">{formatCount(app.downloads)}</span>
                                        </span>
                                        
                           <span className="flex items-center text-orange-500">
                                            <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M9.049 2.927c.3-.921 1.631-.921 1.932 0l1.75 5.385a1 1 0 00.95.691h5.65c.969 0 1.372 1.24.588 1.839l-4.576 3.328a1 1 0 00-.364 1.118l1.75 5.385c.3.921-.755 1.688-1.54 1.118L10 16.59l-4.576 3.328c-.784.57-1.84-.197-1.54-1.118l1.75-5.385a1 1 0 00-.364-1.118L2.091 10.84c-.784-.57-.381-1.839.588-1.839h5.65a1 1 0 00.95-.691l1.75-5.385z"></path></svg>
                        <span className="font-medium">{app.ratingAvg.toFixed(1)}</span>
                                        </span>

                                        <span className="text-gray-400">{app.size}MB</span>
                                    </div>
                                </div>
                            </div>
                            
                            <button  onClick={() => handleUninstall(app.id, app.title)} className="px-4 py-1.5 bg-red-500 hover:bg-red-600 text-white font-semibold rounded-lg shadow-md transition-colors text-sm ml-4 flex-shrink-0">
                                Uninstall
                            </button>
                        </div>
                    ))}
                </div>
            )}
        </div>
        </div>
    );
};

export default Install;