class ApiClass {
  constructor() {
    this.path = 'https://jsonplaceholder.typicode.com';
    this.users = 'users';
    // this.user = 'user';
    this.albums = 'albums';
    this.photos = 'photos';
    this.comments = 'comments';
  }

  async getData(category,id) {
    let str = this.path;

    if (category === this.user) {
      str += `/${this.users}/${id}`;
    }
    if (category === this.users) {
      str += `/${this.users}`;
    }
    if (category === this.albums){
      str += `/${this.albums}?userId=${id}`
    }
    if (category === this.photos){
      str += `/${this.photos}?albumId=${id}`
    }
    if (category === this.comments){
      str += `/${this.comments}?postId=${id}`
    }

    const result = await fetch(str);

    if (!result.ok) {
      throw new Error(`No data was found at ${url}, received ${result.status}`);
    }

    return await result.json();
  }

  async getAllUsers() {
    return await this.getData(this.users);
  }
  async getAlbums(id) {
    return await this.getData(this.albums,id);
  }
  async getPhotos(id) {
    return await this.getData(this.photos,id);
  }
}



export const Api = new ApiClass();
