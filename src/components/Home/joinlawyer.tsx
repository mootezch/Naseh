import React from "react";
import {
  Box,
  Container,
  Typography,
  Button,
  Grid,
  Card,
  CardContent,
} from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import AddCircleIcon from "@mui/icons-material/AddCircle";

const JoinLawyer: React.FC = () => {
  return (
    <Box
      sx={{
        minHeight: "50vh", 
        position: "relative", 
        width: "131%", 
        left: "-16%",
        backgroundColor: "rgba(0, 0, 68, 0.85)",
      }}
    >
      {/* Content Container */}
      <Container
        maxWidth="lg"
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: { xs: "column", md: "row" },
          px: { xs: 2, md: 4 },
          py: { xs: 4, md: 6 },
        }}
      >
        {/* Analytics Image */}
        <Box
          sx={{
            flex: 1,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            maxWidth: { xs: "80%", md: "45%" },
            mb: { xs: 4, md: 0 },
          }}
        >
          <img
            src="/img/analytics.jpg"
            alt="Lawyer Joining"
            style={{
              maxWidth: "100%",
              borderRadius: "8px",
              boxShadow: "0 4px 12px rgba(0, 0, 0, 0.3)",
            }}
          />
        </Box>

        {/* Text, Cards, and Button */}
        <Box
          sx={{
            flex: 1,
            textAlign: { xs: "center", md: "left" },
            mt: { xs: 4, md: 0 },
            px: { xs: 2, md: 4 },
            maxWidth: { xs: "100%", md: "50%" },
          }}
        >
          {/* Small Title */}
          <Typography
            variant="subtitle1"
            sx={{
              fontWeight: 400,
              textTransform: "uppercase",
              letterSpacing: 2,
              color: "#FFA726",
              mb: 1,
            }}
          >
            Join as a Lawyer
          </Typography>

          {/* Main Title */}
          <Typography
            variant="h4"
            sx={{
              fontWeight: 700,
              mb: 2,
              color: "white",
              textShadow: "2px 2px 4px rgba(0,0,0,0.3)",
              fontSize: { xs: "2.5rem", sm: "2rem", md: "2.5rem" },
            }}
          >
            Join as a Lawyer
          </Typography>

          {/* Subtitle */}
          <Typography
            variant="body1"
            sx={{
              fontSize: { xs: "1rem" },
              mb: 3,
              maxWidth: 500,
              color: "rgba(255, 255, 255, 0.9)",
            }}
          >
            Become part of our platform to connect with clients and provide your
            expertise in a seamless and professional environment.
          </Typography>

          {/* Grid of 4 Cards */}
          <Grid
            container
            spacing={2}
            justifyContent="center"
            sx={{
              mb: 2,
              maxWidth: 500,
              mx: "auto",
            }}
          >
            <Grid item xs={6} sm={6} md={6}>
              <Card
                sx={{
                  backgroundColor: "rgba(88, 88, 88, 0.5)",
                  borderRadius: 2,
                  boxShadow: 2,
                  textAlign: "center",
                  py: 0,
                  px: 2,
                  transition: "transform 0.3s",
                  "&:hover": { transform: "scale(1.05)" },
                }}
              >
                <CardContent
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexDirection: "row",
                    gap: 1,
                  }}
                >
                  <CheckCircleIcon
                    sx={{
                      color: "#4CAF50",
                      fontSize: 28,
                    }}
                  />
                  <Typography
                    variant="body2"
                    fontWeight={700}
                    color="white"
                    sx={{
                      fontSize: { xs: "0.8rem", sm: "0.9rem", md: "1rem" },
                    }}
                  >
                    Verified Platform
                  </Typography>
                </CardContent>
              </Card>
            </Grid>

            <Grid item xs={6} sm={6} md={6}>
              <Card
                sx={{
                  backgroundColor: "rgba(88, 88, 88, 0.5)",
                  borderRadius: 2,
                  boxShadow: 2,
                  textAlign: "center",
                  py: 0,
                  px: 2,
                  transition: "transform 0.3s",
                  "&:hover": { transform: "scale(1.05)" },
                }}
              >
                <CardContent
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexDirection: "row",
                    gap: 1,
                  }}
                >
                  <CheckCircleIcon
                    sx={{
                      color: "#4CAF50",
                      fontSize: 28,
                    }}
                  />
                  <Typography
                    variant="body2"
                    fontWeight={700}
                    color="white"
                    sx={{
                      fontSize: { xs: "0.8rem", sm: "0.9rem", md: "1rem" },
                    }}
                  >
                    Grow Clients
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={6} sm={6} md={6}>
              <Card
                sx={{
                  backgroundColor: "rgba(88, 88, 88, 0.5)",
                  borderRadius: 2,
                  boxShadow: 2,
                  textAlign: "center",
                  py: 0,
                  px: 2,
                  transition: "transform 0.3s",
                  "&:hover": { transform: "scale(1.05)" },
                }}
              >
                <CardContent
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexDirection: "row",
                    gap: 1,
                  }}
                >
                  <CheckCircleIcon
                    sx={{
                      color: "#4CAF50",
                      fontSize: 28,
                    }}
                  />
                  <Typography
                    variant="body2"
                    fontWeight={700}
                    color="white"
                    sx={{
                      fontSize: { xs: "0.8rem", sm: "0.9rem", md: "1rem" },
                    }}
                  >
                    Flexible Working
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={6} sm={6} md={6}>
              <Card
                sx={{
                  backgroundColor: "rgba(88, 88, 88, 0.5)",
                  borderRadius: 2,
                  boxShadow: 2,
                  textAlign: "center",
                  py: 0,
                  px: 2,
                  transition: "transform 0.3s",
                  "&:hover": { transform: "scale(1.05)" },
                }}
              >
                <CardContent
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexDirection: "row",
                    gap: 1,
                  }}
                >
                  <CheckCircleIcon
                    sx={{
                      color: "#4CAF50",
                      fontSize: 28,
                    }}
                  />
                  <Typography
                    variant="body2"
                    fontWeight={700}
                    color="white"
                    sx={{
                      fontSize: { xs: "0.8rem", sm: "0.9rem", md: "1rem" },
                    }}
                  >
                    Secure Payment
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          </Grid>

          {/* Button  + Icon */}
          <Button
            variant="contained"
            sx={{
              backgroundColor: "#FF9800",
              color: "#FFFFFF",
              fontWeight: 700,
              fontSize: { xs: "0.9rem", sm: "1rem", md: "1.1rem" },
              borderRadius: "30px",
              px: 4,
              py: 1,
              textTransform: "none",
              boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.3)",
              "&:hover": {
                backgroundColor: "#F57C00",
              },
            }}
          >
            <AddCircleIcon sx={{ marginRight: 1 }} />
            Join Now
          </Button>
        </Box>
      </Container>
    </Box>
  );
};

export default JoinLawyer;
