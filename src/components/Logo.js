import React from "react";
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';

function Logo() {
    return (
        <Box>
            <Button>
            <img
                src="tesseract.png"
                style={{
                    width: "40px",
                    height: "42px",
                    marginLeft: "0px",
                    paddingLeft: "0px",
                }}
            />
            </Button>
        </Box>
    );
}

export default Logo;