/** @jsx jsx */
import React from 'react';
import { jsx } from '@emotion/core';
import { Global, css } from '@emotion/core';
import { ThemeProvider } from 'emotion-theming';
import { Skeleton } from './styled';
import { themes } from '../themes';

const Dashboard = ({ theme }) => {
  return (
    <ThemeProvider theme={themes[theme]}>
      <Global
        styles={css`
          * {
            padding: 0;
            margin: 0;
          }
        `}
      />
      <Skeleton className="Skeleton">
          <div className="Sidebar"/>
          <div className="Pane">
          </div>
          
      </Skeleton>
    </ThemeProvider>
  );
};

Dashboard.defaultProps = {
  theme: 'paystack',
};

export default Dashboard;
