import { wordArray, awsQuestions } from "../assets/dbCard"
import { interfaceCard } from "../assets/types"

export type FilterCriteria = (string | undefined) | { from: number; to: number };

export const handleClickGeneric = (
    item: FilterCriteria,
    id: number,
    category: string,
    setArray: React.Dispatch<React.SetStateAction<interfaceCard[]>>,
    setSelected: React.Dispatch<React.SetStateAction<number>>,
    setShowFilter: React.Dispatch<React.SetStateAction<boolean>>
) => {
    localStorage.setItem("sliceValues", JSON.stringify([item, id, category]));

    if (typeof item === "string") {
        const filteredByTag = awsQuestions.filter((el) => el.tag === item)
        setArray(filteredByTag)
    } else if (typeof item === "object" && "from" in item && "to" in item) {
        const slicedWordArray = wordArray.slice(item.from, item.to)
        setArray(slicedWordArray)
    }

    setSelected(id);
    setTimeout(() => {
        setShowFilter(false);
    }, 500);
};