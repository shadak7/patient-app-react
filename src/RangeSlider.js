import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';
import Typography from '@mui/material/Typography';

const marks = [
    {
      value: 0
    },
    {
      value: 20
    },
    {
      value: 40
    },
    {
      value: 60
    },
    {
        value: 80
      },
      {
        value: 100
      }
  ];

function valuetext(value) {
  return `${value}`;
}


export default function RangeSlider(props) {
  const {handleChange, value} = props;

  return (
    <Box sx={{ width: 300 }}>
      <Typography gutterBottom>Filter By age</Typography>
      <Slider
        getAriaLabel={() => 'Age range'}
        value={value}
        onChange={handleChange}
        valueLabelDisplay="auto"
        getAriaValueText={valuetext}
        marks={marks}
      />
    </Box>
  );
}