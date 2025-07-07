import { View, Text, StyleSheet, TextInput, TouchableOpacity, ScrollView, Dimensions, Image } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Search, MapPin, Star, Eye, Phone, ArrowLeft, Filter, Heart, SlidersHorizontal } from 'lucide-react-native';
import { useState } from 'react';
import { useRouter } from 'expo-router';

const { width } = Dimensions.get('window');

const searchResults = [
  {
    id: 1,
    name: 'TechHub Electronics',
    rating: 4.8,
    distance: '0.5 km',
    price: '₹2,15,000',
    originalPrice: '₹2,25,000',
    item: 'iPhone 16 Pro Max',
    status: 'In Stock',
    eta: '5 min',
    image: 'https://images.pexels.com/photos/1409006/pexels-photo-1409006.jpeg?auto=compress&cs=tinysrgb&w=300',
    storeImage: 'https://images.pexels.com/photos/1029757/pexels-photo-1029757.jpeg?auto=compress&cs=tinysrgb&w=200',
    discount: '4% OFF',
    verified: true,
  },
  {
    id: 2,
    name: 'GFNXT Electronics',
    rating: 4.6,
    distance: '0.8 km',
    price: '₹2,10,000',
    originalPrice: '₹2,20,000',
    item: 'iPhone 16 Pro Max',
    status: 'Limited Stock',
    eta: '8 min',
    image: 'https://images.pexels.com/photos/1409006/pexels-photo-1409006.jpeg?auto=compress&cs=tinysrgb&w=300',
    storeImage: 'https://images.pexels.com/photos/264636/pexels-photo-264636.jpeg?auto=compress&cs=tinysrgb&w=200',
    discount: '5% OFF',
    verified: true,
  },
  {
    id: 3,
    name: 'EVO Store',
    rating: 4.7,
    distance: '1.2 km',
    price: '₹2,05,000',
    originalPrice: '₹2,15,000',
    item: 'iPhone 16 Pro Max',
    status: 'In Stock',
    eta: '10 min',
    image: 'https://images.pexels.com/photos/1409006/pexels-photo-1409006.jpeg?auto=compress&cs=tinysrgb&w=300',
    storeImage: 'https://images.pexels.com/photos/1884581/pexels-photo-1884581.jpeg?auto=compress&cs=tinysrgb&w=200',
    discount: '5% OFF',
    verified: false,
  },
];

const popularSearches = [
  'iPhone 16 Pro Max',
  'Samsung Galaxy S24',
  'MacBook Pro M3',
  'AirPods Pro',
  'iPad Air',
  'Gaming Chair',
];

export default function SearchScreen() {
  const router = useRouter();
  const [searchQuery, setSearchQuery] = useState('');
  const [showResults, setShowResults] = useState(false);
  const [showFilters, setShowFilters] = useState(false);

  const handleSearch = () => {
    if (searchQuery.trim()) {
      setShowResults(true);
    }
  };

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
          <Text style={styles.headerTitle}>Search Products</Text>
          <View style={styles.placeholder} />
        </View>
        
        <View style={styles.searchContainer}>
          <View style={styles.searchInputContainer}>
            <Search size={20} color="#666" />
            <TextInput
              style={styles.searchInput}
              placeholder="Search for products..."
              placeholderTextColor="#666"
              value={searchQuery}
              onChangeText={setSearchQuery}
              onSubmitEditing={handleSearch}
            />
          </View>
          <TouchableOpacity 
            style={styles.searchButton} 
            onPress={handleSearch}
          >
            <Search size={20} color="#fff" />
          </TouchableOpacity>
          <TouchableOpacity 
            style={styles.filterButton}
            onPress={() => setShowFilters(!showFilters)}
          >
            <SlidersHorizontal size={20} color="#fff" />
          </TouchableOpacity>
        </View>

        {showFilters && (
          <View style={styles.filtersContainer}>
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
              <TouchableOpacity style={styles.filterChip}>
                <Text style={styles.filterChipText}>Price: Low to High</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.filterChip}>
                <Text style={styles.filterChipText}>Distance</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.filterChip}>
                <Text style={styles.filterChipText}>Rating</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.filterChip}>
                <Text style={styles.filterChipText}>In Stock</Text>
              </TouchableOpacity>
            </ScrollView>
          </View>
        )}
      </LinearGradient>

      {showResults ? (
        <ScrollView style={styles.resultsContainer} showsVerticalScrollIndicator={false}>
          <View style={styles.resultsHeader}>
            <Text style={styles.resultsTitle}>Search Results</Text>
            <TouchableOpacity onPress={() => router.push('/(customer)/nearby')}>
              <Text style={styles.mapViewText}>Map View</Text>
            </TouchableOpacity>
          </View>

          <Text style={styles.resultsCount}>{searchResults.length} stores found for "{searchQuery}"</Text>

          {searchResults.map((store) => (
            <View key={store.id} style={styles.storeCard}>
              <View style={styles.storeImageContainer}>
                <Image
                  source={{ uri: store.image }}
                  style={styles.productImage}
                  resizeMode="cover"
                />
                <View style={styles.discountBadge}>
                  <Text style={styles.discountText}>{store.discount}</Text>
                </View>
                <TouchableOpacity style={styles.favoriteButton}>
                  <Heart size={16} color="#fff" />
                </TouchableOpacity>
              </View>

              <View style={styles.storeContent}>
                <View style={styles.storeHeader}>
                  <View style={styles.storeInfo}>
                    <View style={styles.storeNameContainer}>
                      <Image
                        source={{ uri: store.storeImage }}
                        style={styles.storeAvatar}
                        resizeMode="cover"
                      />
                      <View>
                        <Text style={styles.storeName}>{store.name}</Text>
                        {store.verified && (
                          <Text style={styles.verifiedText}>✓ Verified Store</Text>
                        )}
                      </View>
                    </View>
                    <View style={styles.storeRating}>
                      <Star size={16} color="#ffd700" fill="#ffd700" />
                      <Text style={styles.ratingText}>{store.rating}</Text>
                      <Text style={styles.distanceText}>{store.distance}</Text>
                    </View>
                  </View>
                </View>

                <Text style={styles.itemName}>{store.item}</Text>
                
                <View style={styles.priceContainer}>
                  <Text style={styles.itemPrice}>{store.price}</Text>
                  <Text style={styles.originalPrice}>{store.originalPrice}</Text>
                </View>

                <View style={styles.statusContainer}>
                  <Text style={[styles.statusText, { 
                    color: store.status === 'In Stock' ? '#10b981' : '#f59e0b' 
                  }]}>
                    {store.status}
                  </Text>
                  <Text style={styles.etaText}>ETA: {store.eta}</Text>
                </View>

                <View style={styles.storeActions}>
                  <TouchableOpacity style={styles.actionButton}>
                    <Eye size={16} color="#667eea" />
                    <Text style={styles.actionText}>View</Text>
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
            </View>
          ))}
        </ScrollView>
      ) : (
        <ScrollView style={styles.emptyStateContainer} showsVerticalScrollIndicator={false}>
          <View style={styles.emptyState}>
            <Search size={64} color="#ccc" />
            <Text style={styles.emptyTitle}>Search for Products</Text>
            <Text style={styles.emptySubtitle}>Find what you need from local stores in your area</Text>
          </View>

          <View style={styles.popularSearchesContainer}>
            <Text style={styles.popularTitle}>Popular Searches</Text>
            <View style={styles.popularGrid}>
              {popularSearches.map((search, index) => (
                <TouchableOpacity
                  key={index}
                  style={styles.popularChip}
                  onPress={() => {
                    setSearchQuery(search);
                    handleSearch();
                  }}
                >
                  <Text style={styles.popularChipText}>{search}</Text>
                </TouchableOpacity>
              ))}
            </View>
          </View>

          <View style={styles.tipsContainer}>
            <Text style={styles.tipsTitle}>Search Tips</Text>
            <View style={styles.tipItem}>
              <Text style={styles.tipText}>• Try searching for specific product names</Text>
            </View>
            <View style={styles.tipItem}>
              <Text style={styles.tipText}>• Use brand names for better results</Text>
            </View>
            <View style={styles.tipItem}>
              <Text style={styles.tipText}>• Check spelling and try different keywords</Text>
            </View>
          </View>
        </ScrollView>
      )}
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
    justifyContent: 'space-between',
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
  },
  headerTitle: {
    fontSize: 20,
    fontFamily: 'Inter-Bold',
    color: '#fff',
  },
  placeholder: {
    width: 40,
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  searchInputContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 16,
    paddingHorizontal: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  searchInput: {
    flex: 1,
    fontSize: 16,
    fontFamily: 'Inter-Regular',
    color: '#1a1a1a',
    paddingVertical: 16,
    paddingLeft: 12,
  },
  searchButton: {
    backgroundColor: '#667eea',
    borderRadius: 16,
    padding: 16,
  },
  filterButton: {
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    borderRadius: 16,
    padding: 16,
  },
  filtersContainer: {
    marginTop: 16,
  },
  filterChip: {
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    borderRadius: 20,
    paddingHorizontal: 16,
    paddingVertical: 8,
    marginRight: 8,
  },
  filterChipText: {
    fontSize: 14,
    fontFamily: 'Inter-Medium',
    color: '#fff',
  },
  resultsContainer: {
    flex: 1,
    padding: 20,
  },
  resultsHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 8,
  },
  resultsTitle: {
    fontSize: 20,
    fontFamily: 'Inter-Bold',
    color: '#1a1a1a',
  },
  mapViewText: {
    fontSize: 14,
    fontFamily: 'Inter-Medium',
    color: '#667eea',
  },
  resultsCount: {
    fontSize: 14,
    fontFamily: 'Inter-Regular',
    color: '#666',
    marginBottom: 20,
  },
  storeCard: {
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
  storeImageContainer: {
    position: 'relative',
  },
  productImage: {
    width: '100%',
    height: 200,
  },
  discountBadge: {
    position: 'absolute',
    top: 12,
    left: 12,
    backgroundColor: '#ef4444',
    borderRadius: 8,
    paddingHorizontal: 8,
    paddingVertical: 4,
  },
  discountText: {
    fontSize: 12,
    fontFamily: 'Inter-Bold',
    color: '#fff',
  },
  favoriteButton: {
    position: 'absolute',
    top: 12,
    right: 12,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    borderRadius: 20,
    padding: 8,
  },
  storeContent: {
    padding: 16,
  },
  storeHeader: {
    marginBottom: 12,
  },
  storeInfo: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  storeNameContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  storeAvatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 12,
  },
  storeName: {
    fontSize: 16,
    fontFamily: 'Inter-SemiBold',
    color: '#1a1a1a',
  },
  verifiedText: {
    fontSize: 12,
    fontFamily: 'Inter-Regular',
    color: '#10b981',
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
  itemName: {
    fontSize: 18,
    fontFamily: 'Inter-Bold',
    color: '#1a1a1a',
    marginBottom: 8,
  },
  priceContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    marginBottom: 12,
  },
  itemPrice: {
    fontSize: 20,
    fontFamily: 'Inter-Bold',
    color: '#667eea',
  },
  originalPrice: {
    fontSize: 16,
    fontFamily: 'Inter-Regular',
    color: '#666',
    textDecorationLine: 'line-through',
  },
  statusContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 16,
  },
  statusText: {
    fontSize: 14,
    fontFamily: 'Inter-SemiBold',
  },
  etaText: {
    fontSize: 12,
    fontFamily: 'Inter-Regular',
    color: '#666',
  },
  storeActions: {
    flexDirection: 'row',
    gap: 8,
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
    flex: 1,
    padding: 20,
  },
  emptyState: {
    alignItems: 'center',
    paddingVertical: 40,
  },
  emptyTitle: {
    fontSize: 24,
    fontFamily: 'Inter-Bold',
    color: '#1a1a1a',
    marginTop: 20,
    marginBottom: 8,
  },
  emptySubtitle: {
    fontSize: 16,
    fontFamily: 'Inter-Regular',
    color: '#666',
    textAlign: 'center',
    lineHeight: 24,
  },
  popularSearchesContainer: {
    marginBottom: 32,
  },
  popularTitle: {
    fontSize: 18,
    fontFamily: 'Inter-SemiBold',
    color: '#1a1a1a',
    marginBottom: 16,
  },
  popularGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 8,
  },
  popularChip: {
    backgroundColor: '#fff',
    borderRadius: 20,
    paddingHorizontal: 16,
    paddingVertical: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2,
  },
  popularChipText: {
    fontSize: 14,
    fontFamily: 'Inter-Medium',
    color: '#667eea',
  },
  tipsContainer: {
    backgroundColor: '#fff',
    borderRadius: 16,
    padding: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  tipsTitle: {
    fontSize: 16,
    fontFamily: 'Inter-SemiBold',
    color: '#1a1a1a',
    marginBottom: 12,
  },
  tipItem: {
    marginBottom: 8,
  },
  tipText: {
    fontSize: 14,
    fontFamily: 'Inter-Regular',
    color: '#666',
    lineHeight: 20,
  },
});