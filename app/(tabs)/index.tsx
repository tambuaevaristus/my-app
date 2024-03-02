import { View, Text } from "react-native";
import React from "react";
import { Link, Stack } from "expo-router";
import Listing from "@/components/Listing";
import ExploreHeader from "@/components/ExploreHeader";

const Page = () => {
  return (
    <View style={{ flex: 1}}>
      <Stack.Screen
        options={{
          header: () => <ExploreHeader />,
        }}
      />
      <Listing />
    </View>
  );
};

export default Page;
