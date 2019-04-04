import { isAbsolute } from "path";

export const components = {
  sidebar: {
    container: {
      height: '100vh',
      position: 'fixed',
      transition: 'all .3s',
      zIndex: 100,
    },
    collapsedMenuGroup: {
      toggleCollapseLink: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        '& span': {
          display: 'flex',
          alignItems: 'center',
        },
        '& span:last-of-type': {
          '& .material-icons': {
            marginRight: 0,
          },
        },
      },
      menu: {
        listStyleType: 'none',
      },
      menuCollapsed: {
        position: 'absolute',
        width: '180px',
        zIndex: 10,
      }
    },
    footer: {
      position: 'relative',
      zIndex: 10,
      bottom: '10px',
    },
    collapseButton: {
      position: 'absolute',
      right: '-25px',
      top: '50%',
      marginTop: '-25px',
      cursor: 'pointer',
      padding: '15px',
      '&::before': {
        display: 'flex',
        content: '""',
        width: '2px',
        height: '10px',
        backgroundColor: 'rgb(150, 196, 255)',
        transition: 'transform 0.3s ease 0s',
      },
      '&::after': {
        display: 'flex',
        content: '""',
        width: '2px',
        height: '10px',
        backgroundColor: 'rgb(150, 196, 255)',
        transition: 'transform 0.3s ease 0s',
      },
    }
  },
};

export const themes = {
  paystack: {
    sidebar: {
      container: {
        backgroundColor: '#011b33',
        width: '215px',
        ...components.sidebar.container,
      },
      containerCollapsed: {
        backgroundColor: '#011b33',
        width: '60px',
        ...components.sidebar.container,
      },
      content: {
        height: 'calc(100% - 60px)',
      },
      header: {
        container: {
          height: '70px',
          position: 'relative',
        },
        company_info: {
          padding: '10px 10px 10px 15px',
          float: 'left',
          width: 'calc(100% - 40px)',
          top: '7px',
          left: '7px',
          position: 'absolute',
          background: '#1d3449',
          borderRadius: '3px',
          boxShadow: '0 5px 4px rgba(0,0,0,.05)',
          zIndex: 10,
          transition: 'all .3s ease',
          color: '#ffffff',
        },
      },
      menu: {
        padding: 0,
        listStyleType: 'none',
        overflow: 'auto',
        height: 'calc(100% - 75px)',
      },
      link: {
        position: 'relative',
        '& a': {
          color: '#ffffff',
          display: 'block',
          padding: '5px 20px',
          fontSize: '14px',
          textDecoration: 'none',
          display: 'flex',
          alignItems: 'center',
          '& .material-icons': {
            fontSize: '15px',
            marginRight: '10px',
          },
          '&:hover': {
            background: 'rgba(255,255,255,.03)',
          },
          '&.active': {
            color: '#09a4da',
            fontWeight: 700,
          },
        },
      },
      collapsedMenuGroup: {
        ...components.sidebar.collapsedMenuGroup,
        menuCollapsed: {
          ...components.sidebar.collapsedMenuGroup.menuCollapsed,
          backgroundColor: '#011b33'
        }
      },
      menuGroup: {
        ...components.sidebar.menuGroup,
        heading: {
          margin: '15px 0 5px',
          padding: '0 20px',
          color: '#62798f',
          fontSize: '12px',
          fontWeight: 700,
          textTransform: 'uppercase',
        },
      },
      footer: {
        ...components.sidebar.footer,
        transform: 'translateY(100%)',
        padding: '0 20px 20px',
        color: '#ffffff',
      },
      collapseButton: {
        ...components.sidebar.collapseButton
      }
    },
    header: {
      position: 'relative',
      padding: '15px 30px',
      backgroundColor: '#fff',
      borderBottom: 'solid 1px rgba(0,0,0,.05)',
      height: '70px',
    },
  },
  stripe: {
    sidebar: {
      container: {
        backgroundColor: '#e3e8ee',
        width: '240px',
        top: 0,
        bottom: 0,
        ...components.sidebar,
      },
      header: {
        container: {
          position: 'relative',
          marginBottom: '20px',
        },
        company_info: {
          width: '204px',
          border: 'none',
          backgroundColor: '#e3e8ee',
          textAlign: 'left',
          boxShadow: '0 0 0 0 rgba(58,151,212,0)',
          transition: 'opacity .25s,box-shadow .25s',
        },
      },
    },
    header: {
      position: 'fixed',
      top: 0,
      zIndex: 11,
      padding: '20px 8px',
      backgroundColor: '#e3e8ee',
      height: '68px',
    },
  },
  careerlyft: {
    sidebar: {
      backgroundColor: 'rgb(39, 52, 68)',
      width: '240px',
      ...components.sidebar,
    },
    header: {
      position: 'relative',
      backgroundColor: 'rgb(255, 255, 255)',
      height: '64px',
    },
  },
};
