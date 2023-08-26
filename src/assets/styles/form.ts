import styled from 'styled-components';

export const TextForm = styled.div`
    background: #1A1033E5;
    color: #FFFFFF;
    width: 100%;
    height: 12rem;
    display: flex;
    justify-content: center;
    flex-direction: column;
    padding: 15px 15px;
    font-family: 'Poppins', sans-serif ;
    font-weight: 700;
    font-size: 20px;
    line-height: 1.5;
    text-align: center;
    border-top-right-radius: 13px;
    border-top-left-radius: 13px;
    border-bottom-right-radius: 15px;
    border-bottom-left-radius: 15px ;
    border: none;
    padding: 0;
`

export const FormStyles = styled.div`
    width: 24em;
    height: 42rem;
    border: 2px solid #6950A1;
    border-top-right-radius: 15px;
    border-top-left-radius: 15px;
    border-bottom-right-radius: 15px;
    border-bottom-left-radius: 15px ;
    display: flex;
    flex-direction: column;   
    position: absolute;
    right: 5%;
    top: 23%;
    background-color: #FFFFFF;
`
export const DivLabel = styled.div`
    color: #2B2B2B;
    margin-left: 15px;
    margin-top: 25px;

    input {
        width: 90%;
        padding: 7px;
        border: 1px solid #6950A1;
        border-radius: 5px;
        margin-top: 15px;
        outline: none;
    }
`
export const Span = styled.span`
    width: 300px;
    font-size: 16px;   
`

export const Button = styled.button`
    width: 90%;
    padding: 10px;
    background: #6950A1;
    color: #FFFFFF;
    font-weight: 700;
    font-size: 20px;
    border: none;
    border-radius: 20px; 
    cursor: pointer;
    margin-top: 35px;
    margin-left: 20px;
`