import { View, Text } from "react-native";
import React, { useState, useMemo } from "react";
import { Link, Stack } from "expo-router";
import Listings from "@/components/Listings";
import ExploreHeader from "@/components/ExploreHeader";
import listingsData from "@/assets/data/listing.json"; 

const Page = () => {
  const [category, setCategory] = useState("Tiny homes");

  const items = useMemo(()=>listingsData as any, [])
  const onDataChanged = (category: string) => {
    console.log("onDataChanged", category);
    setCategory(category);
  };
  return (
    <View style={{ flex: 1, marginTop: 200 }}>
      <Stack.Screen
        options={{
          header: () => <ExploreHeader onCategoryChanged={onDataChanged} />,
        }}
      />
      <Listings category={category} listings={items} />
    </View>
  );
};

export default Page;
