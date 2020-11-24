import { Api } from './Api';
import {root} from './controller'
import { Content,blockUsers,blockAlbums, blockPhotos }  from './Content';
import './style.scss';

root.innerHTML = blockUsers;
Content.ViewUsers()
Content.ViewPhotos(3)
Content.ViewAlbums(5)


