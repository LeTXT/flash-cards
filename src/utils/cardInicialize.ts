import { styleType } from "../assets/types.ts"

export const cardInicialize = (): styleType => {
    const randomRotation = Math.floor(Math.random() * 10) - 5
    return {
        transform: `rotate(${randomRotation}deg)`,
        transition: 'transform 0.3s ease-in-out'
    }
}