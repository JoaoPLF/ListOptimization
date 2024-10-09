import { Item } from "@/components/ListItem";
import { LIST_LENTH } from "@/constants/ListLength";
import { useCallback, useState } from "react";

export function useUnoptimizedList() {
  const [list, setList] = useState((): Item[] => {
    return Array.from({ length: LIST_LENTH }, (_, i) => ({ id: i.toString(), grade: 0 }));
  });

  const updateList = useCallback((id: string, value: number) => {
    setList((list: Item[]) => {
      return list.map((item: { id: string; grade: number }) => {
        if (item.id === id) {
          return { ...item, grade: value };
        }
        return item;
      })
    });
  }, []);

  return {
    list,
    updateList
  };
}