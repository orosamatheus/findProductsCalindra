import styled from 'styled-components';

export const Container = styled.header`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;

    margin: 2rem auto;
    padding: 0 3vw;

    color: #151A39;    
    font-weight: 500;

`;

export const Center = styled.div`
    div {
        &.text {
            overflow: hidden;
            letter-spacing: 2px;
            font-size: 2rem;
            font-family: 'Roboto';
            box-sizing: border-box;

            @media (min-width:320px) and (max-width:768px){
                font-size: 1rem;
            }
        }
    }
`;
