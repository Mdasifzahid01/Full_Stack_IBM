let div = document.getElementById("indexform");

form.addEventListener("submit" , (e) => {
    e.preventDefault();

    let moviename = document.getElementById("moviename").value;
    let raleaseyear = document.getElementById("raleaseyear").value;
    let imdb = document.getElementById("imdb").value;
    let poster = document.getElementById("poster").value;
    let discreption = document.getElementById("discreption").value;
    let gener = document.getElementById("gener").value;

    let Object = {
        moviename, raleaseyear, imdb, poster, discreption
    }
    let tr = document.createElement("tr");

    let td1 = document.createElement("td");
    td1.innerText = Object.moviename;

    let td2 = document.createElement("td");
    td1.innerText = Object.raleaseyear;

    let td3 = document.createElement("td");
    td1.innerText = Object.imdb;

    let td4 = document.createElement("td");
    td1.innerText = Object.url;

    let td5 = document.createElement("td");
    td1.innerText = Object.discreption;

    tr.append(td1, td2, td3, td4, td5)

    document.getElementById("tbody").append(tr);
});