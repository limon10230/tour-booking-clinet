
import React from 'react';
import { Button } from 'react-bootstrap';
import('./Welcome.css')



const Welcome = () => {
    return (
        <div>

            <h2 className="welcome-title"> Welcome to Ticket BD </h2>
            <p className="detail">Generally, your trip includes 1 free transfer within 2 hours of your first tap, but only if the mode you’re transferring to costs the same or less than your first fare payment. For example, transferring from subway to bus is free, but you’ll have to pay the difference if you transfer from bus to subway.</p>
            <Button className='button'>Learn More</Button>
        </div>
    );
};

export default Welcome;