import React from 'react';
import { Modal, View, Image, Text, Button, StyleSheet, TouchableOpacity } from 'react-native';

import Icon from 'react-native-vector-icons/Ionicons';

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
            <TouchableOpacity onPress={props.onItemDeleted}>
                   <View style= {styles.deleteButton}>
                   <Icon size= {30} name = "ios-trash" color= "red"/>
                   </View>
                </TouchableOpacity>
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
    },
    deleteButton: {
        alignItems: "center"
    }
})

export default MyPlaceDetail;