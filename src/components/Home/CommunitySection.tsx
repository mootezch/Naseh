import React from "react";
import {
  Box,
  Typography,
  Button,
  Grid,
  Divider,
  NativeSelect,
} from "@mui/material";
import PhoneInTalkTwoToneIcon from "@mui/icons-material/PhoneInTalkTwoTone";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import LanguageIcon from "@mui/icons-material/Language";
import WorkOutlineIcon from "@mui/icons-material/WorkOutline";
import PhoneIphoneSharpIcon from "@mui/icons-material/PhoneIphoneSharp";
import qatarFlag from "/img/qatar-flag.jpg";

const CommunitySection: React.FC = () => {
  return (
    <Box
      sx={{
        width: "100%",
        minHeight: "100vh",
        position: "static",
      }}
    >
      {/* Background Image */}
      <Box
        sx={{
          position: "absolute",
          top: "80px",
          left: 0,
          width: "100%",
          height: "60%",
          backgroundImage: `url(${qatarFlag})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          zIndex: -1,
          "::before": {
            content: '""',
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundColor: "rgba(0, 0, 68, 0.851)",
            zIndex: 1,
          },
        }}
      />

      {/* Content Section */}
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center",
          color: "white",
          height: "100%",
          position: "relative",
          px: { xs: 2, sm: 4 },
        }}
      >
        {/* Urgent Call */}
        <Box
          sx={{
            position: "absolute",
            top: "20px",
            left: "50%",
            transform: "translateX(-50%)",
            width: "100%",
            maxWidth: "1200px",
            display: "flex",
            alignItems: "center",
            px: 3,
            py: 2,
            borderBottom: "1px solid rgba(255, 255, 255, 0.2)",
            gap: 4,
            justifyContent: "center",
          }}
        >
          {/* Icon with Background */}
          <Box
            sx={{
              width: "40px",
              height: "40px",
              backgroundColor: "#5c5c5c83",
              borderRadius: "40%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <PhoneInTalkTwoToneIcon
              sx={{ fontSize: "1.5rem", color: "white" }}
            />
          </Box>

          {/* Text Section */}
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
              gap: 0.5,
            }}
          >
            <Typography
              sx={{
                display: "flex",
                alignItems: "center",
                gap: 1,
                fontWeight: "bold",
                fontSize: { xs: "1.2rem", sm: "1.6rem" },
              }}
            >
              Urgent consultation now!
            </Typography>
            <Typography
              component="span"
              variant="caption"
              sx={{
                color: "rgba(255,255,255,0.7)",
                fontSize: { xs: "0.7rem", sm: "0.8rem" },
              }}
            >
              Book it in 5 minutes, and a lawyer will respond to you in a few
              minutes.
            </Typography>
          </Box>

          {/* Consult Now Button */}
          <Button
            variant="contained"
            sx={{
              backgroundColor: "#e53935",
              color: "#fff",
              fontWeight: "bold",
              borderRadius: "15px",
              px: 3,
              display: "flex",
              alignItems: "center",
              gap: 1,
              "&:hover": {
                backgroundColor: "#d32f2f",
              },
            }}
          >
            <PhoneIphoneSharpIcon sx={{ fontSize: "1.2rem" }} /> Consult now
          </Button>
        </Box>

        {/* Title and Subtitle */}
        <Box sx={{ mt: 26 }}>
          {" "}
          <Typography
            variant="h3"
            fontWeight="bold"
            sx={{
              fontSize: { xs: "1.8rem", sm: "2.5rem" },
              mb: 2,
            }}
          >
            Choose & filter & schedule
          </Typography>
          <Typography
            variant="subtitle1"
            sx={{
              color: "rgba(255,255,255,0.7)",
              maxWidth: "600px",
              margin: "auto",
              fontSize: { xs: "0.9rem", sm: "1rem" },
            }}
          >
            Easy access to your legal advice. Choose, sort, and clearly define
            the font that best fits your schedule.
          </Typography>
        </Box>

        <Box
          sx={{
            backgroundColor: "#ffffff",
            borderRadius: "12px",
            padding: "20px",
            boxShadow: "0 4px 10px rgba(0,0,0,0.2)",
            maxWidth: "1700px",
            width: "100%",
            margin: "auto",
            color: "#333",
            marginTop: "40px",
          }}
        >
          <Grid container spacing={2} alignItems="center">
            {/* Consultation Date */}
            <Grid
              item
              xs={12}
              sm={3}
              display="flex"
              justifyContent="space-between"
            >
              <Box display="flex" alignItems="center" gap={1}>
                <CalendarMonthIcon sx={{ color: "green" }} />
                <Box>
                  <Typography variant="body1" fontWeight="bold">
                    Consultation date
                  </Typography>
                  <Typography variant="body2" color="gray">
                    select date
                  </Typography>
                </Box>
              </Box>
              <NativeSelect defaultValue="" />
              <Divider orientation="vertical" flexItem sx={{ my: 1 }} />
            </Grid>

            {/* Consultation Time */}
            <Grid
              item
              xs={12}
              sm={3}
              display="flex"
              justifyContent="space-between"
            >
              <Box display="flex" alignItems="center" gap={1}>
                <AccessTimeIcon sx={{ color: "green" }} />
                <Box>
                  <Typography variant="body1" fontWeight="bold">
                    Consultation time
                  </Typography>
                  <Typography variant="body2" color="gray">
                    select time
                  </Typography>
                </Box>
              </Box>
              <NativeSelect defaultValue="" />
              <Divider orientation="vertical" flexItem sx={{ my: 1 }} />
            </Grid>

            {/* Consultation Language */}
            <Grid
              item
              xs={12}
              sm={3}
              display="flex"
              justifyContent="space-between"
            >
              <Box display="flex" alignItems="center" gap={1}>
                <LanguageIcon sx={{ color: "green" }} />
                <Box>
                  <Typography variant="body1" fontWeight="bold">
                    Consultation language
                  </Typography>
                  <Typography variant="body2" color="gray">
                    select language
                  </Typography>
                </Box>
              </Box>
              <NativeSelect defaultValue="" />
              <Divider orientation="vertical" flexItem sx={{ my: 1 }} />
            </Grid>

            {/* Years of Experience */}
            <Grid
              item
              xs={12}
              sm={3}
              display="flex"
              justifyContent="space-between"
            >
              <Box display="flex" alignItems="center" gap={1}>
                <WorkOutlineIcon sx={{ color: "green" }} />
                <Box>
                  <Typography variant="body1" fontWeight="bold">
                    Years of experience
                  </Typography>
                  <Typography variant="body2" color="gray">
                    select experience
                  </Typography>
                </Box>
              </Box>
              <NativeSelect defaultValue="" />
            </Grid>
          </Grid>

          {/* Button */}
          <Box textAlign="center" mt={4}>
            <Button variant="contained" sx={{ backgroundColor: "#bbb" }}>
              Book a consultation
            </Button>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default CommunitySection;
