'use client';

import { FaTrashAlt } from "react-icons/fa";
import { deleteTask, FormState } from "@/app/actions/task";
import { useFormState, useFormStatus } from "react-dom";
import { useEffect } from "react";

interface TaskDeleteButtonProps {
    id: string;
}

const TaskDeleteButton: React.FC<TaskDeleteButtonProps> = ({ id }) => {

  const deleteTaskWithId = deleteTask.bind(null, id);
  const inittialState: FormState = { error: '' };
  // @ts-expect-error: Ignore build-time error for useFormState
  const [state, formAction] = useFormState(deleteTaskWithId, inittialState);

  useEffect(() => {
    if (state && state.error !== '') {
      alert(state.error);
    } 
  }, [state])

  const SubmitButton = () => {
    const { pending } = useFormStatus();

    return (
      <button type='submit' disabled={pending} className='hover:bg-gray-700 text-lg disabled:bg-gray-400'>
          <FaTrashAlt />
      </button>
    )
  }

  return (
    <form action={formAction}>
      <SubmitButton />
    </form>
  );
}

export default TaskDeleteButton
