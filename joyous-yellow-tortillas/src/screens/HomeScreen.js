import { useState, useEffect } from "react";
import { View, Text, StyleSheet, FlatList, ScrollView } from "react-native";
import { inventory, outfits } from "../data/inventory";
import ItemCard from "../components/ItemCard";
import FilterBar from "../components/FilterBar";
import OutfitCarousel from "../components/OutfitCarousel";

export default function HomeScreen() {
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [loading, setLoading] = useState(true);

  const categories = ["Casual", "Formal", "Sport"];

  function toggleCategory(cat) {
    if (selectedCategories.includes(cat)) {
      setSelectedCategories(selectedCategories.filter((c) => c !== cat));
    } else {
      setSelectedCategories([...selectedCategories, cat]);
    }
  }

  const filteredData =
    selectedCategories.length === 0
      ? inventory
      : inventory.filter((item) => selectedCategories.includes(item.category));

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Monova Assignment</Text>

      <FilterBar
        filters={categories}
        selected={selectedCategories}
        onToggle={toggleCategory}
      />

      {loading ? (
        <View>
          <View style={styles.skeleton} />
          <View style={styles.skeleton} />
          <View style={styles.skeleton} />
        </View>
      ) : (
        <FlatList
          data={filteredData}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => <ItemCard item={item} />}
          contentContainerStyle={styles.list}
          numColumns={2}
          columnWrapperStyle={styles.row}
          ListEmptyComponent={
            <Text style={styles.emptyText}>No items match your filters</Text>
          }
          scrollEnabled={false}
        />
      )}

      <OutfitCarousel outfits={outfits} />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, backgroundColor: "#f9f9f9" },
  title: { fontSize: 22, fontWeight: "bold", marginBottom: 12 },
  list: {
    paddingBottom: 20,
  },
  row: {
    justifyContent: "space-between",
  },
  skeleton: {
    height: 150,
    backgroundColor: "#ddd",
    borderRadius: 12,
    marginBottom: 12,
  },
  emptyText: {
    textAlign: "center",
    marginTop: 20,
    fontSize: 16,
    color: "#666",
  },
});
