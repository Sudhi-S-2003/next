const localstoragefn = (cb) => {
    let data = {};

    const getData = (key) => {
        const value = data[key] || null;
        cb && cb("getData", { key, value });
        return value;
    };

    const getAllData = () => {
        cb && cb("getAllData", { data: { ...data } });
        return { ...data };
    };

    const setData = (key, value) => {
        data[key] = value;
        cb && cb("setData", { key, value });
        return true;
    };

    const updateData = (key, value) => {
        if (key in data) {
            data[key] = value;
            cb && cb("updateData", { key, value });
            return true;
        }
        cb && cb("updateDataFail", { key, error: "Key not found" });
        return false;
    };

    const deleteData = (key) => {
        if (key in data) {
            delete data[key];
            cb && cb("deleteData", { key });
            return true;
        }
        cb && cb("deleteDataFail", { key, error: "Key not found" });
        return false;
    };

    const clearData = () => {
        data = {};
        cb && cb("clearData", { message: "All data cleared" });
        return true;
    };

    const GetLocalData = () => {
        const storedData = localStorage.getItem("store");
        data = storedData ? JSON.parse(storedData) : {};
        cb && cb("GetLocalData", { data });
        return data;
    };

    const SetLocalData = () => {
        localStorage.setItem("store", JSON.stringify(data));
        cb && cb("SetLocalData", { data });
    };

    return { getData, getAllData, setData, updateData, deleteData, clearData, GetLocalData, SetLocalData };
};

export default localstoragefn;
