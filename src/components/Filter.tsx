import { wordArray } from '../assets/dbWords.ts'
import { fromTo, wordAndTranslate } from '../assets/types.ts'

import '../style/components/filter.scss'

interface FilterProps {
    setArray: React.Dispatch<React.SetStateAction<wordAndTranslate[]>>
    setShowFilter: React.Dispatch<React.SetStateAction<boolean>>
    item: fromTo
}

function Filter({ setArray, item, setShowFilter }: FilterProps) {
    return (
        <div className="filterContainer">
            <button 
            onClick={() => { 
                setArray(wordArray.slice(item.from, item.to))
                setShowFilter(false)
                }}>{`${item.from} - ${item.to}`}</button>
        </div>
    )
} 

export default Filter