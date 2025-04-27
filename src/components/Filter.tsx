// hook
import { Fragment, useEffect, useState } from 'react'

// array
import { wordArray } from '../assets/dbWords.ts'
import { filters } from '../assets/dbFilter.ts'

// type
import { fromTo, wordAndTranslate } from '../assets/types.ts'

// style
import '../style/components/filter.scss'

interface FilterProps {
    setArray: React.Dispatch<React.SetStateAction<wordAndTranslate[]>>
    setShowFilter: React.Dispatch<React.SetStateAction<boolean>>
    showFilter: boolean
}

function Filter({ setArray, setShowFilter, showFilter }: FilterProps) {
    const [selected, setSelected] = useState<number>(0)

    useEffect(() => {
        const storedValues = JSON.parse(localStorage.getItem('sliceValues') || 'null')
        setSelected(storedValues === null ? 0 : storedValues[2])
    }, [])

    const handleClick = (item: fromTo, id: number) => {
        localStorage.setItem('sliceValues', JSON.stringify([item.from, item.to, id]))

        setArray(wordArray.slice(item.from, item.to))
        setSelected(id)

        setTimeout(() => {
            setShowFilter(false)

        }, 500);
    }

    return (
        <div
            className={`containerFilter ${showFilter ? 'showFilters' : ''}`}
            onClick={() => setShowFilter(false)}
        >
            <div className='filters' onClick={(e) => e.stopPropagation()}>
                {
                    filters.map((item, id) => {

                        return (

                            <Fragment key={`${item}-${id}`} >
                                <input
                                    type="radio"
                                    id={`${id}-${item}`}
                                    name={`${item.from} - ${item.to}`}
                                    value={`${item.from} - ${item.to}`}
                                    checked={selected === id}
                                    onChange={() => handleClick(item, id)}
                                />
                                <label htmlFor={`${id}-${item}`}>{`${item.from} - ${item.to}`}</label>
                            </Fragment>
                        )
                    })
                }
            </div>
        </div>

    )
}

export default Filter