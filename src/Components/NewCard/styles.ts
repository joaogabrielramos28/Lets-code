import styled from 'styled-components';

export const Container = styled.div`
    padding: 12px;
    width: 250px;
    box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
    text-align: center;
    height: 250px;
    border-radius: 8px;
    background-color: #ebecf0;
    color: #172b4d;

    input {
        padding: 8px 8px;
        border-radius: 4px;
        border: none;
        outline: none;
        background-color: #fff;
        box-shadow: 0 1px 0 #091e4240;
        &:focus {
            border: 2px solid #026aa7;
        }
    }

    textarea {
        border-radius: 4px;
        background-color: #fff;
        border: none;
        margin-top: 10px;
        resize: none;
        box-shadow: 0 1px 0 #091e4240;
        outline: none;

        &:focus {
            border: 2px solid #026aa7;
        }
    }

    h3 {
        padding: 5px 0;
    }

    p {
        margin-top: 20px;
        text-align: left;
    }

    svg {
        cursor: pointer;
        opacity: 0.7;

        &:hover {
            transition: opacity 0.4s ease;
            opacity: 1;
        }
    }
`;

export const Content = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    height: 180px;
`;

export const Actions = styled.div`
    margin-top: 10px;
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;

    svg {
        margin: 0 10px;
    }
`;
