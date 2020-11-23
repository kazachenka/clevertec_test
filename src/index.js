import { Api } from './Api';
import { blockUsers,View }  from './View';
import './style.scss';

const root = document.querySelector('#root');
root.innerHTML = blockUsers;
View.ViewUsers()
View.ViewAlbums()


