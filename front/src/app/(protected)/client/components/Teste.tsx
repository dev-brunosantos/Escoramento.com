import { Edit, Equalizer, Feed } from "@mui/icons-material";
import { Tab, Tabs } from "@mui/material"
import { useState } from "react";

export const Teste = () => {

    const [value, setValue] = useState(2);

    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
        setValue(newValue);
    };

    return (
        // <Tabs onChange={handleChange}>
        <Tabs
            value={value}
            onChange={handleChange}
            aria-label="disabled tabs example"
            orientation="vertical"
            variant="scrollable"
            TabIndicatorProps={{ style: { display: 'none' } }}
            sx={{ borderRight: 1, borderColor: "divider" }}
        >
            <Tab
                label="Teste"
                // className="border-2! w-full!" 
                icon={<Equalizer />}
                iconPosition="start"
                sx={{
                    justifyContent: "flex-start",
                    "&.Mui-selected": {
                        backgroundColor: "#15803d", // green-700
                        color: "#fff",
                        fontWeight: "bold",
                    },
                }}
            />
            <Tab
                label="Teste 1"
                icon={<Feed />}
                iconPosition="start"
                sx={{
                    justifyContent: "flex-start",
                    "&.Mui-selected": {
                        backgroundColor: "#15803d", // green-700
                        color: "#fff",
                        fontWeight: "bold",
                    },
                }}
            />
            <Tab label="Teste 2" />
        </Tabs>
    )
}