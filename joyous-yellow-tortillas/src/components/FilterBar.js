import { View, Text, Pressable, StyleSheet } from "react-native";

export default function FilterBar({ filters, selected, onToggle }) {
  return (
    <View style={styles.container}>
      {filters.map((filter) => {
        const isActive = selected.includes(filter);
        return (
          <Pressable
            key={filter}
            onPress={() => onToggle(filter)}
            style={[styles.chip, isActive && styles.chipActive]}
          >
            <Text style={[styles.chipText, isActive && styles.chipTextActive]}>
              {filter}
            </Text>
          </Pressable>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    flexWrap: "wrap",
    marginBottom: 12,
  },
  chip: {
    backgroundColor: "#eee",
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 16,
    marginRight: 8,
    marginBottom: 8,
  },
  chipActive: {
    backgroundColor: "#333",
  },
  chipText: {
    color: "#333",
    fontSize: 14,
  },
  chipTextActive: {
    color: "#fff",
    fontWeight: "600",
  },
});
