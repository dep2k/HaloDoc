export const defaultValue = "null"

export let vaccinationsDict = {
    cat :{
        TRIPLEVIRAL: { isChecked: false, date: defaultValue, name: "TRIPLEVIRAL" },
        FELINERAGE: { isChecked: false, date: defaultValue, name: "FELINERAGE"},
        OTHER: { isChecked: false, date: defaultValue, name: "OTHER" }
    },

    dog: {
        PVC: { isChecked: false, date: defaultValue,name: "PVC"},
        TRIPLE: { isChecked: false, date: defaultValue,name: "TRIPLE" },
        RAGE: { isChecked: false, date: defaultValue,name: "RAGE"},
        OTHER: { isChecked: false, date: defaultValue,name: "OTHER"}
    },

    horse: {
        INFLUENZA: { isChecked: false, date: defaultValue, name: "INFLUENZA"},
        TETANUS: { isChecked: false, date: defaultValue, name: "TETANUS"},
        ENCEPHALITIS: { isChecked: false, date: defaultValue, name: "ENCEPHALITIS" },
        OTHER: { isChecked: false, date: defaultValue, name: "OTHER" }
    }
}


export function getVaccinationsArray(vacDict) {
    var vaccinationsArray = [];
    for (var key in vacDict) {
      // check if the property/key is defined in the object itself, not in parent
      if (vacDict.hasOwnProperty(key)) {           
          //console.log(key, dictionary[key]);
          vaccinationsArray.push(vacDict[key]);
      }
    }
    return vaccinationsArray;
}

export function getVaccinationDictionaryFromVacArray(vacArray){
    // Will be called for update profile 
    var vacDict = {};
    for (var dict in vacArray){
      const key = dict[name];
      vacDict[key] = dict;
    }
    console.log("VacDict:" + vacDict);
  }