import React, { useState, useEffect } from 'react';
import { CiSearch } from "react-icons/ci";
import AppData from './AppData';
import AppError from './AppError';


const AllApps = ({ data }) => {
    const [searchTerm, setSearchTerm] = useState("");
    const [filteredApp, setFilteredApp] = useState(data);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);
        const timer = setTimeout(() => {
            const filtered = data.filter(app =>
                app.title.toLowerCase().includes(searchTerm.toLowerCase())
            );
            setFilteredApp(filtered);
            setLoading(false);
        }, 500); 

        return () => clearTimeout(timer);
    }, [searchTerm, data]);

    return (
        <div className='w-11/12 mx-auto mt-16 pb-16'>
            <div className='flex justify-between items-center flex-col md:flex-row'>
                <h3 className='md:text-2xl font-bold'>({data.length}) Apps Found</h3>
                <div className='flex items-center justify-center text-xl bg-white py-2 px-4'>
                    <CiSearch />
                    <input
                        type="search"
                        placeholder='Search Apps'
                        className='px-2'
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />
                </div>
            </div>

            {loading ? (
                <div className="flex justify-center items-center mt-10">
                    <div className="loader"><span className="loading loading-spinner text-primary"></span></div> 
                </div>
            ) : filteredApp.length === 0 ? (
                <AppError />
            ) : (
                <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 mt-10 gap-4'>
                    {filteredApp.map(app => <AppData key={app.id} App={app} />)}
                </div>
            )}
        </div>
    );
};

export default AllApps;
