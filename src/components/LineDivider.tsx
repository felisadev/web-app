import { Box } from "@mui/material";

const LineDivider = ({ margin = '0 auto', backgroundColor = 'black' }) => {
  return (
    <Box
      sx={{
        margin: margin,
        textAlign: 'center',
        width: '120px',
        height: '4px',
        borderRadius: '4px',
        backgroundColor: backgroundColor,
      }}
    />
  );
};

export default LineDivider;
