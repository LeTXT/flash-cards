// hook
import { useState, useEffect, useMemo } from 'react';

// assets
import { styleType, wordAndTranslate } from '../assets/types';

// utils
import { outOfFrame } from '../utils/outOfFrame';
import { cardInicialize } from '../utils/cardInicialize';

// component
import TinderCard from 'react-tinder-card'

// scss
import '../style/components/card.scss'

interface cardProps {
    id: number
    item: wordAndTranslate
    setArray: React.Dispatch<React.SetStateAction<wordAndTranslate[]>>
}

function Card({ item, id, setArray }: cardProps) {
    const [state, setState] = useState<boolean>(false)
    const [baseStyle, setBaseStyle] = useState<styleType | undefined>(undefined)

    useEffect(() => {
        const initialStyle = cardInicialize()
        setBaseStyle(initialStyle)
    }, [])

    const finalStyle = useMemo(() => {

        const topCardStyle: styleType = {
            transform: 'rotate(0deg)',
            transition: 'transform 0.3s ease-in-out',
            zIndex: 100 - id,
            opacity: 1,
        };

        const otherCardStyle: styleType = {
            ...(baseStyle ? baseStyle : { transform: 'rotate(0deg)', opacity: 0 }),
            zIndex: 100 - id,
            opacity: baseStyle ? 1 : 0,
            transition: 'transform 0.3s ease-in-out',
            // transform: `${baseStyle?.transform || 'rotate(0deg)'} scale(0.95)`,
        };
        return id === 0 ? topCardStyle : otherCardStyle;

    }, [baseStyle, id]);


    const handleSwipe = () => {
        outOfFrame(item, setArray);
    };

    useEffect(() => {
        if (id !== 0 && state) {
            setState(false);
        }
    }, [id, state]);

    return (
        <div style={{ zIndex: finalStyle.zIndex, position: 'absolute' }}>
            <TinderCard
                className='swipe'
                onCardLeftScreen={handleSwipe}
                preventSwipe={['up', 'down']}
            >
                <div className={'CardInside'} style={finalStyle}>
                    <h2>{item.word}</h2>

                    <h3 className={state ? 'show' : 'hidden'}>{item.translate ? item.translate : 'Carregando...'}</h3>
                </div>

            </TinderCard>

            <button
                onClick={() => setState(true)}
                className={`answer ${id === 0 ? 'show' : 'hidden'}`}
                disabled={id !== 0}
            >Answer</button>
        </div>

    )
}

export default Card