
import { dayIcons, nahualIcons } from './Days';
import "./nahual.css"

const days = dayIcons();
const nahuals = nahualIcons()

function Nahual({ day, nahual, nahualDay = 0 }) {

    return (
        <div className="day-container" >
            <div className='day'>
                {day}
            </div>
            <div className='nahual-day'>
                {days[nahualDay]}
            </div>
            <div data={nahual} className='nahual'>
                {nahual && nahuals[nahual.replace(/'/g, '')]}
            </div>
        </div>

    )
}

export default Nahual;