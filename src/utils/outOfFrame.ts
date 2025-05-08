import { interfaceCard } from "../assets/types.ts"

export const outOfFrame = (swipedCard: interfaceCard, setArray: React.Dispatch<React.SetStateAction<interfaceCard[]>>) => {
    setArray((prevArray) => {
        const filtered = prevArray.filter(item => item.front !== swipedCard.front);
        return [...filtered, swipedCard]; 
    });

}
