// hook
import {  useState } from 'react'

// assets
import { wordArray } from '../assets/dbWords'
import { wordAndTranslate } from '../assets/types'

// icons
import { BsFilterRight } from "react-icons/bs";

// components
import Filter from "../components/Filter.tsx"
import Card from "../components/Card"

// scss
import '../style/page/deckView.scss'

function DeckView() {
    const [array, setArray] = useState<wordAndTranslate[]>(wordArray.slice(0, 10))
    const [showFilter, setShowFilter] = useState<boolean>(false)

    return (
        <div className="deckView">

            <button className='filter' onClick={() => setShowFilter(prev => !prev)}>
                <BsFilterRight size={40} color='#CCC5B9'/>
            </button>
            
            <Filter setArray={setArray} setShowFilter={setShowFilter} showFilter={showFilter} />
            
            {
                array.slice(0,5).map((item, index) => 
                    <Card 
                        item={item} 
                        id={index}  
                        setArray={setArray} 
                        key={item.word + item.translate}
                    />
                )
            }
        </div>
    )
}

export default DeckView