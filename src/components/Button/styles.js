import styled from 'styled-components';

export const ButtonContainer = styled.button`
    padding: 10px;
    border: 1px solid rgba(130,70,100, 0.3);
    background: rgba( 255, 255, 255, 0.15 );
    box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 );
    border: 1px solid rgba( 255, 255, 255, 0.18 );
    color: #000000;
    font-size: 24px;
    font-weight: 700;
    flex: 1;

    &:hover {
        opacity: 0.6;
    }
`