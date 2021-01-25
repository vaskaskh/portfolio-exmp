import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components/macro';
import { motion } from 'framer-motion';
import {pageAnimation, titleAnim, lineAnim, slider, sliderContainer} from '../components/animation';
import {fade, photoAnim} from '../components/animation';



const OurWork = () => {
    return (

        <Work  variants={pageAnimation} initial="hidden" 
        animate="show"
        exit="exit"
        style={{backgroundColor:"#fff"}}
        >
    <motion.div variants={sliderContainer}>
        <Frame1 variants={slider}></Frame1>
        <Frame2 variants={slider}></Frame2>
        <Frame3 variants={slider}></Frame3>
        <Frame4 variants={slider}></Frame4>
    </motion.div>
            <Movie>
                <motion.h2 variants={fade}>The Athlete</motion.h2>
                <motion.div variants={lineAnim} className="line"></motion.div>

                <Link>
                <Hide>
                    <motion.img variants={photoAnim} src="https://images.unsplash.com/photo-1542459629-519887d476da?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80" alt="athlete"/>
                </Hide>
                </Link>
            </Movie>



            <Movie>
                <h2>The Racer</h2>
                <div className="line"></div>

                <Link>
                 <img  src="https://www.formula1.com/content/dam/fom-website/manual/Misc/Main%20main%20imager.jpg.transform/9col/image.jpg" alt="racer"/>
                </Link>
                

            </Movie>


            <Movie>
                <h2>Good Times</h2>
                <div className="line"></div>

                <Link>
                    <img src="https://ichef.bbci.co.uk/news/976/cpsprodpb/7542/production/_113981003_gettyimages-1228074922.jpg" alt="Times"/>
                
                </Link>
            </Movie>
        </Work>
    )
}

const Work = styled(motion.div)`
    min-height: 100vh;
    overflow: hidden;
    padding: 5rem 10rem;
    color: black;
    h2{
        padding: 1rem 0rem;
    }

    @media(max-width: 1300px){
        display: flex;
        flex-direction: column;  
    }
`;

const Movie = styled.div`
    padding-bottom: 10rem;
    .line{
        height:0.5rem;
        background:#23d997;
        margin-bottom: 3rem;
    }
    img{
        width: 100%;
        height: 70vh;
        object-fit: contain;
    }
`

const Hide = styled.div`
    overflow: hidden;
`

//colorful frame Animation for full page
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


export default OurWork
