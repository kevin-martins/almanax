import { FilterSearch } from "../models/filter";
import { language } from "../models/language";

export const languageOptions = [
    {
      value: language.Fr,
      text: [
        { language: language.Fr, text: "Français" },
        { language: language.En, text: "French" },
      ],
    },
    {
      value: language.En,
      text: [
        { language: language.Fr, text: "Anglais" },
        { language: language.En, text: "English" },
      ],
    },
]

export const filterOptions = [
  {
    value: FilterSearch.None,
    text: [
      { language: language.En, text: "None" },
      { language: language.Fr, text: "Aucun" },
    ],
  },
  {
    value: FilterSearch.Exp,
    text: [
      { language: language.En, text: "Experience increased" },
      { language: language.Fr, text: "Expérience augmenté" },
    ],
  },
  {
    value: FilterSearch.Drop,
    text: [
      { language: language.En, text: "Drop increased" },
      { language: language.Fr, text: "Butin augmenté" },
    ],
  },
  {
    value: FilterSearch.Quantity,
    text: [
      { language: language.En, text: "Quantity harvested increased" },
      { language: language.Fr, text: "Récolte augmenté" },
    ],
  },
  {
    value: FilterSearch.SaveOnCraft,
    text: [
      { language: language.En, text: "Save ressources on craft" },
      { language: language.Fr, text: "Economie sur les crafts" },
    ],
  },
  {
    value: FilterSearch.Other,
    text: [
      { language: language.En, text: "Others" },
      { language: language.Fr, text: "Autres" },
    ],
  },
]