import React, { useEffect } from 'react'
// import ProjectCard from '../Profile/ProjectCard';
import "./CSS/EventDiv.css"
import "../Filter/Filter.css";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import ReadMoreIcon from '@mui/icons-material/ReadMore';

const EventCard = ({event}) => {

    const { description, duration, image, mentor, name, speaker, time } = event;
    return (
        <>

            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src="https://cdn-az.allevents.in/banners/e3137d25c10c1b049601026a8a7f0b17-rimg-w1024-h500-dc29bde4-gmir.jpeg" />
                <Card.Body>
                    <Card.Title className='d-flex justify-content-center'>{name}</Card.Title>
                    <Card.Text>
                        {description}
                    </Card.Text>
                    <Card.Text className='d-flex justify-content-center' style={{ opacity: 0.6 }}>
                        <small>{time}</small>
                    </Card.Text>
                    <Button variant="light" className='mt-2' style={{ marginLeft: '7rem' }}><ReadMoreIcon /> <small>Read More</small></Button>
                </Card.Body>
            </Card>
        </>
    )
}

export default EventCard