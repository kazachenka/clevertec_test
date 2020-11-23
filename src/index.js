import { Api } from './Api';
import { blockUsers,Content,blockAlbums, blockPhotos }  from './Content';
import './style.scss';

const root = document.querySelector('#root');
root.innerHTML = blockPhotos;
Content.ViewUsers()
Content.ViewPhotos()
Content.ViewAlbums()


