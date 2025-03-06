let vedioData = JSON.parse(localStorage.getItem("vedioData"));

let mainContainer = document.getElementById("container");

async function showData(data) {
    let iframe = document.createElement("iframe");

    iframe.src = `https://www.youtube.com/embed/${data.id.vedioId}`;

    iframe.height = "500px"
    iframe.width = "60%"

    let title = document.createElement("p");
    title.innerText = data.snippet.title;

    let channel_title = document.createElement("p");
    channel_title.innerText = data.snippet.channelTiitle;

    iframe.setAttribute("allowfullscreen", true);

    mainContainer.append(iframe, title, channel_title);
}
showData(vedioData);