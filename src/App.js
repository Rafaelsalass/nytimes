import React, { Fragment } from 'react';
import { Helmet } from 'react-helmet';

import { GlobalStyle } from './utils/GlobalStyle';
import { AppRouter } from './AppRouter';

const App = ({ history }) => {
  return (
    <Fragment>
      <Helmet>
        <link
          href="https://fonts.googleapis.com/css?family=Roboto:400,500,700"
          rel="stylesheet"
        />
        <script
          defer
          src="https://use.fontawesome.com/releases/v5.7.2/js/solid.js"
          integrity="sha384-6FXzJ8R8IC4v/SKPI8oOcRrUkJU8uvFK6YJ4eDY11bJQz4lRw5/wGthflEOX8hjL"
          crossorigin="anonymous">
        </script>
        <script
          defer
          src="https://use.fontawesome.com/releases/v5.7.2/js/fontawesome.js"
          integrity="sha384-xl26xwG2NVtJDw2/96Lmg09++ZjrXPc89j0j7JHjLOdSwHDHPHiucUjfllW0Ywrq"
          crossorigin="anonymous">
        </script>
        <script
          defer
          src="https://use.fontawesome.com/releases/v5.7.2/js/brands.js"
          integrity="sha384-zJ8/qgGmKwL+kr/xmGA6s1oXK63ah5/1rHuILmZ44sO2Bbq1V3p3eRTkuGcivyhD"
          crossorigin="anonymous">
        </script>
        <title>times</title>
      </Helmet>
      <GlobalStyle />
      <AppRouter history={history} />
    </Fragment>
  );
}

export default App;
