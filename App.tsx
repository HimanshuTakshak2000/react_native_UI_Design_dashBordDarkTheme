
import React from 'react';
// import AppStyle from './assets/AppStyle';
import {
  Image,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  useColorScheme,
  TouchableOpacity,
  View,
} from 'react-native';



function App(): React.JSX.Element {

  return (
    <>
      <SafeAreaView style={AppStyle.mainContainer1}>
        <View style={AppStyle.topView1ofMainContainer1}>
          <Text style={AppStyle.topView1ofMainContainer1Text}>Service at your doorstep.</Text>

          <Image source={require('./assets/Image/notificationbing.png')} style={AppStyle.topView1ofMainContainer1Image} />
        </View>

        <View style={AppStyle.topView2ofMainContainer1}>
          <TextInput placeholder='Search' placeholderTextColor={'#B3B3B3'} style={AppStyle.topView2ofMainContainer1Text} />

          <View style={AppStyle.topView2ofMainContainer1ImageView}>
            <Image source={require('./assets/Image/searchnormal.png')} style={AppStyle.topView2ofMainContainer1Image} />
          </View>
          
        </View>

        <View style={{width:'100%', height:227,alignItems:'center',}}>
          <Image source={require('./assets/Image/banner4x.png')} style={AppStyle.topView3ofMainContainer1Image1} />

          <View style={{flexDirection:'row'}}>
            <Image source={require('./assets/Image/Rectangle1.png')} style={AppStyle.topView3ofMainContainer1Image2} />

            <Image source={require('./assets/Image/Rectangle.png')} style={AppStyle.topView3ofMainContainer1Image3} />

            <Image source={require('./assets/Image/Rectangle.png')} style={AppStyle.topView3ofMainContainer1Image3} />
          </View>
          
        </View>

        <View>
          <Text>hello</Text>
        </View>

        <TouchableOpacity style={AppStyle.topView5ofMainContainer1}>

          <View style={AppStyle.topView5ofMainContainer1View}>

            <Text style={AppStyle.topView5ofMainContainer1ViewText}>Go to Admin Dashboard</Text>
            <Image source={require('./assets/Image/arrowright.png')} style={AppStyle.topView5ofMainContainer1ViewImage} />

          </View>
          
        </TouchableOpacity>

      </SafeAreaView>

      <SafeAreaView style={AppStyle.mainContainer2}>

        <View style={AppStyle.bottomFixViewContainer}>

          <View >
            <Image source={require('./assets/Image/chart.png')} style={AppStyle.bottomFixViewImageContain} />
          </View>

          <View style={AppStyle.bottomFixDashBordContainer}>
            <Image source={require('./assets/Image/element4.png')} style={AppStyle.bottomFixViewImageContain} />

            <Text style={AppStyle.bottomFixDashBordText}>Dashboard</Text>
          </View>

          <View>
            <Image source={require('./assets/Image/crown.png')} style={AppStyle.bottomFixViewImageContain} />
          </View>

          <View>
            <Image source={require('./assets/Image/profile.png')} style={AppStyle.bottomFixViewImageContain} />
          </View>


        </View>
      </SafeAreaView>
    </>
    
  );
}

const AppStyle = StyleSheet.create({
  mainContainer1:{
    backgroundColor:'gray',
    height:'94%', 
    // top:47,
    paddingHorizontal:18,
    justifyContent:'space-evenly',
    // alignItems:'center',
  },

  mainContainer2:{
      flex:1,
      justifyContent:'flex-end'
  },

  bottomFixViewContainer:{
      flexDirection:'row',
      height:56,
      width:'100%',
      backgroundColor:'#585858',
      justifyContent:'space-evenly',
      alignItems:'center',
  },

  bottomFixViewImageContain:{
    width:24,
    height:24,
  },

  bottomFixDashBordContainer:{
    backgroundColor:'#F15E64',
    paddingHorizontal:12,
    paddingVertical:6, 
    borderRadius:8,
    width:123, 
    height:36, 
    flexDirection:'row', justifyContent:'space-around', alignItems:'center',
  },

  bottomFixDashBordText:{
    fontFamily:'OswaldRegular', 
    fontSize:12, 
    fontWeight:'500',
    color:'#FFFFFF'
  },

  topView1ofMainContainer1:{
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'flex-start',
    width:'100%',
    height:78,
  },

  topView1ofMainContainer1Text:{
    fontFamily:'OswaldRegular', 
    fontSize:24, 
    fontWeight:'500',
    width:'50%',
    color:'#FFFFFF'
  },

  topView1ofMainContainer1Image:{
    width:24,
    height:24, 
    marginTop:12,
  },

  topView2ofMainContainer1:{
    width:'100%',
    height:68,
    borderRadius:12,
    backgroundColor:'#585858',
    flexDirection:'row',
    paddingHorizontal:10,
    justifyContent:'space-between',
    alignItems:'center'
  },

  topView2ofMainContainer1Text:{
    fontFamily:'OswaldRegular', 
    fontSize:18, 
    fontWeight:'400',
    width:'88%'
  },

  topView2ofMainContainer1ImageView:{
    height:40, 
    width:38, 
    backgroundColor:'#F15E64', justifyContent:'center', 
    alignItems:'center', 
    borderRadius:8, 
  },

  topView2ofMainContainer1Image:{
    width:24,
    height:24,
  },
  
  topView3ofMainContainer1Image1:{
    height:200,
    width:'100%', 
    resizeMode:'stretch'
  },

  topView3ofMainContainer1Image2:{
    width:8, 
    height:16, 
    marginHorizontal:2, 
    marginTop:5
  },

  topView3ofMainContainer1Image3:{
    width:8, 
    height:8, 
    marginHorizontal:2, 
    marginTop:5, 
    alignSelf:'center'
  },





  topView5ofMainContainer1:{
    paddingHorizontal:25, 
    paddingVertical:17, 
    backgroundColor:'#F15E64', 
    borderRadius:12
  },

  topView5ofMainContainer1View:{
    flexDirection:'row', justifyContent:'space-between', alignItems:'center'
  },

  topView5ofMainContainer1ViewText:{
    fontFamily:'OswaldRegular', 
    fontSize:16, 
    color:'#FFFFFF',
    fontWeight:'500'
  },

  topView5ofMainContainer1ViewImage:{
    width:24,
    height:24
  },






});

export default App;
