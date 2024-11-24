import React from "react";

function Input({ fieldKey, value }) {
  if (!value) return null;

  const [type, data] = value.split(":");

  // Render Enum Dropdown
  if (type === "enum") {
    const options = data.split(",");
    return (
      <div key={fieldKey} className="mb-4">
        <label htmlFor={fieldKey} className="block text-gray-700 font-semibold mb-2">
          {fieldKey}
        </label>
        <select
          name={fieldKey}
          id={fieldKey}
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
        >
          {options.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
      </div>
    );
  }

  // Render Const Input (Disabled)
  if (type === "const") {
    return (
      <div key={fieldKey} className="mb-4">
        <label htmlFor={fieldKey} className="block text-gray-700 font-semibold mb-2">
          {fieldKey}
        </label>
        <input
          type="text"
          defaultValue={data}
          name={fieldKey}
          id={fieldKey}
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none bg-gray-200"
          disabled
        />
      </div>
    );
  }

  // Render Type Input
  if (type === "type") {
    const validInputTypes = ["text", "number", "date","datetime-local", "email", "password"];
    const inputType = validInputTypes.includes(data) ? data : "text"; // Fallback to text if invalid
    return (
      <div key={fieldKey} className="mb-4">
        <label htmlFor={fieldKey} className="block text-gray-700 font-semibold mb-2">
          {fieldKey}
        </label>
        <input
          type={inputType}
          name={fieldKey}
          id={fieldKey}
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
        />
      </div>
    );
  }

  // Render Default Input
  return (
    <div key={fieldKey} className="mb-4">
      <label htmlFor={fieldKey} className="block text-gray-700 font-semibold mb-2">
        {fieldKey}
      </label>
      <input
        type="text"
        defaultValue=""
        name={fieldKey}
        id={fieldKey}
        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
      />
    </div>
  );
}

export default Input;
