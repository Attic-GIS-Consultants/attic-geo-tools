
import { createTheme, ThemeProvider } from '@mui/material'
import { QueryClient, QueryClientProvider } from 'react-query'
import Layout from '../components/layout'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  const theme = createTheme({

    shape: {
      borderRadius: 8
    },
    palette: {
      common:{
        white:"#f1faee"
      },
      primary: {
        main: "#1d3557",
        light:"#457b9d"
      },
      secondary: {
        main: "#e63946",
      },


    },
    typography: {
      fontFamily: "Open Sans, sans serif",
      h1: {
        fontFamily: "Open Sans",
        fontSize: '3.0rem', [`@media screen and (max-width: 1440px)`]: {
          fontSize: "2.4rem"
        }, [`@media screen and (max-width: 1280px)`]: {
          fontSize: "2.25rem"
        }, [`@media screen and (max-width: 1024px)`]: {
          fontSize: "2.25rem"
        }, [`@media screen and (max-width: 768px)`]: {
          fontSize: "2.25rem"
        }, [`@media screen and (max-width: 600px)`]: {
          fontSize: "1.5rem"
        }, [`@media screen and (max-width: 375px)`]: {
          fontSize: "1.5rem"
        },
        fontWeight: 600
      },
      h2: {
        fontFamily: "Open Sans",
        fontSize: '3rem', [`@media screen and (max-width: 1200px)`]: {
          fontSize: "2.5rem"
        }, [`@media screen and (max-width: 992px)`]: {
          fontSize: "2.5rem"
        }, [`@media screen and (max-width: 768px)`]: {
          fontSize: "2rem"
        }, [`@media screen and (max-width: 600px)`]: {
          fontSize: "1.5rem"
        }, [`@media screen and (max-width: 375px)`]: {
          fontSize: "1.25rem"
        },
        fontWeight: 600
      },
      h3: {
        fontFamily: "Open Sans",
        fontSize: '2.4rem', [`@media screen and (max-width: 1440px)`]: {
          fontSize: "2.2rem"
        }, [`@media screen and (max-width: 1280px)`]: {
          fontSize: "1.9rem"
        }, [`@media screen and (max-width: 1024px)`]: {
          fontSize: "1.8rem"
        }, [`@media screen and (max-width: 768px)`]: {
          fontSize: "1.5rem"
        }, [`@media screen and (max-width: 600px)`]: {
          fontSize: "1.25rem"
        }, [`@media screen and (max-width: 375px)`]: {
          fontSize: "1.05rem"
        },
        fontWeight: 500
      },
      h4: {
        fontFamily: "Open Sans",
        fontSize: '2rem', [`@media screen and (max-width: 1200px)`]: {
          fontSize: "2rem"
        }, [`@media screen and (max-width: 992px)`]: {
          fontSize: "1.75rem"
        }, [`@media screen and (max-width: 768px)`]: {
          fontSize: "1.55rem"
        }, [`@media screen and (max-width: 600px)`]: {
          fontSize: "1.25rem"
        }, [`@media screen and (max-width: 375px)`]: {
          fontSize: "1.15rem"
        },
        fontWeight: 500
      },
      h5: {
        fontFamily: "Open Sans",
        fontSize: '1.5rem', [`@media screen and (max-width: 1200px)`]: {
          fontSize: "1.35rem"
        }, [`@media screen and (max-width: 992px)`]: {
          fontSize: "1.3rem"
        }, [`@media screen and (max-width: 768px)`]: {
          fontSize: "1.25rem"
        }, [`@media screen and (max-width: 600px)`]: {
          fontSize: "1.25rem"
        }, [`@media screen and (max-width: 375px)`]: {
          fontSize: "1.15rem"
        },
        fontWeight: 400
      },
      h6: {
        fontFamily: "Open Sans",
        fontWeight: 400
        , fontSize: '1.30rem', [`@media screen and (max-width: 1200px)`]: {
          fontSize: "1.0rem"
        }, [`@media screen and (max-width: 992px)`]: {
          fontSize: "1.0rem"
        }, [`@media screen and (max-width: 768px)`]: {
          fontSize: "1.0rem"
        }, [`@media screen and (max-width: 600px)`]: {
          fontSize: "1rem"
        }, [`@media screen and (max-width: 375px)`]: {
          fontSize: "0.8rem"
        },
      },
      button: {
        fontFamily: "Open Sans",
      }
    }
  })
  const queryClient = new QueryClient()
  
  return <ThemeProvider theme={theme}><QueryClientProvider client={queryClient}><Layout><Component {...pageProps} /></Layout></QueryClientProvider></ThemeProvider>
}

export default MyApp
