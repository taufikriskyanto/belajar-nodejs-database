import { prismaClient } from "../src/prisma-client.js";


describe("Prisma Client", ()=>{
    it("should be able to connect", async ()=>{
        await prismaClient.$connect();



        await prismaClient.$disconnect();

    })
})