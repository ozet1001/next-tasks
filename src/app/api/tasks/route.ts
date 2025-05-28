import { NextResponse } from "next/server";
import { TaskDocument } from "../../../../models/task";
import { connectDb } from "@/app/utils/database";
import { TaskModel } from "../../../../models/task";
export const GET = async () => {

    try{
        await connectDb();
        const alltasks: TaskDocument[] = await TaskModel.find();

        return NextResponse.json({ message: "タスク取得成功", tasks: alltasks });
    } catch (error) {

        console.log(error);
        return NextResponse.json({ message: "タスク取得失敗" }, { status: 500 });
    }

};

export const dynamic = "force-dynamic";