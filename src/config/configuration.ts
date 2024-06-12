export default () => ({
  database: {
    url: process.env.DATABASE_URL,
  },
  port: process.env.PORT,
  jwt_secret: process.env.JWT_SECRET,
});
