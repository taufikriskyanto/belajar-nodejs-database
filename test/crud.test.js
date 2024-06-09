import {prismaClient} from "../src/prisma-client.js";

describe("Prisma Client", () => {
    it('should be able to create customer', async () => {
        const customer = await prismaClient.customer.create({
            data: {
                id: "taufikriskyanto",
                email: "taufik.riskyanto@gmail.com",
                name: "Taufik Riskyanto",
                phone: "08951803238"
            }
        });

        expect(customer.id).toBe("taufikriskyanto");
        expect(customer.email).toBe("taufik.riskyanto@gmail.com");
        expect(customer.name).toBe("Taufik Riskyanto");
        expect(customer.phone).toBe("08951803238");
    });

    it('should be able to update customer', async () => {
        const customer = await prismaClient.customer.update({
            data: {
                name: "Taufik R"
            },
            where: {
                id : 'taufikriskyanto'
            }
        });

        expect(customer.id).toBe("taufikriskyanto");
        expect(customer.email).toBe("taufik.riskyanto@gmail.com");
        expect(customer.name).toBe("Taufik R");
        expect(customer.phone).toBe("08951803238");
    });

    it('should be able to read customer', async () => {
        const customer = await prismaClient.customer.findUnique({
            where: {
                id: "taufikriskyanto"
            }
        });

        expect(customer.id).toBe("taufikriskyanto");
        expect(customer.email).toBe("taufik.riskyanto@gmail.com");
        expect(customer.name).toBe("Taufik R");
        expect(customer.phone).toBe("08951803238");
    });

    it('should be able to delete customer', async () => {
        const customer = await prismaClient.customer.delete({
            where: {
                id: "taufikriskyanto"
            }
        });

        expect(customer.id).toBe("taufikriskyanto");
        expect(customer.email).toBe("taufik.riskyanto@gmail.com");
        expect(customer.name).toBe("Taufik R");
        expect(customer.phone).toBe("08951803238");
    });
})