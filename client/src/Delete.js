export default async function Delete(checkedIDs, route) {

    // checkedIDs.map(id => {
    //     const deleteData = async (url) => {
    //         const response = await fetch(url, {
    //             method: "DELETE",
    //             credentials: "include",
    //             headers: {"Content-Type": "application/json"},
    //         })
    //         return response.json()
    //     }
    //     deleteData(`http://localhost:3000/${route}/${id}`)
    //         .then(data => {
    //             // data.success ? console.log("Deleted Data") : console.log(data)
    //             if (data.success) {
    //                 alert.success('Data has been deleted.');
    //             } else {
    //                 alert.error('Something went wrong... Please try again later');
    //             }
    //         })
    // })

    

    // Options
    const options = {
        method: 'DELETE',
        credentials: 'include',
        headers: {"Content-Type": "application/json"}
    }
    // Get each response
    const getEachResponse = async () => {
        let responseArray = await Promise.all(checkedIDs.map( async (id) => {
            const response = await fetch(`http://localhost:3000/${route}/${id}`, options)
            const data = await response.json();
            return await data.success
        }))
        return await responseArray
    }

    // Make all responses succeeded 
    const output = await getEachResponse().then(responseArray => {
        console.log('responseArray: ', responseArray);
        let output;
        const verifyRes = responseArray.filter(data => data === true);
        console.log('verifyRes: ', verifyRes);
        verifyRes.length === checkedIDs.length ? output = true : output = false;
        console.log('first output: ', output);
        return output
    })
    console.log('second output: ', output);
    return output
}
