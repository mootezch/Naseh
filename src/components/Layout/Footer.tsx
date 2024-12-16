import { Box, Typography, Link, Grid, IconButton } from "@mui/material";
import { Twitter, LinkedIn, Instagram, YouTube } from "@mui/icons-material";
import nasehLogo from "/img/naseh-logo.jpg";
import visaIcon from "/img/visa.png";
import mastercardIcon from "/img/mastercard.png";
import googleIcon from "/img/Gpay.png";

const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: "#f9f9f9",
        padding: "40px 80px", // Increased padding for left and right
        borderTop: "1px solid #e0e0e0",
        position: "relative", // Relative positioning
        width: "131%", // Full width of the container
        marginLeft: "-12vw", // Extend to the left beyond the container
        marginRight: "-10vw", // Extend to the right beyond the container
        paddingLeft: "10vw", // Keep content aligned
        paddingRight: "10vw", // Keep content aligned
      }}
    >
      <Grid container spacing={4} justifyContent="center">
        {/* Logo & Description */}
        <Grid item xs={12} sm={6} md={4}>
          <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
            <img src={nasehLogo} alt="Naseh Logo" height="40" />
            <Typography
              variant="h6"
              sx={{ ml: 1, fontWeight: "bold", color: "green" }}
            >
              Naseh
            </Typography>
          </Box>
          <Typography variant="body2" sx={{ color: "#666", lineHeight: 1.6 }}>
            Stay up to date with the latest legal developments and practical
            advice from Qatar's leading lawyers by subscribing to our
            newsletter.
          </Typography>
          {/* Social Media Icons */}
          <Box sx={{ mt: 2, display: "flex", gap: 2 }}>
            <IconButton href="#" sx={{ color: "#1DA1F2" }} aria-label="Twitter">
              <Twitter />
            </IconButton>
            <IconButton
              href="#"
              sx={{ color: "#0077B5" }}
              aria-label="LinkedIn"
            >
              <LinkedIn />
            </IconButton>
            <IconButton
              href="#"
              sx={{ color: "#E1306C" }}
              aria-label="Instagram"
            >
              <Instagram />
            </IconButton>
            <IconButton href="#" sx={{ color: "#FF0000" }} aria-label="YouTube">
              <YouTube />
            </IconButton>
          </Box>
        </Grid>

        {/* Navigation Links */}
        <Grid item xs={12} sm={3} md={2}>
          <Typography variant="subtitle1" sx={{ fontWeight: "bold", mb: 2 }}>
            About
          </Typography>
          <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
            {["About Us", "Blog", "Lawyers", "Services", "Community"].map(
              (item) => (
                <Link
                  href="#"
                  key={item}
                  sx={{
                    color: "#666",
                    textDecoration: "none",
                    fontSize: "0.9rem",
                  }}
                >
                  {item}
                </Link>
              )
            )}
          </Box>
        </Grid>

        {/* Support Links */}
        <Grid item xs={12} sm={3} md={2}>
          <Typography variant="subtitle1" sx={{ fontWeight: "bold", mb: 2 }}>
            Support
          </Typography>
          <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
            {["Contact Us", "Online Chat", "WhatsApp"].map((item) => (
              <Link
                href="#"
                key={item}
                sx={{
                  color: "#666",
                  textDecoration: "none",
                  fontSize: "0.9rem",
                }}
              >
                {item}
              </Link>
            ))}
          </Box>
        </Grid>

        {/* Legal Links */}
        <Grid item xs={12} sm={3} md={2}>
          <Typography variant="subtitle1" sx={{ fontWeight: "bold", mb: 2 }}>
            Legal Links
          </Typography>
          <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
            {["Privacy Policy", "Terms and Conditions", "Cookie Policy"].map(
              (item) => (
                <Link
                  href="#"
                  key={item}
                  sx={{
                    color: "#666",
                    textDecoration: "none",
                    fontSize: "0.9rem",
                  }}
                >
                  {item}
                </Link>
              )
            )}
          </Box>
        </Grid>
      </Grid>

      {/* Footer Bottom */}
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between", // Space out content
          marginTop: 4,
          borderTop: "1px solid #e0e0e0",
          paddingTop: 2,
        }}
      >
        <Typography
          variant="body2"
          sx={{
            color: "#999",
            fontSize: "0.85rem",
          }}
        >
          All Rights Reserved @ Moetez Chihi 2024
        </Typography>
        <Box sx={{ display: "flex", gap: 2 }}>
          <img
            src={googleIcon}
            alt="Google Pay"
            height="25"
            style={{ width: "40px" }}
          />
          <img
            src={visaIcon}
            alt="Visa"
            height="25"
            style={{ width: "40px" }}
          />
          <img
            src={mastercardIcon}
            alt="MasterCard"
            height="25"
            style={{ width: "40px" }}
          />
        </Box>
      </Box>
    </Box>
  );
};

export default Footer;