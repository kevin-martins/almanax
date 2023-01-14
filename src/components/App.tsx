import React, { useEffect } from "react";
import { bonusOptions, languageOptions } from "../api/select";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import { createArray, setLanguage } from "../features/almanax-slice";
import { useFetchAlmanaxQuery } from "../features/almanax/almanax-api-slice";
import Loading from "./Loading";
import Select from "./Select";
import Table from "./Table/Table";

export const App = () => {
  const languageSelected = useAppSelector(state => state.almanax.language)
  const days = useAppSelector(state => state.almanax.days)
  const { data = { data: [] }, isFetching } = useFetchAlmanaxQuery<{ data: any, isFetching: boolean}>({ languageSelected, days })
  const dispatch = useAppDispatch()

  useEffect(() => {
    if (!isFetching) {
      const newData = data.data.map((el: any) => {
        return {
          bonus: el.bonus.description,
          date: el.date,
          name: el.item_name,
          quantity: el.item_quantity,
          url: el.item.image_url,
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
