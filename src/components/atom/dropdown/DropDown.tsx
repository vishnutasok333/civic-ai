import { FormControl, InputLabel, MenuItem, Select } from "@mui/material"

const DropDown = (label: string) => {
    return (
            <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">{label}</InputLabel>
                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    // value={age}
                    label="From"
                // onChange={handleChange}
                >
                    <MenuItem value={10}>English</MenuItem>
                    <MenuItem value={20}>Spanish</MenuItem>
                    <MenuItem value={30}>Hindi</MenuItem>
                </Select>
            </FormControl>
    )
}

export default DropDown

