
import TinderCard from 'react-tinder-card'

import '../style/components/card.scss'
import { useState } from 'react';

interface cardProps {
    word: string,
    translate: string,
    // state: boolean,
    id: number,
    outOfFrame: () => void | Promise<void>;
}

function Card({word, translate, id, outOfFrame}: cardProps) {
    const [state, setState] = useState<boolean>(false)

    const style = (id: number) => {
        if(id === 0) {
            return {
                transform: 'rotate(0), scale(1)',
                transition: 'transform 0.3s ease-in-out'
            }
        } else {
            return {
                transform: `rotate(${Math.floor(Math.random() * 10) - 5}deg)`,
                transition: 'transform 0.3s ease-in-out'
            }
        }
    }

    return (
        <div style={{zIndex: 100 - id}}>
            <TinderCard 
                className='swipe' 
                // preventSwipe={['right', 'left']}
                onCardLeftScreen={outOfFrame}
            >
                <div className={'CardInside'} style={style(id)}>
                    <h2>{word}</h2>

                    <h3 className={state ? 'show' : 'hidden'}>{translate ? translate : 'Carregando...'}</h3>
                </div>

            </TinderCard>

            <button 
                onClick={() => setState(true)}
                className={id === 1 ? 'answer show' : 'answer hidden'}
            >ANSWER</button>
        </div>

    )
}

export default Card