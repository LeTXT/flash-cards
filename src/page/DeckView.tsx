import {  useState } from 'react'

// import { searchWord } from '../utils/api'
import { wordArray, wordAndTranslate } from '../assets/dbWords'
import { filters } from '../assets/dbFilter'

import { BsFilterRight } from "react-icons/bs";

import Filter from "../components/Filter"
import Card from "../components/Card"

import '../style/page/deckView.scss'

// type WordData = {
//     word: string
//     meanings: string[]
//     phonetics: string[]
//     license: { name: string; url: string }
//     sourceUrls: string[]
// }

function DeckView() {
    const [array, setArray] = useState<wordAndTranslate[]>(wordArray.slice(0, 10))
    const [showFilter, setShowFilter] = useState<boolean>(false)
    
    const outOfFrame = (card: wordAndTranslate) => {
        setArray((prev) => {
            const updated = [...prev.slice(1), { ...card}]
            return updated
        })
    }

    return (
        <div className="deckView">

            <button className='filter' onClick={() => setShowFilter(prev => !prev)}>
                <BsFilterRight size={40} color='#CCC5B9'/>
            </button>

            <div className={showFilter ? 'containerFilter show' : 'containerFilter hidden'} >
                {filters.map(item => <Filter setArray={setArray} item={item} setShowFilter={setShowFilter}></Filter>)}
            </div>
            
            {/* <Filter setArray={setArray} /> */}
            
            {array.slice(0,5).map((item, index) => 
                <Card 
                word={item.word} 
                translate={item.translate}
                id={index}
                outOfFrame={() => outOfFrame(item)}
                key={item.word + '-' + index}
            />
            )}
        </div>
    )
}

export default DeckView