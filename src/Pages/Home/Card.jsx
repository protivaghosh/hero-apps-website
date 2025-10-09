import React from 'react';
import { FaDownload, FaStar } from 'react-icons/fa';
import { Link } from 'react-router';

const Card = ({App}) => {
    const {image, title, downloads, ratingAvg, id} = App 
    const displayRating = ratingAvg > 4.5 ? 5 : ratingAvg.toFixed(1);
    return (
         <Link to={`/AppDetails/${id}`}>
            <div>
                    <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100">
                   <div className="flex items-center justify-center mt-4">
                       <img 
                           src={image} 
                           alt={title} 
                           className=" h-40 rounded-lg"
                       />
                   </div>
               <div className="p-4">
                   <h3 className="text-lg font-semibold text-gray-800 mb-3 truncate">
                           {title}
                       </h3>
               <div className="flex justify-between items-center text-sm">
                           
                <div className="flex items-center bg-green-50 text-green-700 font-medium py-1 px-2 rounded-lg">
                               <FaDownload className="w-3 h-3 mr-1" />
                               <span>{(downloads)}</span> 
                           </div>
                           
                          <div className="flex items-center bg-orange-50 text-orange-600 font-medium py-1 px-2 rounded-lg">
                               <FaStar className="w-3 h-3 mr-1" />
                               <span>{displayRating}</span> 
                           </div>
                       </div>
                   </div>
               </div>
               </div>
         </Link>
          
    );
};

export default Card;