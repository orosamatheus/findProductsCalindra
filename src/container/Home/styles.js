import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    
    @media (min-width:320px) and (max-width:768px) {
        align-items: stretch;
    }
`;
export const SearchBarContainer = styled.form`
    display: flex;
    align-items: center;

    @media (min-width:320px) and (max-width:768px) {
        flex-direction: column;
        justify-content: center;
    }

    input{
        width: 360px;
        height: 40px;
        background: #fafafa;
        border: none;
        border-bottom: 2px solid #303240;
        outline: none;
        padding: 10px;
        font-size: 1rem;
        color: #151a39;
        margin-bottom: 10px;

        @media (min-width: 320px) and (max-width:768px) {
            width: 300px;
        }
    }

    button {
        width: 200px;
        height: 40px;
        margin: 0 0 3px 15px;
        cursor: pointer;
        border-radius: 15px;
        border: none;
        outline: none;
        background: #6ab04c;
        color: #151A39;
        font-weight: 500;
        :hover {
        transition: 0.3s all ease-in-out;
        filter: brightness(0.8);
        }
    }
`;
export const SuggestionsContainer = styled.div`
    display: ${(props) => (props.active ? 'flex' : 'none')};
    align-items: center;
    font-weight: 400;

    span{
        font-size: 12px;
        font-weight: 500;
    }

    h5{
        cursor: pointer;
        font-weight: 400;

        :hover{
            filter: brightness(0.5);
        }
    }

    span, h5 {
        color: grey;
        margin-right: 5px;
    }
    
`;
export const ProductContainer = styled.ul`
    display: flex;
    flex-direction: column;
    margin-top: 20px;

    li{
        margin: 10px;
    }

    h4{
        text-align: justify;
    }

`;
