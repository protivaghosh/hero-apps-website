import Swal from 'sweetalert2';

const getStoreApp = () => {
  const installApp = localStorage.getItem("install");
  if (installApp) {
    return JSON.parse(installApp);
  } else {
    return [];
  }
};

const addToApp = (id) => {
  const installationData = getStoreApp();
  if (installationData.includes(id)) {
    Swal.fire({
      title: 'Already Added!',
      text: 'This app is already in your list.',
      icon: 'warning',
      confirmButtonText: 'OK'
    });
  } else {
    installationData.push(id);
    localStorage.setItem("install", JSON.stringify(installationData));
  }
};


const removeFromApp = (id) => {
  const stored = getStoreApp();
  const updated = stored.filter(appId => appId.toString() !== id.toString());
  localStorage.setItem("install", JSON.stringify(updated)); 
};


export { addToApp, getStoreApp, removeFromApp };
