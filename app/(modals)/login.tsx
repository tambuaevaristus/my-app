import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { defaultStyles } from "@/constants/styles";
import Colors from "@/constants/Colors";
import { Ionicons } from "@expo/vector-icons";

const Page = () => {
  return (
    <View style={styles.container}>
      <TextInput
        autoCapitalize="none"
        placeholder="Email"
        style={[defaultStyles.inputField, { marginBottom: 30 }]}
      />
      <TouchableOpacity style={defaultStyles.btn}>
        <Text style={defaultStyles.btnText}>Continue</Text>
      </TouchableOpacity>

      <View style={styles.separatorView}>
        <View
          style={{
            flex: 1,
            borderBottomColor: "#000",
            borderBottomWidth: StyleSheet.hairlineWidth,
          }}
        ></View>
        <Text style={styles.seperator}>or</Text>
        <View
          style={{
            flex: 1,
            borderBottomColor: "#000",
            borderBottomWidth: StyleSheet.hairlineWidth,
          }}
        ></View>
      </View>

      <View >
          <TouchableOpacity style={styles.btnOutline}>
            <Ionicons name="call-outline" style={defaultStyles.btnIcon} size={24}/>
            <Text style={styles.btnOutlineText}>Continue With Phone</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.btnOutline}>
            <Ionicons name="logo-apple" style={defaultStyles.btnIcon} size={24}/>
            <Text style={styles.btnOutlineText}>Continue With Apple</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.btnOutline}>
            <Ionicons name="logo-google" style={defaultStyles.btnIcon} size={24}/>
            <Text style={styles.btnOutlineText}>Continue With Google</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.btnOutline}>
            <Ionicons name="logo-facebook" style={defaultStyles.btnIcon} size={24}/>
            <Text style={styles.btnOutlineText}>Continue With Facebook</Text>
          </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 26,
  },
  separatorView: {
    flexDirection: "row",
    gap: 10,
    alignItems:'center',
    marginVertical:30
  },
  seperator: {
    color: "#grey",
  },
  btnOutline: {
    backgroundColor: "#fff",
    borderWidth: 1,
    borderColor:Colors.grey,
    height:50,
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    paddingHorizontal:10,
    marginVertical: 10,
    borderRadius: 10,
  },
  btnOutlineText:{
    color: "#000",
    fontSize:16,
  }
});
export default Page;
