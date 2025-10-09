const getStoreApp =()=>{
    const installApp= localStorage.getItem("install");
    if(installApp){
        const installationData =JSON.parse(installApp);
        return installationData;  
    }
    else{
        return[];
    }
};

const addToApp=(id)=>{
    const installationData = getStoreApp();
    if (installationData.includes(id)){
        alert("id already exist")
    }
    else{
        installationData.push(id);
        const data = JSON.stringify(installationData);
        localStorage.setItem("install", data);
    }
}
export{addToApp, getStoreApp};