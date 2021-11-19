import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    border-left: 1px solid #026aa7;
    border-right: 1px solid #026aa7;
    text-align: center;
    height: 100vh;

    h2 {
        background-color: #026aa7;
        color: #ffff;
        padding: 8px;
    }
`;

export const CardList = styled.div`
    margin-top: 20px;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 20px;
`;
