// app/track.tsx
import { View, Text, ScrollView, StyleSheet } from 'react-native';

const repairs = [
  {
    id: 'MRX-2023-001',
    device: 'iPhone 13',
    issue: 'Cracked Screen',
    status: 'In Progress',
    date: 'Apr 5, 2025',
  },
  {
    id: 'MRX-2023-002',
    device: 'HP Pavilion x360',
    issue: 'Battery Problem',
    status: 'Awaiting Parts',
    date: 'Apr 2, 2025',
  },
  {
    id: 'MRX-2023-003',
    device: 'Samsung Galaxy S22',
    issue: 'Software Issues',
    status: 'Completed',
    date: 'Mar 29, 2025',
  },
];

export default function TrackScreen() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>📍 Track Repair Status</Text>
      <Text style={styles.subtitle}>Keep tabs on your ongoing and past repair requests</Text>

      {repairs.map((item) => (
        <View key={item.id} style={styles.card}>
          <View style={styles.cardHeader}>
            <Text style={styles.device}>{item.device}</Text>
            <Text style={styles.status}>{item.status}</Text>
          </View>
          <Text style={styles.issue}>Issue: {item.issue}</Text>
          <Text style={styles.id}>Ref: {item.id}</Text>
          <Text style={styles.date}>Date: {item.date}</Text>
        </View>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
    paddingBottom: 100,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 4,
  },
  subtitle: {
    fontSize: 14,
    color: '#555',
    textAlign: 'center',
    marginBottom: 20,
  },
  card: {
    backgroundColor: '#f9f9f9',
    borderRadius: 12,
    padding: 16,
    marginBottom: 16,
    shadowColor: '#000',
    shadowOpacity: 0.04,
    shadowRadius: 4,
    elevation: 2,
  },
  cardHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 8,
  },
  device: {
    fontSize: 16,
    fontWeight: '600',
  },
  status: {
    fontSize: 14,
    fontWeight: '600',
    color: '#007bff',
  },
  issue: {
    fontSize: 14,
    color: '#444',
    marginBottom: 4,
  },
  id: {
    fontSize: 12,
    color: '#888',
  },
  date: {
    fontSize: 12,
    color: '#888',
  },
});
