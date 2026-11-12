import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  TextInput,
  StatusBar,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { COLORS, SHADOWS } from '../constants/theme';
import { CALENDAR_TASKS, DAYS_OF_WEEK } from '../constants/data';
import CalendarTaskCard from '../components/CalendarTaskCard';

const CalendarScreen = ({ navigation }) => {
  const [selectedDay, setSelectedDay] = useState(15);

  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" />
      <ScrollView
        style={styles.scrollView}
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        {/* Header */}
        <View style={styles.header}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Ionicons name="chevron-back" size={24} color={COLORS.black} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.monthSelector}>
            <Ionicons name="calendar-outline" size={18} color={COLORS.black} />
            <Text style={styles.monthText}>Dec 2025</Text>
          </TouchableOpacity>
        </View>

        {/* Search Bar */}
        <View style={styles.searchContainer}>
          <Ionicons name="search-outline" size={20} color={COLORS.grayMedium} />
          <TextInput
            style={styles.searchInput}
            placeholder="Search your daily t..."
            placeholderTextColor={COLORS.grayMedium}
          />
        </View>

        {/* Day Selector */}
        <View style={styles.daySelector}>
          {DAYS_OF_WEEK.map((item) => (
            <TouchableOpacity
              key={item.date}
              style={[
                styles.dayItem,
                selectedDay === item.date && styles.dayItemSelected,
              ]}
              onPress={() => setSelectedDay(item.date)}
            >
              <Text
                style={[
                  styles.dayLabel,
                  selectedDay === item.date && styles.dayLabelSelected,
                ]}
              >
                {item.day}
              </Text>
              <Text
                style={[
                  styles.dayDate,
                  selectedDay === item.date && styles.dayDateSelected,
                ]}
              >
                {item.date}
              </Text>
            </TouchableOpacity>
          ))}
        </View>

        {/* My Today Task Header */}
        <View style={styles.todayHeader}>
          <Text style={styles.todayTitle}>My Today Task</Text>
          <View style={styles.taskCountBadge}>
            <Text style={styles.taskCountText}>02</Text>
          </View>
        </View>

        {/* Timeline */}
        <View style={styles.timeline}>
          {CALENDAR_TASKS.map((task, index) => (
            <View key={task.id} style={styles.timelineItem}>
              {/* Time label */}
              <View style={styles.timelineTimeContainer}>
                <Text style={styles.timelineTime}>{task.timelineTime}</Text>
              </View>

              {/* Timeline line & dot */}
              <View style={styles.timelineLine}>
                <View
                  style={[
                    styles.timelineDot,
                    task.isHighlighted && styles.timelineDotActive,
                  ]}
                />
                {index < CALENDAR_TASKS.length - 1 && (
                  <View style={styles.timelineConnector} />
                )}
              </View>

              {/* Task Card */}
              <CalendarTaskCard
                task={task}
                onPress={() => navigation.navigate('TaskDetail')}
              />
            </View>
          ))}
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
    marginBottom: 20,
  },
  monthSelector: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
    backgroundColor: COLORS.white,
    borderRadius: 20,
    paddingHorizontal: 16,
    paddingVertical: 8,
    ...SHADOWS.small,
  },
  monthText: {
    fontSize: 14,
    fontWeight: '600',
    color: COLORS.black,
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: COLORS.white,
    borderRadius: 16,
    paddingHorizontal: 16,
    paddingVertical: 12,
    marginHorizontal: 20,
    marginBottom: 20,
    gap: 10,
    ...SHADOWS.small,
  },
  searchInput: {
    flex: 1,
    fontSize: 14,
    color: COLORS.black,
  },
  daySelector: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    marginBottom: 24,
  },
  dayItem: {
    alignItems: 'center',
    paddingVertical: 10,
    paddingHorizontal: 12,
    borderRadius: 16,
    borderWidth: 1,
    borderColor: COLORS.border,
    backgroundColor: COLORS.white,
    minWidth: 48,
  },
  dayItemSelected: {
    backgroundColor: COLORS.primary,
    borderColor: COLORS.primary,
  },
  dayLabel: {
    fontSize: 11,
    fontWeight: '500',
    color: COLORS.gray,
    marginBottom: 6,
  },
  dayLabelSelected: {
    color: COLORS.white,
  },
  dayDate: {
    fontSize: 16,
    fontWeight: '700',
    color: COLORS.black,
  },
  dayDateSelected: {
    color: COLORS.white,
  },
  todayHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
    marginBottom: 20,
    gap: 10,
  },
  todayTitle: {
    fontSize: 20,
    fontWeight: '700',
    color: COLORS.primary,
  },
  taskCountBadge: {
    backgroundColor: COLORS.primary,
    borderRadius: 10,
    paddingHorizontal: 8,
    paddingVertical: 2,
  },
  taskCountText: {
    fontSize: 11,
    fontWeight: '700',
    color: COLORS.white,
  },
  timeline: {
    paddingHorizontal: 20,
  },
  timelineItem: {
    flexDirection: 'row',
    marginBottom: 24,
  },
  timelineTimeContainer: {
    width: 45,
    paddingTop: 4,
  },
  timelineTime: {
    fontSize: 13,
    color: COLORS.gray,
    fontWeight: '500',
  },
  timelineLine: {
    width: 20,
    alignItems: 'center',
  },
  timelineDot: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: COLORS.border,
    marginTop: 6,
  },
  timelineDotActive: {
    backgroundColor: COLORS.primary,
  },
  timelineConnector: {
    width: 2,
    flex: 1,
    backgroundColor: COLORS.border,
    marginTop: 4,
  },
});

export default CalendarScreen;

