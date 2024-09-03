"use client";

import { TodoItem } from "@/domain/entities/todo-item";
import { AnimatePresence, motion } from "framer-motion";
import { Loader2, PlusCircle } from "lucide-react";
import { useState } from "react";
import { TodoItemCard } from "../molecules/TodoItemCard";
import { Button } from "../ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { Tabs, TabsList, TabsTrigger } from "../ui/tabs";

interface TodoItemListProps {
  items?: TodoItem[];
  onToggleComplete?: (id: string) => void;
  onAddItem?: () => void;
}

export function TodoItemList({
  items,
  onToggleComplete = (id) => {},
  onAddItem,
}: TodoItemListProps) {
  const [filter, setFilter] = useState<"all" | "active" | "completed">("all");
  const [isLoading, setIsLoading] = useState(false);

  const filteredItems =
    items?.filter((item) => {
      if (filter === "active") return !item.completed;
      if (filter === "completed") return item.completed;
      return true;
    }) || [];

  const handleAddItem = () => {
    setIsLoading(true);
    onAddItem?.();
    setTimeout(() => setIsLoading(false), 1000); // Simulating API call
  };

  return (
    <Card className="w-full max-w-3xl mx-auto shadow-lg flex flex-col">
      <CardHeader>
        <CardTitle className="text-2xl font-bold text-center text-gray-800">
          Todo List
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="flex justify-between items-center">
          <Tabs value={filter} onValueChange={(value: any) => setFilter(value)}>
            <TabsList className="grid w-full grid-cols-3 max-w-md">
              <TabsTrigger value="all">All</TabsTrigger>
              <TabsTrigger value="active">Active</TabsTrigger>
              <TabsTrigger value="completed">Completed</TabsTrigger>
            </TabsList>
          </Tabs>
          <Button
            onClick={handleAddItem}
            className="bg-gradient-to-r from-purple-500 to-indigo-600 text-white hover:from-purple-600 hover:to-indigo-700 transition-all duration-300"
            disabled={isLoading}
          >
            {isLoading ? (
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
            ) : (
              <PlusCircle className="mr-2 h-4 w-4" />
            )}
            Add Item
          </Button>
        </div>
        <AnimatePresence>
          {filteredItems.map((item) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.2 }}
              className="mb-4"
            >
              <TodoItemCard
                {...item}
                onToggleComplete={() => onToggleComplete(item.id)}
              />
            </motion.div>
          ))}
        </AnimatePresence>
        {filteredItems.length === 0 && (
          <p className="text-center text-gray-500 italic">
            No items to display
          </p>
        )}
      </CardContent>
    </Card>
  );
}
