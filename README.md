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

![](https://media.giphy.com/media/UsYoOqLmlbaMuSqevH/giphy-downsized.gif)

![](https://media.giphy.com/media/HT5iycLaGQizmRrbQ8/giphy-downsized.gif)

![](https://media.giphy.com/media/C1SX5fOq7pbyyJNErU/giphy-downsized.gif)

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
