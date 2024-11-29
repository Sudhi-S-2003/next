import React, { useState } from "react";

function PartComponent({ data: initialData }) {
    // Manage data as a state variable
    const [data, setData] = useState(initialData);
    const [visibleFolders, setVisibleFolders] = useState({});
    const [type, setType] = useState("");
    const [editIndex, setEditIndex] = useState(null);
    const [newName, setNewName] = useState("");

    const toggleFolder = (key) => {
        setVisibleFolders((prev) => ({
            ...prev,
            [key]: !prev[key],
        }));
    };

    const handleRename = (index) => {
        setType("rename");
        setEditIndex(index);
    };

    const saveProcess = (index, newName) => {
        if (newName.trim() === "") return;

        const updatedData = [...data]; // Clone the data array to avoid mutating directly

        if (type === "rename") {
            updatedData[index].name = newName;
        } else if (type === "add_file") {
            updatedData[index].items = [
                ...(updatedData[index].items || []),
                { name: newName, isFolder: false },
            ];
        } else if (type === "add_folder") {
            updatedData[index].items = [
                ...(updatedData[index].items || []),
                { name: newName, isFolder: true, items: [] },
            ];
        }

        setData(updatedData); // Update state with the modified data
        resetEditState();
    };

    const resetEditState = () => {
        setEditIndex(null);
        setNewName("");
        setType("");
    };

    const handleNewFile = (index) => {
        setType("add_file");
        setEditIndex(index);
    };

    const handleNewFolder = (index) => {
        setType("add_folder");
        setEditIndex(index);
    };

    const handleDelete = (index) => {
        const updatedData = [...data]; // Clone the data array
        updatedData.splice(index, 1); // Remove the item at the specified index
        setData(updatedData); // Update state with the modified data
    };

    return (
        <div className="pl-2">
            {data.map((dataObj, index) => {
                const uniqueKey = `${dataObj.name}-${index}`;

                if (dataObj.isFolder) {
                    return (
                        <React.Fragment key={uniqueKey}>
                            <div className="flex items-center py-1">
                                {editIndex === index ? (
                                    <>
                                        <input
                                            type="text"
                                            className="border p-1"
                                            value={newName}
                                            onChange={(e) => setNewName(e.target.value)}
                                            placeholder={
                                                type === "rename"
                                                    ? "Enter new name"
                                                    : type === "add_file"
                                                        ? "Enter file name"
                                                        : "Enter folder name"
                                            }
                                        />
                                        <button
                                            className="bg-green-600 mx-2 text-white px-2"
                                            onClick={() => saveProcess(index, newName)}
                                        >
                                            Save
                                        </button>
                                        <button
                                            className="bg-red-600 mx-2 text-white px-2"
                                            onClick={resetEditState}
                                        >
                                            Cancel
                                        </button>
                                    </>
                                ) : (
                                    <>
                                        <p
                                            onClick={() => toggleFolder(uniqueKey)}
                                            className="cursor-pointer"
                                        >
                                            📁 {dataObj.name}
                                        </p>
                                        <button
                                            className="bg-blue-600 mx-3 text-white px-2"
                                            onClick={() => handleNewFile(index)}
                                        >
                                            New File
                                        </button>
                                        <button
                                            className="bg-orange-600 mx-3 text-white px-2"
                                            onClick={() => handleNewFolder(index)}
                                        >
                                            New Folder
                                        </button>
                                        <button
                                            className="bg-violet-600 mx-3 text-white px-2"
                                            onClick={() => handleRename(index)}
                                        >
                                            Rename
                                        </button>
                                        <button
                                            className="bg-red-600 mx-3 text-white px-2"
                                            onClick={() => handleDelete(index)}
                                        >
                                            Delete
                                        </button>
                                    </>
                                )}
                            </div>

                            {visibleFolders[uniqueKey] && dataObj.items?.length > 0 && (
                                <PartComponent data={dataObj.items} />
                            )}
                        </React.Fragment>
                    );
                } else {
                    return (
                        <div key={uniqueKey} className="flex items-center">
                            {editIndex === index ? (
                                <>
                                    <input
                                        type="text"
                                        className="border p-1"
                                        value={newName}
                                        onChange={(e) => setNewName(e.target.value)}
                                        placeholder="Enter new name"
                                    />
                                    <button
                                        className="bg-green-600 mx-2 text-white px-2"
                                        onClick={() => saveProcess(index, newName)}
                                    >
                                        Save
                                    </button>
                                    <button
                                        className="bg-red-600 mx-2 text-white px-2"
                                        onClick={resetEditState}
                                    >
                                        Cancel
                                    </button>
                                </>
                            ) : (
                                <>
                                    <p>📄 {dataObj.name}</p>
                                    <button
                                        className="bg-violet-600 mx-3 text-white px-2"
                                        onClick={() => handleRename(index)}
                                    >
                                        Rename
                                    </button>
                                    <button
                                        className="bg-red-600 mx-3 text-white px-2"
                                        onClick={() => handleDelete(index)}
                                    >
                                        Delete
                                    </button>
                                </>
                            )}
                        </div>
                    );
                }
            })}
        </div>
    );
}

export default PartComponent;
