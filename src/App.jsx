import Random from "./components/Random"
import Tag from "./components/Tag"

export default function App() {
  return (
    <div className="w-full h-screen flex flex-col items-center bg-gray-100 background">
      <h1 className="bg-white rounded-lg w-[90%] text-center mt-10 px-10 py-2 text-3xl font-bold">
        Generate Random GIFs
      </h1>

      <div className="flex flex-col items-center gap-y-10 mt-10 gap-4 w-full">
        <Random />
        <Tag />
      </div>
    </div>
  ) 
}
