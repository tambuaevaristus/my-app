import { View, Text } from "react-native";
import React, { useState } from "react";
import { Link, Stack } from "expo-router";
import Listing from "@/components/Listing";
import ExploreHeader from "@/components/ExploreHeader";

const Page = () => {
  const [category, setCategory]= useState('Tiny homes')
  const onDataChanged = (category: string)=>{
    console.log('onDataChanged', category)
    setCategory(category)
  }
  return (
    <View style={{ flex: 1}}>
      <Stack.Screen
        options={{
          header: () => <ExploreHeader onCategoryChanged={onDataChanged} />,
        }}
      />
      <Listing category={category} listing={[]} />
    </View>
  );
};

export default Page;
