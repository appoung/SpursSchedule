import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Image } from "react-native";
export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.overall}>
        <View style={styles.team}>
          <Text style={styles.teamtext}>Spurs</Text>
          <Text style={styles.teamtext}>vs</Text>
          <Text style={styles.teamtext}>Arsnal</Text>
        </View>
        <View style={styles.logocontainer}>
          <Image style={styles.logo} source={require("./assets/arsnal.png")} />
        </View>
        <View style={styles.score}>
          <Text style={styles.scoretext}>0</Text>
          <Text style={styles.scoretext}>-</Text>
          <Text style={styles.scoretext}>0</Text>
        </View>
      </View>
      <View style={styles.timeinfo}>
        <Text style={styles.date}>2023/1/5</Text>
        <Text style={styles.gmt}>GMT+9</Text>
        <Text style={styles.time}>15:00</Text>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#132257",
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  team: {
    flexDirection: "row",
  },
  teamtext: {
    color: "#FFFFFF",
    fontSize: 43,
    fontWeight: "bold",
    margin: 10,
  },
  score: {
    //place in center
    justifyContent: "center",
    flexDirection: "row",
  },
  scoretext: {
    color: "#FFFFFF",
    fontSize: 100,
    fontWeight: "bold",
    margin: 10,
    marginTop: -30,
  },
  time: {
    flexDirection: "row",
  },
  gmt: {
    color: "#FFFFFF",
    fontSize: 30,
  },
  date: {
    marginTop: 30,
    color: "#FFFFFF",
    fontSize: 40,
    fontWeight: "bold",
    //text align center
    justifyContent: "center",
  },
  time: {
    color: "#FFFFFF",
    fontSize: 30,
    justifyContent: "center",
    //text align center
  },
  overall: {
    marginTop: 100,
    marginBottom: -400,
    flex: 3,
  },
  timeinfo: {
    flex: 1,
    flexDirection: "column",
  },
  logo: {
    width: 200,
    height: 200,
  },
  logocontainer: {
    alignItems: "center",
    justifyContent: "center",
  },
});
