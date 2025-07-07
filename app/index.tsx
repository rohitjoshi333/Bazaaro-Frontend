import { View, Text, StyleSheet, TouchableOpacity, Dimensions, Image, ScrollView } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useRouter } from 'expo-router';
import { ShoppingBag, Search, MapPin, Star, Zap, Shield, Clock } from 'lucide-react-native';

const { width, height } = Dimensions.get('window');

export default function WelcomeScreen() {
  const router = useRouter();

  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      <LinearGradient
        colors={['#667eea', '#764ba2']}
        style={styles.heroSection}
      >
        <View style={styles.content}>
          <View style={styles.header}>
            <View style={styles.logoContainer}>
              <View style={styles.logoIcon}>
                <ShoppingBag size={32} color="#fff" />
              </View>
              <Text style={styles.logo}>Bazaaro</Text>
            </View>
            <Text style={styles.tagline}>Find What You Need, Right Now</Text>
            <Text style={styles.description}>
              Connect instantly with local stores that have exactly what you're looking for. 
              Search, compare prices, and get directions — all in real-time.
            </Text>
          </View>

          <View style={styles.heroImageContainer}>
            <Image
              source={{ uri: 'https://images.pexels.com/photos/264636/pexels-photo-264636.jpeg?auto=compress&cs=tinysrgb&w=400' }}
              style={styles.heroImage}
              resizeMode="cover"
            />
            <View style={styles.heroOverlay}>
              <View style={styles.heroStats}>
                <View style={styles.statItem}>
                  <Text style={styles.statNumber}>500+</Text>
                  <Text style={styles.statLabel}>Local Stores</Text>
                </View>
                <View style={styles.statItem}>
                  <Text style={styles.statNumber}>10K+</Text>
                  <Text style={styles.statLabel}>Products</Text>
                </View>
                <View style={styles.statItem}>
                  <Text style={styles.statNumber}>4.9★</Text>
                  <Text style={styles.statLabel}>Rating</Text>
                </View>
              </View>
            </View>
          </View>
        </View>
      </LinearGradient>

      <View style={styles.featuresSection}>
        <Text style={styles.sectionTitle}>How Bazaaro Works</Text>
        
        <View style={styles.featuresContainer}>
          <View style={styles.featureCard}>
            <View style={styles.featureIconContainer}>
              <Search size={28} color="#667eea" />
            </View>
            <Text style={styles.featureTitle}>Search Item</Text>
            <Text style={styles.featureDescription}>
              Type what you need and we'll find local stores with it in stock
            </Text>
            <Image
              source={{ uri: 'https://images.pexels.com/photos/4386321/pexels-photo-4386321.jpeg?auto=compress&cs=tinysrgb&w=300' }}
              style={styles.featureImage}
              resizeMode="cover"
            />
          </View>
          
          <View style={styles.featureCard}>
            <View style={styles.featureIconContainer}>
              <Star size={28} color="#667eea" />
            </View>
            <Text style={styles.featureTitle}>Get Offers</Text>
            <Text style={styles.featureDescription}>
              Nearby stores respond with prices, ratings, and availability
            </Text>
            <Image
              source={{ uri: 'https://images.pexels.com/photos/5632402/pexels-photo-5632402.jpeg?auto=compress&cs=tinysrgb&w=300' }}
              style={styles.featureImage}
              resizeMode="cover"
            />
          </View>
          
          <View style={styles.featureCard}>
            <View style={styles.featureIconContainer}>
              <MapPin size={28} color="#667eea" />
            </View>
            <Text style={styles.featureTitle}>Find & Go</Text>
            <Text style={styles.featureDescription}>
              Choose the best offer and get directions to the store
            </Text>
            <Image
              source={{ uri: 'https://images.pexels.com/photos/1267338/pexels-photo-1267338.jpeg?auto=compress&cs=tinysrgb&w=300' }}
              style={styles.featureImage}
              resizeMode="cover"
            />
          </View>
        </View>
      </View>

      <View style={styles.benefitsSection}>
        <Text style={styles.sectionTitle}>Why Choose Bazaaro?</Text>
        
        <View style={styles.benefitsGrid}>
          <View style={styles.benefitItem}>
            <Zap size={24} color="#10b981" />
            <Text style={styles.benefitTitle}>Instant Results</Text>
            <Text style={styles.benefitText}>Get real-time inventory updates</Text>
          </View>
          
          <View style={styles.benefitItem}>
            <Shield size={24} color="#3b82f6" />
            <Text style={styles.benefitTitle}>Verified Stores</Text>
            <Text style={styles.benefitText}>All stores are verified and rated</Text>
          </View>
          
          <View style={styles.benefitItem}>
            <Clock size={24} color="#f59e0b" />
            <Text style={styles.benefitTitle}>Save Time</Text>
            <Text style={styles.benefitText}>No more calling stores individually</Text>
          </View>
          
          <View style={styles.benefitItem}>
            <MapPin size={24} color="#ef4444" />
            <Text style={styles.benefitTitle}>Local Focus</Text>
            <Text style={styles.benefitText}>Support your local community</Text>
          </View>
        </View>
      </View>

      <LinearGradient
        colors={['#667eea', '#764ba2']}
        style={styles.ctaSection}
      >
        <Text style={styles.ctaTitle}>Ready to Start Shopping?</Text>
        <Text style={styles.ctaSubtitle}>Join thousands of happy customers</Text>
        
        <TouchableOpacity
          style={styles.getStartedButton}
          onPress={() => router.push('/auth')}
        >
          <Text style={styles.getStartedButtonText}>Get Started</Text>
          <ShoppingBag size={20} color="#667eea" style={{ marginLeft: 8 }} />
        </TouchableOpacity>
        
        <View style={styles.socialProof}>
          <View style={styles.avatarGroup}>
            <Image
              source={{ uri: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=100' }}
              style={[styles.avatar, { zIndex: 3 }]}
            />
            <Image
              source={{ uri: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=100' }}
              style={[styles.avatar, { marginLeft: -15, zIndex: 2 }]}
            />
            <Image
              source={{ uri: 'https://images.pexels.com/photos/1130626/pexels-photo-1130626.jpeg?auto=compress&cs=tinysrgb&w=100' }}
              style={[styles.avatar, { marginLeft: -15, zIndex: 1 }]}
            />
          </View>
          <Text style={styles.socialProofText}>Join 50,000+ happy users</Text>
        </View>
      </LinearGradient>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f9fa',
  },
  heroSection: {
    paddingTop: 60,
    paddingBottom: 40,
  },
  content: {
    paddingHorizontal: 20,
  },
  header: {
    alignItems: 'center',
    marginBottom: 30,
  },
  logoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  logoIcon: {
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 12,
  },
  logo: {
    fontSize: 32,
    fontFamily: 'Inter-Bold',
    color: '#fff',
  },
  tagline: {
    fontSize: 24,
    fontFamily: 'Inter-Bold',
    color: '#fff',
    textAlign: 'center',
    marginBottom: 12,
  },
  description: {
    fontSize: 16,
    fontFamily: 'Inter-Regular',
    color: '#fff',
    textAlign: 'center',
    opacity: 0.9,
    lineHeight: 24,
  },
  heroImageContainer: {
    position: 'relative',
    borderRadius: 20,
    overflow: 'hidden',
    marginTop: 20,
  },
  heroImage: {
    width: '100%',
    height: 200,
  },
  heroOverlay: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
    padding: 20,
  },
  heroStats: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  statItem: {
    alignItems: 'center',
  },
  statNumber: {
    fontSize: 20,
    fontFamily: 'Inter-Bold',
    color: '#fff',
  },
  statLabel: {
    fontSize: 12,
    fontFamily: 'Inter-Regular',
    color: '#fff',
    opacity: 0.9,
    marginTop: 4,
  },
  featuresSection: {
    padding: 20,
  },
  sectionTitle: {
    fontSize: 24,
    fontFamily: 'Inter-Bold',
    color: '#1a1a1a',
    textAlign: 'center',
    marginBottom: 30,
  },
  featuresContainer: {
    gap: 20,
  },
  featureCard: {
    backgroundColor: '#fff',
    borderRadius: 20,
    padding: 24,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 12,
    elevation: 6,
  },
  featureIconContainer: {
    width: 56,
    height: 56,
    borderRadius: 28,
    backgroundColor: '#f0f4ff',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 16,
  },
  featureTitle: {
    fontSize: 20,
    fontFamily: 'Inter-Bold',
    color: '#1a1a1a',
    marginBottom: 8,
  },
  featureDescription: {
    fontSize: 16,
    fontFamily: 'Inter-Regular',
    color: '#666',
    lineHeight: 24,
    marginBottom: 16,
  },
  featureImage: {
    width: '100%',
    height: 120,
    borderRadius: 12,
  },
  benefitsSection: {
    padding: 20,
    backgroundColor: '#f8f9fa',
  },
  benefitsGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  benefitItem: {
    width: (width - 60) / 2,
    backgroundColor: '#fff',
    borderRadius: 16,
    padding: 20,
    alignItems: 'center',
    marginBottom: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 4,
  },
  benefitTitle: {
    fontSize: 16,
    fontFamily: 'Inter-SemiBold',
    color: '#1a1a1a',
    marginTop: 12,
    marginBottom: 4,
  },
  benefitText: {
    fontSize: 14,
    fontFamily: 'Inter-Regular',
    color: '#666',
    textAlign: 'center',
  },
  ctaSection: {
    padding: 40,
    alignItems: 'center',
  },
  ctaTitle: {
    fontSize: 28,
    fontFamily: 'Inter-Bold',
    color: '#fff',
    textAlign: 'center',
    marginBottom: 8,
  },
  ctaSubtitle: {
    fontSize: 16,
    fontFamily: 'Inter-Regular',
    color: '#fff',
    opacity: 0.9,
    textAlign: 'center',
    marginBottom: 30,
  },
  getStartedButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 16,
    paddingVertical: 18,
    paddingHorizontal: 32,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 12,
    elevation: 8,
    marginBottom: 30,
  },
  getStartedButtonText: {
    fontSize: 18,
    fontFamily: 'Inter-Bold',
    color: '#667eea',
  },
  socialProof: {
    alignItems: 'center',
  },
  avatarGroup: {
    flexDirection: 'row',
    marginBottom: 12,
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
    borderWidth: 2,
    borderColor: '#fff',
  },
  socialProofText: {
    fontSize: 14,
    fontFamily: 'Inter-Medium',
    color: '#fff',
    opacity: 0.9,
  },
});