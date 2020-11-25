import { Api } from '../Api';

let blockUsers = `<h3>Photographers</h3>
  <div class="user_container">`;
  for (let i = 1; i <= 10; i++) {
    blockUsers += `<div class="user user${i}"></div>`
  }
blockUsers += `</div>`;

//

let blockAlbums =  `<h3 class="name"></h3>
<div class="album_container">`;
  for (let i = 1; i <= 10; i++) {
    blockAlbums += `<div class="album album${i}"></div>`
  }
blockAlbums += `</div><button class="back album_back">back</button>
<div class="emptiness"></div>
`;

//

let blockPhotos = `<h3>Albom №3</h3>
<h4>autor: <span class="name"></span></h4>
<div class="photo_container">`
for (let i = 0; i < 50; i++) {
  blockPhotos += `<div class="photo photo${i}"></div>`
}

blockPhotos += `</div><button class="back photos_back">back</button>
<div class="emptiness"></div>
`;

class ContentClass {
  ViewUsers() {
    Api.getAllUsers().then (data => {
      document.querySelectorAll('.user').forEach((e,i) => {
        e.innerHTML = `
        <div class="user_photo"></div>   
        <h1 class="user_h1">${data[i].name}</h1>
        <h2 class="user_h2">city: ${data[i].address.city}</h2>
        <h2 class="user_h2"> ${data[i].email}</h2>
        <button class="user_button" data-user="${i+1}">albums</button>
        `
      })
    })
    Api.getPhotos(1).then (data => {
      setTimeout(() => {
        const collectionPhotoForUser = document.querySelectorAll('.user_photo');
        collectionPhotoForUser.forEach((e,i) => {
        e.style.backgroundImage = `url('${data[i].thumbnailUrl}')` 
       })
      },50)
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
          <button class="album_button" data-album="${i+1}">about album</button>
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
  }
}
export {blockUsers, blockAlbums, blockPhotos}
export const Content = new ContentClass()   