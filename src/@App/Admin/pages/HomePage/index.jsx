/*
 * Created Date: 23-10-2022, 9:41:26 am
 * Author: TheAnh58
 * Email: you@you.you
 * -----
 * Last Modified: Mon Oct 24 2022
 * Modified By: Peter
 * -----
 * Copyright (c) 2022 PROS+ Group , Inc
 * -----
 * HISTORY:
 * Date      	By	Comments
 * ----------	---	----------------------------------------------------------
 */

import { Box, Card, CardContent, CardHeader, Typography } from "@mui/material";
import React from "react";
import ChartOverview from "./ChartOverview";
import ChartPartners from "./ChartPartners";
import ChartSale from "./ChartSale";
import AdminContentPage from "../../components/Layout/AdminContentPage";
import Slider from "react-slick";

const HomePage = (props) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
  };
  return (
    <AdminContentPage
      pageTitle="HOMEPAGE"
      content={
        <Box className="w-1/2 mx-auto">
          <Slider {...settings}>
            <img
              className="h-[600px]"
              src="https://img.freepik.com/free-vector/set-with-isolated-wealth-management-isometric-icons-images-money-people-blank-background-vector-illustration_1284-73243.jpg?w=826&t=st=1681320614~exp=1681321214~hmac=96aa89db7c7ab6644c352dee33fcd699368ca9e783522c0dfeda579db8a39d61"
            />
            <img
              className="h-[600px]"
              src="https://img.freepik.com/free-vector/social-support-concept-residents-getting-basic-benefits-from-government_74855-11060.jpg?w=1380&t=st=1681320388~exp=1681320988~hmac=2311747fe22b3ba3a336b80896a870d9ebc262dd53a36e33235703624eb9410d"
            />
            <img
              className="h-[600px]"
              src="https://img.freepik.com/free-vector/happy-rich-banker-celebrating-income-growth_74855-5867.jpg?w=1380&t=st=1681320471~exp=1681321071~hmac=37a297017a69bdb4d7e76cfe9379509f21e7d8cd3e46b99f4dd78eafc58c9f15"
            />
            <img
              className="h-[600px]"
              src="https://img.freepik.com/free-vector/ppc-campaign-abstract-concept-illustration_335657-3747.jpg?w=826&t=st=1681320568~exp=1681321168~hmac=bf794f905c7b024847109ff29ffa2bff08a57e1df13409215e7a06def5adbdd9"
            />
          </Slider>
        </Box>
      }
    />
  );
};

// HomePage.defaultProps = {}

// HomePage.propTypes = {}

export default React.memo(HomePage);
