import styled from 'styled-components';
//Styled components
export const Container = styled.div`
    min-height: 90vh;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 5rem 10rem;
    color: white;

    .description{
        flex: 1;
        padding-right: 5rem;
        font-weight: lighter;
    }
    overflow: hidden;
    .image{
        flex: 1;
        img{
            width: 100%;
            height: 80vh;
            object-fit: cover;
        }
    }
    .hide{
        overflow: hidden;
    }
`
