// hook
import {  useState } from 'react'

// assets
import { wordArray } from '../assets/dbWords'
import { filters } from '../assets/dbFilter'
import { wordAndTranslate } from '../assets/types'

// icons
import { BsFilterRight } from "react-icons/bs";

// components
import Filter from "../components/Filter"
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

            <div className={showFilter ? 'containerFilter show' : 'containerFilter hidden'} >
                {
                    filters.map((item, id) => 
                        <Filter setArray={setArray} item={item} setShowFilter={setShowFilter} key={id} />
                    )
                }
            </div>
            
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