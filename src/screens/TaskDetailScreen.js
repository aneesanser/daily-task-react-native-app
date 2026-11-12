import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  StatusBar,
  Image,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { COLORS, SHADOWS } from '../constants/theme';
import { TASK_DETAIL } from '../constants/data';
import AvatarGroup from '../components/AvatarGroup';
import CircularProgress from '../components/CircularProgress';

const TaskDetailScreen = ({ navigation }) => {
  const [subtasks, setSubtasks] = useState(TASK_DETAIL.subtasks);
  const [expandedTask, setExpandedTask] = useState(null);

  const toggleSubtask = (id) => {
    setSubtasks(prev =>
      prev.map(task =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

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
          <TouchableOpacity
            onPress={() => navigation.goBack()}
            style={styles.backButton}
          >
            <Ionicons name="chevron-back" size={24} color={COLORS.black} />
          </TouchableOpacity>
          <View style={styles.headerRight}>
            <TouchableOpacity style={styles.menuButton}>
              <Ionicons name="ellipsis-horizontal" size={20} color={COLORS.black} />
            </TouchableOpacity>
            <TouchableOpacity style={styles.saveButton}>
              <Text style={styles.saveButtonText}>Save</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* Task Title */}
        <View style={styles.taskTitleSection}>
          <View style={styles.taskIconContainer}>
            <Ionicons name="clipboard-outline" size={20} color={COLORS.white} />
          </View>
          <View style={styles.taskTitleInfo}>
            <Text style={styles.taskTitleLabel}>Task Title</Text>
            <Text style={styles.taskTitleText}>{TASK_DETAIL.title}</Text>
          </View>
          <TouchableOpacity style={styles.editButton}>
            <Ionicons name="create-outline" size={20} color={COLORS.primary} />
          </TouchableOpacity>
        </View>

        {/* Team Members */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Team Members</Text>
          <View style={styles.teamMembersRow}>
            <AvatarGroup
              avatars={TASK_DETAIL.teamMembers}
              size={40}
              overlap={12}
            />
            <TouchableOpacity style={styles.moreButton}>
              <Text style={styles.moreButtonText}>+{TASK_DETAIL.extraMembers} More</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* Description */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Description</Text>
          <Text style={styles.descriptionText}>{TASK_DETAIL.description}</Text>
        </View>

        {/* Task Progress */}
        <View style={styles.progressSection}>
          <View style={styles.progressHeader}>
            <View style={styles.progressLeft}>
              <View style={styles.progressIconContainer}>
                <Ionicons name="list-outline" size={18} color={COLORS.primary} />
              </View>
              <View>
                <Text style={styles.progressTitle}>Task Progress</Text>
                <Text style={styles.progressSubtitle}>Track and complete tasks</Text>
              </View>
            </View>
            <CircularProgress
              size={48}
              strokeWidth={4}
              progress={TASK_DETAIL.progress}
              color={COLORS.primary}
              textSize={11}
              fontWeight="700"
            />
          </View>

          {/* Subtasks */}
          <View style={styles.subtasksList}>
            {subtasks.map((subtask) => (
              <TouchableOpacity
                key={subtask.id}
                style={styles.subtaskItem}
                onPress={() => toggleSubtask(subtask.id)}
                activeOpacity={0.7}
              >
                <View style={styles.subtaskLeft}>
                  <View
                    style={[
                      styles.checkbox,
                      subtask.completed && styles.checkboxChecked,
                    ]}
                  >
                    {subtask.completed && (
                      <Ionicons name="checkmark" size={14} color={COLORS.white} />
                    )}
                  </View>
                  <Text
                    style={[
                      styles.subtaskTitle,
                      subtask.completed && styles.subtaskTitleCompleted,
                    ]}
                  >
                    {subtask.title}
                  </Text>
                </View>
                <TouchableOpacity
                  onPress={() =>
                    setExpandedTask(expandedTask === subtask.id ? null : subtask.id)
                  }
                >
                  <Ionicons
                    name={
                      expandedTask === subtask.id
                        ? 'chevron-up'
                        : 'chevron-down'
                    }
                    size={20}
                    color={COLORS.grayMedium}
                  />
                </TouchableOpacity>
              </TouchableOpacity>
            ))}
          </View>
        </View>

        {/* Location */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Location</Text>
          <TouchableOpacity style={styles.locationCard}>
            <View style={styles.locationContent}>
              <Text style={styles.locationIcon}>📍</Text>
              <Text style={styles.locationText} numberOfLines={1}>
                {TASK_DETAIL.location}
              </Text>
            </View>
          </TouchableOpacity>
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
    paddingBottom: 40,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    marginBottom: 24,
  },
  backButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerRight: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  menuButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  saveButton: {
    backgroundColor: COLORS.primary,
    borderRadius: 20,
    paddingHorizontal: 24,
    paddingVertical: 10,
  },
  saveButtonText: {
    color: COLORS.white,
    fontSize: 14,
    fontWeight: '700',
  },
  taskTitleSection: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
    marginBottom: 28,
    gap: 14,
  },
  taskIconContainer: {
    width: 48,
    height: 48,
    borderRadius: 14,
    backgroundColor: COLORS.primary,
    alignItems: 'center',
    justifyContent: 'center',
  },
  taskTitleInfo: {
    flex: 1,
  },
  taskTitleLabel: {
    fontSize: 12,
    color: COLORS.gray,
    fontWeight: '500',
    marginBottom: 2,
  },
  taskTitleText: {
    fontSize: 20,
    fontWeight: '700',
    color: COLORS.black,
  },
  editButton: {
    width: 40,
    height: 40,
    borderRadius: 12,
    backgroundColor: COLORS.primaryLight,
    alignItems: 'center',
    justifyContent: 'center',
  },
  section: {
    paddingHorizontal: 20,
    marginBottom: 24,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '700',
    color: COLORS.black,
    marginBottom: 14,
  },
  teamMembersRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 14,
  },
  moreButton: {
    backgroundColor: COLORS.primaryLight,
    borderRadius: 16,
    paddingHorizontal: 14,
    paddingVertical: 6,
  },
  moreButtonText: {
    fontSize: 12,
    fontWeight: '600',
    color: COLORS.primary,
  },
  descriptionText: {
    fontSize: 14,
    color: COLORS.gray,
    lineHeight: 22,
  },
  progressSection: {
    backgroundColor: COLORS.white,
    borderRadius: 20,
    padding: 18,
    marginHorizontal: 20,
    marginBottom: 24,
    ...SHADOWS.medium,
  },
  progressHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 18,
  },
  progressLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  progressIconContainer: {
    width: 40,
    height: 40,
    borderRadius: 12,
    backgroundColor: COLORS.primaryLight,
    alignItems: 'center',
    justifyContent: 'center',
  },
  progressTitle: {
    fontSize: 16,
    fontWeight: '700',
    color: COLORS.black,
  },
  progressSubtitle: {
    fontSize: 12,
    color: COLORS.gray,
    marginTop: 2,
  },
  subtasksList: {
    gap: 0,
  },
  subtaskItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 14,
    borderTopWidth: 1,
    borderTopColor: COLORS.grayLight,
  },
  subtaskLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  checkbox: {
    width: 24,
    height: 24,
    borderRadius: 12,
    borderWidth: 2,
    borderColor: COLORS.border,
    alignItems: 'center',
    justifyContent: 'center',
  },
  checkboxChecked: {
    backgroundColor: COLORS.primary,
    borderColor: COLORS.primary,
  },
  subtaskTitle: {
    fontSize: 15,
    fontWeight: '600',
    color: COLORS.black,
  },
  subtaskTitleCompleted: {
    color: COLORS.gray,
  },
  locationCard: {
    backgroundColor: COLORS.primary,
    borderRadius: 16,
    padding: 14,
  },
  locationContent: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  locationIcon: {
    fontSize: 16,
  },
  locationText: {
    fontSize: 13,
    color: COLORS.white,
    fontWeight: '500',
    flex: 1,
  },
});

export default TaskDetailScreen;

