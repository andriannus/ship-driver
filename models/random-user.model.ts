export interface RandomUserResponse {
  info: Info;
  results: RandomUserData[];
}

export interface Info {
  page: number;
  results: number;
  seed: string;
  version: string;
}

export interface RandomUserData {
  dob: Dob;
  email: string;
  login: Login;
  name: Name;
  phone: string;
  picture: Picture;
}

export interface Dob {
  age: number;
  date: Date;
}

export interface Login {
  md5: string;
  password: string;
  salt: string;
  sha1: string;
  sha256: string;
  username: string;
  uuid: string;
}

export interface Name {
  first: string;
  last: string;
  title: string;
}

export interface Picture {
  large: string;
  medium: string;
  thumbnail: string;
}
