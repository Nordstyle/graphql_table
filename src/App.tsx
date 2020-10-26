import React from 'react';
import { Box } from '@material-ui/core';
import WebFont from 'webfontloader';

WebFont.load({
  google: {
    families: ['Roboto:300,400,500,700,900'],
  },
});

const App = () => <Box>test</Box>;

export default App;
