import { I18n } from 'aws-amplify';



export function genderData() {
  const genderData = [
    {
      key: "1",
      name: I18n.get("Female"),
      value:"Female"
    },
    {
      key: "2",
      name: I18n.get("Male"),
      value: "Male"
    }
  ];
  return genderData;
} 
 
export function cameraData() {
  const cameraData = [
    {
      key: "1",
      name: I18n.get("Camera"),
      value: "Female"
    },
    {
      key: "2",
      name: I18n.get("PhotoGallery"),
      value: "Male"
    }
  ];
  return cameraData;
}

export function getSpecialityData() {
  let specialityData = [
    {
      key: "1",
      name: I18n.get("Cat"),
      value: "Cat"
    },
    {
      key: "2",
      name: I18n.get("Dog"),
      value: "Dog"
    },
    {
      key: "3",
      name: I18n.get("Horse"),
      value: "Horse"
    }]

    return specialityData;
}
export function petRaceListData()  {

  const catRaceListdata = [
    { key: "1", name: I18n.get("Abisinio") },
    { key: "2", name: I18n.get("American") },
    { key: "3", name: I18n.get("Asian") },
    { key: "4", name: I18n.get("Angora") },
    { key: "5", name: I18n.get("Turkish") },
    { key: "6", name: I18n.get("African") },
    { key: "7", name: I18n.get("Russian") },
    { key: "8", name: I18n.get("Bengali") },
    { key: "9", name: I18n.get("Balines") },
    { key: "10", name: I18n.get("Japnese") },
    { key: "11", name: I18n.get("Norway") },
    { key: "12", name: I18n.get("Siberia") },
    { key: "13", name: I18n.get("British") },
    { key: "14", name: I18n.get("Burma") },
    { key: "15", name: I18n.get("Cymric") },
    { key: "16", name: I18n.get("Khao") },
    { key: "17", name: I18n.get("AfricanGold") },
    { key: "18", name: I18n.get("Europian") },
    { key: "19", name: I18n.get("Chinchila") },
    { key: "20", name: I18n.get("Escoses") },
    { key: "21", name: I18n.get("Himalaya") },
    { key: "22", name: I18n.get("Korat") },
    { key: "23", name: I18n.get("Laperm") },
    { key: "24", name: I18n.get("MaineCoon") },
    { key: "25", name: I18n.get("Manx") },
    { key: "26", name: I18n.get("Egypt") },
    { key: "27", name: I18n.get("Australia") },
    { key: "28", name: I18n.get("Munchkin") },
    { key: "29", name: I18n.get("Ociagto") },
    { key: "30", name: I18n.get("Oriental") },
    { key: "31", name: I18n.get("OrientalLarge") },
    { key: "32", name: I18n.get("Persian") },
    { key: "33", name: I18n.get("Pixie") },
    { key: "34", name: I18n.get("Ragdoll") },
    { key: "35", name: I18n.get("Savannah") },
    { key: "36", name: I18n.get("SacredBurma") },
    { key: "37", name: I18n.get("Selkirk") },
    { key: "38", name: I18n.get("Siamese") },
    { key: "39", name: I18n.get("Siberian") },
    { key: "40", name: I18n.get("Singapore") },
    { key: "41", name: I18n.get("Snow") },
    { key: "42", name: I18n.get("Somali") },
    { key: "43", name: I18n.get("Sphinx") },
    { key: "44", name: I18n.get("Tiffanie") },
    { key: "45", name: I18n.get("Tonkinese") },
    { key: "46", name: I18n.get("Turkey") }
  ];
  
  const dogRaceListdata = [
    { key: "1", name: I18n.get("Akita") },
    { key: "2", name: I18n.get("American") },
    { key: "3", name: I18n.get("Afgan") },
    { key: "4", name: I18n.get("Bully") },
    { key: "5", name: I18n.get("Basenji") },
    { key: "6", name: I18n.get("Gasset") },
    { key: "7", name: I18n.get("Beagle") },
    { key: "8", name: I18n.get("Bloodhound") },
    { key: "9", name: I18n.get("Border") },
    { key: "10", name: I18n.get("Boxer") },
    { key: "11", name: I18n.get("German") },
    { key: "12", name: I18n.get("Bull") },
    { key: "13", name: I18n.get("FrenchBull") },
    { key: "14", name: I18n.get("EnglishBull") },
    { key: "15", name: I18n.get("Basset") },
    { key: "16", name: I18n.get("Boston") },
    { key: "17", name: I18n.get("KingCharles") },
    { key: "18", name: I18n.get("Spain") },
    { key: "19", name: I18n.get("Collie") },
    { key: "20", name: I18n.get("WestCorgi") },
    { key: "21", name: I18n.get("Chihu") },
    { key: "22", name: I18n.get("ChowChow") },
    { key: "23", name: I18n.get("Creole") },
    { key: "24", name: I18n.get("Dalmatian") },
    { key: "25", name: I18n.get("Dogo") },
    { key: "26", name: I18n.get("Doberman") },
    { key: "27", name: I18n.get("Fila") },
    { key: "28", name: I18n.get("Fox") },
    { key: "29", name: I18n.get("FoxHound") },
    { key: "30", name: I18n.get("GreyHound") },
    { key: "31", name: I18n.get("GoldenRetriever") },
    { key: "32", name: I18n.get("GreatDanes") },
    { key: "33", name: I18n.get("Griffon") },
    { key: "34", name: I18n.get("SiberianHusky") },
    { key: "35", name: I18n.get("Jack") },
    { key: "36", name: I18n.get("Lebra") },
    { key: "37", name: I18n.get("Alaska") },
    { key: "38", name: I18n.get("Mastiff") },
    { key: "39", name: I18n.get("Papillon") },
    { key: "40", name: I18n.get("GermanShepherd") },
    { key: "41", name: I18n.get("Australia") },
    { key: "42", name: I18n.get("BelgianShepherd") },
    { key: "43", name: I18n.get("SheepDog") },
    { key: "44", name: I18n.get("Irish") },
    { key: "45", name: I18n.get("Pekings") },
    { key: "46", name: I18n.get("CaucasianShepherd") },
    { key: "47", name: I18n.get("Pincher") },
    { key: "48", name: I18n.get("GermanPointer") },
    { key: "49", name: I18n.get("Pomeranian") },
    { key: "50", name: I18n.get("Puli") },
    { key: "51", name: I18n.get("Rottweiler") },
    { key: "52", name: I18n.get("Schnauzer") },
    { key: "53", name: I18n.get("Setter") },
    { key: "54", name: I18n.get("ShihTzu") },
    { key: "55", name: I18n.get("SpringerSpaniel") },
    { key: "56", name: I18n.get("Weimaraner") },
    { key: "57", name: I18n.get("Schnauzer") }
  ];
    const horseRaceListdata = [
    { key: "1", name: I18n.get("Andalusian") },
    { key: "2", name: I18n.get("Arab") },
    { key: "3", name: I18n.get("Columbian") },
    { key: "4", name: I18n.get("QuarterOfMile") },
    { key: "5", name: I18n.get("Spanish") },
    { key: "6", name: I18n.get("Frisian") },
    { key: "7", name: I18n.get("Palomino") },
    { key: "8", name: I18n.get("Percheron") },
    { key: "9", name: I18n.get("Appalosa") },
    { key: "10", name: I18n.get("Pinto") },
    { key: "11", name: I18n.get("Paso") },
    { key: "12", name: I18n.get("Portuguese") },
    { key: "13", name: I18n.get("Falabella") },
    { key: "14", name: I18n.get("Lusitano") },
    { key: "15", name: I18n.get("Hanoverian") },
    { key: "16", name: I18n.get("Belgian") },
    { key: "17", name: I18n.get("Argentine") },
    { key: "18", name: I18n.get("Lipizzano") },
    { key: "19", name: I18n.get("EnglishBlood") },
    { key: "20", name: I18n.get("French") },
    { key: "21", name: I18n.get("Threw") },
    { key: "22", name: I18n.get("Tennessee") },
    { key: "23", name: I18n.get("Shetland") },
  ];

  const data = {
    cat: catRaceListdata,
    dog: dogRaceListdata,
    horse: horseRaceListdata
  }
  return data;
}
  