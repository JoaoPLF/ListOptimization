import { Item } from "@/components/ListItem";
import { LIST_LENTH } from "@/constants/ListLength";
import { useCallback, useMemo, useState } from "react";

export function useOptimizedList() {
  const listIds = useMemo(() => Array.from({ length: LIST_LENTH }, (_, i) => i), []);

  const [objectList, setObjectList] = useState(() => {
    let objectList: Record<string, Item> = {};

    for (let i = 0; i < LIST_LENTH; i++) {
      objectList = { ...objectList, [i]: { id: i, grade: 0 } };
    }

    return objectList;
  });

  const updateList = useCallback((id: string, value: number) => {
    setObjectList((currentList: Record<string, Item>) => {
      return { ...currentList, [id]: { id, grade: value } };
    })
  }, []);

  return {
    listIds,
    objectList,
    updateList
  };
}