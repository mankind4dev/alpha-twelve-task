import React from "react";
import { Swiper as SwiperReact, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { Box, Heading, Text } from "@chakra-ui/react";

import { EffectFade, Navigation, Pagination } from "swiper/modules";

const SwiperComponent: React.FC = () => {
  return (
    <Box
      w={{ lg: 600, md: 600, sm: "100%", base: "100%" }}
      height={"100%"}
      position="relative"
      flexGrow={1}
      p={3}
    >
      <SwiperReact
        spaceBetween={30}
        effect={"fade"}
        loop={true}
        navigation={true}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 50,
          stretch: -100,
          depth: 500,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={{
          clickable: true,
        }}
        modules={[EffectFade, Navigation, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <Box position="relative" h="100%">
            <img
              src="/images/slides/Slide1.png"
              alt="Nature 2"
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
            />
            <Box
              position="absolute"
              bottom={"10"}
              left={50}
              textAlign={"start"}
              color="white"
            >
              <Heading as="h2" fontWeight={600} fontSize={12} mb={4}>
                Latest News & Updates
              </Heading>
              <Text fontSize="12" fontWeight={400}>
                Turpis interdum nunc varius ornare dignissim pretium. Massa
                ornare quis aliquet sed vitae. Sed velit nisi, fermentum erat.
                Fringilla purus, erat fringilla tincidunt quisque non.
                Pellentesque in ut tellus.
              </Text>
            </Box>
          </Box>
        </SwiperSlide>
        <SwiperSlide>
          <Box position="relative" h="100%">
            <img
              src="/images/slides/Slide2.png"
              alt="Nature 3"
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
            />
            <Box
              position="absolute"
              bottom={"10"}
              left={50}
              textAlign={"start"}
              color="white"
            >
              <Heading as="h2" fontWeight={600} fontSize={12} mb={4}>
                Latest News & Updates
              </Heading>
              <Text fontSize="12" fontWeight={400}>
                Turpis interdum nunc varius ornare dignissim pretium. Massa
                ornare quis aliquet sed vitae. Sed velit nisi, fermentum erat.
                Fringilla purus, erat fringilla tincidunt quisque non.
                Pellentesque in ut tellus.
              </Text>
            </Box>
          </Box>
        </SwiperSlide>
        <SwiperSlide>
          <Box position="relative" h="100%">
            <img
              src="/images/slides/Slide3.png"
              alt="Nature 4"
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
            />
            <Box
              position="absolute"
              bottom={"10"}
              left={50}
              textAlign={"start"}
              color="white"
            >
              <Heading as="h2" fontWeight={600} fontSize={12} mb={4}>
                Latest News & Updates
              </Heading>
              <Text fontSize="12" fontWeight={400}>
                Turpis interdum nunc varius ornare dignissim pretium. Massa
                ornare quis aliquet sed vitae. Sed velit nisi, fermentum erat.
                Fringilla purus, erat fringilla tincidunt quisque non.
                Pellentesque in ut tellus.
              </Text>
            </Box>
          </Box>
        </SwiperSlide>
      </SwiperReact>
    </Box>
  );
};

export default SwiperComponent;
