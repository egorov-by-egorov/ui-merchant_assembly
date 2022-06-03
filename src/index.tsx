import { setupStore } from '#store/store';
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider } from '@mui/material/styles';
import App from 'App/App';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import './index.scss';
import theme from './theme';

const store = setupStore();

ReactDOM.render(
	<Provider store={store}>
		<BrowserRouter>
			<ThemeProvider theme={theme}>
				<CssBaseline />
				<App />
			</ThemeProvider>
		</BrowserRouter>
	</Provider>,
	document.getElementById('app')
);
