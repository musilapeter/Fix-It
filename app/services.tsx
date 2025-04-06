// app/services.tsx
import { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TextInput, ScrollView } from 'react-native';

const issues = [
  'Cracked Screen',
  'Battery Problem',
  'Not Charging',
  'Slow Performance',
  'Keyboard Issues',
  'Water Damage',
  'Software Issues',
];

export default function ServicesScreen() {
  const [deviceType, setDeviceType] = useState<'Phone' | 'Laptop' | null>(null);
  const [selectedIssue, setSelectedIssue] = useState<string | null>(null);
  const [description, setDescription] = useState('');

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>🛠 Repair Services</Text>
      <Text style={styles.subtitle}>Request professional repair for your device</Text>

      <Text style={styles.sectionTitle}>1. Select Device Type</Text>
      <View style={styles.buttonGroup}>
        {['Phone', 'Laptop'].map(type => (
          <TouchableOpacity
            key={type}
            style={[
              styles.selectButton,
              deviceType === type && styles.selectedButton,
            ]}
            onPress={() => setDeviceType(type as 'Phone' | 'Laptop')}
          >
            <Text style={styles.selectButtonText}>{type}</Text>
          </TouchableOpacity>
        ))}
      </View>

      <Text style={styles.sectionTitle}>2. Choose Issue</Text>
      <View style={styles.buttonGroup}>
        {issues.map(issue => (
          <TouchableOpacity
            key={issue}
            style={[
              styles.selectButton,
              selectedIssue === issue && styles.selectedButton,
            ]}
            onPress={() => setSelectedIssue(issue)}
          >
            <Text style={styles.selectButtonText}>{issue}</Text>
          </TouchableOpacity>
        ))}
      </View>

      <Text style={styles.sectionTitle}>3. Describe the Problem (optional)</Text>
      <TextInput
        style={styles.input}
        placeholder="E.g. Screen flickers when charging"
        multiline
        value={description}
        onChangeText={setDescription}
      />

      <TouchableOpacity style={styles.requestButton}>
        <Text style={styles.requestText}>📩 Request Repair</Text>
      </TouchableOpacity>
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
    marginBottom: 4,
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 14,
    color: '#555',
    marginBottom: 20,
    textAlign: 'center',
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 8,
    marginTop: 20,
  },
  buttonGroup: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 10,
    marginBottom: 10,
  },
  selectButton: {
    backgroundColor: '#eee',
    paddingVertical: 10,
    paddingHorizontal: 16,
    borderRadius: 8,
    marginRight: 8,
    marginBottom: 10,
  },
  selectedButton: {
    backgroundColor: '#cde3ff',
  },
  selectButtonText: {
    fontSize: 14,
    fontWeight: '500',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    padding: 12,
    minHeight: 80,
    textAlignVertical: 'top',
    marginBottom: 20,
  },
  requestButton: {
    backgroundColor: '#007bff',
    padding: 14,
    borderRadius: 10,
    alignItems: 'center',
  },
  requestText: {
    color: '#fff',
    fontWeight: '600',
    fontSize: 16,
  },
});
