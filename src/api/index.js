import axios from 'axios';

export default {
  login: () =>
    axios.get('http://www.example.com')
    .then(res => {
      console.log(res.data);
      return {
        username: 'Jimmy23',
        firstName: 'Jim',
        lastName: 'John',
        avatar: 'http://loremflickr.com/320/240/boy'
      };
    })
    .catch(err => console.log(err))
};
