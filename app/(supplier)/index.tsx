import { View, Text, StyleSheet, TouchableOpacity, ScrollView, Dimensions } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Store, Package, Eye, TrendingUp, DollarSign, Users, Bell, Settings } from 'lucide-react-native';
import { useRouter } from 'expo-router';

const { width } = Dimensions.get('window');

const recentOrders = [
  { id: 1, customer: 'John Doe', item: 'iPhone 16 Pro Max', amount: '₹2,15,000', status: 'pending' },
  { id: 2, customer: 'Jane Smith', item: 'Samsung Galaxy S24', amount: '₹85,000', status: 'completed' },
  { id: 3, customer: 'Mike Johnson', item: 'MacBook Pro', amount: '₹1,50,000', status: 'pending' },
];

export default function SupplierDashboard() {
  const router = useRouter();

  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      <LinearGradient
        colors={['#667eea', '#764ba2']}
        style={styles.header}
      >
        <View style={styles.headerContent}>
          <View style={styles.storeInfo}>
            <View style={styles.storeIcon}>
              <Store size={24} color="#fff" />
            </View>
            <View>
              <Text style={styles.storeName}>TechHub Electronics</Text>
              <Text style={styles.storeAddress}>Laxmi Nagar, Delhi</Text>
            </View>
          </View>
          <View style={styles.headerActions}>
            <TouchableOpacity style={styles.headerButton}>
              <Bell size={20} color="#fff" />
            </TouchableOpacity>
            <TouchableOpacity style={styles.headerButton}>
              <Settings size={20} color="#fff" />
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.statsContainer}>
          <View style={styles.stat}>
            <DollarSign size={20} color="#fff" />
            <Text style={styles.statNumber}>₹45,200</Text>
            <Text style={styles.statLabel}>Today's Sales</Text>
          </View>
          <View style={styles.stat}>
            <Package size={20} color="#fff" />
            <Text style={styles.statNumber}>156</Text>
            <Text style={styles.statLabel}>Total Products</Text>
          </View>
          <View style={styles.stat}>
            <Eye size={20} color="#fff" />
            <Text style={styles.statNumber}>24</Text>
            <Text style={styles.statLabel}>Views Today</Text>
          </View>
        </View>
      </LinearGradient>

      <View style={styles.content}>
        <View style={styles.quickActions}>
          <TouchableOpacity
            style={styles.quickAction}
            onPress={() => router.push('/(supplier)/add-product')}
          >
            <View style={styles.quickActionIcon}>
              <Package size={24} color="#667eea" />
            </View>
            <Text style={styles.quickActionText}>Add Product</Text>
          </TouchableOpacity>
          
          <TouchableOpacity
            style={styles.quickAction}
            onPress={() => router.push('/(supplier)/inventory')}
          >
            <View style={styles.quickActionIcon}>
              <Eye size={24} color="#667eea" />
            </View>
            <Text style={styles.quickActionText}>View Inventory</Text>
          </TouchableOpacity>
          
          <TouchableOpacity
            style={styles.quickAction}
            onPress={() => router.push('/(supplier)/analytics')}
          >
            <View style={styles.quickActionIcon}>
              <TrendingUp size={24} color="#667eea" />
            </View>
            <Text style={styles.quickActionText}>Analytics</Text>
          </TouchableOpacity>
          
          <TouchableOpacity style={styles.quickAction}>
            <View style={styles.quickActionIcon}>
              <Users size={24} color="#667eea" />
            </View>
            <Text style={styles.quickActionText}>Customer Queries</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Recent Customer Inquiries</Text>
          
          {recentOrders.map((order) => (
            <View key={order.id} style={styles.orderCard}>
              <View style={styles.orderHeader}>
                <Text style={styles.customerName}>{order.customer}</Text>
                <Text style={[styles.orderStatus, { 
                  color: order.status === 'completed' ? '#10b981' : '#f59e0b',
                  backgroundColor: order.status === 'completed' ? '#ecfdf5' : '#fef3c7'
                }]}>
                  {order.status}
                </Text>
              </View>
              <Text style={styles.orderItem}>{order.item}</Text>
              <Text style={styles.orderAmount}>{order.amount}</Text>
            </View>
          ))}
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Top Performing Products</Text>
          
          <View style={styles.productCard}>
            <View style={styles.productRank}>
              <Text style={styles.rankNumber}>1</Text>
            </View>
            <View style={styles.productInfo}>
              <Text style={styles.productName}>iPhone 16 Pro Max</Text>
              <Text style={styles.productViews}>128 views this week</Text>
            </View>
            <Text style={styles.productPrice}>₹2,15,000</Text>
          </View>
          
          <View style={styles.productCard}>
            <View style={styles.productRank}>
              <Text style={styles.rankNumber}>2</Text>
            </View>
            <View style={styles.productInfo}>
              <Text style={styles.productName}>Samsung Galaxy S24</Text>
              <Text style={styles.productViews}>95 views this week</Text>
            </View>
            <Text style={styles.productPrice}>₹85,000</Text>
          </View>
          
          <View style={styles.productCard}>
            <View style={styles.productRank}>
              <Text style={styles.rankNumber}>3</Text>
            </View>
            <View style={styles.productInfo}>
              <Text style={styles.productName}>MacBook Pro M3</Text>
              <Text style={styles.productViews}>87 views this week</Text>
            </View>
            <Text style={styles.productPrice}>₹1,50,000</Text>
          </View>
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
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 24,
  },
  storeInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  storeIcon: {
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 12,
  },
  storeName: {
    fontSize: 18,
    fontFamily: 'Inter-Bold',
    color: '#fff',
  },
  storeAddress: {
    fontSize: 14,
    fontFamily: 'Inter-Regular',
    color: '#fff',
    opacity: 0.9,
  },
  headerActions: {
    flexDirection: 'row',
    gap: 12,
  },
  headerButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  statsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    borderRadius: 16,
    paddingVertical: 20,
    paddingHorizontal: 16,
  },
  stat: {
    alignItems: 'center',
    flex: 1,
  },
  statNumber: {
    fontSize: 18,
    fontFamily: 'Inter-Bold',
    color: '#fff',
    marginTop: 8,
  },
  statLabel: {
    fontSize: 12,
    fontFamily: 'Inter-Regular',
    color: '#fff',
    opacity: 0.9,
    marginTop: 4,
  },
  content: {
    padding: 20,
  },
  quickActions: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    marginBottom: 32,
  },
  quickAction: {
    width: (width - 60) / 2,
    backgroundColor: '#fff',
    borderRadius: 16,
    padding: 20,
    alignItems: 'center',
    marginBottom: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  quickActionIcon: {
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: '#f0f0f0',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 12,
  },
  quickActionText: {
    fontSize: 14,
    fontFamily: 'Inter-SemiBold',
    color: '#1a1a1a',
    textAlign: 'center',
  },
  section: {
    marginBottom: 32,
  },
  sectionTitle: {
    fontSize: 20,
    fontFamily: 'Inter-Bold',
    color: '#1a1a1a',
    marginBottom: 16,
  },
  orderCard: {
    backgroundColor: '#fff',
    borderRadius: 16,
    padding: 20,
    marginBottom: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  orderHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 8,
  },
  customerName: {
    fontSize: 16,
    fontFamily: 'Inter-SemiBold',
    color: '#1a1a1a',
  },
  orderStatus: {
    fontSize: 12,
    fontFamily: 'Inter-Medium',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 8,
    textTransform: 'capitalize',
  },
  orderItem: {
    fontSize: 14,
    fontFamily: 'Inter-Regular',
    color: '#666',
    marginBottom: 4,
  },
  orderAmount: {
    fontSize: 16,
    fontFamily: 'Inter-Bold',
    color: '#667eea',
  },
  productCard: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 16,
    padding: 16,
    marginBottom: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  productRank: {
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: '#667eea',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 16,
  },
  rankNumber: {
    fontSize: 14,
    fontFamily: 'Inter-Bold',
    color: '#fff',
  },
  productInfo: {
    flex: 1,
  },
  productName: {
    fontSize: 16,
    fontFamily: 'Inter-SemiBold',
    color: '#1a1a1a',
    marginBottom: 4,
  },
  productViews: {
    fontSize: 12,
    fontFamily: 'Inter-Regular',
    color: '#666',
  },
  productPrice: {
    fontSize: 16,
    fontFamily: 'Inter-Bold',
    color: '#667eea',
  },
});