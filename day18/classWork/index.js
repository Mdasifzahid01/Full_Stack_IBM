let API_KEY = "AIzaSyBU6thCrUqR-ogtIFKHNISHT_WiMq26xKY";

let lower_body = document.getElementById("lower_body");

// let search_term = document.getElementById("search").value || "India Gate";

async function getData() {
    let search_term = document.getElementById("search").value || "India Gate";

    try {
        let data = await fetch(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&order=rating&q=${search_term}&type=video&videoCaption=any&videoDefinition=any&videoEmbeddable=true&videoLicense=any&maxResults=20&videoType=any&key=${API_KEY}`);

        let res = await data.json();
        // console.log(res.items);
        showData(res.items)

    } catch (error) {
        console.log(error);
    }
}
getData();

async function showData(arr) {
    // lower_body.innerHTML = "";  // clear previous result
    // document.getElementById("lodaing").style.display = "none";
    arr.forEach(({snippet, id}) => {
        // console.log(snippet);
        let box = document.createElement("div");
        box.className = "vedio"

        let img = document.createElement("img");
        img.src = snippet.thumbnails.medium.url;

        let title = document.createElement("p");
        title.innerText = snippet.title;

        let channel_title = document.createElement("p");
        channel_title.innerText = snippet.title;

        box.append(img, title, channel_title);

        lower_body.append(box);

        box.onclick=()=>{
            let obj = {
                snippet, id
            }

            localStorage.setItem("vedioData", JSON.stringify(obj));

            window.location.href = "vedio.html"
        }
    });
}
// { <iframe width="560" height="315" src="https://www.youtube.com/embed/UJoZjKx0SgU?si=Wrmc8tEgUDEEg3YO" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe> }