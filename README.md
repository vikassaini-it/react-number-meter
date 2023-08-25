# React Meter

React Implementation of Styled number representation

![](https://komarev.com/ghpvc/?username=vikassaini-it-react-number-meter)
![doge](https://i.imgflip.com/7wmyjy.jpg)

## Authors

- [Github@vikassaini-it](https://github.com/vikassaini-it)
- [Vikas Saini](https://vikassaini.info)

## Installation

Install react-number-meter with npm

```bash
  npm install react-number-meter
```

## Demo

[Live Demo](https://reactmeter.vikassaini.info)

## Screenshots

![](https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExbDA5emRpNmZmNXF5cWFxcmZ3aDh2NmRxMWxzMmtnaTlhZnJ6bHFrbiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/UsYoOqLmlbaMuSqevH/giphy-downsized.gif)

![](https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExMXBsZnM1dHg3aGZyeGUxdmxycWp4bGpwdzVteGIzMm9jM2hzc3MxaSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/HT5iycLaGQizmRrbQ8/giphy-downsized-large.gif)

![](https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExbjloaHFuaGsydG1xZGZvaGR0N2NueXplNzR2cmVuNmJrdHdyaXBndSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/C1SX5fOq7pbyyJNErU/giphy-downsized-large.gif)

## Usage/Examples

```javascript
import { ShiftingMeter, RollingMeter, OdoMeter } from "react-number-meter";

function App() {
  return (
    <>
      <ShiftingMeter
        value={5483343}
        duration={500}
        size={`3rem`}
        color={`#000000`}
        fontFamily={`sans-serif`}
      />
      <RollingMeter
        value={872542}
        duration={1000}
        size={`3rem`}
        color={`#000000`}
        fontFamily={`sans-serif`}
      />
      <OdoMeter
        value={872542}
        duration={1000}
        size={`3rem`}
        color={`#000000`}
        fontFamily={`sans-serif`}
      />
    </>
  );
}
```
