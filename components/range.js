import { dragonHealth } from '../health'

export default function Range({ dragon }) {
    const min = dragonHealth[dragon.level] * (dragon.percent - 1) / 100;
    const max = dragonHealth[dragon.level] * dragon.percent / 100;
    
    return(
        <div className="mt-16">
            health : <span className="font-bold">{ min.toLocaleString() } - { max.toLocaleString() }</span>
        </div>
    )
}