import styled from 'styled-components';

export const Container = styled.div`
    width: 100 %;
    height: 100vh;
    background: linear-gradient(90deg, #4b6cb7 0%, #182848 100%);    
    
    display: flex;
    align-items: center;
    justify-content: center;
`

export const Content = styled.div`
    backdrop-filter: blur( 6px );
    width: 50%;
    min-width: 200px;
`

export const Row = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`

export const Column = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
`