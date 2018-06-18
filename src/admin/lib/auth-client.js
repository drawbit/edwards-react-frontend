import { AUTH_LOGIN, AUTH_LOGOUT, AUTH_CHECK } from 'admin-on-rest';

export default (type, params) => {
  if (type === AUTH_LOGIN) {
    const { username, password } = params;
    const request = new Request('/api/admin/login', {
      method: 'POST',
      body: JSON.stringify({ username, password }),
      headers: { 'Content-Type': 'application/json' }
    })
    return fetch(request)
      .then(response => {
        if (response.status < 200 || response.status >= 300) {
          throw new Error(response.statusText);
        }
        return response.json();
      })
      .then(({ token }) => {
        localStorage.setItem('admin-token', token);
      });
  }
  if (type === AUTH_LOGOUT) {
    localStorage.removeItem('admin-token');
    return Promise.resolve();
  }
  if (type === AUTH_CHECK) {
    return localStorage.getItem('admin-token') ? Promise.resolve() : Promise.reject();
  }
  return Promise.resolve();
}
