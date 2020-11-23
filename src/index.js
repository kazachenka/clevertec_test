import { Api } from './Api';
import { blockUsers,Content,blockAlbums, blockPhotos }  from './Content';
import './style.scss';

const root = document.querySelector('#root');
root.innerHTML = blockUsers;
Content.ViewUsers()
Content.ViewPhotos(3)
Content.ViewAlbums(5)


