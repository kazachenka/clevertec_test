import {ViewEventClick} from '../view'
import { Api } from '../Api';
let name = {
  name: ''
}

const root = document.querySelector('#root')
root.addEventListener('click',function (){
  let result = click();
  if (typeof result === 'object'){
   root.innerHTML =  ViewEventClick(result);
   Api.getAllUsers().then(data => {
    result[0] === 'user' ? name.name = data[result[1]].name : false;
     result[0] === 'user' ? document.querySelector('.name').innerHTML =  name.name : false;
     result[0] === 'photos-back' ? document.querySelector('.name').innerHTML =  name.name : false;
     result[0] === 'album' ? document.querySelector('.name').innerHTML =  name.name : false;
   })
  }
})  
function click(){
  if(event.target.classList.contains('user_button')){ 
    return ['user',event.target.getAttribute('data-user')]
  }
  if(event.target.classList.contains('album_button')){
    return ['album',event.target.getAttribute('data-album')]
  }
  if(event.target.classList.contains('album_back')){
    return ['album-back']
  }
  if(event.target.classList.contains('photos_back')){
    return ['photos-back']
  }
}

export {root}