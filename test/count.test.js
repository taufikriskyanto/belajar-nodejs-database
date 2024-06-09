import {prismaClient} from "../src/prisma-client.js";

describe("Prisma Client", () => {
    it('should can count', async ()=> {
        const total = await prismaClient.customer.count({
            where: {
                name : "Budi"
            }
        });

        expect(total).toBe(1);
    });
})