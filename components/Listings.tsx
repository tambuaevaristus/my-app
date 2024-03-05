import {
  FlatList,
  Image,
  ListRenderItem,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useEffect, useState, useRef } from "react";
import { Link } from "expo-router";

interface Props {
  listings: any[];
  category: string;
}
export default function Listings({ listings: items, category }: Props) {
  const [loading, setLoading] = useState(false);
  const listRef = useRef<FlatList>(null);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 200);
  }, [category]);

  const renderRow: ListRenderItem<any> = ({ item }) => (
    <Link href={`/listing/${item.id}`}>
      <TouchableOpacity>
        <View style={styles.listing}>
          <Image
            source={{ uri: item.medium_url }}
            style={styles.image}
          />
          <Text>{item.name}</Text>
        </View>
      </TouchableOpacity>
    </Link>
  );

  return (
    <View>
      <FlatList
        data={loading ? [] : items}
        ref={listRef}
        renderItem={renderRow}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  listing: {
    padding: 16,
  },

  image: {
    width: "100%",
    height: 300,
  },
});
