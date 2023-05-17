import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React, { useState } from "react";

// React Native에서는 px를 사용하면 안된다. 숫자만 사용.
// border도 사용하면 안된다. 이렇게 써야 함. -> borderWidth: 10, borderColor : #eee

export default function App() {
  let [btnTrigger, setBtnTrigger] = useState(0);

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => setBtnTrigger(btnTrigger === 0 ? 1 : 0)}>
        {btnTrigger === 0 ? (
          <InvincibleBtn onOff={"onOff"} onOffText={"onOffText"} text={"ON"} />
        ) : (
          <InvincibleBtn onOff={"onOff2"} onOffText={"onOffText2"} text={"OFF"} />
        )}
      </TouchableOpacity>
      <Text style={styles.timer}>00:00</Text>
      <PublicBtn text={"이용내역"} />
      <PublicBtn text={"무적"} />
    </View>
  );
}

const InvincibleBtn = (props) => {
  return (
    <View style={styles[props.onOff]}>
      <Text style={styles[props.onOffText]}>{props.text}</Text>
    </View>
  );
};

const PublicBtn = (props) => {
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
    width: 300,
    height: 300,
    backgroundColor: "#ffffff",
    justifyContent: "center",
    borderRadius: 500,
    borderWidth: 10,
    borderColor: "#7D74E4",
  },
  onOff2: {
    width: 300,
    height: 300,
    backgroundColor: "#7D74E4",
    justifyContent: "center",
    borderRadius: 500,
  },
  onOffText: {
    textAlign: "center",
    color: "#7D74E4",
    fontSize: 50,
  },
  onOffText2: {
    textAlign: "center",
    color: "white",
    fontSize: 50,
  },
  timer: {
    marginTop: 50,
    fontSize: 50,
    fontWeight: 600,
    marginBottom: 40,
  },
  publicBtn: {
    textAlign: "center",
    marginBottom: 20,
    width: 150,
    borderRadius: 10,
    backgroundColor: "#7D74E4",
    paddingTop: 5,
    paddingRight: 15,
    paddingBottom: 5,
    paddingLeft: 15,
  },
  publicBtnText: {
    color: "white",
    fontSize: 30,
    fontWeight: 600,
  },
});
