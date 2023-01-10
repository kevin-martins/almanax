import React from 'react'

type Props = {
  title: string,
  className: string,
}

const Head = ({ title, className }: Props) => {
  return (
    <th className={className}>
      {title}
    </th>
  )
}

export default Head
