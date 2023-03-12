// 1.login should return status 200 and contain token
// 2.login returns status 200 and object with body which include name and subscription

const request = require("supertest");
const app = require("../app");
const mongoose = require("mongoose");
mongoose.set("strictQuery", true);
const { DB_HOST, PORT = 3000 } = process.env;

describe("connect to database", () => {
  beforeAll(() => {
    mongoose
      .connect(DB_HOST)
      .then(() => {
        app.listen(PORT);
        console.log("Database connection successful");
      })
      .catch((error) => {
        console.log(error.message);
        process.exit(1);
      });
  });
  afterAll(async () => {
    await mongoose.disconnect();
  });

  test("login should return status 200 and contain token", async () => {
    const response = await request(app).post("/api/auth/login").send({
      email: "yulia@mail.com",
      password: "123456",
    });
    expect(response.status).toBe(200);
    expect(typeof response.body.token).toBe("string");
  });

  //   test("login returns status 200 and object with body which include name and subscription", async () => {
  //     const response = await request(app).post("/api/auth/login").send({
  //       email: "yulia@mail.com",
  //       password: "123456",
  //     });
  //     expect(response.status).toBe(200);
  //     expect(typeof response.body.subscription).toBe("string");
  //     expect(typeof response.body.name).toBe("string");
  //   });
});
