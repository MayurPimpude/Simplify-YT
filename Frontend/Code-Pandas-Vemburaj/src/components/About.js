import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import '../styles/About.css';
import vemburaj from '../images/vemburaj.jpeg';
import Mayur from '../images/Mayur.jpeg';
import Pranav from '../images/Pranav1.jpg';
import Heramb from '../images/Heramb.jpg';

const About = () => {
    const teamMembers = [
        {
            name: 'Vemburaj Konar',
            photo: vemburaj, 
            role: 'Frontend Developer',
        },
        {
            name: 'Mayur Pimpude',
            photo: Mayur,
            role: 'Backend Developer',
        },
        {
            name: 'Pranav Kotkar',
            photo: Pranav, 
            role: 'Machine Learning',
        },
        {
            name: 'Heramb Pawar',
            photo: Heramb,
            role: 'Data Science',
        },
    ];

    return (
        <Container className="mt-5">
            <h2 className="mb-4">About Us</h2>
            <p>
            Welcome to SimplifyYT, your go-to destination for cutting-edge YouTube summarization! We understand that in today's fast-paced world, time is of the essence. That's why we've developed a revolutionary platform that brings you concise and insightful summaries of YouTube videos, making it easier than ever to absorb valuable information without spending hours watching lengthy content.
            </p>

            <h3 className="mt-4">Our Mission</h3>
            <p>
            At SimplifyYT, our mission is to empower users with the ability to quickly and efficiently access the core insights of any YouTube video. We recognize the overwhelming amount of content available online and strive to simplify your experience by offering a comprehensive summarization service. Whether you're a busy professional, a student, or simply someone looking to maximize your time, our platform is designed with you in mind.
            </p>

            <h3 className="mt-4">The Application</h3>
            <p>
                Our state-of-the-art summarization  meticulously analyzes YouTube videos, identifying key points, important details, and the overall essence of the content. The result? A concise and easy-to-read summary that captures the essence of the video, saving you time while ensuring you stay informed.
            </p>
            
            <h3 className="mt-4">Join Us on the Journey</h3>
            <p>
                We invite you to join us on this journey of simplifying and enhancing the way you consume YouTube content. At [Your Website Name], we are committed to innovation, efficiency, and providing you with an exceptional user experience. Explore our platform, try our summarization service, and let us help you unlock a world of information in just a few clicks.
            </p>

            <h3 className="mt-4">Meet the Team</h3>
            <Row className="mt-3">
                {teamMembers.map((member, index) => (
                    <Col key={index} md={3} className="mb-3">
                        <Card>
                            <img variant="top" src={member.photo} />
                            <Card.Body>
                                <Card.Title>{member.name}</Card.Title>
                                <Card.Text>{member.role}</Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
        </Container>
    );
};

export default About;

