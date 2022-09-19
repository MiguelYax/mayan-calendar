import { dayIcons, nahualIcons } from './Days';

const days = dayIcons('3em', '3em');
const nahuals = nahualIcons('3em', '3em')

function Nahual({ day, nahual, nahualDay }) {

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