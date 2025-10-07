import { Box, Container, Typography } from '@mui/material'
import React from 'react'
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const Resume = () => {
    return (
        <>
            <Box
                sx={{
                    minHeight: '600px',
                    background: '#D9D9D994',
                    padding: "30px",
                }}
            >
                <Container maxWidth="xl">
                    <Typography
                        sx={{
                            textAlign: "center",
                            fontSize: "48px",
                            lineHeight: "138%",
                            fontWeight: "600",
                            paddingBottom: "20px",
                        }}
                    >
                        MCAI: Your Resume, Smarter
                    </Typography>
                    <Box>
                        {/* <Swiper
                            // install Swiper modules
                            modules={[Navigation, Pagination, Scrollbar, A11y]}
                            spaceBetween={50}
                            slidesPerView={2}
                            navigation
                            pagination={{ clickable: true }}
                            scrollbar={{ draggable: true }}
                            onSwiper={(swiper) => console.log(swiper)}
                            onSlideChange={() => console.log('slide change')}
                        >
                            <SwiperSlide>
                                <img src="https://plus.unsplash.com/premium_photo-1664474619075-644dd191935f?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aW1hZ2V8ZW58MHx8MHx8fDA%3D" alt="" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="https://plus.unsplash.com/premium_photo-1664474619075-644dd191935f?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aW1hZ2V8ZW58MHx8MHx8fDA%3D" alt="" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="https://plus.unsplash.com/premium_photo-1664474619075-644dd191935f?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aW1hZ2V8ZW58MHx8MHx8fDA%3D" alt="" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="https://plus.unsplash.com/premium_photo-1664474619075-644dd191935f?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aW1hZ2V8ZW58MHx8MHx8fDA%3D" alt="" />
                            </SwiperSlide>
                            ...
                        </Swiper> */}
                    </Box>
                </Container>
            </Box>
        </>
    )
}

export default Resume
