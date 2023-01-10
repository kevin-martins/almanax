import '../styles/loading.css'

const Loading = (): JSX.Element => {
  return (
    <div className="grid h-screen place-items-center">
      <div className="flex flex-col gap-4 sm:w-2/3 max-w-screen-xl">
        <div className="lds-roller mx-auto">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
    </div>
  )
}

export default Loading
