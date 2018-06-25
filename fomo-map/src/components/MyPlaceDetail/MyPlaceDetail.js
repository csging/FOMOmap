import React from 'react';
import { Modal, View, Image, Text, Button, StyleSheet } from 'react-native';


const MyPlaceDetail = props => {
    let modalContent = null;
    
    //in modalContent we'll add more info about the trending place
    if (props.selectedPlace){
        modalContent = (
            <View>
             <Image source={props.selectedPlace.image} style={styles.placeImage}/>
            <Text style={styles.placeName}>{props.selectedPlace.name}</Text>
            {/* <Text>{props.selectedPlace.info}</Text> */}
            </View>
        )
    }
    return (
    <Modal
        onRequestClose={props.onModalClosed}
        visible={props.selectedPlace !== null}
        animationType="slide" //here we can change how the modal renders ("slide" is an option)
    >
        <View style= {styles.modalContainer}>
           {modalContent}
            <View>
                <Button title="Delete" color="red" onPress={props.onItemDeleted} />
                <Button title="Close" onPress={props.onModalClosed}/>
            </View>
        </View>
    </Modal>
    )
};

const styles = StyleSheet.create({
    modalContainer: {
        margin: 22
      },
    placeImage: {
        width: "100%",
        height: 200
    },
    placeName: {
        fontWeight: "bold",
        textAlign: "center",
        fontSize: 28
    }
})

export default MyPlaceDetail;