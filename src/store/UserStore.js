import { makeAutoObservable } from "mobx";

export default class UserStore {
  constructor() {
    this._isAuth = localStorage.getItem("isAuth");
    this._isOpen = false;
    this._user = {};
    makeAutoObservable(this);
  }

  setIsAuth(bool) {
    this._isAuth = bool;
    localStorage.setItem("isAuth", bool);
  }
  setIsOpen(bool) {
    this._isOpen = bool;
  }
  setUser(user) {
    this._user = user;
  }

  get isAuth() {
    return this._isAuth;
  }
  get isOpen() {
    return this._isOpen;
  }
  get user() {
    return this._user;
  }
}
