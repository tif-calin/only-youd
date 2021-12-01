const apiURL = `${process.env.NODE_ENV === 'production'
  ? 'https://only-youd.vercel.app'
  : 'http://localhost:3000'
}/api`;

export { apiURL };
