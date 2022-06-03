import { setupStore } from '#store/store';
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider } from '@mui/material/styles';
import App from 'App/App';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import './index.scss';
import theme from './theme';

const store = setupStore();

const app = ReactDOM.createRoot( document.getElementById( 'app' ) as HTMLElement )

app.render(
    <Provider store={ store }>
        <BrowserRouter>
            <ThemeProvider theme={ theme }>
                <CssBaseline />
                <App />
            </ThemeProvider>
        </BrowserRouter>
    </Provider>,
);
