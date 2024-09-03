"use client";

import { TodoPriority } from "@/domain/value-objects/todo-priority";
import { createTodoItemSchema } from "@/infrastructure/adapters/in/actions/schema";
import { createTodoItemAction } from "@/infrastructure/adapters/in/actions/todo-item-actions";
import { zodResolver } from "@hookform/resolvers/zod";
import { useAction } from "next-safe-action/hooks";
import { useForm } from "react-hook-form";
import { z } from "zod";
import FormInput from "../atoms/form-inputs/FormInput";
import FormSelect from "../atoms/form-inputs/FormSelect";
import { Button } from "../ui/button";
import { Form } from "../ui/form";

const PRIORITY_OPTIONS = [
  { key: TodoPriority.HIGH, value: "Alto" },
  { key: TodoPriority.MEDIUM, value: "Medio" },
  { key: TodoPriority.LOW, value: "Bajo" },
];

type FormSchema = z.infer<typeof createTodoItemSchema>;

interface Props {
  todoListId: string;
}

const CreateTodoItemForm = ({ todoListId }: Props) => {
  const form = useForm<FormSchema>({
    resolver: zodResolver(createTodoItemSchema),
    defaultValues: {
      content: "",
      priority: TodoPriority.HIGH,
    },
  });

  const boundCreateTodoItemAction = createTodoItemAction.bind(null, todoListId);
  const { executeAsync } = useAction(boundCreateTodoItemAction);

  const { control, handleSubmit } = form;

  const onSubmit = async (data: FormSchema) => {
    console.log("crear");
    try {
      const response = await executeAsync(data);

      if (response?.data?.todoItem) {
        // notify
        console.log("Se creo");
      }
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <Form {...form}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <FormInput
          control={control}
          name="content"
          label="Content"
          placeholder="Content"
        />
        <FormSelect
          control={control}
          name="priority"
          label="Priority"
          placeholder="Priority"
          options={PRIORITY_OPTIONS}
        />
        <Button type="submit">Crear</Button>
      </form>
    </Form>
  );
};

export default CreateTodoItemForm;
