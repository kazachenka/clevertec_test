import { Content,blockUsers,blockAlbums, blockPhotos }  from '../Content';
const buttonBack = {
  photos : 0,

  get backPhotos () {
    return this.photos;
  },
  
  set backPhotos (value){
    this.photos = value;
  },
}


let ViewEventClick = function (arr){
  if (arr[0] === 'user'){
    Content.ViewAlbums(arr[1]);
    return blockAlbums
  }
  if (arr[0] === 'album'){
    buttonBack.backPhotos = arr[1]
    Content.ViewPhotos(arr[1]);
    return  blockPhotos
  }
  if (arr[0] === 'album-back'){
    Content.ViewUsers();
    return blockUsers
  }
  if (arr[0] === 'photos-back'){
    Content.ViewAlbums(+buttonBack.backPhotos)
    return blockAlbums
  }
}

export {ViewEventClick}