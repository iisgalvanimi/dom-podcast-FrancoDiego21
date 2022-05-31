
const listContainerDom=document.getElementById("list_container")

const track_lst= [ " Faded.mp3" ,  " Smack that.mp3" , " Toxic.mp3"]


for ( let i=0 ; i<track_lst.length ; i++ ) {

    // creo la div
    let soundItemDom=document.createElement("div");
    
    // creo il link dentro la div e la aggancio alla div
    let linkDom=document.createElement("a");
    linkDom.href="#";
    linkDom.innerText="Traccia:" + track_lst[i] ; 
    soundItemDom.appendChild(linkDom)

    // aggancio la div al listContainerDom
    soundItemDom.classList.add("sound_item");
    listContainerDom.appendChild(soundItemDom)
}