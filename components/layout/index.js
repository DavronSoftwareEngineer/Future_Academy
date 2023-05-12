import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import {Container, ListItemIcon} from '@mui/material';
import Image from 'next/image';
import logotip from './photo/logotip.svg';
import logo_oq from './photo/logo_oq.svg';
import icon1 from './photo/icon1.svg';
import icon1_oq from './photo/icon1_oq.svg';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import BasicMenu from '../radiobottom';
import icon2 from './photo/icon2.svg';
import icon2_oq from './photo/icon2_oq.svg';
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';
import PhoneAndroidOutlinedIcon from '@mui/icons-material/PhoneAndroidOutlined';
import face from './photo/face.svg';
import ins from './photo/ins.svg';
import telg from './photo/telg.svg';
import wek from './photo/wek.svg';
import you from './photo/you.svg';
import { Grid, IconButton, Divider } from '@mui/material';
import gropbutton from './photo/gropbutton.svg';
import { useRouter } from 'next/router';
import Footer from '../footer';

const navItems = [
  {
    icon: <PersonOutlineOutlinedIcon sx={{fontSize: "20px", color: '#000000'}}/>,
    title: 'Войти',
    path: ""
  },
  {
    icon: <PhoneAndroidOutlinedIcon sx={{fontSize: "20px", color: '#000000'}}/>,
    title: '8 800 950-33-98',
    path: ""
  },
]

const menuphone = [
  {
    id: 1,
    title: 'Об академии',
    path: ""
  },
  {
    id: 2,
    title: 'Мероприятия',
    path: ""
  },
  {
    id: 3,
    title: 'Новости',
    path: ""
  },
  {
    id: 4,
    title: 'База знаний',
    path: ""
  },
  {
    id: 5,
    title: 'Карьера',
    path: ""
  },
  {
    id: 6,
    title: 'Контакты',
    path: ""
  },
]

const pages = [
    {
        icon: icon1,
        title: "Все курсы",
        path: '/courses',
    },
    {
        icon: "",
        title: "Мероприятия",
        path: '/events',
    },
    {
        icon: "",
        title: "Базы знаний",
        path: '/knowledgebases',
    },
    {
        icon: "",
        title: "Карьера",
        path: '/career',
    },
]

const pages1 = [
  {
    icon: "",
    title: <BasicMenu />,
    path: "/gorod"
  },
  {
    icon: "",
    title: "8 800 950-33-98 ",
    path: "/contact"
  },
  {
    icon: <PersonOutlineOutlinedIcon/>,
    title: "Войти",
    path: "/signinup"
  },
]

function Layout({children}, props) {
  console.log(children);
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = (bool) => {
    setMobileOpen(bool);
  };

  const drawer = (
    <Box  sx={{ textAlign: 'center' }}>
      <Box sx={{display: "flex", 
      justifyContent: "space-between",
      alignItems: "center",
      backgroundColor: "#00093C",
      height: "60px",
      }}>
        <Image src={logo_oq} width={57} height={40} alt='logotip' style={{marginLeft: "10px"}}/>
        <Button variant='text' onClick={() => handleDrawerToggle(false)}>
            <CloseOutlinedIcon/>
        </Button>
      </Box>

      <List sx={{
          display: {xs: 'none', sm: "none", md: "block", lg: "none", xl: "none"}
        }}>
        {navItems.map((item, index) => (
          <ListItem key={index} disablePadding>
            <ListItemButton onClick={() => handleDrawerToggle(false)}>
              <ListItemIcon>
                {item.icon}
              </ListItemIcon>
              <ListItemText  primary={<Typography sx={{fontSize: "14px", color: '#000000'}}>{item.title}</Typography>} />
            </ListItemButton>
          </ListItem>
        ))}
          <ListItem disablePadding>
            <ListItemButton><BasicMenu/></ListItemButton>
          </ListItem>
        </List>
      <List
        sx={{
          display: {xs: 'block', sm: "block", md: "none", lg: "none", xl: "none"}
        }}
        >
          <ListItem disablePadding sx={{mb: 1}}> 
            <ListItemButton onClick={() => handleDrawerToggle(false)}>
              <Image src={icon1} width={20} height={15} style={{marginRight: "5px"}} alt="icon1"/>
              <Typography sx={{fontSize: "16px", color: '#000'}}>Все курсы</Typography>
            </ListItemButton>
          </ListItem>
        {menuphone.map((item, index) => (
          <ListItem key={index} disablePadding>
            <ListItemButton onClick={() => handleDrawerToggle(false)}>
            <Typography sx={{fontSize: "14px", color: '#000'}}>{item.title}</Typography>
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <List sx={{
          display: {xs: 'block', sm: "block", md: "none", lg: "none", xl: "none"}
        }}>
        <ListItem>
          <BasicMenu/>
        </ListItem>
        <ListItem sx={{px: 0}}>
          <ListItemButton onClick={() => handleDrawerToggle(false)}>
            <PersonOutlineOutlinedIcon sx={{color: "#000", mr: 0.5}}/>
            <Typography sx={{fontSize: "16px", color: '#000'}}>Войти</Typography>
          </ListItemButton>
        </ListItem>
      </List>
      <List sx={{
          display: {xs: 'block', sm: "block", md: "none", lg: "none", xl: "none"}
        }}>
        <ListItem sx={{p: 0}}>
          <ListItemButton sx={{py:1}} onClick={() => handleDrawerToggle(false)}>
            <Typography sx={{fontSize: "18px", color: "#000"}}>8 800 950-33-98 </Typography>
          </ListItemButton>
        </ListItem>
        <ListItem sx={{p: 0}}>
          <ListItemButton sx={{py: 1}}>
            <Typography sx={{fontSize: "14px", color: "#000"}}>г. Москва, ул. Ленина, д. 50</Typography>
          </ListItemButton>
        </ListItem>
        <ListItem sx={{p: 0}}>
          <ListItemButton sx={{py: 1}} onClick={() => handleDrawerToggle(false)}>
            <Typography sx={{fontSize: "14px", color: "#000"}}>info@hodfutureacademy.ru</Typography>
          </ListItemButton>
        </ListItem>
      </List>
      
      <Grid container sx={{
          display: {xs: 'flex', sm: "flex", md: "none", lg: "none", xl: "none"}
        }}>
        <Grid item xs={2}>
          <IconButton onClick={() => handleDrawerToggle(false)}>
            <Image src={wek} width={27} height={26} alt=''/>
          </IconButton>
        </Grid>
        <Grid item xs={2}>
          <IconButton onClick={() => handleDrawerToggle(false)}>
            <Image src={ins} width={21} height={26} alt=''/>
          </IconButton>
        </Grid>
        <Grid item xs={2}>
          <IconButton onClick={() => handleDrawerToggle(false)}>
            <Image src={face} width={24} height={26} alt=''/>
          </IconButton>
        </Grid>
        <Grid item xs={2}>
          <IconButton onClick={() => handleDrawerToggle(false)}>
            <Image src={you} width={27} height={26} alt=''/>
          </IconButton>
        </Grid>
        <Grid item xs={2}>
          <IconButton onClick={() => handleDrawerToggle(false)}>
            <Image src={telg} width={21} height={26} alt=''/>
          </IconButton>
        </Grid>
        <Grid item xs={12} mt={"15px"} mb={"30px"}>
          <Button variant='text'
          onClick={() => handleDrawerToggle(false)} 
          sx={{
            display: "flex",
            justifyContent: "center",
          }}>
            <Image src={gropbutton} width={116} height={30} alt=""/>
          </Button>
        </Grid>
      </Grid>
    </Box>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  const router = useRouter();
  console.log(router);
  
  return (
    <Box sx={{ display: 'flex'}}>
      <AppBar component="nav"
      sx={{
        backgroundColor: "#00093C",
      }}
      > 
        <Container maxWidth="lg">
            <Toolbar sx={{height: {xs: "60px", sm: "80px", md: '95px', lg: "110px", xl: "110px"}}}>
            
            <Box
                variant="div"
                component="div"
                sx={{ 
                    cursor: "pointer",
                    width: {xs: "57px", sm: "80px", md: '90px', lg: '100px', xl: "100px"},
                    height: {xs: "40px", sm: "50px", md: '60px', lg: "70px", xl: "70px"},
                }}
                onClick={() => router.push("/")}
            >
              <Image src={logo_oq} style={{
                    width: "100%",
                    height: "100%",
                }} alt='Logotip'/>
            </Box>
            <Box sx={{flexGrow: 1}}/>
            <Box sx={{
                display: {xs: "none", sx: "none", md: 'flex', lg: "flex", xl: 'flex'},
                alignItems: "center",
                height: "100%"
            }}>
                {pages.map((item, index) => (
                    <Box key={index} sx={{
                        height: "100%", 
                        ml: index == 0 ? 0 : 2, 
                        pb:0.4,
                        }}
                        onClick={() => router.push(item.path)}
                        >
                        <Button  sx={{
                            px: 0.5, 
                            color: '#fff',
                            textTransform: "none",
                            fontSize: '14px',
                            height: "100%", 
                        }}
                        >
                            {index === 0 ? <Image src={icon1_oq} style={{marginRight: "8px"}} width={20} height={16} alt=''/> : ""}
                            <Typography>{item.title}</Typography>
                        </Button>
                        <Box className={router.pathname.startsWith(item.path) ? "active" : ""}
                        sx={{
                          width: "100%",
                          height: "4px",
                          borderTopLeftRadius: "10px",
                          borderTopRightRadius: "10px",
                          "&.active": {
                            background: "linear-gradient(90deg, #F7941D 0%, #27AAE1 100%)",
                          }
                        }}
                        />        
                    </Box>
                ))}
            </Box>
            <Box sx={{flexGrow: 1}}/>
            <Box sx={{  height: "100%", display: "flex", alignItems: "center" }}>
                {pages1.map((item, index) => (
                  <Box key={index} sx={{
                    height: '100%',
                    pb:0.4,
                    display: {xs: "none", sm: "none", md: "none", lg: "block", xl: "block"},
                  }}
                  onClick={() => router.push(item.path)}
                  >
                    {index === 0 ? <Box sx={{height: "100%", display: 'flex', alignItems: "center"}}>{item.title}</Box> :
                    <Button startIcon={item.icon} 
                      sx={{ color: '#fff', fontSize: "14px", 
                      textTransform: 'none', mr: 2, height: "100%" }}
                      onClick={() => router.push(item.path)}
                      >
                        {item.title}
                    </Button>}
                    <Box className={router.pathname.startsWith(item.path) ? "active" : ""}
                        sx={{
                          width: "100%",
                          height: "4px",
                          borderTopLeftRadius: "10px",
                          borderTopRightRadius: "10px",
                          "&.active": {
                            background: "linear-gradient(90deg, #F7941D 0%, #27AAE1 100%)",
                          }
                        }}
                    />
                  </Box>
                ))}
                
                <Box sx={{
                    display: "flex",
                    alignItems: "center",
                }}>
                    <Button
                        edge="start"
                        onClick={() => handleDrawerToggle(true)}
                        sx={{color: "#000000", display: {xs: 'flex',  sm: 'flex', md: "flex", lg: 'none', xl: "none" } }}
                        >
                        <Image src={icon2_oq} width={22} 
                        height={15} alt='menu'
                        style={{
                        }}
                        />
                        
                    </Button>
                </Box>
            </Box>
            </Toolbar>
        </Container>
      </AppBar>
      <Box component="nav">
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'block', md: "block", lg: "none", xl: "none" },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: {xs: "100vw", sm: "400px", md: "300px" } },
          }}
        >
          {drawer}
        </Drawer>
      </Box>
      <Box component="main" sx={{ pt: {xs: 0.5, sm: 2, md: 3.9, lg: 5.8, xl: 5.8}}}>
        <Toolbar/>
         <Box width={{ xs: "90vw", sm: "95vw", md: "98vw", lg: "98.7vw", xl: "98.7vw"}}>{children}</Box>
        <Footer/>
      </Box>
    </Box>
  );
}

Layout.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default Layout;
