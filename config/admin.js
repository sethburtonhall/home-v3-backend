module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '7fc403de02c95acb7d3083cf65ff80c7'),
  },
});
