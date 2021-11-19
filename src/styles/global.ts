import { createGlobalStyle } from 'styled-components';
import 'react-toastify/dist/ReactToastify.css';
const GlobalStyle = createGlobalStyle`
    *{
        margin:0;
        padding:0;
        font-family: 'Roboto', sans-serif;

    }

    #root{
        overflow-x:hidden;
        background-color:#f4f5f6
    }
`;

export default GlobalStyle;
