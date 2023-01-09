import React from 'react'
import { Imagess, Title, FlexContainer, ToasSc } from '../styles/Testimonio.style'
import Toast from 'react-bootstrap/Toast';

const Testimonios = () => {

    const testimonial = [
        {
            "name": "John Faber Florez Vasco",
            "perfilPhoto": "https://res.cloudinary.com/dv08oqgvx/image/upload/v1641348678/AmazonasSprint3/k1y96c2kl9hzcpayxnyo.png",
            "company": "Agile Innova",
            "profession": "Software Consultant",
            "feedback": "Sebastian has been a very committed person in his geek academy training process, he has shown sincerity in his strengths in order to acquire the necessary technical knowledge to become software development, I have seen that he has been very committed to each of the activities that have been proposed and no matter how small the challenge, it has been assumed in a thorough and professional way.I feel that there is clarity in Sebastián's purpose in the geek academy program and that I long for more people as is the value of this great opportunity to be linked to work in the ICT sector.",
            "longAgo":"2 years ago"
        },
        {
            "name": "Jenny Alexandra Montoya Cortés",
            "perfilPhoto": "https://res.cloudinary.com/dv08oqgvx/image/upload/v1641348637/AmazonasSprint3/ixaspolqi5pinvemcj7l.png",
            "company": "Academia Geek",
            "profession": "Frontend Mentor",
            "feedback": "The student starts with no previous knowledge in the Geek Apprentices course. His effort and dedication is evidenced in his continuous study with the training field and external tools. Thus, successfully completing the apprenticeship course and moving on to the official Frontend 5 course. In the current course, the same dynamics of hard work, effort and improvement are noted, good disposition is shown in the classes and with their peers. These are the results shown up to week 4 (mid-course). Constant work and motivation brings very good results, time will prove right. In week 8 I hope to be filling out this form again and telling the end of the story. : D",
            "longAgo":"2 years ago"
        },

        {
            "name": "Stalin  STALIN BUSTAMANTE",
            "perfilPhoto": "https://res.cloudinary.com/dv08oqgvx/image/upload/v1641348637/AmazonasSprint3/ixaspolqi5pinvemcj7l.png",
            "company": "Talent.com",
            "profession": "team manager",
            "feedback": "The student starts with no previous knowledge in the Geek Apprentices course. His effort and dedication is evidenced in his continuous study with the training field and external tools. Thus, successfully completing the apprenticeship course and moving on to the official Frontend 5 course. In the current course, the same dynamics of hard work, effort and improvement are noted, good disposition is shown in the classes and with their peers. These are the results shown up to week 4 (mid-course). Constant work and motivation brings very good results, time will prove right. In week 8 I hope to be filling out this form again and telling the end of the story. : D",
            "longAgo":"1 month ago"
        },
        {
            "name": "MIGUEL ANGEL GARCIA C.",
            "perfilPhoto": "https://res.cloudinary.com/dv08oqgvx/image/upload/v1641348637/AmazonasSprint3/ixaspolqi5pinvemcj7l.png",
            "company": "Talent.com",
            "profession": "Team leader",
            "feedback": "The student starts with no previous knowledge in the Geek Apprentices course. His effort and dedication is evidenced in his continuous study with the training field and external tools. Thus, successfully completing the apprenticeship course and moving on to the official Frontend 5 course. In the current course, the same dynamics of hard work, effort and improvement are noted, good disposition is shown in the classes and with their peers. These are the results shown up to week 4 (mid-course). Constant work and motivation brings very good results, time will prove right. In week 8 I hope to be filling out this form again and telling the end of the story. : D",
            "longAgo":"1 month ago"
        },
        {
            "name": "Sara",
            "perfilPhoto": "https://res.cloudinary.com/dv08oqgvx/image/upload/v1641348637/AmazonasSprint3/ixaspolqi5pinvemcj7l.png",
            "company": "Talent.com",
            "profession": "Human resource",
            "feedback": "The student starts with no previous knowledge in the Geek Apprentices course. His effort and dedication is evidenced in his continuous study with the training field and external tools. Thus, successfully completing the apprenticeship course and moving on to the official Frontend 5 course. In the current course, the same dynamics of hard work, effort and improvement are noted, good disposition is shown in the classes and with their peers. These are the results shown up to week 4 (mid-course). Constant work and motivation brings very good results, time will prove right. In week 8 I hope to be filling out this form again and telling the end of the story. : D",
            "longAgo":"1 month ago"
        },

    ]

    return (
        <div>
            <Title>Testimonials</Title>
           
            <FlexContainer> {
                testimonial.map((testi) => {
                    return (

                        <ToasSc>
                        <Toast>
                            <Toast.Header closeButton={false} >
                                <Imagess src={testi.perfilPhoto} className="rounded me-2" alt="" />
                                <strong className="me-auto">{testi.name}</strong>
                                <small>{testi.longAgo}</small>
                            </Toast.Header>
                            <Toast.Body>{testi.feedback}</Toast.Body>
                        </Toast>
                        </ToasSc>
                      
                    );
                })}
                  </FlexContainer>


        </div>
    )
}

export default Testimonios

