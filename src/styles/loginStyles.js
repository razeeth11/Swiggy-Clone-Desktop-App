export const welcomePage = {
  display: 'flex',
  justifyContent: 'space-between',
  width : '100%',
  border : '1px solid red'
}

export const content = {
  padding: '40px',
  width: '700px'
}

export const logo = {
  display: 'flex',
  justifyContent: 'space-between',
  gap: '200px',
  marginTop: '40px',
}

export const logSignButton = {
  border: '1px solid rgba(128, 128, 128, 0.208)',
  padding: '10px 20px',
  fontWeight: 700,
  fontSize: '12px',
  cursor: 'pointer',
  backgroundColor: 'white',
  "&:hover" : {
    backgroundColor: 'rgb(7, 177, 77, 0.42)'
  }
}

export const marketHead = {
  marginTop: '50px',
  fontSize: '20px',
}

export const pincode = {
  display: 'flex',
  justifyContent:'space-between',
  alignItems: 'center',
  marginTop: '30px',
  fontSize: '20px',
  border: '1px solid grey',
}

export const pincodeButton = {
  cursor: 'pointer',
  fontSize: '16px',
  border: 'none',
  backgroundColor: '#fc8019',
  color: 'aliceblue',
  fontWeight: 700,
  padding: '20px 30px',
}

export const alertBox ={
  "&:hover": {
    boxShadow: "none",
    border: "none",
  },
  fontSize: "14px",
}

export const loginCard = {
  position: 'absolute',
  right: '0px',
  padding: '50px',
  backgroundColor: 'rgb(255, 255, 255)',
  width: '30%',
  height: '100vh',
  slideIn : {
    animation: 'slide-in 0.3s forwards',
  },
  '@keyframes slideInAnimation': {
    '0%': {
      transform: 'translateX(100%)',
    },
    '100%': {
      transform: 'translateX(0%)',
    },
  }
}

export const loginButton = {
  width: '100%',
  padding: '15px',
  marginTop: '10px',
  border: 'none',
  fontSize: '14px',
  fontWeight: 600,
  backgroundColor: '#fc8019',
  color: 'azure',
  cursor: 'pointer',
  marginBottom: '10px',
  borderRadius: 0,
}

export const signCard = {
  position: 'absolute',
  animation: 'slide-in 0.3s forwards',
  right: '0px',
  padding: '50px',
  backgroundColor: 'rgb(255, 255, 255)',
  width: '30%',
  height: '100vh',
}

export const feature = {
  display: 'flex',
  justifyContent: 'space-around',
  alignItems:'end',
  textAlign: 'center',
  backgroundColor: '#2b1e16',
  minHeight: '400px',
  padding: '20px',
}

export const featureOne = {
  width: '250px',
  minHeight: '200px',
  color: 'white',
  marginBottom: '40px',
  margin: '15px'
}

export const appStore  = {
  display: 'flex',
  height: '400px',
  justifyContent: 'space-around',
  alignItems: 'center',
}

export const appStoreOne = {
  padding: '50px',
  width: '50%',
  textAlign: 'left',
}

export const cityLinkAnchor = {
  textDecoration: 'none',
  listStyleType: 'none',
  textTransform: 'capitalize',
  fontSize: '16px',
  color:' aliceblue',
  transition: '.2s',
}