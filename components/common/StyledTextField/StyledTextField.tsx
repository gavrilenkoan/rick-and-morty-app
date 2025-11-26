import { TextField, styled } from "@mui/material";

const StyledTextField = styled(TextField)(() => ({
    "& .MuiInputBase-input": {
        color: "var(--text)",
        fontFamily: "'Life Savers', Inter, sans-serif",
    },

    "& .MuiInputLabel-root": {
        color: "var(--text)",
        fontFamily: "'Life Savers', Inter, sans-serif",
    },

    "& .MuiInputLabel-root.Mui-focused": {
        color: "var(--accent)",
    },

    "& .MuiOutlinedInput-notchedOutline": {
        borderColor: "var(--text-light)",
    },

    "&:hover .MuiOutlinedInput-notchedOutline": {
        borderColor: "var(--text-light)",
    },

    "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline": {
        borderColor: "var(--accent)",
    },
}));

export default StyledTextField;
