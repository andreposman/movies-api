db.createUser({
  user: "andreposman",
  pwd: "senhaMuitoForte",
  roles: [
    {
      role: "readWrite",
      db: "movie",
    },
  ],
});
