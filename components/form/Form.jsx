import flattenJSON from "./flattenJSON";
import recreateJSON from "./recreateJSON";
import Input from "./Input";
import axios from "axios";
import { toast } from "react-hot-toast"; // Import toast

function Form({ payload }) {
    if (!payload) {
        return <div>No data available to generate the form.</div>;
    }

    // Flatten payload for dynamic rendering
    const flatPayload = flattenJSON(payload);

    // Form submission handler
    const handleSubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);
        const flatData = Object.fromEntries(formData.entries()); // Get flat data
        console.log("flatdate JSON Data:", flatData);

        const jsonData = recreateJSON(flatData); // Recreate nested JSON

        console.log("Recreated JSON Data:", jsonData);

        // Axios POST request
        try {
            const response = await axios.post("https://example.com/api/endpoint", jsonData, {
                headers: {
                    "Content-Type": "application/json",
                },
            });
            console.log("Server Response:", response.data);

            // Success Toast
            toast.success("Form submitted successfully!");
        } catch (error) {
            console.error("Error submitting form:", error);

            // Error Toast
            toast.error("Failed to submit the form. Please try again.");
        }
    };

    return (
        <div className="flex justify-center items-center min-h-screen bg-gray-100 py-6">
            <form onSubmit={handleSubmit} className="bg-white p-8 rounded-lg shadow-lg w-full max-w-lg">
                <h2 className="text-2xl font-semibold text-center text-gray-700 mb-6">
                    Generated Form
                </h2>
                {Object.entries(flatPayload).map(([key, value]) => (
                    <Input key={key} fieldKey={key} value={value} />
                ))}
                <button
                    type="submit"
                    className="w-full py-3 mt-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                >
                    Submit
                </button>
            </form>
        </div>
    );
}

export default Form;
