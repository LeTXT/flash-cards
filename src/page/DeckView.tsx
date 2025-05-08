// hook
import { useState } from 'react'

// assets
import { interfaceCard } from '../assets/types'

// icons
import { BsFilterRight } from "react-icons/bs";

// components
import Filter from "../components/Filter.tsx"
import Card from "../components/Card"

// style
import '../style/page/deckView.scss'


function DeckView() {
    const [array, setArray] = useState<interfaceCard[]>([])
    const [showFilter, setShowFilter] = useState<boolean>(false)

    return (
        <div className="deckView">

            <button className='filter' onClick={() => setShowFilter(prev => !prev)}>
                <BsFilterRight size={40} color='#CCC5B9' />
            </button>

            <Filter setArray={setArray} setShowFilter={setShowFilter} showFilter={showFilter} />

            <div>
                {
                    array.slice(0, 5).map((item, index) =>
                        <Card
                            item={item}
                            id={index}
                            setArray={setArray}
                            key={item.front + item.back}
                        />
                    )
                }
            </div>
        </div>
    )
}

export default DeckView