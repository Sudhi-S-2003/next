import React, { useEffect } from 'react';
import localstoragefn from '../../components/localstorage/index';

function Index() {
    useEffect(() => {
        const callback = (operation, payload) => {
            console.log(`Operation: ${operation}`, payload);
        };

        const storage = localstoragefn(callback);

        storage.GetLocalData(); 
        storage.setData("username", "Sudhi"); 
        storage.SetLocalData(); 
        storage.updateData("username", "Updated Sudhi"); 
        storage.getData("username"); 
        storage.deleteData("username");
        storage.clearData();
        storage.SetLocalData(); 
    }, []);

    return (
        <div>
            <h1 className='text-center p-3'>LocalStorage with Callback Example</h1>
        </div>
    );
}

export default Index;
