import React from 'react';
import styled from 'styled-components/macro';
import {fade} from '../animation';


import {useScroll} from '../useScrollAnimation';



const ServicesSection = () => {

    const [element, controls] = useScroll();


    return (
        <Services variants={fade} animate={controls} initial="hidden" ref={element} >
            <Description>
<div style={{marginBottom: "50px"}}>
                <h2>High<span style={{margin: "0 20px"}}>quality</span>services</h2>
                </div>
            <Cards>
                
                <Card>
                    <Icon>
                        <img src="https://shawtemple.org/wp-content/uploads/2017/04/clock-icon-green.png" alt=""/>
                        <h3>Efficient</h3>
                    </Icon>
                    <p>Lorem ipsum dolor sit amet.</p>
                </Card>

                <Card>
                    <Icon>
                        <img src="https://image.flaticon.com/icons/png/512/732/732502.png" alt=""/>
                        <h3>Team Work</h3>
                    </Icon>
                    <p>Lorem ipsum dolor sit amet.</p>
                </Card>


                <Card>
                    <Icon>
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_mrSjwUa0NXVk9gwt8oyGx6JTSHe-QXxc6Q&usqp=CAU" alt=""/>
                        <h3>Diagram</h3>
                    </Icon>
                    <p>Lorem ipsum dolor sit amet.</p>
                </Card>

                <Card>
                    <Icon>
                        <img src="https://cdn2.iconfinder.com/data/icons/flat-pack-1/64/Money-512.png" alt=""/>
                        <h3>Money</h3>
                    </Icon>
                    <p>Lorem ipsum dolor sit amet.</p>
                </Card>
            </Cards>
            
            </Description>

            <Image>
                <img  src="https://i.pinimg.com/originals/fd/a0/ae/fda0ae1f081bf91b414236ef796e685d.jpg" alt=""/>
            </Image>
        </Services>
    )
};

const Services = styled.div`
    display: flex;
    min-height: 90vh;
    align-items: center;
    justify-content: space-between;
    padding: 5rem 10rem;
    color: white;

    @media(max-width: 1300px){
        display: flex;
        flex-direction: column;
        flex-wrap: no wrap;
    }
`
const Icon = styled.div`
    flex:1;
    text-align: center;
    img{
        width: 10vw;
        object-fit: contain;
    }
`
const Cards = styled.div`
display: flex;
flex-wrap: wrap;

`
const Image = styled.div`
    flex:1;
    overflow: hidden;
    img{
        width:100%;
        height:100%;
        object-fit:cover;
    }
`
const Description = styled.div`
     flex: 1;
     flex-wrap: nowrap;
    padding-right: 5rem;
    margin-bottom: 25px;
    h2{
        font-weight: lighter;
    }
`

const Card = styled.div`
    margin: 10px;

`

export default ServicesSection
