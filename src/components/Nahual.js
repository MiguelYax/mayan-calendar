
import { dayIcons, nahualIcons } from './Days';
import "./nahual.css"
import { Card } from 'react-bootstrap';

const days = dayIcons();
const nahuals = nahualIcons()

function Nahual({ day, nahual, nahualDay, isToday }) {
    if (!day) {
        return null;
    }

    return (
        <Card>
            <Card.Header>{day}</Card.Header>
            <Card.Body>
                <Card.Title>
                </Card.Title>
                <Card.Text>
                    {days[nahualDay]}
                    {nahual && nahuals[nahual.replace(/'/g, '')]}
                </Card.Text>
            </Card.Body>
        </Card>
    )
}

export default Nahual;