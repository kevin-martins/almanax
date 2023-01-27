import { Link } from 'react-router-dom'

type Props = {
  to: string,
  className?: string,
  children: string | JSX.Element,
  setHoverState?: any,
}

const Redirection = ({ to, className = "", children, setHoverState = () => {} }: Props): JSX.Element => {
  return (
    <Link to={to} className={className} onMouseEnter={() => setHoverState(true)} onMouseLeave={() => setHoverState(false)}>
      {typeof children === "string" ? <p>{children}</p> : {...children}}
    </Link>
  )
}

export default Redirection