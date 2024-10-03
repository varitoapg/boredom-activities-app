export const activitiesTypes = [
  "education",
  "recreational",
  "social",
  "charity",
  "cooking",
  "relaxation",
  "busywork",
] as const;

export type ActivityType = (typeof activitiesTypes)[number];

export type TypeDictionary = {
  [key in ActivityType]: string;
};

export type Activity = {
  activity: string;
  availability: number;
  type: string;
  participants: number;
  price: number;
  accessibility: string;
  duration: string;
  kidFriendly: boolean;
  link: string;
  key: string;
};
