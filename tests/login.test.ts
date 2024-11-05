import { Login } from "../services/login";
import { dataSchema } from "../model";
import mongoose from "mongoose";
// const request = require('supertest');

describe("This is about Login",()=>{
      beforeEach(() => {
        jest.clearAllMocks();
        (dataSchema.findOne as jest.Mock) = jest.fn();
      });
      afterAll(async () => {
        await mongoose.connection.close();
      });
    

    test("should return true for correct username and password", async () => {
        (dataSchema.findOne as jest.Mock).mockResolvedValue({
          name: "testUser",
          password: "12345",
        });
        const login = new Login("testUser", "12345");
        const result = await login.setLogin();
        expect(result).toBe(true);
      });
        test("should handle errors gracefully", async () => {
    (dataSchema.findOne as jest.Mock).mockRejectedValue(new Error("Database error"));

    const login = new Login("testUser", "12345");
  expect(login.setLogin()).rejects.toThrow("An error occurred while login");
  });

})
