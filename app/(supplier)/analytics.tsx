import { View, Text, StyleSheet, TouchableOpacity, ScrollView, Dimensions } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { ArrowLeft, TrendingUp, Eye, DollarSign, Users, Calendar } from 'lucide-react-native';
import { useRouter } from 'expo-router';

const { width } = Dimensions.get('window');

export default function AnalyticsScreen() {
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
          <Text style={styles.headerTitle}>Analytics</Text>
          <View style={styles.placeholder} />
        </View>
        
        <View style={styles.periodSelector}>
          <TouchableOpacity style={[styles.periodButton, styles.periodButtonActive]}>
            <Text style={[styles.periodText, styles.periodTextActive]}>7 Days</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.periodButton}>
            <Text style={styles.periodText}>30 Days</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.periodButton}>
            <Text style={styles.periodText}>90 Days</Text>
          </TouchableOpacity>
        </View>
      </LinearGradient>

      <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
        <View style={styles.metricsGrid}>
          <View style={styles.metricCard}>
            <View style={styles.metricHeader}>
              <View style={[styles.metricIcon, { backgroundColor: '#e1f5fe' }]}>
                <Eye size={24} color="#0277bd" />
              </View>
              <Text style={styles.metricChange}>+12%</Text>
            </View>
            <Text style={styles.metricValue}>1,234</Text>
            <Text style={styles.metricLabel}>Total Views</Text>
          </View>

          <View style={styles.metricCard}>
            <View style={styles.metricHeader}>
              <View style={[styles.metricIcon, { backgroundColor: '#e8f5e8' }]}>
                <DollarSign size={24} color="#2e7d32" />
              </View>
              <Text style={styles.metricChange}>+25%</Text>
            </View>
            <Text style={styles.metricValue}>₹45,200</Text>
            <Text style={styles.metricLabel}>Revenue</Text>
          </View>

          <View style={styles.metricCard}>
            <View style={styles.metricHeader}>
              <View style={[styles.metricIcon, { backgroundColor: '#fff3e0' }]}>
                <Users size={24} color="#ef6c00" />
              </View>
              <Text style={styles.metricChange}>+8%</Text>
            </View>
            <Text style={styles.metricValue}>89</Text>
            <Text style={styles.metricLabel}>Customer Inquiries</Text>
          </View>

          <View style={styles.metricCard}>
            <View style={styles.metricHeader}>
              <View style={[styles.metricIcon, { backgroundColor: '#f3e5f5' }]}>
                <TrendingUp size={24} color="#7b1fa2" />
              </View>
              <Text style={styles.metricChange}>+15%</Text>
            </View>
            <Text style={styles.metricValue}>67%</Text>
            <Text style={styles.metricLabel}>Conversion Rate</Text>
          </View>
        </View>

        <View style={styles.chartSection}>
          <Text style={styles.sectionTitle}>Sales Trend</Text>
          <View style={styles.chartPlaceholder}>
            <TrendingUp size={48} color="#667eea" />
            <Text style={styles.chartText}>Sales Chart</Text>
            <Text style={styles.chartSubtext}>Interactive chart coming soon</Text>
          </View>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Top Performing Products</Text>
          
          <View style={styles.productRankings}>
            <View style={styles.productRank}>
              <View style={styles.rankNumber}>
                <Text style={styles.rankText}>1</Text>
              </View>
              <View style={styles.productInfo}>
                <Text style={styles.productName}>iPhone 16 Pro Max</Text>
                <Text style={styles.productMetric}>128 views • 12 inquiries</Text>
              </View>
              <Text style={styles.productRevenue}>₹25,800</Text>
            </View>

            <View style={styles.productRank}>
              <View style={styles.rankNumber}>
                <Text style={styles.rankText}>2</Text>
              </View>
              <View style={styles.productInfo}>
                <Text style={styles.productName}>Samsung Galaxy S24</Text>
                <Text style={styles.productMetric}>95 views • 8 inquiries</Text>
              </View>
              <Text style={styles.productRevenue}>₹17,000</Text>
            </View>

            <View style={styles.productRank}>
              <View style={styles.rankNumber}>
                <Text style={styles.rankText}>3</Text>
              </View>
              <View style={styles.productInfo}>
                <Text style={styles.productName}>MacBook Pro M3</Text>
                <Text style={styles.productMetric}>87 views • 5 inquiries</Text>
              </View>
              <Text style={styles.productRevenue}>₹15,000</Text>
            </View>
          </View>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Customer Insights</Text>
          
          <View style={styles.insightsGrid}>
            <View style={styles.insightCard}>
              <Text style={styles.insightTitle}>Peak Hours</Text>
              <Text style={styles.insightValue}>2 PM - 6 PM</Text>
              <Text style={styles.insightDescription}>Most customer activity</Text>
            </View>

            <View style={styles.insightCard}>
              <Text style={styles.insightTitle}>Popular Category</Text>
              <Text style={styles.insightValue}>Electronics</Text>
              <Text style={styles.insightDescription}>78% of total views</Text>
            </View>

            <View style={styles.insightCard}>
              <Text style={styles.insightTitle}>Avg. Response Time</Text>
              <Text style={styles.insightValue}>2.5 hours</Text>
              <Text style={styles.insightDescription}>Customer inquiries</Text>
            </View>

            <View style={styles.insightCard}>
              <Text style={styles.insightTitle}>Return Customers</Text>
              <Text style={styles.insightValue}>34%</Text>
              <Text style={styles.insightDescription}>Repeat inquiries</Text>
            </View>
          </View>
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
    fontSize: 24,
    fontFamily: 'Inter-Bold',
    color: '#fff',
  },
  placeholder: {
    width: 40,
  },
  periodSelector: {
    flexDirection: 'row',
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    borderRadius: 12,
    padding: 4,
  },
  periodButton: {
    flex: 1,
    paddingVertical: 8,
    alignItems: 'center',
    borderRadius: 8,
  },
  periodButtonActive: {
    backgroundColor: '#fff',
  },
  periodText: {
    fontSize: 14,
    fontFamily: 'Inter-Medium',
    color: '#fff',
  },
  periodTextActive: {
    color: '#667eea',
  },
  content: {
    flex: 1,
    padding: 20,
  },
  metricsGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    marginBottom: 32,
  },
  metricCard: {
    width: (width - 60) / 2,
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
  metricHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  metricIcon: {
    width: 48,
    height: 48,
    borderRadius: 24,
    alignItems: 'center',
    justifyContent: 'center',
  },
  metricChange: {
    fontSize: 12,
    fontFamily: 'Inter-SemiBold',
    color: '#10b981',
  },
  metricValue: {
    fontSize: 24,
    fontFamily: 'Inter-Bold',
    color: '#1a1a1a',
    marginBottom: 4,
  },
  metricLabel: {
    fontSize: 14,
    fontFamily: 'Inter-Regular',
    color: '#666',
  },
  chartSection: {
    marginBottom: 32,
  },
  sectionTitle: {
    fontSize: 20,
    fontFamily: 'Inter-Bold',
    color: '#1a1a1a',
    marginBottom: 16,
  },
  chartPlaceholder: {
    backgroundColor: '#fff',
    borderRadius: 16,
    padding: 40,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  chartText: {
    fontSize: 18,
    fontFamily: 'Inter-SemiBold',
    color: '#1a1a1a',
    marginTop: 12,
    marginBottom: 4,
  },
  chartSubtext: {
    fontSize: 14,
    fontFamily: 'Inter-Regular',
    color: '#666',
  },
  section: {
    marginBottom: 32,
  },
  productRankings: {
    backgroundColor: '#fff',
    borderRadius: 16,
    padding: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  productRank: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#f0f0f0',
  },
  rankNumber: {
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: '#667eea',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 16,
  },
  rankText: {
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
  productMetric: {
    fontSize: 12,
    fontFamily: 'Inter-Regular',
    color: '#666',
  },
  productRevenue: {
    fontSize: 16,
    fontFamily: 'Inter-Bold',
    color: '#667eea',
  },
  insightsGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  insightCard: {
    width: (width - 60) / 2,
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
  insightTitle: {
    fontSize: 14,
    fontFamily: 'Inter-Medium',
    color: '#666',
    marginBottom: 8,
  },
  insightValue: {
    fontSize: 20,
    fontFamily: 'Inter-Bold',
    color: '#1a1a1a',
    marginBottom: 4,
  },
  insightDescription: {
    fontSize: 12,
    fontFamily: 'Inter-Regular',
    color: '#666',
  },
});