import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import AntDesign from "react-native-vector-icons/AntDesign";

const contactsMenuButtons = [
  {
    type: "starred",
    name: "Starred",
  },
  {
    type: "contact",
    name: "Alan Max",
    photo: require("../assets/userPic.png"),
  },
  {
    type: "contact",
    name: "Berryy smith",
    photo: require("../assets/userPic.png"),
  },
  {
    type: "contact",
    name: "Steve jobs",
    photo: require("../assets/userPic.png"),
  },
];

const ContactsMenu = () => {
  return (
    <View style={styles.container}>
      {contactsMenuButtons.map(({ type, photo, name }, index) => (
        <View style={styles.row} key={index}>
          {type == "starred" ? (
            <View style={styles.starredIcon}>
              <AntDesign name="star" size={30} color="#efefef" />
            </View>
          ) : (
            <Image source={photo} style={styles.image} />
          )}
          <Text style={styles.text}>{name}</Text>
        </View>
      ))}
    </View>
  );
};

export default ContactsMenu;

const styles = StyleSheet.create({
  container: {},
  row: {
    flexDirection: "row",
    marginTop: 20,
    alignItems: "center",
  },
  starredIcon: {
    backgroundColor: "#333333",
    width: 55,
    height: 55,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 20,
  },
  text: {
    color: "white",
    paddingLeft: 15,
    fontSize: 18,
  },
  image: {
    width: 55,
    height: 55,
    borderRadius: 20,
  },
});
