import React, { Component } from "react";
import { Text, View, Button, StyleSheet } from "react-native";
import axios from "axios";

export default class RandomQuote extends Component {
  constructor() {
    super();
    this.state = {
      quote: "",
      author: "",
    };
    this.handlePress = this.handlePress.bind(this);
  }

  componentDidMount() {
    this.fetchQuotes();
  }

  async fetchQuotes() {
    try {
      const { data: quotes } = await axios.get(
        "http://10.0.2.2:5000/api/quotes"
      );

      const cleanQuotes = quotes.filter((item) => {
        return item.series === "Breaking Bad";
      });
      const random = Math.floor(Math.random() * cleanQuotes.length);

      const { quote, author } = cleanQuotes[random];
      this.setState({
        quote,
        author,
      });
    } catch (error) {
      console.error("Error with axios call: ", error);
    }
  }

  handlePress() {
    this.fetchQuotes();
  }

  render() {
    return (
      <View>
        <Text style={styles.text}>{this.state.quote} </Text>
        <Text style={styles.author}>- {this.state.author} </Text>
        <Button
          style={styles.button}
          title="Next Quote"
          onPress={this.handlePress}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: 60,
  },
  text: {
    fontSize: 30,
    paddingTop: 100,
    paddingBottom: 100,
    paddingLeft: 30,
    paddingRight: 30,
    // alignContent: "center"
  },
  button: {},
  author: {
    paddingTop: 1,
    paddingLeft: 200,
    fontSize: 20,
    // textAlign: "left"
  },
});
