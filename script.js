

function hideForm() {
    document.getElementById("inputForm").style.display = "none";
}




// function reIndex() {
//     var btns = document.getElementsByClassName('deleteBtn');
//     for (let index = 0; index < current_index; index++) {
//         var currentBtn = btns[index]
//         currentBtn.setAttribute("id", index.toString());
//     }
//     for (let index = 0; index < btns.length; index++) {
//         console.log(btns[index])

//     }

// }

function showForm() {
    if (document.getElementById("inputForm").style.display == "none") {
        document.getElementById("inputForm").style.display = "grid"
    }
    else {
        document.getElementById("inputForm").style.display = "none";
    }
    // var form = document.getElementById('inputForm');
    // if (form.style.display != "grid") {
    //     form.style.display = "grid";
    // } else {
    //     document.getElementsByTagName("input")[1].value = "";
    //     document.getElementsByTagName("input")[2].value = "";
    //     document.getElementsByTagName("input")[3].value = "";
    //     x.style.display = "none";
    // }
}

//function addArtist() {

    // var valid = true

    // let artistName = document.getElementById("name").value;
    // let artistInfo = document.getElementById("info").value;
    // let artistImg = document.getElementById("img").value;

    // if (artistName.length > 40) {
    //     alert("Please enter a name with 40 characters or less.")
    //     document.getElementById("name").value = ""
    //     valid = false;
    // }

    // if (artistInfo.length > 40) {
    //     alert("Please enter a description with 40 characters or less.")
    //     document.getElementById("info").value = ""
    //     valid = false;
    // }

    // if (valid) {

    //     var mainDiv = document.createElement("div");
    //     mainDiv.setAttribute("class", "artistInfo");

    //     var image = document.createElement("img");
    //     image.setAttribute("src", artistImg);
    //     image.setAttribute("class", "artistImg");

    //     var name = document.createElement("H3");
    //     name.setAttribute("class", "name");
    //     var nameText = document.createTextNode(artistName);
    //     name.appendChild(nameText);

    //     var info = document.createElement("H5");
    //     info.setAttribute("class", "school");
    //     var infoText = document.createTextNode(artistInfo);
    //     info.appendChild(infoText);

    //     var deleteBtn = document.createElement("button");
    //     deleteBtn.setAttribute("class", "deleteBtn");
    //     deleteBtn.setAttribute("id", current_index.toString());
    //     deleteBtn.setAttribute("onClick", "deleteArtist(this.id)")
    //     var deleteLabel = document.createTextNode("Delete");
    //     deleteBtn.appendChild(deleteLabel);



    //     mainDiv.appendChild(image);
    //     mainDiv.appendChild(name);
    //     mainDiv.appendChild(deleteBtn);
    //     mainDiv.appendChild(info);

    //     var parentDiv = document.getElementById("artistList")

    //     parentDiv.appendChild(mainDiv);
    //     document.getElementById("inputForm").style.display = "none";




    // }
    // current_index++

    // save();

    // let artistForm1 = document.getElementById("name");
    // let artistForm2 = document.getElementById("info");
    // let artistForm3 = document.getElementById("img");

    // artistForm1.value = ""
    // artistForm2.value = ""
    // artistForm3.value = ""
//}



// function deleteArtist(id) {
//     var parent = document.getElementById(id).parentNode;
//     parent.remove();
//     current_index--
//     var name = parent.getElementsByTagName("h3")[0].textContent
//     localStorage.removeItem(name.toString())
//     reIndex();

// }




// function save() {
//     var artistList = document.getElementById("artistList");
//     var artists = artistList.getElementsByTagName("div")

//     for (let index = 0; index < artists.length; index++) {
//         var children = artists[index].childNodes
//         var child1 = children[0].src
//         var child2 = children[1].childNodes[0].nodeValue;
//         var child3 = children[3].childNodes[0].nodeValue;
//         var value = [child1, child2, child3]
//         localStorage.setItem(child2, JSON.stringify(value));

//     }



// }

// function loadArtists() {
//     var keys = Object.keys(localStorage);
//     for (let index = 0; index < keys.length; index++) {
//         console.log(keys[index])
//         var test2 = JSON.parse(localStorage.getItem(keys[index].toString()));


//         var mainDiv = document.createElement("div");
//         mainDiv.setAttribute("class", "artistInfo");

//         var image = document.createElement("img");
//         image.setAttribute("src", test2[0].toString());
//         image.setAttribute("class", "artistImg");

//         var name = document.createElement("H3");
//         name.setAttribute("class", "name");
//         var nameText = document.createTextNode(test2[1]);
//         name.appendChild(nameText);

//         var info = document.createElement("H5");
//         info.setAttribute("class", "school");
//         var infoText = document.createTextNode(test2[2]);
//         info.appendChild(infoText);

//         var deleteBtn = document.createElement("button");
//         deleteBtn.setAttribute("class", "deleteBtn");
//         deleteBtn.setAttribute("id", current_index.toString());
//         deleteBtn.setAttribute("onClick", "deleteArtist(this.id)")
//         var deleteLabel = document.createTextNode("Delete");
//         deleteBtn.appendChild(deleteLabel);



//         mainDiv.appendChild(image);
//         mainDiv.appendChild(name);
//         mainDiv.appendChild(deleteBtn);
//         mainDiv.appendChild(info);

//         var parentDiv = document.getElementById("artistList")

//         parentDiv.appendChild(mainDiv);

//         current_index++
//     }

// }


function search(query) {

    var filter, artistList, artists, a, i, txtValue;

    filter = query.toUpperCase();

    artistList = document.getElementById("artistList");
    artists = artistList.getElementsByClassName("artistInfo")

    // Loop through all list items, and hide those who don't match the search query
    for (i = 0; i < artists.length; i++) {

        a = artists[i].getElementsByTagName("h3")[0];
        txtValue = a.textContent;

        if (txtValue.toUpperCase().indexOf(filter) > -1) {
            artists[i].style.display = "";

        } else {
            artists[i].style.display = "none";
        }
    }

}


function addNewArtist(artistInfo, index) {


    let textName = artistInfo.name;
    let textAboutArtist = artistInfo.info;
    let artistImage = artistInfo.img;



    let btn_delete = document.createElement("input");

    btn_delete.type = 'submit';
    btn_delete.value = 'Delete';
    btn_delete.setAttribute("class", "deleteBtn")


    var mainDiv = document.createElement("div");
    mainDiv.setAttribute("class", "artistInfo");

    var image = document.createElement("img");
    image.setAttribute("class", "artistImg");
    image.setAttribute("src", artistImage);

    mainDiv.appendChild(image)


    var form = document.createElement("form");
    form.method = "POST";
    form.action = "/artist/delete/" + String(index);
    
    form.appendChild(btn_delete)

    mainDiv.appendChild(form)


    var name = document.createElement("H3");
    name.setAttribute("class", "name");
    name.innerText = textName;

    mainDiv.appendChild(name)

    var info = document.createElement("H5");
    info.setAttribute("class", "school");
    info.innerText = textAboutArtist;

    mainDiv.appendChild(info)




    var parent1 = document.getElementById("artistList")
    parent1.appendChild(mainDiv);


    document.getElementById("inputForm").style.display = "none";


    document.getElementsByTagName("input")[1].value = "";
    document.getElementsByTagName("input")[2].value = "";
    document.getElementsByTagName("input")[3].value = "";



}


window.onload = () => {
    console.log("-------------------------------")
    let artistsArray = [];
    fetch('/getData').then((response) => {
        if (response.status !== 200) {
            console.log('Error code: ' + response.status);
            return;
        }

        response.json().then(function (data) {
            for (i = 0; i < data.length; i++)
                addNewArtist(data[i], i);
        });
    })
};
