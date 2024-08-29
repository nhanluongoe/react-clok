# react-clock

Simple and customizable analog and digital clock component for React applications.

## Installation

```bash
npm install react-clock
# or
yarn add react-clock
```

## Usage

```tsx
import { AnalogClock, DigitalClock } from "react-clock";

const App = () => (
  <>
    <AnalogClock />
    <DigitalClock />
  </>
);
```

## Props

### Analog clock

<!-- create a table in markdown format with 4 columns named name, type, default value and note respectively -->

| Name       | Type                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      | Default value                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             | Note                                                                                                                |
| ---------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------- |
| frame      | <code>{ <br> &nbsp; size: &nbsp; CSSProperties['width'] <br> &nbsp; color: CSSProperties['color'] <br> &nbsp; width: CSSProperties['width'] <br> &nbsp; boxShadow: CSSProperties['boxShadow'] <br>}</code>                                                                                                                                                                                                                                                                                                                                    | <code>{ <br> &nbsp; size:&nbsp;'300px' <br> &nbsp; color: "#313638" <br> &nbsp; width: '6px' <br> &nbsp; boxShadow: '0 0 15px rgba(0, 0, 0, 0.3)' <br>}</code>                                                                                                                                                                                                                                                                                                                                            | Configuration for the clock frame                                                                                   |
| hourHand   | <code>{ <br> &nbsp; length: CSSProperties['width'] <br> &nbsp; width: CSSProperties['width'] <br> &nbsp; color: CSSProperties['color'] <br>}</code>                                                                                                                                                                                                                                                                                                                                                                       | <code>{ <br> &nbsp; length: '30%' <br> &nbsp; width: '10px' <br> &nbsp; color: '#313638' <br>}</code>                                                                                                                                                                                                                                                                                                                                                                                                     | Configuration for the hour hand                                                                                     |
| minuteHand | <code>{ <br> &nbsp; length: CSSProperties['width'] <br> &nbsp; width: CSSProperties['width'] <br> &nbsp; color: CSSProperties['color'] <br>}</code>                                                                                                                                                                                                                                                                                                                                                                       | <code>{ <br> &nbsp; length: '40%' <br> &nbsp; width: '8px' <br> &nbsp; color: '#313638' <br>}</code>                                                                                                                                                                                                                                                                                                                                                                                                      | Configuration for the minute hand                                                                                   |
| secondHand | <code>{ <br> &nbsp; length: CSSProperties['width'] <br> &nbsp; width: CSSProperties['width'] <br> &nbsp; color: CSSProperties['color'] <br>}</code>                                                                                                                                                                                                                                                                                                                                                                       | <code>{ <br> &nbsp; length: '43%' <br> &nbsp; width: '2px' <br> &nbsp; color: 'darkred'<br>}</code>                                                                                                                                                                                                                                                                                                                                                                                                       | Configuration for the second hand                                                                                   |
| center     | <code>{ <br> &nbsp; size: CSSProperties['width'] <br> &nbsp; color: CSSProperties['color'] <br>}</code>                                                                                                                                                                                                                                                                                                                                                                                                                   | <code>{ <br> &nbsp; size: '5%' <br> &nbsp; color: '#313638' <br>}</code>                                                                                                                                                                                                                                                                                                                                                                                                                             | Configuration for the center circle of the clock                                                                    |
| mark       | <code>{ <br> &nbsp; primaryMark: { <br> &nbsp; &nbsp; width: CSSProperties['width'] <br> &nbsp; &nbsp; color: CSSProperties['color'] <br> &nbsp; &nbsp; show: boolean <br> &nbsp;} <br> &nbsp; secondaryMark: { <br> &nbsp; &nbsp; width: CSSProperties['width'] <br> &nbsp; &nbsp; color: CSSProperties['color'] <br> &nbsp; &nbsp; show: boolean <br> &nbsp;} <br> &nbsp; number: { <br> &nbsp; &nbsp; fontSize: CSSProperties['fontSize'] <br> &nbsp; &nbsp; fontFamily: CSSProperties['fontFamily'] <br> &nbsp; &nbsp; fontWeight: 'bold' <br> &nbsp; &nbsp; color: CSSProperties['color'] <br> &nbsp; &nbsp; show: true <br> &nbsp;} <br> }</code> | <code>{ <br> &nbsp; primaryMark: { <br> &nbsp; &nbsp; width: '6px' <br> &nbsp; &nbsp; color: '#313638' <br> &nbsp; &nbsp; show: boolean <br> &nbsp;} <br> &nbsp; secondaryMark: { <br> &nbsp; &nbsp; width: '3px' <br> &nbsp; &nbsp; color: '#313638' <br> &nbsp; &nbsp; show: true <br> &nbsp;} <br> &nbsp; number: { <br> &nbsp; &nbsp; fontSize: '1.5rem' <br> &nbsp; &nbsp; fontFamily: 'inherit'; <br> &nbsp; &nbsp; fontWeight: 'bold' <br> &nbsp; &nbsp; color: '#313638' <br> &nbsp; &nbsp; show: true <br> &nbsp;} <br> }</code> | Configuration for the marks of the clock including primary marks, <br> secondary marks and the number on the clock. |

## Contributing
If you have any ideas on how to improve this package, feel free to open an issue or submit a pull request. All contributions are welcome!

## License
Licensed under the MIT License.

## Author
Made with 🍠 by [Nhan Luong](https://nhanluong.dev)
