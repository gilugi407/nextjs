import { useState } from 'react'
import Range from '../components/range'

export default function Calculator() {
    
    const initialDragon = { level: 20, percent: 20 }
    const [dragon, setDragon] = useState(initialDragon)

    function inputChangeHandler(e) {
        let { name, value, type } = e.target;
        console.log(name, value, type)

        if (type === "number") {
            value = parseFloat(value);
        }

        if (name === "percent" && value > 100) {
            value = 100;
        }
        
        if (name === "percent" && value < 1) {
            value = 1;
        }
        
        if (name === "level" && value > 60) {
            value = 60;
        }
        
        if (name === "level" && value < 1) {
            value = 1;
        }
        
        setDragon({ ...dragon, [name]: value });
    }

    return (
    <div className="flex flex-col mt-6">
        <form className="flex justify-between p-6 mt-6 text-left border gap-x-6 w-96 rounded-xl">
                <label htmlFor="level">Level</label>
                <input
                    className="pl-2 mx-2 text-right border w-14 rounded-m"     
                    type="number" 
                    id="level" 
                    name="level" 
                    min='1'
                    max='60'
                    value={dragon.level}
                    onChange={inputChangeHandler}
                />
                <label htmlFor="percent">Percent</label>
                <input 
                    className="pl-2 mx-2 text-right border rounded-m w-14"    
                    type="number" 
                    id="percent" 
                    name="percent" 
                    min='1'
                    max='100'
                    value={dragon.percent}
                    onChange={inputChangeHandler}
                /> 
        </form>
        <Range dragon={dragon}/>
    </div>
    )
}