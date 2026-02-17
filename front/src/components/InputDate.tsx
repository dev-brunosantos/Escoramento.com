import { TextField } from "@mui/material";

interface InputDateProps {
    label: string;
    dateType: string;
    setDateType: (date: string) => void;
    value: string | Date;
    setDate: (type: string) => void;
    disabled: boolean;
}

export const InputDate = ({
    label, dateType, value, setDateType, setDate, disabled
}: InputDateProps) => {
    return (
        <TextField
            label={label}
            type={dateType}
            value={value}
            onChange={(e) => setDate(e.target.value)}
            onFocus={() => setDateType("date")}
            onBlur={() => {
                if (!value) setDateType("text");
            }}
            InputLabelProps={{
                shrink: dateType === "date" || !!value,
            }}
            fullWidth
            disabled={disabled}
        />
    )
}