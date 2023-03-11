import { dayIcons, nahualIcons } from './Days';
import { dayNames } from '../utils';
import './nahual.css';
import { Card } from 'react-bootstrap';

const days = dayIcons();
const nahuals = nahualIcons();

function Nahual({
    day, nahual, nahualDay, isToday, dayName,
}) {
    if (!day) {
        return null;
    }

    return (
        <Card>
            <Card.Header>
                {day}
                {' '}
                <div className="d-none d-sm-block">{dayName}</div>
            </Card.Header>
            <Card.Body>
                <Card.Title />
                <Card.Text>
                    <p className="lead">{nahual}</p>
                    {days[nahualDay]}
                    {nahual && nahuals[nahual.replace(/'/g, '')]}
                </Card.Text>
            </Card.Body>
        </Card>
    );
}

export default Nahual;
