import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import Loading from "../components/Loading";
import Select from "../components/Select";
import Table from "../components/Table/Table";
import Almanax from '../api/almanax.json'
import { setAlmanax, setFilters, setLoading } from "../features/dofus-slice";
import { getDateInterval } from "../helpers/dateManipulation";
import { AlmanaxProps } from "../models/almanax";

export const Dofus = () => {
  const { isLoading, days } = useAppSelector(state => state.dofus)
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
        // dispatch(setFilters(res.))
        dispatch(setLoading(false))
      })
  }, [days])

  return (
    <div className="h-full bg-gray-800">
      <div className="w-full text-center">
        {/* <Select
          currentValue={filterSelected}
          options={filterOptions}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => {dispatch(setFilter(parseInt(e.target.value) as FilterSearch))}}
        /> */}
      </div>
      {isLoading ? <Loading /> : <Table />}
    </div>
  );
}

export default Dofus;
