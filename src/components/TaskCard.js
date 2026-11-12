import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { COLORS, SHADOWS } from '../constants/theme';
import CircularProgress from './CircularProgress';
import AvatarGroup from './AvatarGroup';

const TaskCard = ({ task, onPress, style }) => {
  return (
    <TouchableOpacity 
      style={[styles.card, style]} 
      onPress={onPress}
      activeOpacity={0.7}
    >
      <View style={styles.header}>
        <View style={styles.iconContainer}>
          <Ionicons name="chatbubble-outline" size={20} color={COLORS.grayMedium} />
        </View>
        <CircularProgress
          size={52}
          strokeWidth={4}
          progress={task.progress}
          color={COLORS.primary}
          textSize={12}
          fontWeight="700"
        />
      </View>

      <Text style={styles.title} numberOfLines={1}>{task.title}</Text>
      <Text style={styles.description} numberOfLines={2}>{task.description}</Text>

      <View style={styles.footer}>
        <AvatarGroup
          avatars={task.members}
          size={28}
          overlap={8}
        />
        <View style={styles.stats}>
          <View style={styles.statItem}>
            <Ionicons name="chatbubble-outline" size={14} color={COLORS.grayMedium} />
            <Text style={styles.statText}>{task.comments}</Text>
          </View>
          <View style={styles.statItem}>
            <Ionicons name="eye-outline" size={14} color={COLORS.grayMedium} />
            <Text style={styles.statText}>{task.views}</Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: COLORS.white,
    borderRadius: 20,
    padding: 16,
    width: 200,
    marginRight: 12,
    ...SHADOWS.medium,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: 12,
  },
  iconContainer: {
    width: 40,
    height: 40,
    borderRadius: 12,
    backgroundColor: COLORS.grayLight,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 16,
    fontWeight: '700',
    color: COLORS.black,
    marginBottom: 4,
  },
  description: {
    fontSize: 13,
    color: COLORS.gray,
    lineHeight: 18,
    marginBottom: 14,
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  stats: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  statItem: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 3,
  },
  statText: {
    fontSize: 12,
    color: COLORS.grayMedium,
    fontWeight: '500',
  },
});

export default TaskCard;

