// hook
import { useEffect, useState } from 'react'

// array
import { wordArray, awsQuestions } from '../assets/dbCard.ts'
import { filters } from '../assets/dbFilter.ts'

// utils
import { handleClickGeneric } from '../utils/handleClick.ts'

// components
import GenericFilter from './GenericFilterProps.tsx'

// type
import { interfaceCard } from '../assets/types.ts'

// style
import '../style/components/filter.scss'

interface FilterProps {
    setArray: React.Dispatch<React.SetStateAction<interfaceCard[]>>
    setShowFilter: React.Dispatch<React.SetStateAction<boolean>>
    showFilter: boolean
}

function Filter({ setArray, setShowFilter, showFilter }: FilterProps) {
    const [selected, setSelected] = useState<number>(0)
    const [category, setCategory] = useState<string>('english')

    const storedValues = JSON.parse(localStorage.getItem('sliceValues') || 'null')

    useEffect(() => {
        if (storedValues && Array.isArray(storedValues)) {

            if (storedValues[2] === 'english') {
                setArray(wordArray.slice(storedValues[0].from, storedValues[0].to))
            } if (storedValues[2] === 'aws') {
                setArray(awsQuestions.filter(item => item.tag === storedValues[0]))

            }
            setSelected(storedValues[1])
            setCategory(storedValues[2])
        }
        else {
            setArray(wordArray.slice(0, 10))
            setSelected(0)
            setCategory('english')
        }
    }, [])

    useEffect(() => {
        const storedValues = JSON.parse(localStorage.getItem('sliceValues') || 'null')
        setSelected(storedValues === null ? 0 : storedValues[1])
    }, [])


    const tagAws = [... new Set(awsQuestions.map(item => item.tag))]

    return (
        <div
            className={`container-filter ${showFilter ? 'show-filters' : ''}`}
            onClick={() => setShowFilter(false)}
        >
            <div className='filters' onClick={(e) => e.stopPropagation()}>
                <div className='category-toggle'>
                    <button
                        className={category === 'english' ? 'selected' : ''}
                        onClick={() => setCategory('english')}
                    >
                        English
                    </button>
                    <button
                        className={category === 'aws' ? 'selected' : ''}
                        onClick={() => setCategory('aws')}
                    >
                        AWS
                    </button>
                </div>

                {category === 'english' && (
                    <GenericFilter 
                    array={filters}
                    selected={selected}
                    onClick={(item, id) =>
                        handleClickGeneric(item, id, "english", setArray, setSelected, setShowFilter)
                    }
                    name="english-filter"
                    idPrefix="eng"
                    getLabel={(item) => `${item.to} - ${item.from}`}
                    getKey={(item, id) => `${item.to}-${id}`}/>
                )}

                {category === 'aws' && (
                    <GenericFilter
                    array={tagAws}
                    selected={selected}
                    onClick={(item, id) =>
                        handleClickGeneric(item, id, "aws", setArray, setSelected, setShowFilter)
                    }
                    name="aws-filter"
                    idPrefix="aws"
                    getLabel={(item) => item ?? ''}
                    getKey={(item, id) => `${item}-${id}`}
                />
                )}

            </div>
        </div>

    )
}

export default Filter