// config
export const IS_DEV = process.env.NODE_ENV !== 'production';
export const IS_SERVER_SIDE = typeof(window) === 'undefined';
export const IS_CLIENT_SIDE = !IS_SERVER_SIDE;

// APIs
export const SERVER_ENDPOINT = IS_SERVER_SIDE ? (IS_DEV ? 'http://localhost:3000/api' : 'nextjs-demo-7th29h4do.now.sh/api') : '/api';
