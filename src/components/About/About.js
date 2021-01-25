import { motion } from 'framer-motion';
import React from 'react';
import {About, Description, Hide, Image,Title} from '../../Styles';
import {titleAnim, fade, photoAnim} from '../animation';



const AboutSection = () => {

 
    return (
        <About>
            <Description >
                
                <motion.div>
                    <Hide>
                        <motion.h2 
                         variants={titleAnim}

                        >We work to make</motion.h2>
                    </Hide>
                    
                    <Hide>
                        <motion.h2 
                        variants={titleAnim}
                     
                        >
                          your<span style={{margin:"0 20px"}}>
                              Dreams
                          </span>
                          come 
                        </motion.h2>
                    </Hide>


                    <Hide>
                        <motion.h2
                        variants={titleAnim}
                        >True. </motion.h2>
                    </Hide>
                </motion.div>

                <motion.p variants={fade}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta nulla nihil ea commodi voluptatibus, repellendus neque cumque! Libero culpa harum voluptatum molestiae nesciunt impedit praesentium!</motion.p>

                <motion.button variants={fade}>Contact Us</motion.button>
            </Description>

            <Image>
                <motion.img  variants={photoAnim} src="https://i.pinimg.com/originals/49/09/71/4909719193824997a16949565a4dd1f2.jpg" alt=""/>
            </Image>
        </About>
    )
}




export default AboutSection;
