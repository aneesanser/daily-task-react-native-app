import React from 'react';
import { View, Image, Text, StyleSheet } from 'react-native';
import { COLORS } from '../constants/theme';

const AvatarGroup = ({ 
  avatars = [], 
  size = 32, 
  extraCount = 0, 
  maxShow = 3,
  overlap = 10,
}) => {
  const displayed = avatars.slice(0, maxShow);
  const remaining = extraCount > 0 ? extraCount : (avatars.length > maxShow ? avatars.length - maxShow : 0);

  return (
    <View style={styles.container}>
      {displayed.map((avatar, index) => (
        <Image
          key={index}
          source={{ uri: avatar }}
          style={[
            styles.avatar,
            {
              width: size,
              height: size,
              borderRadius: size / 2,
              marginLeft: index === 0 ? 0 : -overlap,
              zIndex: displayed.length - index,
            },
          ]}
        />
      ))}
      {remaining > 0 && (
        <View
          style={[
            styles.extraBadge,
            {
              width: size,
              height: size,
              borderRadius: size / 2,
              marginLeft: -overlap,
              backgroundColor: COLORS.primary,
            },
          ]}
        >
          <Text style={[styles.extraText, { fontSize: size * 0.35 }]}>+{remaining}</Text>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  avatar: {
    borderWidth: 2,
    borderColor: COLORS.white,
  },
  extraBadge: {
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 2,
    borderColor: COLORS.white,
  },
  extraText: {
    color: COLORS.white,
    fontWeight: '700',
  },
});

export default AvatarGroup;

