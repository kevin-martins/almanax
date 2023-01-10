import { language } from "../models/language";

export const languageOptions = [
    {
      value: language.Fr,
      text: [
        { language: language.Fr, text: "Français" },
      ],
    },
    {
      value: language.En,
      text: [
        { language: language.En, text: "English" },
      ],
    },
]

export const bonusOptions = [
    {
      value: "exp",
      text: [
        { language: language.En, text: "Experience increased" },
        { language: language.Fr, text: "Expérience augmenté" },
      ],
    },
    {
      value: "drop",
      text: [
        { language: language.En, text: "Drop increased" },
        { language: language.Fr, text: "Butin augmenté" },
      ],
    },
    {
      value: "quantity",
      text: [
        { language: language.En, text: "Quantity harvested increased" },
        { language: language.Fr, text: "Récolte augmenté" },
      ],
    },
]