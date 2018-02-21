const BASE_URL = 'http://localhost:3000';

export const IMAGES_URL: string = `${BASE_URL}/api/image`;
export const IMAGE_LIKES: string = `${BASE_URL}/api/image/likes`;
export const IMAGE_DETAILS: string = `${BASE_URL}/api/image/details`;
export const IMAGES_PATH: string = `${BASE_URL}/assets/images`;

export const REGISTER_URL: string = `${BASE_URL}/register`;
export const LOGIN_URL: string = `${BASE_URL}/login`;
export const CHECK_TOKEN_URL: string = `${BASE_URL}/check`;

export const NO_AUTHORIZATION_URLS: string[] = [REGISTER_URL, LOGIN_URL];
