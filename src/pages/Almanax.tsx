import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import Loading from "../components/Loading";
import Select from "../components/Select";
import Table from "../components/Table/Table";
import Almanax from '../api/almanax.json'
import { setAlmanax, setCurrentFilter, setDays, setFiltersOptions, setLoading } from "../features/dofus-slice";
import { getDateInterval } from "../helpers/dateManipulation";
import { AlmanaxProps } from "../models/almanax";
import { getUniqueString } from "../helpers/utils";

export const Dofus = () => {
  const { isLoading, days, filtersOptions, currentFilter } = useAppSelector(state => state.dofus)
  const dispatch = useAppDispatch()

  useEffect(() => {
    Promise.all(
      getDateInterval(days).map(days => {
        return Almanax.find(date => date.date === days)
      })
    )
      .then(res => {
        const definedValues = res.filter(r => r !== undefined) as AlmanaxProps[]
        dispatch(setAlmanax(definedValues))
        const filterSearchs = definedValues.map(value => value.filterSearch)
        dispatch(setFiltersOptions(getUniqueString(filterSearchs)))
        dispatch(setLoading(false))
      })
  }, [days])

  return (
    <div className="h-full bg-gray-800">
      <div className="w-full text-center">
        <Select
          currentValue={currentFilter}
          options={filtersOptions}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => {dispatch(setCurrentFilter(e.target.value))}}
        />
        <Select
          currentValue={days.toString()}
          options={["15", "30", "45", "60", "365"]}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => {dispatch(setDays(parseInt(e.target.value)))}}
        />
      </div>
      {isLoading ? <Loading /> : <Table />}
    </div>
  );
}

export default Dofus;
