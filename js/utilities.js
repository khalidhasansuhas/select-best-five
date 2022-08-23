function getSelectedPlayerNameByUsingId(elemntId, playerName){
    //let player = document.getElementById(playerName).innerText;
    let playerInList = document.getElementById('selected-player').childElementCount;
    if(playerInList < 5){
        const newList = document.createElement('li');
        const newListText = document.createTextNode(playerName);
        newList.appendChild(newListText);

        document.getElementById(elemntId).disbled = true;
    }
    else {
        alert('Maximum Players Added');
    }
}