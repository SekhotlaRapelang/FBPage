import { StatusBar } from 'expo-status-bar';
import { StyleSheet,Image, Text,TouchableOpacity, View } from 'react-native';
import { Ionicons,MaterialIcons,AntDesign,Foundation, FontAwesome5,Fontisto  } from '@expo/vector-icons';
import { backgroundColor, borderLeftColor } from 'react-native/Libraries/Components/View/ReactNativeStyleAttributes';



export default function App() {
  return (
    <>
    <StatusBar style="auto" />
    < View style={styles.container} >
      <View style={styles.Profile}>
        <View style={styles.FBstadusBar}>
          <TouchableOpacity>
        <MaterialIcons name="arrow-back-ios" size={36} color="white" style={{marginTop: '42%', marginStart: '5%'}} />
        </TouchableOpacity>
         <View style={styles.seachBar}>
         <TouchableOpacity>
         <FontAwesome5 name="search" size={20} color="white" style={{marginTop:8, marginStart:6}} />
         </TouchableOpacity>
         <TouchableOpacity>
         <Text style={{fontFamily:'bold', color:"white", fontSize: 17,marginTop:7,marginStart:6}}>Lesotho</Text>
         </TouchableOpacity>
         </View>
         <TouchableOpacity>
         <Ionicons name="options" size={36} color="white"  style={{marginTop: '38%', marginStart: '6%'}}  />
         </TouchableOpacity>
        </View>
        <View style={styles.POST}>
          <View style={styles.ProfileBox}>
          <View style={styles.names}>
          <Image 
         source={require("./assets/mrme.jpg")}  
         style={{width: 70, height: 70, borderRadius: 35,marginStart:'3%', marginTop:'6%'}}  
         />
         <View style={styles.pictureV}>
         <Text style={{fontSize:16, marginTop:'16%'}}> Thabo Bohobe </Text>
         <View style={styles.Databox}>
         < Text style={{color: 'rgb(189, 189, 189)', fontSize:16}}>Yesterday </Text>
         <Fontisto name="world" size={12} color='rgb(189, 189, 189)' style={{margin:'3%'}} />
         </View>
         </View>
         <TouchableOpacity>
         <AntDesign name="down" size={20} color="black" style={{color: 'rgb(189, 189, 189)', marginStart:'9%', marginTop: '39%'}} />
         </TouchableOpacity>
         </View>
         <Text style={{fontSize:17, margin:'3%'}}>The lovely beautiful land of the mountain in the sky "Lesotho".</Text>
          </View>
          <Image 
         source={require("./assets/mountains.jpg")}  
         style={{width: '97%', height: '35%',marginStart:'1.5%'}}  
         />
         <View style={styles.CommentLikes}>
         <TouchableOpacity>
         <Text style={{color: 'rgb(189, 189, 189)', fontFamily:"bold",marginTop:20,marginStart:'10%'}}>954 Likes</Text>
         </TouchableOpacity>
         <TouchableOpacity>
         <Text style={{color: 'rgb(189, 189, 189)', fontFamily:"bold",marginTop:20,marginStart:1}}>120 Comments</Text>
         </TouchableOpacity>
         </View>
         <View style={styles.CommentsLikeIcons}>
         <TouchableOpacity>
         <Fontisto name="like" size={24} color="rgb(189, 189, 189)"style={{ marginTop:15, marginStart: '20%'}} />
         </TouchableOpacity>
         <Text style={{marginTop:19,marginStart:'-13%',color:"rgb(189, 189, 189)"}}>Like</Text>
         <TouchableOpacity>
         <Foundation name="comment" size={24} color="rgb(189, 189, 189)"style={{ marginTop:20, marginStart:60}} />
         </TouchableOpacity>
         <Text style={{marginTop:20,marginStart:'1%',color:"rgb(189, 189, 189)"}}>Comment</Text>
         <TouchableOpacity>
         <Fontisto name="share-a" size={24} color="rgb(189, 189, 189)"style={{ marginTop:20,marginStart:40}} />
         </TouchableOpacity>
         <Text style={{marginTop:20,marginStart:'1%',color:"rgb(189, 189, 189)"}}>share</Text>
         </View>
         <View style={styles.ProfileBox}>
          <View style={styles.names}>
        <Image 
         source={require("./assets/wolf.jpg")}  
         style={{width: 70, height: 70, borderRadius: 35,marginStart:'3%', marginTop:'6%'}}  
         />
         <View style={styles.pictureV}>
         <Text style={{fontSize:16, marginTop:'16%'}}> John Wolf </Text>
         <View style={styles.Databox}>
         < Text style={{color: 'rgb(189, 189, 189)', fontSize:16}}>5 Days ago </Text>
         <Fontisto name="world" size={12} color='rgb(189, 189, 189)' style={{margin:'3%'}} />
         </View>
         </View>
         <TouchableOpacity>
         <AntDesign name="down" size={20} color="black" style={{color: 'rgb(189, 189, 189)', marginStart:'9%', marginTop: '39%'}} />
         </TouchableOpacity>
         </View>
          </View>
        </View>
      </View>
    </View>
    </>
      
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
  Profile: {
    marginTop: 45,
    height: '100%',
    width: '100%',
    backgroundColor: 'rgb(24, 119, 242)', alignItems: 'center',

  },
   FBstadusBar: {
    flexDirection: 'row',
     height: '10%',
     width: '100%',
     backgroundColor: 'rgb(21, 101, 192)',
    
  
   },
     seachBar: {
     flexDirection: 'row',
     height: '55%',
     width: '75%',
     marginTop: '6%',
     marginStart:-15,
     borderRadius: 10,
     backgroundColor: 'rgb(13, 71, 161)',
    },
     Databox: {
    backgroundColor:'white',
    flexDirection: 'row',
   },
   POST: {
     height: "100%",
     width:"100%",
     backgroundColor: 'rgb(224, 224, 224)',
   },
   ProfileBox: {
     marginTop: '3%',
     marginStart: '3.5%',
     height: '20%',
     width: '93%',
     backgroundColor: 'white',
   },
   pictureV:{
   backgroundColor:'white',
   width: '67%'
   },
   names: {
     flexDirection: 'row',
     backgroundColor: 'white',
   },
   CommentLikes: {
    height: '8%',
    marginStart: '3.5%',
    width: '93%',
    backgroundColor: 'white',
    flexDirection: 'row',
   },
   CommentsLikeIcons: {
    height: '8%',
    marginStart: '3.5%',
    width: '93%',
    backgroundColor: 'rgb(245, 245, 245)',
    flexDirection: 'row',
    
   }
});
