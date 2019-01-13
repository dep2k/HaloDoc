import { Storage } from 'aws-amplify';
import { Buffer } from 'buffer';
import {getFile} from './FileHelper'
// For Testing
export function uploadFile() {
    const customPrefix = {
        public: 'myPublicPrefix/',
        protected: 'myProtectedPrefix/',
        private: 'myPrivatePrefix/'
    };
    return new Promise((resolve, reject) => {
        console.log('Upload File Called');
        Storage.put('test5.txt', 'Hello4', {
            customPrefix: customPrefix,
        })
            .then((result) => resolve(result))
            .catch((err) => reject(err));
    });

}

export function uploadImage(base64,bucket,key) {
    const buffer = new Buffer(base64, 'base64');
    const customPrefix = {
        public: bucket + '/',
        protected: 'myProtectedPrefix/',
        private: 'myPrivatePrefix/'
    };
    return new Promise((resolve, reject) => {
        Storage.put(key, buffer, {
            ContentType: 'image/jpg',
            customPrefix: customPrefix
        }).then((result) => resolve(result))
            .catch((err) => reject(err));
    });
}

export async function getImage(key,bucket) {
    console.log("​getImage -> key", key)
    const customPrefix = {
        public: bucket + '/',
        protected: 'myProtectedPrefix/',
        private: 'myPrivatePrefix/'
    };

    const url = await  Storage.get(key,{
        customPrefix:customPrefix,
        level: 'public'
    });

    console.log("​getImage -> url", url)
    const location = bucket + '/' + key;
    console.log("​getImage -> location", location)

    getFile(url,key).then((result) =>{
		console.log("​getImage -> result", result);
        return result;
    }).catch((err)=>{
        console.log("​getImage -> error", err);
    });
}



function makeEnum(arr){
    let obj = {};
    for (let val of arr){
        obj[val] = Symbol(val);
    }
    return Object.freeze(obj);
}

export const Buckets = makeEnum(["Pet","Doctor","User", "Test" ]);
/*
    const Colors = makeEnum(["red","green","blue"]);
    let startColor = Colors.red; 
    console.log(startColor); // Symbol(red)

    if(startColor == Colors.red){
        console.log("Do red things");
    }else{
        console.log("Do non-red things");
    }
*/


/*
export function downloadFile(key) {
    console.log('Download File Called');
    const customPrefix = {
        public: 'Test/',
        protected: 'myProtectedPrefix/',
        private: 'myPrivatePrefix/'
    };
    return new Promise((resolve, reject) => {
        Storage.get('a.jpg',{
            customPrefix:customPrefix,
            level: 'public'
        }).then((result) => resolve(result))
            .catch((err) => reject(err));
    });
}
*/
export function openPhotoLibrary() {

}

askPermissionsAsync = async () => {
    await Permissions.askAsync(Permissions.CAMERA);
    await Permissions.askAsync(Permissions.CAMERA_ROLL);
    // you would probably do something to verify that permissions
    // are actually granted, but I'm skipping that for brevity
};

export const launchPhotoLibrary = async () => {
    await this.askPermissionsAsync();
    let result = await ImagePicker.launchImageLibraryAsync({
        allowsEditing: true,
        aspect: [12, 3],
        base64: true,
    });

    return new Promise((resolve, reject) => {
        resolve(result);
    });
};



export const launchCamera = async () => {
    await this.askPermissionsAsync();
    let result = await ImagePicker.launchCameraAsync({
        allowsEditing: true,
        aspect: [12, 3],
        base64: false,
    });
    console.log(result.width, result.height, "result");
    // this.setState({ result });
};