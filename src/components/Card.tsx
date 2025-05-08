// hook
import { useState, useEffect, useMemo } from 'react';

// assets
import { styleType, interfaceCard } from '../assets/types';

// utils
import { outOfFrame } from '../utils/outOfFrame';
import { cardInicialize } from '../utils/cardInicialize';

// libraries
import TinderCard from 'react-tinder-card'
import { PiArrowClockwiseBold, PiArrowCounterClockwiseBold } from "react-icons/pi"

// components
import Speech from './Speech.tsx'

// scss
import '../style/components/card.scss'

interface cardProps {
    id: number
    item: interfaceCard
    setArray: React.Dispatch<React.SetStateAction<interfaceCard[]>>
}

function Card({ item, id, setArray }: cardProps) {
    const [state, setState] = useState<boolean>(false)
    const [baseStyle, setBaseStyle] = useState<styleType | undefined>(undefined)
    const [rotate, setRotate] = useState<boolean>(false)

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
                <div className={`flip-card ${rotate ? 'rotate' : ''}`} style={finalStyle}>

                    <div className="flip-card-inner">
                        <div className="flip-card-front">
                            {item.tag ? '' : <Speech word={item.front} />}

                            <h2>
                                {item.front.charAt(0).toUpperCase() + item.front.slice(1)}
                            </h2>
                            <button 
                            onClick={(e) => {
                                e.stopPropagation()
                                setRotate(true)
                                }}
                            onTouchStart={(e) => {
                                e.stopPropagation();
                                }}
                            aria-label='Girar cartão para resposta'
                            className='flip'
                                >
                                <PiArrowClockwiseBold size={30} color ='#403D39' />
                               
                            </button>
                        </div>
                        <div className="flip-card-back">
                            <h3>
                                {
                                item.back.charAt(0).toUpperCase() + item.back.slice(1)
                                }
                            </h3>
                            <button 
                            onClick={(e) => {
                                e.stopPropagation()
                                setRotate(false)
                                }}
                            onTouchStart={(e) => {
                                e.stopPropagation();
                                }}
                            aria-label='Girar cartão para pergunta'
                            className='flip'
                                >
                                <PiArrowCounterClockwiseBold size={30} color='#CCC5B9' />
                                
                            </button>
                        </div>
                    </div>
                </div>



            </TinderCard>

        </div>

    )
}

export default Card