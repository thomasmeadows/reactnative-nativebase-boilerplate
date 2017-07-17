export default {
  login: () =>
    Promise.resolve({
      username: 'Jimmy23',
      firstName: 'Jim',
      lastName: 'John',
      avatar: 'http://loremflickr.com/320/240/boy',
    }),
  getPhotos: () =>
    Promise.resolve([]),
};
