import { View, Text, StyleSheet, TouchableOpacity, ScrollView, TextInput, Dimensions, Image } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Search, MapPin, ShoppingBag, Smartphone, Gamepad2, Package, TrendingUp, Star, Heart, Filter } from 'lucide-react-native';
import { useRouter } from 'expo-router';

const { width } = Dimensions.get('window');

const categories = [
  { name: 'Electronics', icon: Smartphone, color: '#667eea', image: 'https://images.pexels.com/photos/356056/pexels-photo-356056.jpeg?auto=compress&cs=tinysrgb&w=200' },
  { name: 'Fashion', icon: Package, color: '#f59e0b', image: 'https://images.pexels.com/photos/996329/pexels-photo-996329.jpeg?auto=compress&cs=tinysrgb&w=200' },
  { name: 'Groceries', icon: ShoppingBag, color: '#10b981', image: 'https://images.pexels.com/photos/264636/pexels-photo-264636.jpeg?auto=compress&cs=tinysrgb&w=200' },
  { name: 'Gaming', icon: Gamepad2, color: '#ef4444', image: 'https://images.pexels.com/photos/442576/pexels-photo-442576.jpeg?auto=compress&cs=tinysrgb&w=200' },
];

const trendingItems = [
  { 
    name: 'iPhone 16 Pro Max', 
    image: 'https://images.pexels.com/photos/1409006/pexels-photo-1409006.jpeg?auto=compress&cs=tinysrgb&w=300', 
    price: 'From ₹1,99,000',
    originalPrice: '₹2,10,000',
    discount: '5% OFF',
    rating: 4.8,
    store: 'TechHub Store'
  },
  { 
    name: 'MacBook Pro M3', 
    image: 'https://images.pexels.com/photos/18105/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=300', 
    price: 'From ₹1,50,000',
    originalPrice: '₹1,65,000',
    discount: '9% OFF',
    rating: 4.9,
    store: 'Apple Store'
  },
  { 
    name: 'Samsung Galaxy S24', 
    image: 'https://images.pexels.com/photos/404280/pexels-photo-404280.jpeg?auto=compress&cs=tinysrgb&w=300', 
    price: 'From ₹85,000',
    originalPrice: '₹95,000',
    discount: '10% OFF',
    rating: 4.7,
    store: 'Samsung Store'
  },
];

const featuredStores = [
  {
    name: 'TechHub Electronics',
    image: 'https://images.pexels.com/photos/1029757/pexels-photo-1029757.jpeg?auto=compress&cs=tinysrgb&w=300',
    rating: 4.8,
    distance: '0.5 km',
    speciality: 'Electronics & Gadgets',
    offers: '20% OFF on accessories'
  },
  {
    name: 'Fashion Central',
    image: 'https://images.pexels.com/photos/1884581/pexels-photo-1884581.jpeg?auto=compress&cs=tinysrgb&w=300',
    rating: 4.6,
    distance: '0.8 km',
    speciality: 'Fashion & Lifestyle',
    offers: 'Buy 2 Get 1 Free'
  },
];

export default function CustomerHomeScreen() {
  const router = useRouter();

  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      <LinearGradient
        colors={['#667eea', '#764ba2']}
        style={styles.header}
      >
        <View style={styles.headerContent}>
          <View style={styles.locationContainer}>
            <MapPin size={16} color="#fff" />
            <Text style={styles.locationText}>Current Location</Text>
          </View>
          <Text style={styles.locationName}>Laxmi Nagar, Delhi</Text>
        </View>
        
        <Text style={styles.welcomeText}>Find it locally. Instantly.</Text>
        
        <View style={styles.searchContainer}>
          <TouchableOpacity
            style={styles.searchBar}
            onPress={() => router.push('/(customer)/search')}
          >
            <Search size={20} color="#666" />
            <Text style={styles.searchPlaceholder}>Search for products...</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.filterButton}>
            <Filter size={20} color="#667eea" />
          </TouchableOpacity>
        </View>
      </LinearGradient>

      <View style={styles.content}>
        {/* Quick Stats */}
        <View style={styles.statsContainer}>
          <View style={styles.statCard}>
            <Text style={styles.statNumber}>500+</Text>
            <Text style={styles.statLabel}>Local Stores</Text>
          </View>
          <View style={styles.statCard}>
            <Text style={styles.statNumber}>10K+</Text>
            <Text style={styles.statLabel}>Products</Text>
          </View>
          <View style={styles.statCard}>
            <Text style={styles.statNumber}>4.9★</Text>
            <Text style={styles.statLabel}>Avg Rating</Text>
          </View>
        </View>

        {/* Categories */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Shop By Category</Text>
          <Text style={styles.sectionSubtitle}>Explore popular categories</Text>
        </View>

        <View style={styles.categoriesContainer}>
          {categories.map((category, index) => (
            <TouchableOpacity
              key={index}
              style={styles.categoryCard}
              onPress={() => router.push('/(customer)/search')}
            >
              <Image
                source={{ uri: category.image }}
                style={styles.categoryImage}
                resizeMode="cover"
              />
              <View style={styles.categoryOverlay}>
                <View style={[styles.categoryIcon, { backgroundColor: category.color }]}>
                  <category.icon size={20} color="#fff" />
                </View>
                <Text style={styles.categoryName}>{category.name}</Text>
                <Text style={styles.categorySubtext}>Browse now</Text>
              </View>
            </TouchableOpacity>
          ))}
        </View>

        {/* Trending Products */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Trending Now 🔥</Text>
          <TouchableOpacity onPress={() => router.push('/(customer)/search')}>
            <Text style={styles.sectionSubtitle}>View all</Text>
          </TouchableOpacity>
        </View>

        <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.trendingContainer}>
          {trendingItems.map((item, index) => (
            <TouchableOpacity
              key={index}
              style={styles.trendingCard}
              onPress={() => router.push('/(customer)/search')}
            >
              <View style={styles.trendingImageContainer}>
                <Image
                  source={{ uri: item.image }}
                  style={styles.trendingImage}
                  resizeMode="cover"
                />
                <View style={styles.discountBadge}>
                  <Text style={styles.discountText}>{item.discount}</Text>
                </View>
                <TouchableOpacity style={styles.favoriteButton}>
                  <Heart size={16} color="#fff" />
                </TouchableOpacity>
              </View>
              <View style={styles.trendingContent}>
                <Text style={styles.trendingName}>{item.name}</Text>
                <Text style={styles.trendingStore}>{item.store}</Text>
                <View style={styles.ratingContainer}>
                  <Star size={12} color="#ffd700" fill="#ffd700" />
                  <Text style={styles.ratingText}>{item.rating}</Text>
                </View>
                <View style={styles.priceContainer}>
                  <Text style={styles.trendingPrice}>{item.price}</Text>
                  <Text style={styles.originalPrice}>{item.originalPrice}</Text>
                </View>
              </View>
            </TouchableOpacity>
          ))}
        </ScrollView>

        {/* Featured Stores */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Featured Stores</Text>
          <TouchableOpacity onPress={() => router.push('/(customer)/nearby')}>
            <Text style={styles.sectionSubtitle}>View all</Text>
          </TouchableOpacity>
        </View>

        {featuredStores.map((store, index) => (
          <TouchableOpacity
            key={index}
            style={styles.storeCard}
            onPress={() => router.push('/(customer)/nearby')}
          >
            <Image
              source={{ uri: store.image }}
              style={styles.storeImage}
              resizeMode="cover"
            />
            <View style={styles.storeContent}>
              <View style={styles.storeHeader}>
                <Text style={styles.storeName}>{store.name}</Text>
                <View style={styles.storeRating}>
                  <Star size={14} color="#ffd700" fill="#ffd700" />
                  <Text style={styles.storeRatingText}>{store.rating}</Text>
                </View>
              </View>
              <Text style={styles.storeSpeciality}>{store.speciality}</Text>
              <Text style={styles.storeDistance}>{store.distance} away</Text>
              <View style={styles.offerContainer}>
                <Text style={styles.offerText}>{store.offers}</Text>
              </View>
            </View>
          </TouchableOpacity>
        ))}

        {/* Quick Actions */}
        <View style={styles.quickActions}>
          <TouchableOpacity
            style={styles.quickAction}
            onPress={() => router.push('/(customer)/nearby')}
          >
            <MapPin size={24} color="#667eea" />
            <Text style={styles.quickActionText}>Find Nearby Stores</Text>
          </TouchableOpacity>
          
          <TouchableOpacity
            style={styles.quickAction}
            onPress={() => router.push('/(customer)/saved')}
          >
            <TrendingUp size={24} color="#667eea" />
            <Text style={styles.quickActionText}>Track Price Changes</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
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
    justifyContent: 'space-between',
    marginBottom: 16,
  },
  locationContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  locationText: {
    fontSize: 14,
    fontFamily: 'Inter-Regular',
    color: '#fff',
    marginLeft: 4,
    opacity: 0.9,
  },
  locationName: {
    fontSize: 16,
    fontFamily: 'Inter-SemiBold',
    color: '#fff',
  },
  welcomeText: {
    fontSize: 24,
    fontFamily: 'Inter-Bold',
    color: '#fff',
    marginBottom: 20,
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  searchBar: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 16,
    paddingHorizontal: 16,
    paddingVertical: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  searchPlaceholder: {
    fontSize: 16,
    fontFamily: 'Inter-Regular',
    color: '#666',
    marginLeft: 12,
  },
  filterButton: {
    backgroundColor: '#fff',
    borderRadius: 16,
    padding: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  content: {
    padding: 20,
  },
  statsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 32,
  },
  statCard: {
    backgroundColor: '#fff',
    borderRadius: 16,
    padding: 20,
    alignItems: 'center',
    flex: 1,
    marginHorizontal: 4,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  statNumber: {
    fontSize: 20,
    fontFamily: 'Inter-Bold',
    color: '#667eea',
    marginBottom: 4,
  },
  statLabel: {
    fontSize: 12,
    fontFamily: 'Inter-Regular',
    color: '#666',
    textAlign: 'center',
  },
  section: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  sectionTitle: {
    fontSize: 20,
    fontFamily: 'Inter-Bold',
    color: '#1a1a1a',
  },
  sectionSubtitle: {
    fontSize: 14,
    fontFamily: 'Inter-Medium',
    color: '#667eea',
  },
  categoriesContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    marginBottom: 32,
  },
  categoryCard: {
    width: (width - 60) / 2,
    height: 120,
    borderRadius: 16,
    marginBottom: 16,
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  categoryImage: {
    width: '100%',
    height: '100%',
  },
  categoryOverlay: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
    padding: 12,
    alignItems: 'center',
  },
  categoryIcon: {
    width: 32,
    height: 32,
    borderRadius: 16,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 8,
  },
  categoryName: {
    fontSize: 14,
    fontFamily: 'Inter-SemiBold',
    color: '#fff',
    marginBottom: 2,
  },
  categorySubtext: {
    fontSize: 10,
    fontFamily: 'Inter-Regular',
    color: '#fff',
    opacity: 0.8,
  },
  trendingContainer: {
    marginBottom: 32,
  },
  trendingCard: {
    width: 180,
    backgroundColor: '#fff',
    borderRadius: 16,
    marginRight: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
    overflow: 'hidden',
  },
  trendingImageContainer: {
    position: 'relative',
  },
  trendingImage: {
    width: '100%',
    height: 120,
  },
  discountBadge: {
    position: 'absolute',
    top: 8,
    left: 8,
    backgroundColor: '#ef4444',
    borderRadius: 8,
    paddingHorizontal: 8,
    paddingVertical: 4,
  },
  discountText: {
    fontSize: 10,
    fontFamily: 'Inter-Bold',
    color: '#fff',
  },
  favoriteButton: {
    position: 'absolute',
    top: 8,
    right: 8,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    borderRadius: 16,
    padding: 8,
  },
  trendingContent: {
    padding: 12,
  },
  trendingName: {
    fontSize: 14,
    fontFamily: 'Inter-SemiBold',
    color: '#1a1a1a',
    marginBottom: 4,
  },
  trendingStore: {
    fontSize: 12,
    fontFamily: 'Inter-Regular',
    color: '#667eea',
    marginBottom: 4,
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  ratingText: {
    fontSize: 12,
    fontFamily: 'Inter-Medium',
    color: '#666',
    marginLeft: 4,
  },
  priceContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  trendingPrice: {
    fontSize: 14,
    fontFamily: 'Inter-Bold',
    color: '#667eea',
  },
  originalPrice: {
    fontSize: 12,
    fontFamily: 'Inter-Regular',
    color: '#666',
    textDecorationLine: 'line-through',
  },
  storeCard: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    borderRadius: 16,
    marginBottom: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
    overflow: 'hidden',
  },
  storeImage: {
    width: 100,
    height: 100,
  },
  storeContent: {
    flex: 1,
    padding: 16,
  },
  storeHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 4,
  },
  storeName: {
    fontSize: 16,
    fontFamily: 'Inter-SemiBold',
    color: '#1a1a1a',
    flex: 1,
  },
  storeRating: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  storeRatingText: {
    fontSize: 12,
    fontFamily: 'Inter-Medium',
    color: '#666',
    marginLeft: 4,
  },
  storeSpeciality: {
    fontSize: 12,
    fontFamily: 'Inter-Regular',
    color: '#666',
    marginBottom: 4,
  },
  storeDistance: {
    fontSize: 12,
    fontFamily: 'Inter-Regular',
    color: '#667eea',
    marginBottom: 8,
  },
  offerContainer: {
    backgroundColor: '#f0f4ff',
    borderRadius: 8,
    paddingHorizontal: 8,
    paddingVertical: 4,
    alignSelf: 'flex-start',
  },
  offerText: {
    fontSize: 10,
    fontFamily: 'Inter-SemiBold',
    color: '#667eea',
  },
  quickActions: {
    gap: 12,
  },
  quickAction: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 16,
    padding: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  quickActionText: {
    fontSize: 16,
    fontFamily: 'Inter-SemiBold',
    color: '#1a1a1a',
    marginLeft: 16,
  },
});