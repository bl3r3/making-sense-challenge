import styled from 'styled-components';

export const Button = styled.button`
    width: 140px;
    height: 40px;
    background-color: #5da552;
    font-size: 1rem;
    border: none;
    color: white;
    border-radius: 30px;
    cursor: pointer;
    transition: all 0.4s ease;

    &:hover {
        transform: scale(1.1);
    }
`;
