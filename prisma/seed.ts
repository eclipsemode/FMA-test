import {PrismaClient} from '@prisma/client'
import {randomUUID} from "node:crypto";

const prisma = new PrismaClient()

async function main() {
    const randomId = randomUUID();

    const taskCreated = await prisma.task.upsert({
        where: {task: 'Написать любой код'},
        update: {},
        create: {
            task: 'Написать любой код'
        }
    })

    console.log({taskCreated})
}

main()
    .then(async () => {
        await prisma.$disconnect()
    })
    .catch(async (e) => {
        console.error(e)
        await prisma.$disconnect()
        process.exit(1)
    })
