import { StatusBar } from 'expo-status-bar';
import React ,{useState}from 'react';
import { Image, StyleSheet, Text, View,TextInput,ScrollView,Button, FlatList } from 'react-native';
import axios from 'axios';
import { Entypo } from '@expo/vector-icons'; 
import { FontAwesome } from '@expo/vector-icons'; 
import { AntDesign } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { SimpleLineIcons } from '@expo/vector-icons';


export default function App() {
  const [username, setUsername] = useState("");
  const [user, setUser] = useState({});
  async function  search(){
     try{
       const response= await axios.get(`http://0c62-2001-861-4903-1ca0-b410-ee43-42bc-2652.ngrok.io/users/${username}`);
       const userData= response.data
       console.log(userData);
       setUser(userData)
     }
     catch(error){
      console.log(error.message)
     }
  }
   
  return (
    <View style={styles.container}>
   
   <TextInput
        placeholder="chercher un utilisateur"
        style={styles.search}
        onChangeText={setUsername}
        value={username}/>
        <Button
        onPress={search}
        title="search"/>
        
        <ScrollView style={styles.scrollView}>
        <View  style={styles.text}>
        <Image
          style={styles.tinyLogo}
          source={{
            uri: user.avatar_url,
          }}
        />
      <View style={styles.item}>
      <Entypo name="login" size={24} color="blue" />
        <Text style={styles.text}>
        {user.login}
        </Text>
      </View>
      <View style={styles.item}>
      <FontAwesome name="id-card" size={24} color="blue" />
        <Text style={styles.text}>
        {user.id}
        </Text>
      </View>
      <View style={styles.item}>
      <AntDesign name="link" size={24} color="blue" />
        <Text style={styles.text}>
        {user.url}
        </Text>
      </View>
      <View style={styles.item}>
      <FontAwesome5 name="store" size={24} color="blue" />
        <Text style={styles.text}>
        {user.company}
        </Text>
      </View>
      <View style={styles.item}>
      <FontAwesome5 name="id-badge" size={24} color="blue" />
        <Text style={styles.text}>
        {user.name}
        </Text>
      </View>
      <View style={styles.item}>
      <MaterialCommunityIcons name="bio" size={24} color="blue" />
        <Text style={styles.text}>
        {user.bio}
        </Text>
      </View>
      <View style={styles.item}>
      <FontAwesome5 name="blog" size={24} color="blue" />
        <Text style={styles.text}>
        {user.blog}
        </Text>
      </View>
      <View style={styles.item}>
      <Entypo name="location" size={24} color="blue" />
        <Text style={styles.text}>
        {user.location}
        </Text>
      </View>
      <View style={styles.item}>
      <SimpleLineIcons name="user-following" size={24} color="blue" />
        <Text style={styles.text}>
        {user.followers}
        </Text>
      </View>
      <View style={styles.item}>
      <MaterialIcons name="date-range" size={24} color="blue"  />
        <Text style={styles.text}>
        {user.created_at}
        </Text>
      </View>
     
       </View>
        </ScrollView>
        
        </View>
      
    
  );}
  


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  tinyLogo: {
    width: 200,
    height: 200,
    borderRadius:25,
    marginHorizontal:150,
    marginTop:50
  },
  text:{
    textTransform:'capitalize',
    fontSize:50 ,
    marginVertical:20
  },
  search: {
    height: 40,
    width: 200,
    padding: 10,
    margin: 10,
    borderWidth: 1,
  },
  scrollView: {
    marginHorizontal: 20,
  },
  text: {
    fontSize: 20,
  },
  item:{
    flexDirection:'row',
    borderStyle:'solid',
    borderColor:'blue',
    borderWidth:2,
    marginBottom:10,
    marginTop:10,
    borderRadius:5
    
  }
});