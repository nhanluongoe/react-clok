# [react-clok](https://react-clok.vercel.app)

Simple and customizable analog and digital clock component for React applications.

## Installation

```bash
npm install react-clok
# or
yarn add react-clok
```

## Usage

```tsx
import { AnalogClock, DigitalClock } from "react-clok";

const App = () => (
  <>
    <AnalogClock />
    <DigitalClock />
  </>
);
```

## Props

> [!NOTE]
> These props are all optional. If you don't provide any props, the clock will be rendered with the default configuration.

### Analog clock

<table>
  <thead>
    <tr>
      <th>Name</th>
      <th>Type</th>
      <th>Default value</th>
      <th>Note</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>frame</td>
      <td>
        <pre>
{
  size:  CSSProperties['width']
  color: CSSProperties['color']
  width: CSSProperties['width']
  boxShadow: CSSProperties['boxShadow']
}
      </pre
        >
      </td>
      <td>
        <pre>
{
  size:'300px'   
  color: "#313638"   
  width: '6px'
  boxShadow: '0 0 15px rgba(0, 0, 0, 0.3)' 
}
        </pre
        >
      </td>
      <td>Configuration for the clock frame</td>
    </tr>
    <tr>
      <td>hourHand</td>
      <td>
        <pre>
{   
  length: CSSProperties['width']
  width: CSSProperties['width']
  color: CSSProperties['color']
}
       </pre
        >
      </td>
      <td>
        <pre>
{
  length: '30%'   
  width: '10px'
  color: '#313638'
}
        </pre>
      </td>
      <td>Configuration for the hour hand</td>
    </tr>
    <tr>
      <td>minuteHand</td>
      <td>
        <pre>
{
  length: CSSProperties['width']
  width: CSSProperties['width']
  color: CSSProperties['color']
}
       </pre
        >
      </td>
      <td>
        <pre>
{
  length: '40%'
  width: '8px'
  color: '#313638'
}
        </pre
        >
      </td>
      <td>Configuration for the minute hand</td>
    </tr>
    <tr>
      <td>secondHand</td>
      <td>
        <pre>
{
  length: CSSProperties['width']
  width: CSSProperties['width']
  color: CSSProperties['color']
}
       </pre
        >
      </td>
      <td>
        <pre>
{
  length: '43%'
  width: '2px'
  color: 'darkred'
}
        </pre>
      </td>
      <td>Configuration for the second hand</td>
    </tr>
    <tr>
      <td>center</td>
      <td>
        <pre>
{
  size: number;
  color: CSSProperties['color']
}
       </pre
        >
      </td>
      <td>
        <pre>
{
  size: '5%'
  color: '#313638'
}
       </pre
        >
      </td>
      <td>Configuration for the center circle of the clock</td>
    </tr>
    <tr>
      <td>mark</td>
      <td>
        <pre>
{
  primaryMark: {
    width: CSSProperties['width']
    color: CSSProperties['color']
    show: boolean
  }
  secondaryMark: {
    width: CSSProperties['width']
    color: CSSProperties['color']
    show: boolean
  }
  number: {
    fontSize: CSSProperties['fontSize']
    fontFamily: CSSProperties['fontFamily']
    fontWeight: 'bold'
    color: CSSProperties['color']
    show: true
  }
}
        </pre>
      </td>
      <td>
        <pre>
{
  primaryMark: {
  width: '6px'
  color: '#313638'
  show: boolean
  }
  secondaryMark: {
    width: '3px'
    color: '#313638'
    show: true
  }
  number: {
    fontSize: '1.5rem'
    fontFamily: 'inherit';
    fontWeight: 'bold'
    color: '#313638'
    show: true
  }
}
        </pre
        >
      </td>
      <td>
        Configuration for the marks of the clock including primary marks,
        secondary marks and the number on the clock.
      </td>
    </tr>
  </tbody>
</table>

### Digital clock

<table>
  <thead>
    <tr>
      <th>Name</th>
      <th>Type</th>
      <th>Default value</th>
      <th>Note</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>hourSegment</td>
      <td>
        <pre>
{
  size: number
  color: CSSProperties['color']
  width: number
  gap: number
}
      </td>
      <td>
        <pre>
{
  size: 70 
  color: '#313638'
  width: 5 
  gap: 10
}
      </pre>
      </td>
      <td>Configuration for the hour segment. Due to the implementation, the size and width should be in pixel</td>
    </tr>
    <tr>
      <td>minuteSegment</td>
      <td>
        <pre>
{
  size: number
  color: CSSProperties['color']
  width: number
  gap: number
}
      </pre>
      </td>
      <td>
        <pre>
{
  size: 70 
  color: '#313638'
  width: 5 
  gap: 10
}
      </pre>
      </td>
      <td>Configuration for the minute segment. Due to the implementation, the size and width should be in pixel</td>
    </tr>
    <tr>
      <td>secondSegment</td>
      <td>
        <pre>
{
  size: number
  color: CSSProperties['color']
  width: number
  gap: number
}
      </pre>
      </td>
      <td>
        <pre>
{
  size: 70 
  color: '#313638'
  width: 5 
  gap:  10 
}
      </pre>
      </td>
      <td>Configuration for the second segment. Due to the implementation, the size and width should be in pixel</td>
    </tr>
    <tr>
      <td>separator</td>
      <td>
        <pre>
{
  show: boolean;
  size: number;
  color: number;
  gap: number;
}
      </pre>
      </td>
      <td>
        <pre>
{
  show: true
  size: 10    
  color: '#313638'
  gap:  10 
}
      </pre>
      </td>
      <td>Configuration for the separator between segments</td>
    </tr>
  </tbody>
</table>

## Contributing

If you have any ideas on how to improve this package, feel free to open an issue or submit a pull request. All contributions are welcome!

## License

Licensed under the MIT License.

## Author

Made with 🍠 by [Nhan Luong](https://nhanluong.dev)
