import { Api } from '../Api';

let blockUsers = `<h3>Photographers</h3>
  <div class="user_container">`;
  for (let i = 1; i <= 10; i++) {
    blockUsers += `<div class="user user${i}"></div>`
  }
blockUsers += `</div>`;

//

let blockAlbums =  `<h3>Name</h3>
<h4>Her email</h4>
<div class="album_container">`;
  for (let i = 1; i <= 10; i++) {
    blockAlbums += `<div class="album album${i}"></div>`
  }
blockAlbums += `<button class="back album_back">back</button>
</div>`;

//

let blockPhotos = `<h3>Albom №3</h3>
<h4>autor: Name</h4>
<div class="photo_container">`
for (let i = 1; i <= 50; i++) {
  blockPhotos += `<div class="photo photo${i}"></div>`
}

blockPhotos += `<button class="back photos_back">back</button>
</div>`;

class ContentClass {
  ViewUsers() {
    Api.getAllUsers().then (data => {
      document.querySelectorAll('.user').forEach((e,i) => {
        e.innerHTML = `
        <div class="user_photo"></div>   
        <h1 class="user_h1">${data[i].name}</h1>
        <h2 class="user_h2">city: ${data[i].address.city}</h2>
        <h2 class="user_h2"> ${data[i].email}</h2>
        <button class="user_button">her albums</button>
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
  ViewAlbums(number){
    Api.getAlbums(number).then (data => {
      document.querySelectorAll('.album').forEach((e,i) => {
        e.innerHTML += `
          <h1 class="album_h1">Album №${i+1}</h1>
          <div>
            <h2 class="album_h2">title:</h2>
            <p>${data[i].title}</p>
          </div>
          <button class="album_button">about albums</button>
        `
      })
    });

  }
  ViewPhotos(number){
    Api.getPhotos(number).then(data => {
      document.querySelectorAll('.photo').forEach((e,i) => {
        e.innerHTML += `
          <div class="picture picture${i}"></div>
          <h2 class="picture_h2">"${data[i].title}"</h2>
        ` 
        document.querySelector(`.picture${i}`).style.backgroundImage = `url('${data[i].thumbnailUrl}')` 
      });
    });
    Api.getComments(number).then(data => {
      console.log(data)
    });
  }
}
export {blockUsers, blockAlbums, blockPhotos}
export const Content = new ContentClass()   