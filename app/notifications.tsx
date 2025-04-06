// app/notifications.tsx
import { View, Text, ScrollView, StyleSheet } from 'react-native';

const notifications = [
  {
    title: 'Repair Complete ✅',
    body: 'Your iPhone 13 repair is done. Ready for pickup!',
    time: '2 hours ago',
  },
  {
    title: 'New Product Alert 🆕',
    body: 'Check out the latest iPhone 15 Pro Max available now.',
    time: '1 day ago',
  },
  {
    title: 'Request Received 📩',
    body: 'We have received your repair request for the HP Pavilion x360.',
    time: '2 days ago',
  },
  {
    title: 'Promo: Free Diagnostics 🎉',
    body: 'All phone diagnostics are free this week! Don’t miss out.',
    time: '3 days ago',
  },
];

export default function NotificationsScreen() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>🔔 Notifications</Text>
      <Text style={styles.subtitle}>Stay updated with your device and MrFix news</Text>

      {notifications.map((item, index) => (
        <View key={index} style={styles.card}>
          <Text style={styles.cardTitle}>{item.title}</Text>
          <Text style={styles.cardBody}>{item.body}</Text>
          <Text style={styles.cardTime}>{item.time}</Text>
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
    backgroundColor: '#fefefe',
    borderRadius: 12,
    padding: 16,
    marginBottom: 16,
    borderColor: '#ddd',
    borderWidth: 1,
  },
  cardTitle: {
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 4,
  },
  cardBody: {
    fontSize: 14,
    color: '#333',
    marginBottom: 6,
  },
  cardTime: {
    fontSize: 12,
    color: '#999',
  },
});
