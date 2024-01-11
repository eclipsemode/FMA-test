import prisma from "@/prisma/prisma";
import delay from "@/utils/delay";

interface IParams {
    params: {
        lessonId: string
    }
}

interface IRequestBody {
    code: string,
    userId: string
}

export async function POST(request: Request, {params}: IParams) {
    try {
        await delay(2000);

        const lessonId = params.lessonId;
        const res: IRequestBody = await request.json();
        const code = res.code;
        const userId = res.userId;

        const randomResult = Math.random() < 0.5

        const createUserAttempt = await prisma.userAttempt.create({
            data: {
                taskId: lessonId,
                userId: userId,
                code: code,
                correct: randomResult
            }
        })

        const resultRow = {
            submissionResult: createUserAttempt.correct
        }

        return Response.json(resultRow);
    } catch (e) {
        console.log(e);
    }
}
