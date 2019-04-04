/** @jsx jsx */
import { jsx } from '@emotion/core';
import React from 'react';
import { ThemeProvider } from 'emotion-theming';
import { themes } from '../themes';
import materialIcons from 'material-design-icons/iconfont/material-icons.css'; // eslint-disable-line

const SidebarHeader = ({ theme, children, sideBarCollapsed }) => {
  return (
    <div className="Sidebar__Header" css={theme.sidebar.header.container}>
      <div css={theme => theme.sidebar.header.company_info}>
        {React.Children.map(children, child => {
          return React.cloneElement(child, { theme, sideBarCollapsed });
        })}
      </div>
    </div>
  );
};

const SidebarMenu = ({ theme, children, sideBarCollapsed }) => {
  return (
    <ul css={theme.sidebar.menu} className="Sidebar__Menu">
      {React.Children.map(children, child => {
        return React.cloneElement(child, { theme, sideBarCollapsed });
      })}
    </ul>
  );
};

const SidebarMenuLink = ({
  icon,
  theme,
  children,
  link: Link,
  sideBarCollapsed,
  ...rest
}) => {
  return (
    <li css={theme.sidebar.link} className="Sidebar__MenuLink">
      <Link {...rest}>
        {icon && <i class="material-icons">{icon}</i>}
        {!sideBarCollapsed && <span>{children}</span>}
      </Link>
    </li>
  );
};

SidebarMenuLink.defaultProps = {
  link: 'a',
};

const SidebarMenuGroup = ({
  heading,
  theme,
  children,
  css,
  sideBarCollapsed,
}) => {
  return (
    <div css={{ ...theme.sidebar.menuGroup, ...css }}>
      {!sideBarCollapsed && (
        <li css={theme.sidebar.menuGroup.heading}>{heading}</li>
      )}
      {React.Children.map(children, child => {
        return React.cloneElement(child, { theme, sideBarCollapsed });
      })}
    </div>
  );
};

const SidebarCollapsibleMenuGroup = ({
  icon,
  heading,
  theme,
  children,
  sideBarCollapsed,
}) => {
  const [isCollapsed, setIsCollapsed] = React.useState(true);
  const toggleCollapsed = () => {
    setIsCollapsed(!isCollapsed);
  };
  return (
    <>
      <li css={theme.sidebar.link}>
        <a
          onClick={toggleCollapsed}
          css={theme.sidebar.collapsedMenuGroup.toggleCollapseLink}
        >
          <span>
            {icon && <i class="material-icons">{icon}</i>}
            {!sideBarCollapsed && <span>{heading}</span>}
          </span>
          {!sideBarCollapsed && (
            <span>
              <i class="material-icons">
                {isCollapsed ? `expand_more` : `expand_less`}
              </i>
            </span>
          )}
        </a>
      </li>
      {!isCollapsed && (
        <ul
          css={
            sideBarCollapsed
              ? theme.sidebar.collapsedMenuGroup.menuCollapsed
              : theme.sidebar.collapsedMenuGroup.menu
          }
        >
          {React.Children.map(children, child => {
            return React.cloneElement(child, { theme });
          })}
        </ul>
      )}
    </>
  );
};

const SidebarContent = ({ theme, children, sideBarCollapsed }) => {
  return (
    <div css={theme.sidebar.content}>
      {React.Children.map(children, child => {
        return React.cloneElement(child, { theme, sideBarCollapsed });
      })}
    </div>
  );
};

const SidebarFooter = ({ theme, children, sideBarCollapsed }) => {
  return (
    <div css={theme.sidebar.footer}>
      {React.Children.map(children, child => {
        return React.cloneElement(child, { theme, sideBarCollapsed });
      })}
    </div>
  );
};

const SidebarCollapseButton = ({ theme, toggleCollapse, sideBarCollapsed }) => {
  const open = {
    '&:hover': {
      '&::before': {
        transform: 'rotate(25deg) translate3d(0px, 1px, 0px)',
      },
      '&::after': {
        transform: 'rotate(-25deg) translate3d(0px, -1px, 0px)',
      },
    },
  };
  const collapsed = {
    '&:hover': {
      '&::before': {
        transform: 'rotate(-25deg) translate3d(0px, 1px, 0px)',
      },
      '&::after': {
        transform: 'rotate(25deg) translate3d(0px, -1px, 0px)',
      },
    },
  };
  let css = sideBarCollapsed ? collapsed : open;
  return (
    <div
      onClick={toggleCollapse}
      css={{ ...theme.sidebar.collapseButton, ...css }}
    />
  );
};

const Sidebar = ({ theme, children }) => {
  const [sideBarCollapsed, setSideBarCollapsed] = React.useState(false);
  const toggleCollapse = () => {
    setSideBarCollapsed(!sideBarCollapsed);
  };
  return (
    <ThemeProvider theme={themes[theme]}>
      <div
        css={theme =>
          sideBarCollapsed
            ? theme.sidebar.containerCollapsed
            : theme.sidebar.container
        }
        className="Sidebar__Container"
      >
        {React.Children.map(children, child => {
          return React.cloneElement(child, {
            toggleCollapse,
            sideBarCollapsed,
            theme: themes[theme],
          });
        })}
      </div>
    </ThemeProvider>
  );
};

Sidebar.Menu = SidebarMenu;
Sidebar.Footer = SidebarFooter;
Sidebar.Header = SidebarHeader;
Sidebar.Content = SidebarContent;
Sidebar.MenuLink = SidebarMenuLink;
Sidebar.MenuGroup = SidebarMenuGroup;
Sidebar.CollapseButton = SidebarCollapseButton;
Sidebar.CollapsibleMenuGroup = SidebarCollapsibleMenuGroup;

Sidebar.defaultProps = {
  theme: 'paystack',
};

export default Sidebar;
