export interface WheelPreset {
  id: string;
  name: string;
  slug: string;
  description: string;
  items: string[];
}

export const PRESETS: WheelPreset[] = [
  {
    id: "yes-or-no",
    name: "Yes or No Wheel",
    slug: "yes-or-no",
    description: "Instant 50/50 decision maker for quick answers.",
    items: ["Yes", "No", "Yes", "No"],
  },
  {
    id: "food-decider",
    name: "What to Eat",
    slug: "what-to-eat",
    description: "Can't decide what to eat for lunch or dinner? Spin the meal decider!",
    items: ["Pizza 🍕", "Burger 🍔", "Sushi 🍣", "Tacos 🌮", "Pasta 🍝", "Salad 🥗", "Noodles 🍜", "Steak 🥩"],
  },
  {
    id: "random-number",
    name: "Numbers 1-10",
    slug: "random-number",
    description: "Random number picker from 1 to 10 for classroom raffles & games.",
    items: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"],
  },
  {
    id: "party-games",
    name: "Truth or Dare",
    slug: "truth-or-dare",
    description: "Fun party game spinner with exciting truth and dare challenges.",
    items: [
      "Truth: Secret crush?",
      "Dare: Sing a chorus",
      "Truth: Biggest fear?",
      "Dare: 10 Pushups",
      "Truth: Last lie told?",
      "Dare: Funny face selfie",
    ],
  },
];
