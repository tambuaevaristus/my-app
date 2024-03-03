import { StyleSheet, Text, View } from "react-native";
import React, { useEffect } from "react";

interface Props {
  listing: any[];
  category: string;
}
export default function Listing({ listing, category }: Props) {
  useEffect(() => {
    console.log("Category ===>", category);
  }, [category]);
  return (
    <View>
      <Text>Listing</Text>
    </View>
  );
}

const styles = StyleSheet.create({});
