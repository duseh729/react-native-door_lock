import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React, { useState } from "react";

export default function App() {
  let [btnTrigger, setBtnTrigger] = useState(0);

  return (
    <View style={styles.container}>
      {/* prettier-ignore */}
      <TouchableOpacity onPress={() => setBtnTrigger(btnTrigger === 0 ? 1 : 0)}>
        {btnTrigger == 0 ? <InvincibleBtn onOff={"onOff"} onOffText={"onOffText"} text={"ON"} /> : <InvincibleBtn  onOff={"onOff2"} onOffText={"onOffText2"} text={"OFF"} />}
      </TouchableOpacity>
      <Text style={styles.timer}>00:00</Text>
      <PublicBtn text={"이용내역"} />
      <PublicBtn text={"무적"} />
    </View>
  );
}

const InvincibleBtn = props => {
  return (
    <View style={styles[props.onOff]}>
      <Text style={styles[props.onOffText]}>{props.text}</Text>
    </View>
  );
};

const PublicBtn = props => {
  return (
    <View style={styles.publicBtn}>
      <Text style={styles.publicBtnText}>{props.text}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  onOff: {
    width: "300px",
    height: "300px",
    backgroundColor: "#ffffff",
    justifyContent: "center",
    textAlign: "center",
    borderRadius: "50%",
    border: "solid 10px #7D74E4",
  },
  onOff2: {
    width: "300px",
    height: "300px",
    backgroundColor: "#7D74E4",
    justifyContent: "center",
    textAlign: "center",
    borderRadius: "50%",
  },
  onOffText: {
    color: "#7D74E4",
    fontSize: "50px",
  },
  onOffText2: {
    color: "white",
    fontSize: "50px",
  },
  timer: {
    marginTop: "50px",
    fontSize: "50px",
    fontWeight: "600",
    marginBottom: "40px",
  },
  publicBtn: {
    textAlign: "center",
    marginBottom: "20px",
    width: "150px",
    borderRadius: "10px",
    backgroundColor: "#7D74E4",
    paddingTop: 5,
    paddingRight: 15,
    paddingBottom: 5,
    paddingLeft: 15,
  },
  publicBtnText: {
    color: "white",
    fontSize: "30px",
    fontWeight: "600",
  },
});
