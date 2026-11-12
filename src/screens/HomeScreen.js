import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
  TouchableOpacity,
  StatusBar,
  FlatList,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { COLORS, SHADOWS } from '../constants/theme';
import { AVATARS, TASKS, CURRENT_TASK } from '../constants/data';
import TaskCard from '../components/TaskCard';
import CurrentTaskCard from '../components/CurrentTaskCard';
import AvatarGroup from '../components/AvatarGroup';

const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor={COLORS.background} />
      <ScrollView
        style={styles.scrollView}
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        {/* Header */}
        <View style={styles.header}>
          <View style={styles.headerLeft}>
            <Image
              source={{ uri: AVATARS.brandon }}
              style={styles.profileImage}
            />
            <View style={styles.headerInfo}>
              <Text style={styles.userName}>Brandon Logan</Text>
              <View style={styles.pointsBadge}>
                <Ionicons name="checkmark-circle" size={14} color={COLORS.white} />
                <Text style={styles.pointsText}>1,265.00</Text>
              </View>
            </View>
          </View>
          <TouchableOpacity style={styles.notificationButton}>
            <Ionicons name="notifications-outline" size={24} color={COLORS.black} />
          </TouchableOpacity>
        </View>

        {/* Hero Text */}
        <View style={styles.heroSection}>
          <Text style={styles.heroText}>
            Start Your Day{'\n'}& Be Productive<Text style={styles.emoji}>✌️</Text>
          </Text>
        </View>

        {/* Task Cards Horizontal Scroll */}
        <FlatList
          data={TASKS}
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.taskCardsContainer}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <TaskCard
              task={item}
              onPress={() => navigation.navigate('TaskDetail')}
            />
          )}
        />

        {/* My Current Task */}
        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>My Current Task</Text>
        </View>
        <View style={styles.currentTaskContainer}>
          <CurrentTaskCard
            task={CURRENT_TASK}
            onPress={() => navigation.navigate('TaskDetail')}
          />
        </View>

        {/* Notes & Projects section hint (partially visible in design) */}
        <View style={styles.bottomHintContainer}>
          <View style={styles.bottomHintRow}>
            <TouchableOpacity style={styles.bottomHintTab}>
              <Text style={styles.bottomHintText}>Notes</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.bottomHintTab}>
              <Text style={styles.bottomHintText}>Projects</Text>
            </TouchableOpacity>
          </View>
          <Text style={styles.bottomHintTime}>12:00 PM...</Text>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
  },
  scrollView: {
    flex: 1,
  },
  scrollContent: {
    paddingTop: 60,
    paddingBottom: 100,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    marginBottom: 24,
  },
  headerLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  profileImage: {
    width: 48,
    height: 48,
    borderRadius: 24,
  },
  headerInfo: {
    gap: 4,
  },
  userName: {
    fontSize: 16,
    fontWeight: '700',
    color: COLORS.black,
  },
  pointsBadge: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: COLORS.primary,
    borderRadius: 12,
    paddingHorizontal: 10,
    paddingVertical: 3,
    gap: 4,
    alignSelf: 'flex-start',
  },
  pointsText: {
    fontSize: 11,
    fontWeight: '700',
    color: COLORS.white,
  },
  notificationButton: {
    width: 44,
    height: 44,
    borderRadius: 22,
    alignItems: 'center',
    justifyContent: 'center',
  },
  heroSection: {
    paddingHorizontal: 20,
    marginBottom: 24,
  },
  heroText: {
    fontSize: 30,
    fontWeight: '800',
    color: COLORS.black,
    lineHeight: 40,
  },
  emoji: {
    fontSize: 28,
  },
  taskCardsContainer: {
    paddingLeft: 20,
    paddingRight: 8,
    paddingBottom: 4,
  },
  sectionHeader: {
    paddingHorizontal: 20,
    marginTop: 24,
    marginBottom: 14,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: '700',
    color: COLORS.black,
  },
  currentTaskContainer: {
    paddingHorizontal: 20,
  },
  bottomHintContainer: {
    paddingHorizontal: 20,
    marginTop: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  bottomHintRow: {
    flexDirection: 'row',
    gap: 16,
  },
  bottomHintTab: {
    backgroundColor: COLORS.grayLight,
    borderRadius: 16,
    paddingHorizontal: 16,
    paddingVertical: 8,
  },
  bottomHintText: {
    fontSize: 13,
    fontWeight: '600',
    color: COLORS.gray,
  },
  bottomHintTime: {
    fontSize: 13,
    color: COLORS.gray,
  },
});

export default HomeScreen;

