const root = document.querySelector('#root')
root.addEventListener('click',function(){
  let result = click();
  console.log(typeof result === 'object')
  console.log(result)
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