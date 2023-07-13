import { createResourceId } from '../utils/create-resource-id';
import { sign, decode, JWT_SECRET, JWT_EXPIRES_IN } from '../utils/jwt';
import { wait } from '../utils/wait';
import axios from 'axios';

import { apiConfig } from 'src/config';
// const API_ENDPOINT = '//localhost:3000/v1';

// BOOKMARK: UserApi
class UserApi {
  async updateBasicDetail(user) {
    const accessToken = globalThis.localStorage.getItem('accessToken');
    const headers = { Authorization: `Bearer ${accessToken}` };

    return axios
      .put(`${apiConfig.apiEndpoint}/users/basic_user_detail`, user, { headers })
      .then(function ({ data }) {
        console.log(data);
      })
      .catch(function (error) {
        console.error('[Auth Api]: ', error);
        reject(new Error('UserApi: Internal server error'));
      });

    // return axios.put(`${API_ENDPOINT}/helloworld`,
    //   { headers })
    //   .then(function ({ data }) {
    //     console.log(data);
    //   })
    //   .catch(function (error) {
    //     console.error('[Auth Api]: ', error);
    //     reject(new Error('Internal server error'));
    //   });
  }

  async getUserById(userId) {
    return axios
      .get(`${apiConfig.apiEndpoint}/users/${userId}`)
      .then(({ data }) => {
        return data;
      })
      .catch(err => console.error(err));
  }

  async helloworld({ email, password }) {
    return axios
      .post(`${apiConfig.apiEndpoint}/user/helloworld`, {
        email: email,
        password: password,
      })
      .then(function ({ data }) {
        console.log(data);
      })
      .catch(function (error) {
        console.error('[Auth Api]: ', error);
        reject(new Error('helloworld: Internal server error'));
      });
  }
}

export const userApi = new UserApi();
