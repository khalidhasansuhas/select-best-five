// function getSelectedPlayerNameByUsingId(elemntId, playerName){
//     //let player = document.getElementById(playerName).innerText;
//     let playerInList = document.getElementById('selected-player').childElementCount;
//     if(playerInList < 5){
//         const newList = document.createElement('li');
//         const newListText = document.createTextNode(playerName);
//         newList.appendChild(newListText);

//         document.getElementById(elemntId).disbled = true;
//     }
//     else {
//         alert('Maximum Players Added');
//     }
// }

function selectByClick(selectPlayerByClick, player){
    const selectPlayer = document.getElementById(selectPlayerByClick).innerText;

    let playerInList = document.getElementById('selected-player');
    let playerNode = playerInList.childElementCount;
    console.log(playerNode);

    if (playerNode < 5 ){
        const playerList = document.getElementById('selected-player');
        const newList = document.createElement('li');
        newList.innerText = selectPlayer;
        playerList.appendChild(newList);

        document.getElementById(player).disabled = true ;
    }
    else {
        alert ('maximum player added');
    }

    
}


function getInputValueUsingId (elemntId){
    const inputFieldElement = document.getElementById(elemntId);
    const inputFieldElementString = inputFieldElement.value;
    const inputFieldValue = parseInt(inputFieldElementString);
    return inputFieldValue;
}