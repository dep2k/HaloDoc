import React from "react";
import {View, Image, StyleSheet, ScrollView, Text, TextInput, TouchableOpacity} from "react-native";
import { CheckBox } from "react-native-elements"
;
class PetRegistrationForm extends React.Component {

    render() {
        return <ScrollView contentContainerStyle={styles.contentContainer}>
            <Image style={{ marginTop: "15%", height: 80, width: 80, marginBottom: "10%", marginHorizontal: "36%" }} source={require("../images/ImageLogo.jpg")} />
            <Text style={{ fontWeight: "bold", fontSize: 20, color: "#BED885", width: "80%", marginBottom: "5%", marginHorizontal: "10%", textAlign: "center" }}>
              HISTORIA CLINICA
            </Text>
        
            <View style={{ backgroundColor: "transparent", height: 220, width: "90%", marginHorizontal: "5%" }}>
              <View style={{ flexDirection: "row", height: 30, width: "100%", marginBottom: 5 }}>
                <TextInput style={{ width: "100%", height: 30, borderBottomWidth: 1, justifyContent: "flex-end", alignItems: "center" }} placeholder="Nombre" placeholderColor="grey" />
              </View>
              <View style={{ flexDirection: "row", height: 30, width: "100%", marginBottom: 5 }}>
                <TextInput style={{ width: "100%", height: 30, borderBottomWidth: 1, justifyContent: "flex-end", alignItems: "center" }} placeholder="Raza" placeholderColor="grey" />
              </View>
              <View style={{ flexDirection: "row", height: 30, width: "100%", marginBottom: 5 }}>
                <TextInput style={{ width: "100%", height: 30, borderBottomWidth: 1, justifyContent: "flex-end", alignItems: "center" }} placeholder="Color" placeholderColor="grey" />
              </View>
              <View style={{ flexDirection: "row", height: 30, width: "100%", marginBottom: 5 }}>
                <TextInput style={{ width: "100%", height: 30, borderBottomWidth: 1, justifyContent: "flex-end", alignItems: "center" }} placeholder="Sexo" placeholderColor="grey" />
              </View> 
              <View style={{ flexDirection: "row", height: 30, width: "100%", marginBottom: 5 }}>
                <TextInput style={{ width: "100%", height: 30, borderBottomWidth: 1, justifyContent: "flex-end", alignItems: "center" }} placeholder="Edad" placeholderColor="grey" />
              </View>
              <View style={{ flexDirection: "row", height: 30, width: "100%" }}>
                 <Text style = {{width: "100%", height:30, color:"#8BE0DE"}}>
                    Procedencia
                 </Text>
                 </View>
                  <View style = {{width:"100%",height:1,backgroundColor:"grey"}}>
              </View>
            </View>
               <Text style={{marginTop: "5%", fontWeight: "bold", fontSize: 20, color: "#BED885", width: "80%", marginBottom: "2%", marginHorizontal: "10%", textAlign: "center" }}>
                     VACUNATION
              </Text>
              <View style = {{flexDirection:"row", height:25, width: "100%", backgroundColor:'transparent', justifyContent:'center',
                              alignItems:'center'}}>
                  <Text style = {{ fontSize:15, color:'darkgrey', marginRight:2 }}>
                  SI
                  </Text>
                  <Image style = {{ height:12, width:12, backgroundColor: 'grey', marginRight:20}}/>
                  <Text style = {{ fontSize:15, color:'darkgrey', marginRight:2 }}>
                  NO
                  </Text>
                  <Image style = {{ height:12, width:12, backgroundColor: 'grey', marginRight:20}}/>
              </View>
              <View style={{ height: 150, width: "90%", marginHorizontal: "5%" }}>
                 <View style={{ flexDirection: "row", height: 30, width: "100%", justifyContent: "flex-start",
                  alignItems:"center",marginTop:20}}>
                 <Text style = {{width: "15%", height:28, color:"#8BE0DE", textAlign: "left", marginRight:15}}>
                    PVC
                 </Text>
                 <Image style = {{ height:12, width:12, backgroundColor: 'grey',marginRight:"15%" }}/>
                 <Text style = {{width: "15%", height:28, color:"#8BE0DE", textAlign: "left", marginRight:15}}>
                    FECHA
                 </Text>
                 <TextInput style= {{ width: 100, height:28}}
                            placeholder= "DD/MM/AAAA"
                            >
                 </TextInput>
                 </View>
                 <View style = {{width:"100%",height:1,backgroundColor:"grey",marginBottom:5}}>
                 </View>
                 <View style={{ flexDirection: "row", height: 30, width: "100%",justifyContent: "flex-start",
                  alignItems:"center"  }}>
                 <Text style = {{width: "15%", height:28, color:"#8BE0DE", textAlign: "left", marginRight:15}}>
                    TRIPLE
                 </Text>
                 <Image style = {{ height:12, width:12, backgroundColor: 'grey',marginRight:"15%" }}/>
                  <Text style = {{width: "15%", height:28, color:"#8BE0DE", textAlign: "left", marginRight:15}}>
                    FECHA
                 </Text>
                 <TextInput style= {{ width: 100, height:28}}
                            placeholder= "DD/MM/AAAA"
                             >
                 </TextInput>
                 </View>
                 <View style = {{width:"100%",height:1,backgroundColor:"grey",marginBottom:5}}>
                 </View>
                 <View style={{ flexDirection: "row", height: 30, width: "100%",justifyContent: "flex-start",
                  alignItems:"center"  }}>
                 <Text style = {{width: "15%", height:28, color:"#8BE0DE", textAlign: "left", marginRight:15}}>
                    RABIA
                 </Text>
                 <Image style = {{ height:12, width:12, backgroundColor: 'grey', marginRight:"15%" }}/>
                  <Text style = {{width: "15%", height:28, color:"#8BE0DE", textAlign: "left", marginRight:15}}>
                    FECHA
                 </Text>
                 <TextInput style= {{ width: 100, height:28}}
                            placeholder= "DD/MM/AAAA"
                             >
                 </TextInput>
                 </View>
                 <View style = {{width:"100%",height:1,backgroundColor:"grey",marginBottom:5}}>
                 </View>
                 <View style={{ flexDirection: "row", height: 30, width: "100%" , justifyContent: "flex-start",
                  alignItems:"center" }}>
                 <Text style = {{width: "15%", height:28, color:"#8BE0DE", textAlign: "left", marginRight:15}}>
                    OTRA
                 </Text>
                 <Image style = {{ height:12, width:12, backgroundColor: 'grey',marginRight:"15%" }}/>
                  <Text style = {{width: "15%", height:28, color:"#8BE0DE", textAlign: "left", marginRight:15}}>
                    FECHA
                 </Text>
                 <TextInput style= {{ width: 100, height:28}}
                            placeholder= "DD/MM/AAAA"
                             >
                 </TextInput>
                 </View>
                 <View style = {{width:"100%",height:1,backgroundColor:"grey",marginBottom:5}}>
                 </View>
              </View>
               <Text style={{marginTop: "10%", fontWeight: "bold", fontSize: 20, color: "#BED885", width: "80%", marginBottom: "2%", marginHorizontal: "10%", textAlign: "center" }}>
                     DESPARACITACION
              </Text>
              <View style = {{flexDirection:"row", height:25, width: "100%", backgroundColor:'transparent', justifyContent:'center',
                              alignItems:'center'}}>
                  <Text style = {{ fontSize:15, color:'darkgrey', marginRight:2 }}>
                  SI
                  </Text>
                  <Image style = {{ height:12, width:12, backgroundColor: 'grey', marginRight:20}}/>
                  <Text style = {{ fontSize:15, color:'darkgrey', marginRight:2 }}>
                  NO
                  </Text>
                  <Image style = {{ height:12, width:12, backgroundColor: 'grey', marginRight:20}}/>
              </View>
              <View style={{ height: 150, width: "90%", marginHorizontal: "5%" }}>
                 <View style={{ flexDirection: "row", height: 30, width: "100%", justifyContent: "flex-start",
                  alignItems:"center",marginTop:20}}>
                 <Text style = {{width: "25%", height:28, color:"#8BE0DE", textAlign: "left", marginRight:15}}>
                    PRODUCTO
                 </Text>
                 <TextInput style= {{ width: 200, height:28}}  >
                 </TextInput>
                 </View>
                 <View style = {{width:"100%",height:1,backgroundColor:"grey",marginBottom:5}}>
                 </View>
                 <View style={{ flexDirection: "row", height: 30, width: "100%",justifyContent: "flex-start",
                  alignItems:"center"  }}>
                 <Text style = {{width: "15%", height:28, color:"#8BE0DE", textAlign: "left", marginRight:15}}>
                    FECHA
                 </Text>
                 <TextInput style= {{ width: 100, height:28}}
                            placeholder= "DD/MM/AAAA"
                             >
                 </TextInput>
                 </View>
                 <View style = {{width:"100%",height:1,backgroundColor:"grey",marginBottom:5}}>
                 </View>
                 <View style={{ flexDirection: "row", height: 30, width: "100%",justifyContent: "flex-start",
                  alignItems:"center"  }}>
                 <Text style = {{width: "15%", height:28, color:"#8BE0DE", textAlign: "left", marginRight:15}}>
                    ALIMENTACION
                 </Text>
                 </View>
                 <View style = {{width:"100%",height:1,backgroundColor:"grey"}}>
                 </View>
              </View>
              <View style = {{ flexDirection:"column",marginTop:"15%",width:"90%", marginHorizontal: "5%", height:150, 
               justifyContent: 'center', alignItems: 'center'}}>
                  <TouchableOpacity style = {{height:40, width: "95%", borderRadius: 20, backgroundColor:'seagreen',
                          justifyContent: 'center', alignItems: 'center'}}>
                        <Text style = {{color:'white', fontSize:15, fontWeight:"bold"}}>
                              GUARDAR
                        </Text>
                  </TouchableOpacity>
                   <TouchableOpacity style = {{height:40, width: "95%", borderRadius: 20, backgroundColor:'seagreen',
                          justifyContent: 'center', alignItems: 'center', marginTop:15}}>
                        <Text style = {{color:'white', fontSize:15, fontWeight:"bold"}}>
                              GUARDAR E INSCRIBIR OTRA MASCOTA
                        </Text>
                  </TouchableOpacity>
              </View>
          </ScrollView>;
    }
} const styles = StyleSheet.create({
    contentContainer: {
      flexDirection: "column",
      backgroundColor: "white",
      justifyContent: 'flex-start',
      alignItems: 'center'
    }
  });
export default PetRegistrationForm;