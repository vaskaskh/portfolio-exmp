import styled, { keyframes } from 'styled-components/macro';


export const About = styled.div`
    min-height: 90vh;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 5rem 10rem;
    color: white;

    @media(max-width: 1300px){
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }

`

export const Description = styled.div`
    flex: 1;
    padding-right: 5rem;
    flex-wrap: nowrap;
    h2{
        font-weight: lighter;
        animation-name: mymove;
    }
    h4{
        font-size: 4rem;
    }
`

export const Image = styled.div`
    flex:1;
    overflow: hidden;
    img{
        width:100%;
        height:80vh;
        object-fit:cover;
    }
`

export const Hide = styled.div`
    overflow:hidden;
`

export const Title = styled.div`

`