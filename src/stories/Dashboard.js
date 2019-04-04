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
      <Sidebar.Content>
        <Sidebar.Header className="Header">
          <p>Paystack</p>
        </Sidebar.Header>
        <Sidebar.Menu>
          <Sidebar.MenuLink href="https://www.google.com" icon="language">
            Get Started
          </Sidebar.MenuLink>
          <Sidebar.MenuLink href="/" icon="aspect_ratio">
            world
          </Sidebar.MenuLink>
          <Sidebar.MenuGroup heading="your business">
            <Sidebar.MenuLink icon="chat_bubble_outline">
              SMS Overview
            </Sidebar.MenuLink>
            <Sidebar.MenuLink icon="textsms">Send Campaign</Sidebar.MenuLink>
            <Sidebar.MenuLink icon="schedule">Quick Send</Sidebar.MenuLink>
          </Sidebar.MenuGroup>
          <Sidebar.CollapsibleMenuGroup
            heading="SMS"
            icon="chat_bubble_outline"
          >
            <Sidebar.MenuLink>SMS Overview</Sidebar.MenuLink>
            <Sidebar.MenuLink>Send Campaign</Sidebar.MenuLink>
            <Sidebar.MenuLink>Quick Send</Sidebar.MenuLink>
          </Sidebar.CollapsibleMenuGroup>
        </Sidebar.Menu>
      </Sidebar.Content>
      <Sidebar.Footer>
        <p>Footer here</p>
      </Sidebar.Footer>
      <Sidebar.CollapseButton/>
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
