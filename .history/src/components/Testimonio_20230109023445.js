import React, {} from 'react'
import { Imagess, Title, FlexContainer, ToasSc } from '../styles/Testimonio.style'
import Toast from 'react-bootstrap/Toast';

const Testimonios = () => {

    const testimonial = [

        {
            "name": "Stalin Bustamante",
            "perfilPhoto": "https://res.cloudinary.com/dv08oqgvx/image/upload/w_1000,c_fill,ar_1:1,g_auto,r_max,/v1673245739/AmazonasSprint3/1528660840812_g4bkkk.png",
            "company": "Talent.com",
            "profession": "Team manager",
            "feedback": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
            "longAgo": "1 month ago"
        },
        {
            "name": "Miguel Angel Garcia C.",
            "perfilPhoto": "https://res.cloudinary.com/dv08oqgvx/image/upload/w_1000,c_fill,ar_1:1,g_auto,r_max,/v1673245689/AmazonasSprint3/1593636739226_bd2naj.png",
            "company": "Talent.com",
            "profession": "Team leader",
            "feedback": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
            "longAgo": "1 month ago"
        },
        {
            "name": "Sara Restrepo Arboleda",
            "perfilPhoto": "https://res.cloudinary.com/dv08oqgvx/image/upload/w_1000,c_fill,ar_1:1,g_auto,r_max,/v1673245610/AmazonasSprint3/1628721371128_fzohpi.png",
            "company": "Talent.com",
            "profession": "Human resource",
            "feedback": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
            "longAgo": "1 month ago"
        },

        {
            "name": "John Faber Florez Vasco",
            "perfilPhoto": "https://res.cloudinary.com/dv08oqgvx/image/upload/v1641348678/AmazonasSprint3/k1y96c2kl9hzcpayxnyo.png",
            "company": "Agile Innova",
            "profession": "Software Consult",
            "feedback": "Sebastian has been a very committed person in his geek academy training process, he has shown sincerity in his strengths in order to acquire the necessary technical knowledge to become software development, I have seen that he has been very committed to each of the activities that have been proposed and no matter how small the challenge, it has been assumed in a thorough and professional way.I feel that there is clarity in Sebastián's purpose in the geek academy program and that I long for more people as is the value of this great opportunity to be linked to work in the ICT sector.",
            "longAgo": "2 years ago"
        },
        {
            "name": "Jenny Alexandra Montoya Cortés",
            "perfilPhoto": "https://res.cloudinary.com/dv08oqgvx/image/upload/v1641348637/AmazonasSprint3/ixaspolqi5pinvemcj7l.png",
            "company": "Academia Geek",
            "profession": "Frontend Mentor",
            "feedback": "The student starts with no previous knowledge in the Geek Apprentices course. His effort and dedication is evidenced in his continuous study with the training field and external tools. Thus, successfully completing the apprenticeship course and moving on to the official Frontend 5 course. In the current course, the same dynamics of hard work, effort and improvement are noted, good disposition is shown in the classes and with their peers. These are the results shown up to week 4 (mid-course). Constant work and motivation brings very good results, time will prove right. In week 8 I hope to be filling out this form again and telling the end of the story. : D",
            "longAgo": "2 years ago"
        },



    ]

    const [items, setItems] = useState([]);

    const [visible, setVisible] = useState(4);

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
                                    <strong className="me-auto">{testi.name}<br /><i>{testi.profession}<br />{testi.company}</i></strong>
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

