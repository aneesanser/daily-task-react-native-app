import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { COLORS, SHADOWS } from '../constants/theme';
import AvatarGroup from './AvatarGroup';

const CalendarTaskCard = ({ task, onPress }) => {
  if (task.isHighlighted) {
    return (
      <TouchableOpacity 
        style={styles.highlightedCard} 
        onPress={onPress}
        activeOpacity={0.7}
      >
        <View style={styles.highlightedHeader}>
          <Text style={styles.highlightedTitle}>{task.title}</Text>
          <Text style={styles.highlightedTime}>{task.time}</Text>
        </View>
        <Text style={styles.highlightedDescription}>{task.description}</Text>
        <AvatarGroup
          avatars={task.members}
          size={30}
          extraCount={task.extraMembers}
          overlap={10}
        />
      </TouchableOpacity>
    );
  }

  return (
    <TouchableOpacity 
      style={styles.card} 
      onPress={onPress}
      activeOpacity={0.7}
    >
      <View style={styles.header}>
        <Text style={styles.title}>{task.title}</Text>
        <Text style={styles.time}>{task.time}</Text>
      </View>
      <Text style={styles.description}>{task.description}</Text>
      {task.members.length > 0 && (
        <AvatarGroup
          avatars={task.members}
          size={30}
          extraCount={task.extraMembers}
          overlap={10}
        />
      )}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: COLORS.white,
    borderRadius: 20,
    padding: 16,
    marginLeft: 16,
    flex: 1,
    ...SHADOWS.small,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: 8,
  },
  title: {
    fontSize: 16,
    fontWeight: '700',
    color: COLORS.black,
    flex: 1,
  },
  time: {
    fontSize: 12,
    color: COLORS.gray,
    fontWeight: '500',
  },
  description: {
    fontSize: 13,
    color: COLORS.gray,
    lineHeight: 19,
    marginBottom: 12,
  },
  // Highlighted card (green)
  highlightedCard: {
    backgroundColor: COLORS.primary,
    borderRadius: 20,
    padding: 16,
    marginLeft: 16,
    flex: 1,
  },
  highlightedHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: 8,
  },
  highlightedTitle: {
    fontSize: 16,
    fontWeight: '700',
    color: COLORS.white,
    flex: 1,
  },
  highlightedTime: {
    fontSize: 12,
    color: 'rgba(255,255,255,0.8)',
    fontWeight: '500',
  },
  highlightedDescription: {
    fontSize: 13,
    color: 'rgba(255,255,255,0.85)',
    lineHeight: 19,
    marginBottom: 12,
  },
});

export default CalendarTaskCard;

