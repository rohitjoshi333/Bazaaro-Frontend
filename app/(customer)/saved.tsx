import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Heart, ArrowLeft, Star, MapPin, Eye, Phone, Trash2 } from 'lucide-react-native';
import { useRouter } from 'expo-router';

const savedItems = [
  {
    id: 1,
    name: 'iPhone 16 Pro Max',
    store: 'Olx Store',
    price: '₹2,15,000',
    originalPrice: '₹2,20,000',
    rating: 4.8,
    distance: '0.5 km',
    status: 'In Stock',
    priceDropped: true,
  },
  {
    id: 2,
    name: 'iPhone 16 Pro Max',
    store: 'EVO Store',
    price: '₹2,05,000',
    originalPrice: '₹2,15,000',
    rating: 4.7,
    distance: '1.2 km',
    status: 'In Stock',
    priceDropped: true,
  },
  {
    id: 3,
    name: 'Nike Air Jordan',
    store: 'Nike Store',
    price: '₹21,500',
    originalPrice: '₹21,500',
    rating: 4.9,
    distance: '2.1 km',
    status: 'In Stock',
    priceDropped: false,
  },
];

export default function SavedScreen() {
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
          <Text style={styles.headerTitle}>Saved Items</Text>
        </View>
        
        <View style={styles.statsContainer}>
          <View style={styles.stat}>
            <Text style={styles.statNumber}>{savedItems.length}</Text>
            <Text style={styles.statLabel}>Items</Text>
          </View>
          <View style={styles.stat}>
            <Text style={styles.statNumber}>{savedItems.filter(item => item.priceDropped).length}</Text>
            <Text style={styles.statLabel}>Price Drops</Text>
          </View>
          <View style={styles.stat}>
            <Text style={styles.statNumber}>{savedItems.filter(item => item.status === 'In Stock').length}</Text>
            <Text style={styles.statLabel}>In Stock</Text>
          </View>
        </View>
      </LinearGradient>

      <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>Your Saved Items</Text>
          <TouchableOpacity>
            <Text style={styles.clearAllText}>Clear All</Text>
          </TouchableOpacity>
        </View>

        {savedItems.map((item) => (
          <View key={item.id} style={styles.itemCard}>
            {item.priceDropped && (
              <View style={styles.priceDropBadge}>
                <Text style={styles.priceDropText}>Price Dropped!</Text>
              </View>
            )}
            
            <View style={styles.itemHeader}>
              <View style={styles.itemInfo}>
                <Text style={styles.itemName}>{item.name}</Text>
                <Text style={styles.storeName}>{item.store}</Text>
                <View style={styles.storeRating}>
                  <Star size={16} color="#ffd700" fill="#ffd700" />
                  <Text style={styles.ratingText}>{item.rating}</Text>
                  <Text style={styles.distanceText}>{item.distance}</Text>
                </View>
              </View>
              <TouchableOpacity style={styles.removeButton}>
                <Trash2 size={20} color="#ef4444" />
              </TouchableOpacity>
            </View>

            <View style={styles.priceContainer}>
              <Text style={styles.currentPrice}>{item.price}</Text>
              {item.priceDropped && (
                <Text style={styles.originalPrice}>{item.originalPrice}</Text>
              )}
              <View style={styles.statusContainer}>
                <Text style={[styles.statusText, { color: item.status === 'In Stock' ? '#10b981' : '#ef4444' }]}>
                  {item.status}
                </Text>
              </View>
            </View>

            <View style={styles.itemActions}>
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

        <View style={styles.emptyStateContainer}>
          <Heart size={48} color="#ccc" />
          <Text style={styles.emptyTitle}>Keep track of your favorites</Text>
          <Text style={styles.emptySubtitle}>Save items to get notified about price changes and availability</Text>
        </View>
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
    marginBottom: 20,
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
  statsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    borderRadius: 16,
    paddingVertical: 16,
  },
  stat: {
    alignItems: 'center',
  },
  statNumber: {
    fontSize: 24,
    fontFamily: 'Inter-Bold',
    color: '#fff',
  },
  statLabel: {
    fontSize: 14,
    fontFamily: 'Inter-Regular',
    color: '#fff',
    opacity: 0.9,
    marginTop: 4,
  },
  content: {
    flex: 1,
    padding: 20,
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 20,
    fontFamily: 'Inter-Bold',
    color: '#1a1a1a',
  },
  clearAllText: {
    fontSize: 14,
    fontFamily: 'Inter-Medium',
    color: '#ef4444',
  },
  itemCard: {
    backgroundColor: '#fff',
    borderRadius: 16,
    padding: 20,
    marginBottom: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
    position: 'relative',
  },
  priceDropBadge: {
    position: 'absolute',
    top: -8,
    right: 16,
    backgroundColor: '#10b981',
    borderRadius: 12,
    paddingHorizontal: 12,
    paddingVertical: 4,
    zIndex: 1,
  },
  priceDropText: {
    fontSize: 12,
    fontFamily: 'Inter-SemiBold',
    color: '#fff',
  },
  itemHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: 12,
  },
  itemInfo: {
    flex: 1,
  },
  itemName: {
    fontSize: 18,
    fontFamily: 'Inter-SemiBold',
    color: '#1a1a1a',
    marginBottom: 4,
  },
  storeName: {
    fontSize: 14,
    fontFamily: 'Inter-Medium',
    color: '#667eea',
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
  removeButton: {
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: '#fef2f2',
    alignItems: 'center',
    justifyContent: 'center',
  },
  priceContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  currentPrice: {
    fontSize: 18,
    fontFamily: 'Inter-Bold',
    color: '#1a1a1a',
  },
  originalPrice: {
    fontSize: 16,
    fontFamily: 'Inter-Regular',
    color: '#666',
    textDecorationLine: 'line-through',
    marginLeft: 8,
  },
  statusContainer: {
    marginLeft: 'auto',
  },
  statusText: {
    fontSize: 14,
    fontFamily: 'Inter-Medium',
  },
  itemActions: {
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
  emptyStateContainer: {
    alignItems: 'center',
    marginTop: 40,
    paddingHorizontal: 20,
  },
  emptyTitle: {
    fontSize: 18,
    fontFamily: 'Inter-SemiBold',
    color: '#1a1a1a',
    marginTop: 16,
    marginBottom: 8,
  },
  emptySubtitle: {
    fontSize: 14,
    fontFamily: 'Inter-Regular',
    color: '#666',
    textAlign: 'center',
    lineHeight: 20,
  },
});