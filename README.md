# React Meter

React Implementation of Styled number representation

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

![](https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExZ2prc3FvZHB3ZGJieDJuc2dzY211dTczaWI4bTZueHRzZGNncXdlOSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/dQbyic9cGMSMudv0mr/giphy.gif)

![](https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExNTY0aDZoYTUxMWRkbHJxMjNuMnlheG5weXgyZ2l6cHhmemJyN2E0MyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/RZZOIXUgzGMxXEtdjh/giphy.gif)

## Usage/Examples

```javascript
import { RollingMeter, ShiftingMeter } from "react-meter";

function App() {
  return (
    <>
      <ShiftingMeter value={5483343} duration={500} size={`3rem`} />
      <RollingMeter value={872542} duration={1000} size={`3rem`} />
    </>
  );
}
```
