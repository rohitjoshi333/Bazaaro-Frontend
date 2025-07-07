import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { MapPin, ArrowLeft, Eye, Phone, Star } from 'lucide-react-native';
import { useRouter } from 'expo-router';

const nearbyStores = [
  {
    id: 1,
    name: 'Olx Store',
    rating: 4.8,
    distance: '0.5 km',
    address: '123 Main Street, Laxmi Nagar',
    items: ['iPhone 16 Pro Max', 'Samsung Galaxy S24', 'MacBook Pro'],
    status: 'Open',
  },
  {
    id: 2,
    name: 'GFNXT Electronics',
    rating: 4.6,
    distance: '0.8 km',
    address: '456 Tech Plaza, Vikas Marg',
    items: ['Gaming Laptops', 'Headphones', 'Accessories'],
    status: 'Open',
  },
  {
    id: 3,
    name: 'EVO Store',
    rating: 4.7,
    distance: '1.2 km',
    address: '789 Shopping Complex, Shakarpur',
    items: ['Smartphones', 'Tablets', 'Smart Watches'],
    status: 'Closes at 9 PM',
  },
];

export default function NearbyScreen() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <LinearGradient
        colors={['#667eea', '#764ba2']}
        style={styles.header}
      >
        <View style={styles.headerContent}>
          <TouchableOpacity
            style={styles.backButton}
            onPress={() => router.back()}
          >
            <ArrowLeft size={24} color="#fff" />
          </TouchableOpacity>
          <Text style={styles.headerTitle}>Nearby Stores</Text>
        </View>
        
        <View style={styles.locationInfo}>
          <MapPin size={16} color="#fff" />
          <Text style={styles.locationText}>Showing stores within 5 km</Text>
        </View>
      </LinearGradient>

      <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
        <View style={styles.mapPlaceholder}>
          <MapPin size={48} color="#667eea" />
          <Text style={styles.mapText}>Map View</Text>
          <Text style={styles.mapSubtext}>Interactive map coming soon</Text>
        </View>

        <View style={styles.storesHeader}>
          <Text style={styles.storesTitle}>Nearby Stores</Text>
          <Text style={styles.storesCount}>{nearbyStores.length} stores found</Text>
        </View>

        {nearbyStores.map((store) => (
          <View key={store.id} style={styles.storeCard}>
            <View style={styles.storeHeader}>
              <View style={styles.storeInfo}>
                <Text style={styles.storeName}>{store.name}</Text>
                <View style={styles.storeRating}>
                  <Star size={16} color="#ffd700" fill="#ffd700" />
                  <Text style={styles.ratingText}>{store.rating}</Text>
                  <Text style={styles.distanceText}>{store.distance}</Text>
                </View>
              </View>
              <Text style={[styles.statusText, { color: store.status === 'Open' ? '#10b981' : '#f59e0b' }]}>
                {store.status}
              </Text>
            </View>

            <Text style={styles.storeAddress}>{store.address}</Text>

            <View style={styles.itemsContainer}>
              <Text style={styles.itemsTitle}>Available Items:</Text>
              <View style={styles.itemsGrid}>
                {store.items.map((item, index) => (
                  <View key={index} style={styles.itemTag}>
                    <Text style={styles.itemText}>{item}</Text>
                  </View>
                ))}
              </View>
            </View>

            <View style={styles.storeActions}>
              <TouchableOpacity style={styles.actionButton}>
                <Eye size={16} color="#667eea" />
                <Text style={styles.actionText}>View Store</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.actionButton}>
                <Phone size={16} color="#667eea" />
                <Text style={styles.actionText}>Call</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.actionButton}>
                <MapPin size={16} color="#667eea" />
                <Text style={styles.actionText}>Directions</Text>
              </TouchableOpacity>
            </View>
          </View>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f9fa',
  },
  header: {
    paddingTop: 60,
    paddingHorizontal: 20,
    paddingBottom: 30,
    borderBottomLeftRadius: 24,
    borderBottomRightRadius: 24,
  },
  headerContent: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  backButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 16,
  },
  headerTitle: {
    fontSize: 24,
    fontFamily: 'Inter-Bold',
    color: '#fff',
  },
  locationInfo: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  locationText: {
    fontSize: 14,
    fontFamily: 'Inter-Regular',
    color: '#fff',
    marginLeft: 4,
    opacity: 0.9,
  },
  content: {
    flex: 1,
    padding: 20,
  },
  mapPlaceholder: {
    backgroundColor: '#fff',
    borderRadius: 16,
    padding: 40,
    alignItems: 'center',
    marginBottom: 24,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  mapText: {
    fontSize: 18,
    fontFamily: 'Inter-SemiBold',
    color: '#1a1a1a',
    marginTop: 12,
    marginBottom: 4,
  },
  mapSubtext: {
    fontSize: 14,
    fontFamily: 'Inter-Regular',
    color: '#666',
  },
  storesHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  storesTitle: {
    fontSize: 20,
    fontFamily: 'Inter-Bold',
    color: '#1a1a1a',
  },
  storesCount: {
    fontSize: 14,
    fontFamily: 'Inter-Regular',
    color: '#666',
  },
  storeCard: {
    backgroundColor: '#fff',
    borderRadius: 16,
    padding: 20,
    marginBottom: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  storeHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: 12,
  },
  storeInfo: {
    flex: 1,
  },
  storeName: {
    fontSize: 18,
    fontFamily: 'Inter-SemiBold',
    color: '#1a1a1a',
    marginBottom: 4,
  },
  storeRating: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  ratingText: {
    fontSize: 14,
    fontFamily: 'Inter-Medium',
    color: '#666',
    marginLeft: 4,
  },
  distanceText: {
    fontSize: 14,
    fontFamily: 'Inter-Regular',
    color: '#666',
    marginLeft: 8,
  },
  statusText: {
    fontSize: 14,
    fontFamily: 'Inter-Medium',
  },
  storeAddress: {
    fontSize: 14,
    fontFamily: 'Inter-Regular',
    color: '#666',
    marginBottom: 16,
  },
  itemsContainer: {
    marginBottom: 16,
  },
  itemsTitle: {
    fontSize: 14,
    fontFamily: 'Inter-Medium',
    color: '#1a1a1a',
    marginBottom: 8,
  },
  itemsGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 8,
  },
  itemTag: {
    backgroundColor: '#f0f0f0',
    borderRadius: 8,
    paddingHorizontal: 12,
    paddingVertical: 6,
  },
  itemText: {
    fontSize: 12,
    fontFamily: 'Inter-Regular',
    color: '#666',
  },
  storeActions: {
    flexDirection: 'row',
    gap: 12,
  },
  actionButton: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#f8f9fa',
    borderRadius: 12,
    paddingVertical: 12,
    paddingHorizontal: 16,
  },
  actionText: {
    fontSize: 14,
    fontFamily: 'Inter-Medium',
    color: '#667eea',
    marginLeft: 6,
  },
});