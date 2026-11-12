// Sample avatar images - using UI Faces style placeholder URLs
// In production, replace with actual images

export const AVATARS = {
  user1: 'https://randomuser.me/api/portraits/men/32.jpg',
  user2: 'https://randomuser.me/api/portraits/women/44.jpg',
  user3: 'https://randomuser.me/api/portraits/men/22.jpg',
  user4: 'https://randomuser.me/api/portraits/women/68.jpg',
  user5: 'https://randomuser.me/api/portraits/men/36.jpg',
  user6: 'https://randomuser.me/api/portraits/women/17.jpg',
  user7: 'https://randomuser.me/api/portraits/men/75.jpg',
  user8: 'https://randomuser.me/api/portraits/women/90.jpg',
  brandon: 'https://randomuser.me/api/portraits/men/32.jpg',
};

export const TASKS = [
  {
    id: '1',
    title: 'Practice English',
    description: 'Improve your English every day.',
    progress: 78,
    comments: 12,
    views: 2,
    members: [AVATARS.user1, AVATARS.user2, AVATARS.user3],
    tags: [],
    time: '',
    category: 'education',
  },
  {
    id: '2',
    title: 'Checkout Design',
    description: 'Review and update the UI design.',
    progress: 45,
    comments: 8,
    views: 5,
    members: [AVATARS.user4, AVATARS.user5],
    tags: [],
    time: '',
    category: 'design',
  },
];

export const CURRENT_TASK = {
  id: '3',
  title: 'Daily Morning Goal',
  description: 'Run every day to build stamina, improve health, and stay focused',
  tags: ['Warm-Up', 'Running'],
  time: '5:30 AM',
  members: [AVATARS.user1, AVATARS.user2, AVATARS.user3],
  extraMembers: 2,
};

export const CALENDAR_TASKS = [
  {
    id: '1',
    title: 'Daily Morning Goal',
    description: 'Run every day to build stamina, improve health, and stay focused',
    time: '5:30 AM',
    timelineTime: '05:30',
    members: [AVATARS.user1, AVATARS.user2, AVATARS.user3],
    extraMembers: 2,
    isHighlighted: true,
  },
  {
    id: '2',
    title: 'Meet Client Meeting',
    description: 'Discuss project goals, timelines, feedback, and define clear next steps',
    time: '12:00 PM',
    timelineTime: '12:00',
    members: [AVATARS.user4, AVATARS.user5, AVATARS.user6],
    extraMembers: 3,
    isHighlighted: false,
  },
  {
    id: '3',
    title: 'Lunch Break',
    description: 'Take a break to eat, relax, and recharge energy',
    time: '02:40 PM',
    timelineTime: '02:30',
    members: [],
    extraMembers: 0,
    isHighlighted: false,
  },
];

export const TASK_DETAIL = {
  id: '2',
  title: 'Meet With Client',
  teamMembers: [AVATARS.user1, AVATARS.user2, AVATARS.user3, AVATARS.user4],
  extraMembers: 5,
  description: 'Enable mentor-client communication, assign tasks, share updates, track progress, and ensure timely project completion.',
  progress: 36,
  subtasks: [
    { id: '1', title: 'Task 1', completed: true },
    { id: '2', title: 'Task 2', completed: true },
    { id: '3', title: 'Task 3', completed: false },
  ],
  location: 'https://meet.google.com/cjc-gxh...',
};

export const DAYS_OF_WEEK = [
  { day: 'Sun', date: 12 },
  { day: 'Mon', date: 13 },
  { day: 'Tue', date: 14 },
  { day: 'Wed', date: 15, isSelected: true },
  { day: 'Thu', date: 16 },
  { day: 'Fri', date: 17 },
];

