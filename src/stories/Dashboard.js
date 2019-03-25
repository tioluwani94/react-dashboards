import React from 'react';
import { storiesOf } from '@storybook/react';
import { Global, css } from '@emotion/core';
import Dashboard from '../lib/Dashboard';
import Sidebar from '../lib/Sidebar';

let DashboardStories = storiesOf('Dashboard', module);

DashboardStories.add('Skeleton', () => <Dashboard />);
DashboardStories.add('Sidebar Paystack', () => (
  <>
    <Global
      styles={css`
        * {
          padding: 0;
          margin: 0;
        }
      `}
    />
    <Sidebar>
      <Sidebar.Header className="Header">
        <p>Paystack</p>
      </Sidebar.Header>
      <Sidebar.Menu>
        <Sidebar.MenuLink href="https://www.google.com" icon="face">hello</Sidebar.MenuLink>
        <Sidebar.MenuLink href="/">world</Sidebar.MenuLink>
      </Sidebar.Menu>
    </Sidebar>
  </>
));
DashboardStories.add('Sidebar Stripe', () => (
  <>
    <Global
      styles={css`
        * {
          padding: 0;
          margin: 0;
        }
      `}
    />
    <Sidebar theme="stripe" />
  </>
));
