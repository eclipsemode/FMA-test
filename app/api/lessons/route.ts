import prisma from "@/prisma/prisma";

export async function GET(request: Request) {
    try {
        const tasks = await prisma.task.findMany({
            include: {
                _count: {
                    select: { userAttempts: true }
                }
            }
        });

        const formattedTasks = tasks.map((task) => {
            return {
                taskId: task.id,
                task: task.task,
                userAttempts: task._count.userAttempts
            }
        })

        return Response.json(formattedTasks);
    } catch (e) {
        console.error(e);
    }
}
