// app/contact.tsx
import { View, Text, StyleSheet, TextInput, TouchableOpacity, ScrollView, Linking } from 'react-native';

export default function ContactScreen() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>📞 Contact MrFix</Text>
      <Text style={styles.subtitle}>We’re here to help you!</Text>

      <View style={styles.contactInfo}>
        <Text style={styles.label}>📍 Location</Text>
        <Text style={styles.value}>Embu Town, Near ABC Plaza</Text>

        <Text style={styles.label}>📞 Phone</Text>
        <Text style={styles.link} onPress={() => Linking.openURL('tel:+254712345678')}>
          +254 712 345 678
        </Text>

        <Text style={styles.label}>✉️ Email</Text>
        <Text style={styles.link} onPress={() => Linking.openURL('mailto:help@mrfix.co.ke')}>
          help@mrfix.co.ke
        </Text>

        <Text style={styles.label}>🕒 Working Hours</Text>
        <Text style={styles.value}>Mon - Sat: 8:00 AM - 6:00 PM</Text>
      </View>

      <Text style={styles.sectionTitle}>📬 Send Us a Message</Text>
      <TextInput style={styles.input} placeholder="Your Name" />
      <TextInput
        style={[styles.input, { minHeight: 100 }]}
        placeholder="Your Message"
        multiline
      />

      <TouchableOpacity style={styles.sendButton}>
        <Text style={styles.sendText}>Send Message</Text>
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
  contactInfo: {
    backgroundColor: '#f1f1f1',
    borderRadius: 12,
    padding: 16,
    marginBottom: 30,
  },
  label: {
    fontWeight: '600',
    marginTop: 12,
    marginBottom: 4,
  },
  value: {
    fontSize: 14,
    color: '#333',
  },
  link: {
    color: '#007bff',
    fontSize: 14,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 10,
  },
  input: {
    backgroundColor: '#fff',
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 10,
    padding: 12,
    marginBottom: 14,
  },
  sendButton: {
    backgroundColor: '#007bff',
    padding: 14,
    borderRadius: 10,
    alignItems: 'center',
  },
  sendText: {
    color: '#fff',
    fontWeight: '600',
    fontSize: 16,
  },
});
