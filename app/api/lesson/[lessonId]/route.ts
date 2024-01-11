import prisma from "@/prisma/prisma";

interface IParams {
    params: {
        lessonId: string
    }
}

export async function GET(request: Request, {params}: IParams) {
    try {
        const lessonId = params.lessonId;

        const task = await prisma.task.findUnique({
            where: {
                id: lessonId
            },
            include: {
                _count: {
                    select: {
                        userAttempts: true
                    }
                }
            }
        });

        const formattedTask = {
            taskId: task?.id!,
            task: task?.task!,
            userAttempts: task?._count.userAttempts!
        }

        return Response.json(formattedTask);
    } catch (e) {
        console.error(e);
    }
}
