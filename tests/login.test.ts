import { Login } from "../services/login";
import { dataSchema } from "../model";
import mongoose from "mongoose";

describe("This is about Login", () => {
    beforeEach(() => {
        jest.clearAllMocks();
        (dataSchema.findOne as jest.Mock) = jest.fn();
    });

    afterAll(async () => {
        await mongoose.connection.close();
    });

    test("should return 200 for correct username and password", async () => {
        (dataSchema.findOne as jest.Mock).mockResolvedValue({
            username: "testUser",
            password: "12345",
        });
        
        const login = new Login("testUser", "12345");
        const result = await login.setLogin();
        expect(result?.status).toBe(200);
    });

    test("should return 404 for a non-existent user", async () => {
        (dataSchema.findOne as jest.Mock).mockResolvedValue(null);
        
        const login = new Login("nonExistentUser", "12345");
        const result = await login.setLogin();
        
        expect(result?.status).toBe(400);
    });
    test("should return 401 for incorrect username", async () => {
        (dataSchema.findOne as jest.Mock).mockResolvedValue({
            username: "testUser",
            password: "12345",
        });
        
        const login = new Login("WrongUsername", "12345");
        const result = await login.setLogin();
        
        expect(result?.status).toBe(401);
    });

    test("should return 401 for incorrect password", async () => {
        (dataSchema.findOne as jest.Mock).mockResolvedValue({
            username: "testUser",
            password: "wrongPassword",
        });
        
        const login = new Login("testUser", "12345");
        const result = await login.setLogin();
        
        expect(result?.status).toBe(401);
    });

    test("should handle errors gracefully", async () => {
        (dataSchema.findOne as jest.Mock).mockRejectedValue(new Error("Database error"));
        const login = new Login("testUser", "12345");
        await expect(login?.setLogin()).rejects.toThrow("An error occurred while login");
    });
})