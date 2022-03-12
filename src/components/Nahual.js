import dayFactory from './Days';

const days = dayFactory('3em', '3em');

function Nahual({ day, nahual, nahualDay }) {

    return (
        <div className="day-container" >
            <div className='day'>
                {day}
            </div>
            <div className='nahual-day'>
                {days[nahualDay]}
            </div>
            <div className='nahual'>
                {nahual}
            </div>
        </div>

    )
}

export default Nahual;