import { View, Text } from "react-native";
import React from "react";
import { Link } from "expo-router";

const Page = () => {
  const route = "3342"
  return (
    <View>
      <Link href={"/(modals)/login"}>Login</Link>
      <Link href={"/(modals)/booking"}>Bookings</Link>
      <Link href={"/listing/2346"}>Listing Details</Link>
    </View>
  );
};

export default Page;
