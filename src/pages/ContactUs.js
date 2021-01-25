import React from 'react';
import {motion} from 'framer-motion';
import {linkAnim2, pageAnimation, linkAnim1, sliderContainer, slider} from '../components/animation';
import {titleAnim, ContactAnim} from '../components/animation';
import styled from 'styled-components/macro';
import {AiFillGithub, AiFillInstagram} from 'react-icons/ai';



const ContactUs = () => {
    return (

        <ContactStyle
        variants={pageAnimation}
        initial="hidden"
        animate="show"
        exit="exit"
        style={{background:"white"}}
        >
            
            
        <motion.div variants={sliderContainer}>
            <Frame1 variants={slider}></Frame1>
            <Frame2 variants={slider}></Frame2>
            <Frame3 variants={slider}></Frame3>
            <Frame4 variants={slider}></Frame4>
        </motion.div>


            <Title>
                <Hide>
                    <motion.h2 variants={titleAnim}>Get in touch 🚀🚀🚀</motion.h2>


                 <motion.h2 style={{marginTop: "25px"}} variants={ContactAnim}>Send Us A Message</motion.h2>
                </Hide>
            </Title>
            <div>
                <Social>
                
                </Social>
            </div>

            <SocialLinks>

                <LinkCircle
                variants={linkAnim1}
                href="https://www.instagram.com/vaska_skhirtladze/">

                    <AiFillInstagram/>
                
                </LinkCircle>

                <LinkCircle 
                variants={linkAnim2}
                href="https://github.com/vaskaskh">
    
                   <AiFillGithub/>

                </LinkCircle>
            </SocialLinks>

        </ContactStyle>
    )
}

const ContactStyle = styled(motion.div)`
    padding: 5rem 10rem;
    color: #353535;
    min-height: 90vh;

    @media(max-width: 1300px){
        display: flex;
        flex-direction: column;  
    }

`

const Title = styled.div`
    margin-bottom: 4rem;
    color: black;
`
const Hide = styled.div`
    overflow: hidden;

`

const Circle = styled(motion.div)`
   
`
const Social = styled(motion.div)`
    display: flex;
    flex-wrap: nowrap;
    align-items: center;
    h2{
        margin: 2rem;
    }
`

const SocialLinks = styled(motion.div)`
    display: flex;
    justify-content:center;
    align-items: center;
    margin-top: 25px;

`
const LinkCircle = styled(motion.a)`
   
    border-radius: 50%;
    margin-right: 25px;
    outline: none;
    text-decoration:none;
    color: black;
    font-size: 35px;


&:hover{
    transform: rotate(360deg);
    transition: 0.1s;
    color:#20b07c;
}
    &:last-child{
        margin-right: 0px;
    }
`

//frames
const Frame1 = styled(motion.div)`
    position: fixed;
    left:0;
    top:10%;
    width: 100%;
    height: 100vh;
    background: #fffebf;
    z-index: 2;

`;
const Frame2 = styled(Frame1)`
    background: #ff8efb;
`
const Frame3 = styled(Frame1)`
    background: #8ed2ff;

`
const Frame4 = styled(Frame1)`
    background: #8effa0;
`



export default ContactUs;
