import {
  Button,
  Card,
  CardActions,
  CardContent,
  Slider,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import { OdoMeter } from "react-meter";
import IconButton from "@mui/material/IconButton";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import { PopoverPicker } from "../utils/PopoverPicker";

const OdoMeterDemo = () => {
  const [value, setValue] = useState(100000);
  const [duration, setDuration] = useState(1000);
  const [size, setSize] = useState(3);
  const [color, setColor] = useState("#000000");

  return (
    <Card
      sx={{
        maxWidth: 500,
        background:
          "linear-gradient(0deg, rgba(255,255,255,1) 0%, rgba(212,212,212,0.5) 100%)",
      }}
    >
      <div className="p-4 mx-3" style={{ borderBottom: "1px solid grey" }}>
        <OdoMeter
          value={value}
          duration={duration}
          size={size}
          color={color}
          fontFamily="sans-serif"
        />
      </div>
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Odo Meter
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Numbers moves like real odometer
        </Typography>
      </CardContent>
      <CardActions>
        <div className="d-flex flex-column w-100">
          <div className="d-flex justify-content-center gap-2 align-items-center">
            <IconButton
              aria-label="reduce"
              onClick={() => {
                setValue((prev) => prev - 1);
              }}
            >
              <RemoveIcon />
            </IconButton>
            <div className="d-flex flex-column align-items-center">
              <Button
                variant="outlined"
                onClick={() => setValue(Math.floor(Math.random() * 1000001))}
              >
                Random
              </Button>
            </div>
            <IconButton
              aria-label="reduce"
              onClick={() => {
                setValue((prev) => prev + 1);
              }}
            >
              <AddIcon />
            </IconButton>
            {/* <span>{value}</span> */}
          </div>
          <div className="mt-3 d-flex justify-content-start gap-3 align-items-center">
            <span>Color:</span>
            <PopoverPicker
              color={color}
              onChange={(newColor) => {
                setColor(newColor);
              }}
            />
          </div>
          <div className="mt-3 d-flex justify-content-between align-items-center">
            <span>Duration(ms):</span>
            <Slider
              aria-label="Duration"
              defaultValue={1000}
              valueLabelDisplay="auto"
              step={100}
              marks
              min={100}
              max={10000}
              className="mx-4"
              onChange={(e) => {
                setDuration(e.target.value);
              }}
            />
          </div>
          <div className="mt-3 d-flex justify-content-between align-items-center">
            <span>Size(rem):</span>
            <Slider
              aria-label="Size"
              defaultValue={3}
              valueLabelDisplay="auto"
              step={1}
              marks
              min={1}
              max={5}
              className="mx-4"
              onChange={(e) => {
                setSize(e.target.value);
              }}
            />
          </div>

          <div className="mt-2 d-flex justify-content-between align-items-center">
            <code
              className="mt-3 p-3"
              style={{
                backgroundColor: "black",
                color: "white",
                borderRadius: "10px",
              }}
            >
              {`
              <RollingMeter 
                value={\`${value}\`}
                duration={\`${duration}ms\`}
                size={\`${size}\`} 
                color={\`${color}\`} 
                fontFamily = {\`sans-serif\`}
              />
            `}
            </code>
          </div>
        </div>
      </CardActions>
    </Card>
  );
};

export default OdoMeterDemo;
