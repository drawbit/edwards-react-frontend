import _ from 'lodash';

export const read = (name) => {
  const cookies = document.cookie.split(';');

  for(let i = 0; i < cookies.length; ++i) {
    var cookie = cookies[i].replace(/^\s+/, '');
    if(_.startsWith(cookie, `${ name }=`)) {
      return decodeURIComponent(
        cookie.substring(name.length + 1).split('+').join(' ')
      );
    }
  }
  return null;
}

export const write = (name, value) => {
  document.cookie = `${ name }=${ encodeURIComponent(value) };path=/`;
}

export const clear = (name) => {
  document.cookie = `${ name }=;expires=;path=/`;
}
