const Hapi = require("@hapi/hapi");
const routes = require("./routes");
require("dotenv").config();

const init = async () => {
  const server = Hapi.server({
    port: process.env.PORT || 9000, // Gunakan PORT dari environment atau default ke 9000
    host: "0.0.0.0",  // Gunakan 0.0.0.0 agar dapat diakses dari luar container/host
    routes: { cors: { origin: ["*"] } },
  });

  server.route(routes);

  await server.start();
  console.log(`Server berjalan di ${server.info.uri}`);
};

init();
