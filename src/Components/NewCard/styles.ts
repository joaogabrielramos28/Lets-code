import styled from 'styled-components';

export const Container = styled.div`
    padding: 12px;
    width: 250px;
    border: 1px solid rgba(0, 0, 0, 0.6);
    text-align: center;
    background-color: #fff;
    height: 250px;
    border-radius: 8px;

    input {
        padding: 8px 8px;
        border-radius: 4px;
        border: none;
        border: 1px solid #c4c4c4;
        outline: none;
    }

    textarea {
        border: 1px solid #c4c4c4;
        border-radius: 4px;
        margin-top: 10px;
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
