'use client';

import { useState } from "react";
import { TaskDocument } from "../../../../models/task";
import { FormState,updateTask } from "@/app/actions/task";
import { useFormStatus,useFormState } from "react-dom";

interface EditTaskFormProps {
    task: TaskDocument;
}

const EditTaskForm: React.FC<EditTaskFormProps> = ({ task }) => {

    const [title, setTitle] = useState(task.title);
    const [description, setDescription] = useState(task.description);
    const [dueDate, setDueDate] = useState(task.dueDate);
    const [isCompleted, setIsCompleted] = useState(task.isCompleted);

    const updateTaskWithId = updateTask.bind(null, task._id);
    const inittialState: FormState = { error: '' };
    const [state, formAction] = useFormState(updateTaskWithId, inittialState);

    const SubmitButton = () => {

        const { pending } = useFormStatus();

        return (
            <button type='submit' disabled={pending} className='mt-8 py-2 w-full rounded-md text-white bg-gray-800 hover:bg-gray-700 text-sm font-semibold shadow-sm disabled:bg-gray-400'>
                Edit
            </button>
        )
    }

    return (
            <div className='mt-10 mx-auto w-full max-w-2xl'>
            <form action={formAction}>
                <div>
                    <label htmlFor="title"className='block text-sm font-medium'>タイトル</label>
                    <input type="text" id='title' name='title' value={title} onChange={(e) => setTitle(e.target.value)} required className='block mt-2 py-1.5 px-2 w-full rounded-md border-0 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'/>
                </div>
                <div className='mt-6'>
                    <label htmlFor="description" className='block text-sm font-medium'>説明</label>
                    <input type="text" id='description' name='description' value={description} onChange={(e) => setDescription(e.target.value)} required className='block mt-2 py-1.5 px-2 w-full rounded-md border-0 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'/>
                </div>
                <div className='mt-6'>
                    <label htmlFor="dueDate" className='block text-sm font-medium'>期限</label>
                    <input type="date" id='dueDate' name='dueDate' value={dueDate} onChange={(e) => setDueDate(e.target.value)} min="2020-01-01" max="29990-12-31" required className='block mt-2 py-1.5 px-2 w-full rounded-md border-0 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'/>
                </div>
                <div className="mt-6 flex items-center">
                    <input type="checkbox" name="isCompleted" checked={isCompleted} onChange={(e) => setIsCompleted(e.target.checked)} id="isCompleted" className="mr-2 w-4 h-4" />
                    <label htmlFor="isCompleted" className="text-sm font-medium">タスクを完了にする</label>
                </div>
                <SubmitButton />
                { state.error !== '' && (
                    <p className='mt-2 text-red-500 text-sm'>
                        {state.error}
                    </p>
                )}
            </form>
        </div>
    )
}

export default EditTaskForm