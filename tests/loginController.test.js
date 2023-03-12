// 1.login should return status 200 and contain token
// 2.login returns status 200 and object with body which include name and subscription

// const request = require("supertest");
// const app = require("../app");

// describe("tests for login", () => {
//   test("login should return status 200 and contain token", async () => {
//     const response = await request(app).post("/auth/login").send({
//       email: "yulia@mail.com",
//       password: "123456",
//     });
//     expect(response.status).toBe(200);
//     expect(typeof response.body.token).toBe("string");
//   });
//   test("login returns status 200 and object with body which include name and subscription", async () => {
//     const response = await request(app).post("/auth/login").send({
//       email: "yulia@mail.com",
//       password: "123456",
//     });
//     expect(response.status).toBe(200);
//     expect(typeof response.body.user.name).toBe("string");
//     expect(typeof response.body.user.subscription).toBe("string");
//   });
// });
