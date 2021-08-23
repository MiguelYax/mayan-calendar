import { Svg1, Svg2, Svg3, Svg4, Svg5, Svg6, Svg7, Svg8, Svg9, Svg10, Svg11, Svg12, Svg13 } from './icons';

const days = {
    1: <Svg1 />,
    2: <Svg2 />,
    3: <Svg3 />,
    4: <Svg4 />,
    5: <Svg5 />,
    6: <Svg6 />,
    7: <Svg7 />,
    8: <Svg8 />,
    9: <Svg9 />,
    10: <Svg10 />,
    11: <Svg11 />,
    12: <Svg12 />,
    13: <Svg13 />,
}

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