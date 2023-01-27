import React, { useEffect } from "react";
import { filterOptions } from "../api/select";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import { createArray, setFilter } from "../features/almanax-slice";
import { useFetchAlmanaxQuery } from "../features/almanax/almanax-api-slice";
import { getFilterSearch } from "../helpers/helpers";
import { FilterSearch } from "../models/filter";
import Loading from "../components/Loading";
import Select from "../components/Select";
import Table from "../components/Table/Table";

export const Almanax = () => {
  const languageSelected = useAppSelector(state => state.almanax.language)
  const filterSelected = useAppSelector(state => state.almanax.filter)
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
          icon: el.item.image_url,
          filterSearch: getFilterSearch(el.bonus.description)
        }
      })
      dispatch(createArray(newData))
    }
  }, [isFetching])

  return (
    <div className={`${filterSelected !== FilterSearch.None && 'h-screen'} bg-gray-800`}>
      {/* <Select
        currentValue={languageSelected}
        options={languageOptions}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => {dispatch(setLanguage(e.target.value))}}
      /> */}
      <div className="w-full text-center">
        <Select
          currentValue={filterSelected}
          options={filterOptions}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => {dispatch(setFilter(parseInt(e.target.value) as FilterSearch))}}
        />
      </div>
      {isFetching ? <Loading /> : <Table />}
    </div>
  );
}

export default Almanax;
