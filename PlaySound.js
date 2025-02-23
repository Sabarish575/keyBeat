window.addEventListener("keyup",(event)=>{

    const keyElement=document.querySelector(`.box[data-keys="${event.keyCode}"]`);

    if(keyElement){
        keyElement.classList.remove("key");
    }

})


window.addEventListener("keydown",(event)=>{
    const audio=document.querySelector(`audio[data-keys="${event.keyCode}"]`);
    const keyElement=document.querySelector(`.box[data-keys="${event.keyCode}"]`);

    try{
        if(audio){
            audio.currentTime=0;
            audio.play();
    
            if(keyElement){
                keyElement.classList.add('key');

        }

    
        }
    }
    catch(e){
        alert("bullshit");
    }
})

