import React from 'react'
import styled from 'styled-components/macro';
import {Link as LinkR} from 'react-router-dom';
import {AiOutlineClose} from 'react-icons/ai';




const Sidebar = ({isOpen, setIsOpen}) => {
    
    const toggle =()=>setIsOpen(!isOpen);

    return (
        <div>
            <SidebarContainer isOpen={isOpen} toggle={toggle}>

                <Icon>
                    <CloseIcon onClick = {()=> setIsOpen(false)}/>
                </Icon>

                <sidebarMenu>
                    <SidebarLink to='/'>About Us</SidebarLink>

                    <SidebarLink to='/work'>Work</SidebarLink>

                    <SidebarLink to='/contact'>Contact</SidebarLink>
                </sidebarMenu>
            </SidebarContainer>
        </div>
    )
}

const SidebarContainer = styled.div`
    position: fixed;
    z-index: 999;
    width: 350px;
    height: 100%;
    background: #ffc500;
    display: grid;
    align-items: center;
    text-align: center;
    top: 0;
    transition: 0.3s ease-in-out;
    right: ${({isOpen})=> (isOpen? "0" : "-1000px")};
    @media ( max-width: 400px){
        width: 100%;
        
    }
    
`

export const Icon = styled.div`

`
export const CloseIcon = styled(AiOutlineClose)`

`

export const SidebarMenu = styled.div`
display: flex;
flex-direction: column;
justify-content: space-around;

`
export const SidebarLink = styled(LinkR)`
    
`

export default Sidebar;
