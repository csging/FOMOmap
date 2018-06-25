import React, { Component } from 'react';
import { StyleSheet, View} from 'react-native';

import TrendPlaceInput from "./src/components/TrendPlaceInput/TrendPlaceInput";
import MyPlaceList from "./src/components/MyPlaceList/MyPlaceList";
import MyPlaceDetail from "./src/components/MyPlaceDetail/MyPlaceDetail"
//import placeImage from "./src/assets/beautiful-place.jpg";

export default class App extends Component {
  state= {
    places: [],
    selectedPlace: null
  };


placeAddedHandler = placeName => { 
    this.setState(prevState => {
      return {
        places: prevState.places.concat({
          key: Math.random(), 
          name: placeName,
          //info: placeInfo,
          image: {
            uri: "https://i.huffpost.com/gen/2145814/thumbs/o-MEDWT35017-900.jpg?1"
          }
        })
      }
    })
  }

placeDeletedHandler = () => {
  this.setState(prevState => {
    return {
      places: prevState.places.filter(place  => {
        return place.key !== prevState.selectedPlace.key;
     }),
      selectedPlace: null
    };
  });
}

modalClosedHandler = () => {
    this.setState({
      selectedPlace: null
    });
  };

placeSelectedHandler = key => {
    this.setState (prevState => {
      return {
        selectedPlace: prevState.places.find(place => {
          return place.key === key;
        }) 
      };
    });
    
  }
  render() {
    return (
      <View style={styles.container}>
        <MyPlaceDetail
         selectedPlace= {this.state.selectedPlace} 
         onItemDeleted= {this.placeDeletedHandler}
         onModalClosed= {this.modalClosedHandler}
         />
        <TrendPlaceInput onPlaceAdded={this.placeAddedHandler} />
        <MyPlaceList 
        places={this.state.places} 
        onItemSelected= {this.placeSelectedHandler} 
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 26,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-start',
  }
});
