import { Box, Button, Container, Grid, IconButton, List, ListItem, ListItemButton, ListItemText, Typography } from '@mui/material'
import Image from 'next/image';
import React from 'react';
import logo_oq from '../layout/photo/logo_oq.svg';
import img1 from './photo/img1.svg';
import img2 from './photo/img2.svg';
import img3 from './photo/img3.svg';
import img4 from './photo/img4.svg';
import img5 from './photo/img5.svg';
import sova from './photo/sova.svg';
import sova1 from './photo/sova1.svg';
import union from './photo/union.svg';
import TextField from '@mui/material/TextField';
import { grey } from '@mui/material/colors';


export default function Footer() {
  return (
    <Box sx={{
        pt: {xs: 3, sm: 0, md: 0, lg: 8, xl: 8},
        pb: {xs: 0, sm: 3, md: 3, lg: 5, xl: 5},
        backgroundColor: '#00093C',
    }}>
        <Container maxWidth="lg">
            <Box sx={{ position: "relative"}}>
                <Grid container sx={{backgroundColor: "#fff", 
                display: {xs: "none", sm: "none", md: "none", lg: 'flex', xl: "flex"},
                alignItems: "center",
                justifyContent: "center",
                width: "100%",
                minHeight: "270px",
                borderRadius: '20px',
                position: "relative",
                // pl: "230px",
                pr: "40px",
                py: "40px",
                position: "absolute",
                top: "-300px",
                boxShadow: 5,
                }}>
                    <Grid item xs={3}>
                        <Image src={sova} style={{
                            position: "absolute",
                            left: "-40px",
                            top: "40px",
                            }} width={276} height={311} alt=""/>
                    </Grid>
                    <Grid item xs={5} sx={{
                        position: 'relative',
                    }}>
                        <Image src={union} width={417} height={190} alt=''/>
                        <Box sx={{
                            width: "352px",
                            height: "151px",
                            position: "absolute",
                            top: 20,
                            left: 48,
                        }}>
                            <Typography variant='h6' sx={{fontWeight: "bold", mb: 3, color: "#000"}}>Помочь с выбором?</Typography>
                            <Typography sx={{fontSize: "16px", 
                                color: "#000",
                                
                                }}> Оставьте заявку и 
                                наши специалисты свяжутся с вами, ответят на 
                                все вопросы и подберут подходящий вариант 
                                обучения.</Typography>
                        </Box> 
                    </Grid>
                    <Grid item xs={4}>
                        <TextField size='small' 
                            fullWidth id="outlined-basic" 
                            placeholder='Ваше имя' variant="outlined" 
                            color="secondary" focused
                            sx={{
                                mb: 2,
                                backgroundColor: grey[300],
                            }}
                            />
                        <Grid container sx={{
                            mb: 2
                        }}>
                            <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
                                <TextField size='small'
                                id="outlined-basic" 
                                placeholder='Ваш телефон'
                                variant="outlined"
                                color="secondary" focused 
                                sx={{mr: 2,
                                    backgroundColor: grey[300],
                                }}
                                />
                            </Grid>
                            <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
                                <TextField size='small'
                                 color="secondary" 
                                 focused id="outlined-basic" 
                                 placeholder='Ваш e-mail' 
                                 variant="outlined" sx={{backgroundColor: grey[300],}} />
                            </Grid>
                        </Grid>
                        <Grid container sx={{alignItems: "center", justifyContent: 'space-between'}}>
                            <Grid item xs={12} sm={12} md={6} lg={6} xl={6}  sx={{
                                width: "210px",
                                height: "75px",
                            }}>
                                <Typography sx={{
                                    fontSize: "12px",
                                }}>Нажимая на кнопку, я соглашаюсь 
                                    на обработку персональных данных 
                                    и с правилами пользования Платформой</Typography>
                            </Grid>
                            <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
                                <Button variant="contained" size='large' 
                                sx={{backgroundColor: "#F7941D",
                                color: '#fff',
                                width: "100%",
                                textTransform: 'none',
                                "&:hover": {
                                    backgroundColor: "#F7941D",
                                }
                                }}>Отправить</Button>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
                <Box sx={{
                    display: {xs: "block", sm: "none", md: "none", lg: 'none', xl: "none"},
                    backgroundColor: "#fff",
                    borderRadius: "10px",
                    mb: 4,
                    pb: 3,
                    
                }}>
                    <Box sx={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                        pr: 3,
                    }}>
                        <Image src={sova1} width={100} height={120} alt=''/>
                        <Box sx={{
                            position: 'relative'
                        }}>
                            <Image src={union} width={270} height={220} alt=''/>
                            <Box sx={{
                                width: '213px',
                                height: "130px",
                                position: "absolute",
                                left: 40,
                                top: 60,

                            }}>
                                <Typography variant='h6'>Помочь с выбором?</Typography>
                                <Typography fontSize={"10px"}>
                                    Оставьте заявку и наши специалисты 
                                    свяжутся с вами, ответят на все вопросы 
                                    и подберут подходящий вариант обучения. 
                                </Typography>
                            </Box>
                        </Box>
                    </Box>
                    <Box sx={{px: 2}}>
                        <TextField fullWidth
                        size='small' 
                        id="outlined-basic" 
                        placeholder='Ваше имя'
                        variant="outlined" 
                        color="secondary" focused
                        sx={{
                            mb: 3,
                            backgroundColor: grey[300],
                        }}
                        />
                        <TextField fullWidth
                        size='small' 
                        id="outlined-basic" 
                        placeholder='Ваш телефон'
                        variant="outlined"
                        color="secondary" focused 
                        sx={{
                            mb: 3,
                            backgroundColor: grey[300],
                        }} />
                        <TextField fullWidth
                        size='small' 
                        id="outlined-basic" 
                        placeholder='Ваш e-mail'
                        variant="outlined" 
                        color="secondary" focused
                        sx={{
                            mb: 3,
                            backgroundColor: grey[300],
                        }} />
                    </Box>
                    <Box sx={{
                        px: 2,
                    }}>
                        <Typography sx={{
                            fontSize: "10px",
                            width: "299px",
                            height: "42px",
                            mb: 3,
                        }}>Нажимая на кнопку, я соглашаюсь 
                            на обработку персональных данных 
                            и с правилами пользования Платформой</Typography>
                        <Button variant="contained" size='large' 
                                sx={{backgroundColor: "#F7941D",
                                color: '#fff',
                                width: "100%",
                                textTransform: 'none',
                                "&:hover": {
                                    backgroundColor: "#F7941D",
                                }
                                }}>Отправить</Button>
                    </Box>
                </Box>
                <Box>
                    <Grid container alignItems={"center"} 
                        spacing={3}>
                        <Grid item xs={12} sm={6} md={3} lg={3} xl={3}>
                            <List sx={{width: '100%'}}>
                                <Box>
                                    <Image src={logo_oq} width={83} height={58} alt=""/>
                                </Box>
                                <ListItem sx={{pl: 0.5}}>
                                    <ListItemButton sx={{pl: 0, pb: 0}}>
                                        <ListItemText primary={<Typography sx={{fontSize: "18px", color: '#fff'}}>8 800 950-33-98</Typography>}/>
                                    </ListItemButton>
                                </ListItem>
                                <ListItem sx={{pl: 0.5}}>
                                    <ListItemButton sx={{pl: 0, pb: 0}}>
                                        <ListItemText primary={<Typography sx={{fontSize: "14px", color: '#fff'}}>г. Москва, ул. Ленина, д. 50</Typography>}/>
                                    </ListItemButton>
                                </ListItem>
                                <ListItem sx={{pl: 0.5}}>
                                    <ListItemButton sx={{pl: 0, pt: 0}}>
                                        <ListItemText primary={<Typography sx={{fontSize: "14px", color: '#fff'}}>info@hodfutureacademy.ru</Typography>}/>
                                    </ListItemButton>
                                </ListItem>
                                <Grid container justifyContent={{xs: "space-between"}}>
                                    <Grid item xs={2}>
                                        <IconButton>
                                        <Image src={img4} width={21} height={26} alt=""/>
                                        </IconButton>
                                    </Grid>
                                    <Grid item xs={2}>
                                        <IconButton><Image src={img3} width={16} height={26} alt=""/></IconButton>
                                    </Grid>
                                    <Grid item xs={2}>
                                        <IconButton><Image src={img1} width={18} height={26} alt=""/></IconButton>
                                    </Grid>
                                    <Grid item xs={2}>
                                        <IconButton><Image src={img2} width={21} height={26} alt=""/></IconButton>
                                    </Grid>
                                    <Grid item xs={2}>
                                        <IconButton><Image src={img5} width={16} height={26} alt=""/></IconButton>
                                    </Grid>
                                </Grid>
                            </List>
                        </Grid>
                        <Grid item sm={6} md={9} lg={9} xl={9}>
                            <Grid container spacing={3} display={{xs: 'none', sm:'flex', md: "flex", lg: 'flex', xl: "flex"}}>
                                <Grid item  sm={6} md={4} lg={3} xl={3}>
                                    <List>
                                        <Typography variant='h6' sx={{color: "#fff", pb: 2}}>Детям</Typography>
                                    {["Робототехника",
                                        "Создание игр",
                                        "Программирование",
                                        "Мультимедиа",
                                        "Soft skills",
                                        "Шахматы",
                                        "Блогинг",
                                        "Создание игр",
                                        "Программирование",
                                        "Мультимедиа",
                                        "Soft skills"].map((item, index) => (
                                        <ListItem key={index} sx={{pl: 0, py: 0}}>
                                            <ListItemButton sx={{pl: 0, py: 0}}>
                                                <ListItemText primary={<Typography sx={{color: "#fff", fontSize: "14px"}}>{item}</Typography>}/>
                                            </ListItemButton>
                                        </ListItem>
                                    ))}
                                    </List>
                                </Grid>
                                <Grid item sm={6} md={4} lg={3} xl={3}>
                                    <List>
                                        <Typography variant='h6' sx={{color: "#fff", pb: 2}}>Подросткам</Typography>
                                    {["Web-разработка",
                                        "Прикладное программирование",
                                        "Графическое моделирование",
                                        "Game Development",
                                        "Soft skills",
                                        "Разработчик мобильных приложений",
                                        "Блогинг",
                                        "Создание игр",
                                        "Программирование",
                                        "Мультимедиа",
                                        "Soft skills"].map((item, index) => (
                                        <ListItem key={index} sx={{pl: 0, py: 0}}>
                                            <ListItemButton sx={{pl: 0, py: 0}}>
                                                <ListItemText primary={<Typography sx={{color: "#fff", fontSize: "14px"}}>{item}</Typography>}/>
                                            </ListItemButton>
                                        </ListItem>
                                    ))}
                                    </List>
                                </Grid>
                                <Grid item sm={6} md={4} lg={3} xl={3}>
                                    <List>
                                        <Typography variant='h6' sx={{color: "#fff", pb: 2}}>Взрослым</Typography>
                                    {["Разработчик игр на Unity",
                                        "Разработка ПО",
                                        "Графический Дизайн",
                                        "Тестировщик ПО",
                                        "Интернет Маркетинг",
                                        "Java-разработчик",
                                        "Python–разработчик",
                                        "IOS-разработчик",
                                        "Программирование"
                                        ].map((item, index) => (
                                        <ListItem key={index} sx={{pl: 0, py: 0}}>
                                            <ListItemButton sx={{pl: 0, py: 0}}>
                                                <ListItemText primary={<Typography sx={{color: "#fff", fontSize: "14px"}}>{item}</Typography>}/>
                                            </ListItemButton>
                                        </ListItem>
                                    ))}
                                    </List>
                                </Grid>
                                <Grid item sm={6} md={4} lg={3} xl={3}>
                                    <List>
                                        <Typography variant='h6' sx={{color: "#fff", pb: 2}}>Информация</Typography>
                                    {["Об академии",
                                        "Мероприятия",
                                        "Новости",
                                        "База знаний",
                                        "Карьера",
                                        "Контакты"
                                        ].map((item, index) => (
                                        <ListItem key={index} sx={{pl: 0, py: 0}}>
                                            <ListItemButton sx={{pl: 0, py: 0}}>
                                                <ListItemText primary={<Typography sx={{color: "#fff", fontSize: "14px"}}>{item}</Typography>}/>
                                            </ListItemButton>
                                        </ListItem>
                                    ))}
                                    </List>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </Box>
            </Box>
        </Container>
    </Box>
  )
}
