import { wordAndTranslate } from "../assets/types.ts"

export const outOfFrame = (swipedCard: wordAndTranslate, setArray: React.Dispatch<React.SetStateAction<wordAndTranslate[]>>) => {
    setArray((prevArray) => {
        const filtered = prevArray.filter(item => item.word !== swipedCard.word);
        return [...filtered, swipedCard]; 
    });

}
