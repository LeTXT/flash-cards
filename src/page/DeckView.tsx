// hook
import { useState } from 'react'

// assets
import { wordArray } from '../assets/dbWords'
import { wordAndTranslate } from '../assets/types'

// icons
import { BsFilterRight } from "react-icons/bs";

// components
import Filter from "../components/Filter.tsx"
import Card from "../components/Card"

// style
import '../style/page/deckView.scss'


function DeckView() {
    const storedValues = JSON.parse(localStorage.getItem('sliceValues') || 'null')

    const [array, setArray] = useState<wordAndTranslate[]>(() => {
        if (storedValues && Array.isArray(storedValues)) {
            return wordArray.slice(storedValues[0], storedValues[1]);
        } else {
            console.log('local');

            return wordArray.slice(0, 10);
        }
    })

    const [showFilter, setShowFilter] = useState<boolean>(false)

    return (
        <div className="deckView">

            <button className='filter' onClick={() => setShowFilter(prev => !prev)}>
                <BsFilterRight size={40} color='#CCC5B9' />
            </button>

            <Filter setArray={setArray} setShowFilter={setShowFilter} showFilter={showFilter} />

            {/* <FilterOptions /> */}

            <div>
                {
                    array.slice(0, 5).map((item, index) =>
                        <Card
                            item={item}
                            id={index}
                            setArray={setArray}
                            key={item.word + item.translate}
                        />
                    )
                }
            </div>
                {/* <button onClick={() => localStorage.removeItem('sliceValues')} className='remover'>remover</button> */}
        </div>
    )
}

export default DeckView