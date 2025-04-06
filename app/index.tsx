// app/index.tsx
import React from 'react';
import { ScrollView, View, Text, Image, StyleSheet, Button } from 'react-native';

export default function Home() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>MrFix Phone and Laptop Repair</Text>
        <Image
          source={require('../assets/images/MrFix.png')} // Update with your own image
          style={styles.heroImage}
          resizeMode="cover"
        />
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Our Services</Text>
        <View style={styles.item}>
          <Image
            source={require('../assets/images/phone1.jpeg')} // Replace with actual image
            style={styles.itemImage}
          />
          <Text style={styles.itemText}>Phone Repair</Text>
          <Button title="Request Service" onPress={() => alert('Requesting Phone Repair')} />
        </View>
        <View style={styles.item}>
          <Image
            source={require('../assets/images/laptop2.jpeg')} // Replace with actual image
            style={styles.itemImage}
          />
          <Text style={styles.itemText}>Laptop Repair</Text>
          <Button title="Request Service" onPress={() => alert('Requesting Laptop Repair')} />
        </View>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Featured Products</Text>
        <View style={styles.item}>
          <Image
            source={require('../assets/images/phone2.jpeg')} // Replace with actual image
            style={styles.itemImage}
          />
          <Text style={styles.itemText}>Screen Protector</Text>
          <Button title="Buy Now" onPress={() => alert('Buying Screen Protector')} />
        </View>
        <View style={styles.item}>
          <Image
            source={require('../assets/images/phone3.jpeg')} // Replace with actual image
            style={styles.itemImage}
          />
          <Text style={styles.itemText}>Phone Cases</Text>
          <Button title="Buy Now" onPress={() => alert('Buying Phone Case')} />
        </View>
      </View>

      <View style={styles.footer}>
        <Text style={styles.footerText}>Contact Us for More Information</Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#FBFFE4',
    padding: 20,
  },
  header: {
    alignItems: 'center',
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 10,
  },
  heroImage: {
    width: '100%',
    height: 200,
    borderRadius: 10,
  },
  section: {
    marginBottom: 30,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#333',
  },
  item: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
    backgroundColor: '#fff',
    padding: 10,
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
  },
  itemImage: {
    width: 80,
    height: 80,
    borderRadius: 10,
    marginRight: 10,
  },
  itemText: {
    fontSize: 16,
    fontWeight: '500',
    color: '#333',
    flex: 1,
  },
  footer: {
    marginTop: 20,
    alignItems: 'center',
    padding: 10,
  },
  footerText: {
    fontSize: 16,
    color: '#007bff',
  },
});
