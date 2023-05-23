import md5 from "md5";

export function hash(password) {
    return md5(password);
}

export function compare(password, hash) {
  if (md5(password) === hash){
    return true;
  }
  return false;
}
