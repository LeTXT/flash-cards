// hook
import { Fragment } from "react/jsx-runtime"

interface GenericFilterProps<T> {
    array: T[] 
    selected: number
    onClick: (item: T, id: number) => void
    name: string
    idPrefix: string
    getLabel: (item: T) => string
    getKey: (item: T, id: number) => string
}

function GenericFilter<T>({
    array,
    selected,
    onClick,
    name,
    idPrefix,
    getLabel,
    getKey,
}: GenericFilterProps<T>) {

    

    return (
        <div className='label-container'>
            {array.map((item, id) => {
                
                return (
                    <Fragment key={getKey(item, id)}>
                        <input
                            type="radio"
                            id={`${idPrefix}-${id}`}
                            name={name}
                            checked={selected === id}
                            onChange={() => onClick(item, id)}
                        />
                        <label htmlFor={`${idPrefix}-${id}`} title={getLabel(item)}>{getLabel(item)}</label>
                    </Fragment>
                )
            })}
        </div>
    )
}

export default GenericFilter