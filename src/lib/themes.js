export const components = {
  sidebar: {
    height: '100vh',
    position: 'fixed',
    transition: 'all .3s',
    zIndex: 100,
  },
};

export const themes = {
  paystack: {
    sidebar: {
      container: {
        backgroundColor: '#011b33',
        width: '215px',
        ...components.sidebar,
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
