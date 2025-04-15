"use client";
import React from "react";
import { Box, Container, Grid } from "@mui/material";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Modern Custom Arrows
const arrowStyle: React.CSSProperties = {
  position: "absolute",
  top: "50%",
  transform: "translateY(-50%)",
  width: "40px",
  height: "40px",
  borderRadius: "50%",
  backgroundColor: "#fff",
  border: "1px solid #ccc",
  boxShadow: "0 2px 5px rgba(0,0,0,0.2)",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  zIndex: 2,
  cursor: "pointer",
  transition: "all 0.3s ease",
  paddingBottom: "5px",
};

const NextArrow = (props: any) => {
  const { onClick } = props;
  return (
    <div style={{ ...arrowStyle, right: "10px" }} onClick={onClick}>
      <span style={{ fontSize: "27px" }}>›</span>
    </div>
  );
};

const PrevArrow = (props: any) => {
  const { onClick } = props;
  return (
    <div style={{ ...arrowStyle, left: "10px" }} onClick={onClick}>
      <span style={{ fontSize: "27px" }}>‹</span>
    </div>
  );
};

const Banner = () => {
  const images = [
    "https://picsum.photos/id/1015/1600/600",
    "https://picsum.photos/id/1016/1600/600",
    "https://picsum.photos/id/1018/1600/600",
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 3000,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };

  return (
    <Box
      bgcolor="primary.light"
      sx={{
        paddingTop: {
          // xs: "40px",
          // lg: "75px",
        },
        paddingBottom: {
          // xs: "40px",
          // lg: "100px",
        },
        marginBottom: "6rem",
        display: "flex",
        justifyContent: "center",
      }}
    >
      <Box
        sx={{
          position: "relative",
          width: "100%",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Grid container spacing={3} justifyContent="center">
          <Grid
            item
            xs={12}
            lg={12}
            width="100%"
            textAlign="center"
            sx={{ position: "relative" }}
          >
            <Slider {...settings}>
              {images.map((src, index) => (
                <div key={index}>
                  <img
                    src={src}
                    alt={`Banner ${index + 1}`}
                    style={{
                      width: "100%",
                      maxHeight: "600px",
                      objectFit: "cover",
                    }}
                  />
                </div>
              ))}
            </Slider>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default Banner;
