import styled from 'styled-components';

export const InputContainer = styled.div`
    width: 100%;
    height: 75px;
    backdrop-filter: blur( 6px );
    background: rgba(142,92,114.0.25);
    
    display: flex;
    align-items: center;
    justify-content: flex-end;

    font-size: 24px;
    font-family: 'Roboto';

    input  {
        width: 100%;
        height: 75px;
        border: 1px solid rgb(130,70,100);
        background: rgba( 255, 255, 255, 0.15 );
        box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 );
        backdrop-filter: blur( 4.5px );
        -webkit-backdrop-filter: blur( 4.5px );
        border-top-left-radius: 10px;
        border-top-right-radius: 10px;
        border: 1px solid rgba( 255, 255, 255, 0.18 );
        border: 0;
        padding: 0 10px;
        color: #000000;
        float: right;
        clear: both;

        font-size: 24px;
        font-family: 'Roboto';
    }
`
