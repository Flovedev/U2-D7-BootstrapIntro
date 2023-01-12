function removeRow(r) {
    let i = r.parentNode.parentNode.rowIndex;
    document.getElementById("album-table").deleteRow(i)
}

let trackNumber = document.getElementById("track-number").innerText
let trackTitle = document.getElementById("track-title")
let trackName = document.getElementById("track-name")
let trackDuration = document.getElementById("track-duration")



let tbodyRef = document.getElementById('album-table').getElementsByTagName('tbody')[0];
function addTrack(content) {
    let newRow = tbodyRef.insertRow();

    let newCell = newRow.insertCell();
    let newText = document.createTextNode(content);
    newCell.appendChild(newText);

}

function addTh(content) {
    let thNode = document.createElement('th')

}

function addTd(content) {
    let tdNode = document.createElement('td')

}