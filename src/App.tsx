import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import Router from './Router';
import UserProvider from './contexts/UserContext';
import { defaultTheme } from './themes/default';

export default function App() {
  return (
    <BrowserRouter>
      <ThemeProvider theme={defaultTheme}>
        <UserProvider>
          <Router />
        </UserProvider>
      </ThemeProvider>
    </BrowserRouter>
  );
}
