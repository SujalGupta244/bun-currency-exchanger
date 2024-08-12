
const LoaderComponents = () => {
  return (
    <div className="flex items-center flex-col justify-center h-screen">
        <div className="animate-spin rounded-full h-24 w-24 border-t-4 border-b-4 border-gray-900 mb-4 "/>
        <div className="text-gray-800 text-xl">
            Data is loading...
        </div>
    </div>
  )
}

export default LoaderComponents