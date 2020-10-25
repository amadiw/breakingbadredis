import React, { useEffect, useState } from "react";
import { Text, View, Button, StyleSheet } from "react-native";
import axios from "axios";



export default RandomQuoteHooks = () => {
  const [quote, setQuote] = useState("")
  const [author, setAuthor] = useState("")

  useEffect(() => {
    fetchQuotes()
  }, [])

   const fetchQuotes = () => {
    try {
      const { data: quotes } = await axios.get(
        "http://10.0.2.2:5000/api/quotes"
      );

      const cleanQuotes = quotes.filter((item) => {
        return item.series === "Breaking Bad";
      });
      const random = Math.floor(Math.random() * cleanQuotes.length);

      const { quote, author } = cleanQuotes[random];
      setQuote(quote)
      setAuthor(author)
    } catch (error) {
      console.error("Error with axios call: ", error);
    }
  }

  const handlePress = () =>{
    fetchQuotes();
  }

    return (
      <View>
        <Text style={styles.text}>{quote} </Text>
        <Text style={styles.author}>- {author} </Text>
        <Button
          style={styles.button}
          title="Next Quote"
          onPress={handlePress}
        />
      </View>
    );
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
    paddingLeft: 30,i
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
