import styled from 'styled-components';

export const Container = styled.div`
    padding: 12px;
    width: 250px;
    border: 1px solid rgba(0, 0, 0, 0.6);
    text-align: center;
    background-color: #fff;
    height: 250px;
    border-radius: 8px;

    h3 {
        padding: 5px 0;
        border-bottom: 2px solid #c4c4c4;
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
