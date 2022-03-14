const logo = document.getElementById('logo');
const internetStatus = document.getElementById('status');
const description = document.getElementById('description');
const body = document.querySelector('body');
const INTERVAL_IN_MILLISECONDS = 10000;

const checkOnlineStatus = async () => {
    const isOnline = navigator.onLine;
    return isOnline;
};

const updateStatusUI = (result) => {
    if (result) {
        logo.classList.remove('bx-wifi-off');
        logo.classList.add('bx-wifi');
        body.style.backgroundColor = '#2ecc71';
        internetStatus.textContent = "Online";
        description.textContent = 'Connected to internet';
    } else {
        logo.classList.remove('bx-wifi');
        logo.classList.add('bx-wifi-off');
        body.style.backgroundColor = '#e74c3c';
        internetStatus.textContent = "Offline";
        description.textContent = 'No Internet Connection...';
    }
}


setInterval(async () => {
    updateStatusUI(await checkOnlineStatus());
}, INTERVAL_IN_MILLISECONDS);


window.addEventListener("load", async () => {
    updateStatusUI(await checkOnlineStatus());
});
