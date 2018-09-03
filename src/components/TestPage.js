import React from "react";
import { View, Button, Text } from "react-native";

// class Greetings extends React.Component {
//   render() {
//     return (
//       <Text>Hello {this.props.name}!</Text>
//     );
//   }
// }
class Blink extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isShowingText: true };

    // Toggle the state every second
    setInterval(() => {
      this.setState(previousState => {
        return { isShowingText: !previousState.isShowingText };
      });
    }, 1000);
  }

  render() {
    let display = this.state.isShowingText ? this.props.text : ' ';
    return (
      <Text>{display}</Text>
    );
  }
}
// class TestPage extends React.Component {
//   render() {
//     return (
//         <View style= {{ alignItems: 'center',
//                         justifyContent: 'center'}}>
//            <Greetings name="Rexxar" />
//            <Greetings name="Jaina" />
//         <Greetings name="Valeera" />
//         </View>
//       );
//   }
// }

class TestPage extends React.Component {
   render() {
     return (
       <View style={{ alignItems: 'center'}}>
         <Blink text='I love to blink' />
         <Blink text='Yes blinking is so great' />
         <Blink text='Why did they ever take this out of HTML' />
         <Blink text='Look at me look at me look at me' />
          </View>
     );

   }
}


export default TestPage;
