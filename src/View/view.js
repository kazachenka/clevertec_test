import { Api } from '../Api';
let blockUsers = `<h3>Photographers</h3>
  <div class="user_container">`;
  for (let i = 1; i <= 10; i++) {
  blockUsers += `
  <div class="user user${i}">
 </div>`
}
blockUsers += `</div>`;
class ViewClass {
  ViewUsers() {
    Api.getAllUsers().then (data => {
      document.querySelectorAll('.user').forEach((e,i) => {
        e.innerHTML = `
         <div class="user_photo"></div>   
        <h1 class="user_h1">${data[i].name}</h1>
        <h2 class="user_h2">city: ${data[i].address.city}</h2>
        <h2 class="user_h2"> ${data[i].email}</h2>
        `
      })
    })
    Api.getPhotos(11).then (data => {
      const collectionPhotoForUser = document.querySelectorAll('.user_photo');
       collectionPhotoForUser.forEach((e,i) => {
       e.style.backgroundImage = `url('${data[i].thumbnailUrl}')` 
      })
    }) 
  }
  ViewAlbums(){
    Api.getPhotos(1).then (data => {
      console.log(data)
    });
  }
}




export {blockUsers}
export const View = new ViewClass()