import useAxios from "../../components/common/Axios";
import Card from "../../components/common/Card";

// Define types for the item data returned by the API
interface Descriptor {
  name: string;
  short_desc: string;
  images?: string[];
}

interface Item {
  id: string;
  descriptor: Descriptor;
}

interface Error {
  message: string;
}

function BuyerApp() {
  // Modify the type to allow `data` to be null during loading or error states
  const { data, loading, error }: { data: Item[] | null; loading: boolean; error: Error | null } = useAxios({
    endpoint: "https://ondc.eatiko.com/api/in_category_items",
    method: "POST",
    payload: { category: "F&B" },
    dataname: "search-F&B",
    maxCacheAge: 3600000, // Cache for 1 hour
  });

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  // Ensure that `data` is an array before calling `map`
  return (
    <div>
      <div className="flex justify-evenly">
        Welcome to the Buyer App
        <div>
          <li>Features</li>
        </div>
      </div>
      <div className="grid grid-cols-3 gap-4 p-4">
        {/* Check if `data` is not null and is an array before calling `map` */}
        {data && Array.isArray(data) && data.length > 0 ? (
          data.map((item) => (
            <Card
              key={item.id}
              title={item.descriptor?.name}
              description={item.descriptor?.short_desc}
              image={item.descriptor?.images?.[0] || ""}
            />
          ))
        ) : (
          <div>No data available</div>
        )}
      </div>
    </div>
  );
}

export default BuyerApp;
