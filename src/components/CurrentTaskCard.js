import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { COLORS, SHADOWS } from '../constants/theme';
import AvatarGroup from './AvatarGroup';

const CurrentTaskCard = ({ task, onPress }) => {
  return (
    <TouchableOpacity 
      style={styles.card} 
      onPress={onPress}
      activeOpacity={0.7}
    >
      {/* Tags Row */}
      <View style={styles.tagsRow}>
        <View style={styles.tagsContainer}>
          {task.tags.map((tag, index) => (
            <View key={index} style={styles.tag}>
              <Text style={styles.tagText}>{tag}</Text>
            </View>
          ))}
        </View>
        <Text style={styles.time}>{task.time}</Text>
      </View>

      {/* Title */}
      <Text style={styles.title}>{task.title}</Text>

      {/* Description */}
      <Text style={styles.description}>{task.description}</Text>

      {/* Footer */}
      <View style={styles.footer}>
        <AvatarGroup
          avatars={task.members}
          size={32}
          extraCount={task.extraMembers}
          overlap={10}
        />
        <TouchableOpacity style={styles.copyButton}>
          <Text style={styles.copyButtonText}>Copy Link</Text>
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: COLORS.white,
    borderRadius: 20,
    padding: 18,
    ...SHADOWS.medium,
  },
  tagsRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 12,
  },
  tagsContainer: {
    flexDirection: 'row',
    gap: 8,
  },
  tag: {
    backgroundColor: COLORS.grayLight,
    borderRadius: 20,
    paddingHorizontal: 14,
    paddingVertical: 6,
  },
  tagText: {
    fontSize: 12,
    fontWeight: '600',
    color: COLORS.black,
  },
  time: {
    fontSize: 13,
    color: COLORS.gray,
    fontWeight: '500',
  },
  title: {
    fontSize: 18,
    fontWeight: '700',
    color: COLORS.black,
    marginBottom: 6,
  },
  description: {
    fontSize: 13,
    color: COLORS.gray,
    lineHeight: 20,
    marginBottom: 16,
    fontStyle: 'italic',
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  copyButton: {
    backgroundColor: COLORS.primary,
    borderRadius: 24,
    paddingHorizontal: 22,
    paddingVertical: 10,
  },
  copyButtonText: {
    color: COLORS.white,
    fontSize: 13,
    fontWeight: '700',
  },
});

export default CurrentTaskCard;

