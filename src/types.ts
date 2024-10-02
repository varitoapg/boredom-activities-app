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
