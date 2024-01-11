import prisma from "@/prisma/prisma";

interface IParams {
    params: {
        assignmentId: string
    }
}

export async function GET(request: Request, {params}: IParams) {
    try {
        const assignmentId = params.assignmentId;

        const attempts = await prisma.userAttempt.findMany({
            where: {
                taskId: assignmentId,
            }
        });

        const correctAttempts = await prisma.userAttempt.findMany({
            where: {
                taskId: assignmentId,
                correct: true
            }
        });

        const uniqueCorrectAttempts: Record<string, boolean> = {};

        const userCorrectAttempts = correctAttempts.filter((item) => {
            if (!uniqueCorrectAttempts[item.userId]) {
                uniqueCorrectAttempts[item.userId] = true;
                return true;
            }
            return false;
        })

        const result = {
            isCorrectUsersAmount: userCorrectAttempts.length,
            isCorrectPercent: ((correctAttempts.length / attempts.length) * 100).toFixed(2)
        }

        return Response.json(result);
    } catch (e) {
        console.error(e);
    }
}
