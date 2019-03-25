/** @jsx jsx */
import { jsx } from '@emotion/core';
import React from 'react';
import { ThemeProvider } from 'emotion-theming';
import { themes } from '../themes';
import materialIcons from 'material-design-icons/iconfont/material-icons.css'; // eslint-disable-line

const SidebarHeader = ({ theme, children }) => {
  return (
    <div className="Sidebar__Header" css={theme.sidebar.header.container}>
      <div css={theme => theme.sidebar.header.company_info}>
        {React.Children.map(children, child => {
          return React.cloneElement(child);
        })}
      </div>
    </div>
  );
};

const SidebarMenu = ({ theme, children }) => {
  return (
    <ul css={theme.sidebar.menu}>
      {React.Children.map(children, child => {
        return React.cloneElement(child, { theme });
      })}
    </ul>
  );
};

const SidebarMenuLink = ({ theme, children, link: Link, icon, ...rest }) => {
  return (
    <li css={theme.sidebar.link}>
      <Link {...rest}>
        {icon && <i class="material-icons">{icon}</i>}
        <span>{children}</span>
      </Link>
    </li>
  );
};

SidebarMenuLink.defaultProps = {
  link: 'a',
};

const Sidebar = ({ theme, children }) => {
  return (
    <ThemeProvider theme={themes[theme]}>
      <div
        css={theme => theme.sidebar.container}
        className="Sidebar__Container"
      >
        {React.Children.map(children, child => {
          return React.cloneElement(child, { theme: themes[theme] });
        })}
      </div>
    </ThemeProvider>
  );
};

Sidebar.Header = SidebarHeader;
Sidebar.Menu = SidebarMenu;
Sidebar.MenuLink = SidebarMenuLink;

Sidebar.defaultProps = {
  theme: 'paystack',
  companyName: 'Paystack',
};

export default Sidebar;
