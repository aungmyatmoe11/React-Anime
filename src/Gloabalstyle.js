import {createGlobalStyle} from 'styled-components';

const GlobalStyle = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap');
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        list-style: none;
        text-decoration: none;
        font-family: 'Inter', sans-serif;
    }

    body{
        color: #031634;
        font-size: 1.2rem;
        &::-webkit-scrollbar{
            width: 7px;
        }
        &::-webkit-scrollbar-thumb{
            background-color: #C5E0DC;
            border-radius: 10px;
        }
        &::-webkit-scrollbar-track{
            background-color: #C5E0DC;
        }
    }
`;


export default GlobalStyle;