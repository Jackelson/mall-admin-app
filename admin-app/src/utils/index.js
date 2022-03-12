import Cookie from 'js-cookie';

export function setCookie(name, info) {
  const strInfo = JSON.stringify(info);
  Cookie.set(name, strInfo);
}
export function getCookie(name) {
  const str = Cookie.get(name);
  if (str) {
    const Info = JSON.parse(Cookie.get(name));
    return Info;
  }
  return {};
}
export function removeCookie(name) {
  Cookie.remove(name);
}
