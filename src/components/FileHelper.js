import  {FileSystem}  from 'expo';


// url: http url to download
// location: (bucket/key)  in the documents directiory
export async function getFile(httpUrl, location) {

    //location = "a.txt";
    const uri = FileSystem.documentDirectory + location;
    console.log("​FileHelper->getFile -> uri", uri)
    const fileInfo = await FileSystem.getInfoAsync(uri);

    return new Promise((resolve, reject) => {
        console.log("​FileHelper->getFile -> fileInfo", fileInfo);
        if(fileInfo.exists){
            const options = { encoding: Expo.FileSystem.EncodingTypes.Base64 };
			//console.log("​getFile -> options", options)
            FileSystem.readAsStringAsync(uri,options).then(data => {
                const base64 = 'data:image/jpg;base64,' + data;
                resolve(base64) ; 
            }).catch(err => {
                console.log("​FileHelper->getFile -> err", err);
                reject(err) ;
            });
        } else {
            FileSystem.downloadAsync(
                httpUrl,
                FileSystem.documentDirectory + location
            ).then((result)=>{
                const uri = result.uri;
                console.log('Finished downloading to ', uri);
                const options = { encoding: FileSystem.EncodingTypes.Base64 };
                FileSystem.readAsStringAsync(uri,options).then(data => {
                    const base64 = 'data:image/jpg;base64' + data;
                    console.log("Then Block");
                    resolve(data) ; 
                }).catch(err => {
                    console.log("​getFile -> err", err);
                    reject(err) ;
                });
            }).catch((err)=>{
                console.log("​getFile -> err", err);
            });
        }
    });   
}

