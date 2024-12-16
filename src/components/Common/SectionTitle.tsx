import React from "react";
import { Typography, Box } from "@mui/material";

interface SectionTitleProps {
  title: string;
  subtitle?: string;
  align?: "left" | "center" | "right";
}

const SectionTitle: React.FC<SectionTitleProps> = ({
  title,
  subtitle,
  align = "left",
}) => {
  return (
    <Box
      sx={{
        textAlign: align,
        mb: { xs: 3, sm: 4 }, // Responsive margin bottom
      }}
    >
      {/* Title Styling */}
      <Typography
        variant="h4"
        sx={{
          fontWeight: 600,
          mb: subtitle ? { xs: 1, sm: 2 } : 0, // Adjust margin bottom based on screen size
          fontSize: { xs: "1.8rem", sm: "2.2rem", md: "2.5rem" }, // Adjust font size based on screen size
        }}
      >
        {title}
      </Typography>

      {/* Subtitle Styling */}
      {subtitle && (
        <Typography
          variant="subtitle1"
          color="textSecondary"
          sx={{
            fontSize: { xs: "0.85rem", sm: "1rem" }, // Adjust font size for subtitle
          }}
        >
          {subtitle}
        </Typography>
      )}
    </Box>
  );
};

export default SectionTitle;
