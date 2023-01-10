import React, { useEffect, useState } from "react";
import { dataEx } from "../api/data";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import { createArray, setLanguage } from "../features/almanax-slice";
import { useFetchAlmanaxQuery } from "../features/almanax/almanax-api-slice";
import { DataProps } from "../models/data";
import { language } from "../models/language";
import Loading from "./Loading";
import Select from "./Select";
import Table from "./Table/Table";

export const App = () => {
  const languageSelected = useAppSelector(state => state.almanax.language)
  const days = useAppSelector(state => state.almanax.days)
  const { data = { data: [] }, isFetching } = useFetchAlmanaxQuery({ languageSelected, days })
  const dispatch = useAppDispatch()

  const languageOptions = [
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

  const bonusOptions = [
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

  useEffect(() => {
    if (!isFetching) {
      const newData = data.data.map((el: any) => {
        return {
          bonus: el.bonus.description,
          date: el.date,
          name: el.item_name,
          quantity: el.item_quantity,
          url: el.item_url,
        }
      })
      dispatch(createArray(newData))
    }
  }, [isFetching])

  return (
    <div className="relative bg-gray-800">
      <Select
        currentValue={languageSelected}
        options={languageOptions}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => {dispatch(setLanguage(e.target.value))}}
      />
      <Select
        currentValue={languageSelected}
        options={bonusOptions}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => {dispatch(setLanguage(e.target.value))}}
      />
      {isFetching ? <Loading /> : <Table />}
    </div>
  );
}

export default App;
