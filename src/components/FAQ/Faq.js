import React, {useState} from 'react';
import styled from 'styled-components/macro';
import {About} from '../../Styles';
import {motion} from 'framer-motion';
import {faqAnim} from '../animation';
import {useScroll} from '../useScrollAnimation';
import {fade} from '../animation';




const FaqSection = () => {

    const [element, controls] = useScroll();


    const [faqToggle, setFaqToggle] = useState(false)
    return (
    <Faq  variants={fade} ref={element} animate={controls} initial="hidden">
            <h2>Any Questions?<span>FAQ</span></h2>
        <div  onClick={()=> setFaqToggle(!faqToggle)} className="question">
                <h4>How Do I Start?</h4>
            <div className="answer">
                <p>Lorem ipsum dolor sit amet.</p>
                
                {faqToggle && (
                <motion.p variants={faqAnim}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Id ipsum mollitia quaerat?</motion.p>
                )}
                </div>
            <div className="faq-line"></div>
        </div>

        <div className="question">
                <h4>Different Payment Methonds</h4>
            <div className="answer">
                <p>Lorem ipsum dolor sit amet.</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Id ipsum mollitia quaerat?</p>
            </div>
            <div className="faq-line"></div>
        </div>


        <div className="question">
                <h4>What Product You Offer?</h4>
            <div className="answer">
                <p>Lorem ipsum dolor sit amet.</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Id ipsum mollitia quaerat?</p>
            </div>
            <div className="faq-line"></div>
        </div>

        <div className="question">
                <h4>How Do I Start?</h4>
            <div className="answer">
                <p>Lorem ipsum dolor sit amet.</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Id ipsum mollitia quaerat?</p>
            </div>
            <div className="faq-line"></div>
        </div>
    </Faq>
    )
};

const Faq = styled(About)`
    display: block;
    span{
        display: block;
    }
    h2{
        padding-bottom: 2rem;
        font-weight: lighter;

    }
    .question{
        cursor: pointer;
        padding: 3rem 0rem;
        
    }
    .answer{
        padding: 2rem 0rem;
        p{
            padding: 1rem 0rem
        }
    }
    .faq-line{
        background:#cccccc;
        height: 0.2rem;
        margin: 2rem 0rem;
        width:100%;

    }
    .answer{
        & p:first-child{
            color:#20B07C;
        }
    }

`


export default FaqSection;
