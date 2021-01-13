import {
  createGlobalStyle,
  ThemeProvider,
  StyleSheetManager,
} from "styled-components";
import stylisRTLPlugin from "stylis-plugin-rtl";

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
`;

const theme = {
  colors: {
    primary: "#0070f3",
  },
};

export default function App({ Component, pageProps }) {
  return (
    <StyleSheetManager stylisPlugins={[stylisRTLPlugin]}>
      <>
        <GlobalStyle />
        <ThemeProvider theme={theme}>
          <Component {...pageProps} />
        </ThemeProvider>
      </>
    </StyleSheetManager>
  );
}
