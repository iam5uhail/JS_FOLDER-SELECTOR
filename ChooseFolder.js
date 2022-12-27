
// file size checker
function bytesToSize(bytes) {
    var sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB'];
    if (bytes == 0) return 'n/a';
    var i = parseInt(Math.floor(Math.log(bytes) / Math.log(1024)));
    if (i == 0) return bytes + ' ' + sizes[i];
    return (bytes / Math.pow(1024, i)).toFixed(1) + ' ' + sizes[i];
}

// mouse hovering effect on info button 
function mouseover(e, index) {
    let id = document.getElementById(`show${index}`);
    id.style.display = 'block';
}

// getting file from system
function gettingData(e) {
    console.log(e.target.files);
    var fileData = e.target.files;
    let fileArray = new Array();

    var dataContent = document.getElementById("dataContent");
    dataContent.innerHTML = '';
    for (let i = 0; i < fileData.length; i++) {
        fileArray.push({
            name: fileData[i].name,
            size: fileData[i].size
        })
    }

    // sorting file name by alphabetical order
    fileArray.sort((a, b) => a.name.localeCompare(b.name))

    // creating table with fetching data
    for (let i = 0; i < fileArray.length; i++) {
        let tr = document.createElement("tr");

        let td = document.createElement("td");
        let data= fileArray[i].name;
        td.innerHTML =data.substring(0, data.lastIndexOf('.'))
        tr.appendChild(td);
        console.log(fileArray[i].size + 'Bytes');
        let td2 = document.createElement("td");

        let sz = bytesToSize(fileArray[i].size);
        td2.innerHTML = sz;
        tr.appendChild(td2);

        // more detail showing by hovering on More Detail button
        let td3 = document.createElement("td");
        td3.innerHTML = `
        <div style="display:flex justify-content:center">
            <div class="tooltip">
            <button>More Details</button>
                <div class="tooltiptext" >
                <p>name:${td.innerHTML}</p>
                    <p>fullname: ${fileArray[i].name}</p>
                    <p>size: ${sz}</p>
                </div>
            </div>  
        </div>
        `;
        tr.appendChild(td3);
        dataContent.appendChild(tr);
    }
}