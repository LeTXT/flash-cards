// hook
import { Fragment, useEffect, useState } from 'react'

// array
import { wordArray, awsQuestions } from '../assets/dbCard.ts'
import { filters } from '../assets/dbFilter.ts'

// type
import { fromTo, interfaceCard } from '../assets/types.ts'

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
        }
    }, [])

    useEffect(() => {
        const storedValues = JSON.parse(localStorage.getItem('sliceValues') || 'null')
        setSelected(storedValues === null ? 0 : storedValues[1])
    }, [])


    const handleClickEnglish = (item: fromTo, id: number) => {
        localStorage.setItem('sliceValues', JSON.stringify([item, id, category]))
        setArray(wordArray.slice(item.from, item.to))

        setSelected(id)
        setTimeout(() => {
            setShowFilter(false)
        }, 500);
    }

    const handleClickAws = (item: string | undefined, id: number) => {
        localStorage.setItem('sliceValues', JSON.stringify([item, id, category]))

        setArray(awsQuestions.filter(el => el.tag === item))


        setSelected(id)
        setTimeout(() => {
            setShowFilter(false)
        }, 500);
    }

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

                    <div className='english'>
                        {filters.map((item, id) => (
                            <Fragment key={`${item.to}-${id}`}>
                                <input
                                    type="radio"
                                    id={`eng-${id}`}
                                    name="english-filter"
                                    checked={selected === id}
                                    onChange={() => handleClickEnglish(item, id)}
                                />
                                <label htmlFor={`eng-${id}`}>{`${item.to} - ${item.from}`}</label>
                            </Fragment>
                        ))}
                    </div>

                )}

                {category === 'aws' && (
                    <div className='aws'>
                        {tagAws.map((item, id) => {
                            return (
                                <Fragment key={item ? item + id : id}>
                                    <input
                                    type="radio"
                                        id={`aws-${id}`}
                                        name="aws-filter"
                                    checked={selected === id}
                                        onChange={() => handleClickAws(item, id)}
                                    />
                                    <label htmlFor={`aws-${id}`} title={item}>{item}</label>
                                </Fragment>
                            )
                        })}
                    </div>

                )}
            </div>
        </div>

    )
}

export default Filter