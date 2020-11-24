module.exports = {
  HOST: "127.0.0.1",
  PORT: 8280,
  MAPPING: {
    HARDWARE_SERVICE: {
      HOST: "127.0.0.1",
      PORT: 8281,
    },
    DEVICE_MANAGEMENT_SERVICE: {
      HOST: "127.0.0.1",
      PORT: 8282,
    },
    USER_SERVICE: {
      HOST: "127.0.0.1",
      PORT: 8283,
    },
    LOG_SERVICE: {
      HOST: "127.0.0.1",
      PORT: 8284,
    },
    SCHEDULING_SERVICE: {
      HOST: "127.0.0.1",
      PORT: 8285,
    },
  },
  // Connection string: mongodb+srv://services:<password>@cluster0.4pnhj.mongodb.net/<dbname>?retryWrites=true&w=majority
  DB: {
    HOST: "cluster0.4pnhj.mongodb.net",
    USERNAME: "services",
    PASSWORD: "SET PASSWORD HERE",
    DATABASE: "admin",
  },
  AUTH: {
    ADMIN: [{ username: "admin", password: "admin" }],
  },
};
