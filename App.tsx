import React, { useRef, useState } from 'react';
// import AppStyle from './assets/AppStyle';
import {
  FlatList,
  Image,
  SafeAreaView,
  ScrollView,
  Dimensions,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';

// import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/FontAwesome';
import {createDrawerNavigator} from '@react-navigation/drawer';
import Carousel from 'react-native-reanimated-carousel';


const Drawer = createDrawerNavigator();

const Tab = createBottomTabNavigator();

const data = [
  {
    imageSource: require('./assets/Image/VisitorManagement.png'),
    dataTitle: 'Visitor Management',
    dataText: 'Loreum ipsum dolor sit smet loreum ipsum dolor sit...',
    dataId: 1,
  },
  {
    imageSource: require('./assets/Image/OrderFood.png'),
    dataTitle: 'Order Food',
    dataText: 'Loreum ipsum dolor sit smet loreum ipsum dolor sit...',
    dataId: 2,
  },
  {
    imageSource: require('./assets/Image/ResourceManagement.png'),
    dataTitle: 'Resource Management',
    dataText: 'Loreum ipsum dolor sit smet loreum ipsum dolor sit...',
    dataId: 3,
  },
  {
    imageSource: require('./assets/Image/FactoryManagement.png'),
    dataTitle: 'Factory Management',
    dataText: 'Loreum ipsum dolor sit smet loreum ipsum dolor sit...',
    dataId: 4,
  },
  {
    imageSource: require('./assets/Image/PaymentHistory.png'),
    dataTitle: 'Payment History',
    dataText: 'Loreum ipsum dolor sit smet loreum ipsum dolor sit...',
    dataId: 5,
  },
];

const carouselData = [
  {
    imageSource: require('./assets/Image/banner4x.png'),
    dataId: 1,
  },
  {
    imageSource: require('./assets/Image/FactoryManagement.png'),
    dataId: 2,
  },
  {
    imageSource: require('./assets/Image/PaymentHistory.png'),
    dataId: 3,
  },
]

const flatListHeader = () => {
  const width = Dimensions.get('window').width;
  const [index, setIndex] = useState(0);
  const renderPagination = () => {
    return (
      <View style={AppStyle.paginationContainer}>
        {carouselData.map((_,i) => (
          <View
            key={i}
            style={i===index ? AppStyle.square: AppStyle.dot}
          />
        ))}
      </View>
    );
  };

  return (
    <>
      <View>
        <Carousel
            loop
            width={width/1.1}
            height={width/1.6}
            data={carouselData}
            // autoPlay={true}
            scrollAnimationDuration={1000}
            onSnapToItem={(index) => setIndex(index)}
            renderItem={({ item }) => (
                <View  >
                  <Image source={item.imageSource} style={{width:'100%', height:'100%', resizeMode:'contain'}} />
                </View>
            )}
            style={{paddingHorizontal:5}} 
        />
      {renderPagination()}
    </View>
      

      <View style={{marginVertical: 10}}>
        <Text
          style={{
            fontFamily: 'OswaldRegular',
            fontSize: 20,
            fontWeight: '500',
            color: '#FFFFFF',
          }}>
          Your Dashboard
        </Text>
      </View>
    </>
  );
};

const flatListFooter = () => {
  return (
    <TouchableOpacity style={AppStyle.topView5ofMainContainer1}>
      <View style={AppStyle.topView5ofMainContainer1View}>
        <Text style={AppStyle.topView5ofMainContainer1ViewText}>
          Go to Admin Dashboard
        </Text>
        <Image
          source={require('./assets/Image/arrowright.png')}
          style={AppStyle.topView5ofMainContainer1ViewImage}
        />
      </View>
    </TouchableOpacity>
  );
};

const Home = ({navigation}: any) => {
  return (
    <View style={{flex: 1, backgroundColor: 'white'}}>
      <View
        style={{
          width: '100%',
          height: 50,
          backgroundColor: '#444444',
          flexDirection: 'row',
        }}>
        <TouchableOpacity
          style={{marginLeft: 5, justifyContent: 'center', height: '100%'}}
          onPress={() => navigation.navigate('Dashboard')}>
          <Icon name="arrow-left" size={25} color={'white'} />
        </TouchableOpacity>
        <Text
          style={{
            width: '90%',
            alignSelf: 'center',
            fontSize: 24,
            color: '#FFFFFF',
            fontWeight: '500',
            marginLeft: 130,
          }}>
          Home
        </Text>
      </View>
      <View style={{alignItems:'center', justifyContent:'center' ,height:'100%'}}>
        <Text style={{color: 'skyblue', fontSize:30}}>Home Screen</Text>
      </View>
    </View>
  );
};

const DrawerDummy = () => {
  return (
    <Drawer.Navigator initialRouteName="Dashboard">
      <Drawer.Screen
        name="Dashboard"
        component={DashBoard}
        options={{
          headerTitle: 'Service at your doorstep.',
          headerStyle: {
            backgroundColor: '#444444',
            height: 100,
          },
          headerTitleStyle:{
            fontFamily: 'OswaldRegular',
            fontSize: 24,
            fontWeight: '500',
          },
          headerShadowVisible: false,
          headerTintColor: '#FFFFFF',
          headerRight: () => (
            <Image
          source={require('./assets/Image/notificationbing.png')}
          style={AppStyle.topView1ofMainContainer1Image}
        />
          )
        }}
      />

      <Drawer.Screen
        name="Home"
        component={Home}
        options={{headerShown: false}}
      />
    </Drawer.Navigator>
  );
};

const TabComponent = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarStyle: {
          backgroundColor: '#585858',
        },
        tabBarShowLabel: false,
        headerTitleAlign: 'center',
        headerStyle: {
          backgroundColor: 'pink',
          // height:100
        },
        headerTitleStyle: {
          color: 'white',
        },
      }}
      sceneContainerStyle={{backgroundColor: 'powderblue'}}
      initialRouteName="DashBoard">
      <Tab.Screen
        name="Chart"
        component={Chart}
        options={{
          tabBarIcon: ({focused}) => (
            <View style={focused ? AppStyle.bottomFixDashBordContainer : null}>
              <Image
                source={require('./assets/Image/chart.png')}
                style={AppStyle.bottomFixViewImageContain}
              />
              {focused ? (
                <Text style={AppStyle.bottomFixDashBordText}>Chart</Text>
              ) : null}
            </View>
          ),
        }}
      />

      <Tab.Screen
        name="DashBoard"
        component={DrawerDummy}
        options={{
          headerShown: false,
          tabBarIcon: ({focused}) => (
            <View style={focused ? AppStyle.bottomFixDashBordContainer : null}>
              <Image
                source={require('./assets/Image/element4.png')}
                style={AppStyle.bottomFixViewImageContain}
              />

              {focused ? (
                <Text style={AppStyle.bottomFixDashBordText}>Dashboard</Text>
              ) : null}
            </View>
          ),
        }}
      />

      <Tab.Screen
        name="Crown"
        component={Crown}
        options={{
          tabBarIcon: ({focused}) => (
            <View style={focused ? AppStyle.bottomFixDashBordContainer : null}>
              <Image
                source={require('./assets/Image/crown.png')}
                style={AppStyle.bottomFixViewImageContain}
              />

              {focused ? (
                <Text style={AppStyle.bottomFixDashBordText}>Crown</Text>
              ) : null}
            </View>
          ),
        }}
      />

      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarIcon: ({focused}) => (
            <View style={focused ? AppStyle.bottomFixDashBordContainer : null}>
              <Image
                source={require('./assets/Image/profile.png')}
                style={AppStyle.bottomFixViewImageContain}
              />
              {focused ? (
                <Text style={AppStyle.bottomFixDashBordText}>Profile</Text>
              ) : null}
            </View>
          ),
        }}
      />
    </Tab.Navigator>
  );
};

function App(): React.JSX.Element {
  return (
    <>
      <NavigationContainer>
        <TabComponent />
      </NavigationContainer>
    </>
  );
}

function Chart() {
  return (
    <View
      style={{alignItems: 'center', justifyContent: 'center', height: '100%'}}>
      <Text style={{fontSize: 28, color: 'blue'}}>Chart Screen</Text>
    </View>
  );
}

const DashBoard = () => {
  return (
    <SafeAreaView style={AppStyle.mainContainer1}>

      <View style={AppStyle.topView2ofMainContainer1}>
        <TextInput
          placeholder="Search"
          placeholderTextColor={'#B3B3B3'}
          style={AppStyle.topView2ofMainContainer1Text}
        />

        <View style={AppStyle.topView2ofMainContainer1ImageView}>
          <Image
            source={require('./assets/Image/searchnormal.png')}
            style={AppStyle.topView2ofMainContainer1Image}
          />
        </View>
      </View>

      <View style={{height: 530, marginTop: 10}}>
        <FlatList
          ListHeaderComponent={flatListHeader}
          ListFooterComponent={flatListFooter}
          ListFooterComponentStyle={{ marginBottom:25}}
          ListHeaderComponentStyle={{marginVertical: 10}}
          numColumns={2}
          data={data}
          renderItem={({item}) => (
            <View style={{width: '48%', marginRight:10,  marginBottom:20, height:210}}>
              <View style={{flex:2, width:'100%', }}>
                <Image
                  source={item.imageSource}
                  style={{width: 170, height: 125, resizeMode:'cover', borderColor:'white', borderWidth:1, borderRadius:10}}
                  
                />
              </View>
              
              <View style={{flex:1, marginVertical:5,}}>
                <Text style={{fontFamily: 'OswaldRegular',fontSize: 16,fontWeight: '600',color: '#FFFFFF',}}>{item.dataTitle}</Text>
                <Text style={{fontFamily: 'OswaldRegular',fontSize: 12,fontWeight: '300',color: '#FFFFFF',}}>{item.dataText}</Text>
              </View>
            </View>
          )}
        />
      </View>
    </SafeAreaView>
  );
};

function Crown() {
  return (
    <View
      style={{alignItems: 'center', justifyContent: 'center', height: '100%'}}>
      <Text style={{fontSize: 28, color: 'blue'}}>Crown Screen</Text>
    </View>
  );
}

function Profile() {
  return (
    <View
      style={{alignItems: 'center', justifyContent: 'center', height: '100%'}}>
      <Text style={{fontSize: 28, color: 'blue'}}>Profile Screen</Text>
    </View>
  );
}

const AppStyle = StyleSheet.create({
  mainContainer1: {
    backgroundColor: '#444444',
    flex: 1,
    paddingHorizontal: 18,
  },

  mainContainer2: {
    flex: 1,
    justifyContent: 'flex-end',
  },

  bottomFixViewContainer: {
    flexDirection: 'row',
    height: 56,
    width: '100%',
    backgroundColor: '#585858',
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },

  bottomFixViewImageContain: {
    width: 24,
    height: 24,
  },

  bottomFixDashBordContainer: {
    backgroundColor: '#F15E64',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 8,
    height: 36,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },

  bottomFixDashBordText: {
    fontFamily: 'OswaldRegular',
    fontSize: 12,
    fontWeight: '500',
    color: '#FFFFFF',
    marginLeft: 5,
  },

  topView1ofMainContainer1: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    width: '100%',
    height: 78,
    marginTop: 50,
  },

  topView1ofMainContainer1Text: {
    fontFamily: 'OswaldRegular',
    fontSize: 24,
    fontWeight: '500',
    width: '50%',
    color: '#FFFFFF',
  },

  topView1ofMainContainer1Image: {
    width: 24,
    height: 24,
    marginRight:15,
    marginTop:6,

  },

  topView2ofMainContainer1: {
    width: '100%',
    height: 68,
    borderRadius: 12,
    backgroundColor: '#585858',
    flexDirection: 'row',
    paddingHorizontal: 10,
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 20,
    marginBottom: 15,
  },

  topView2ofMainContainer1Text: {
    fontFamily: 'OswaldRegular',
    fontSize: 18,
    fontWeight: '400',
    width: '88%',
  },

  topView2ofMainContainer1ImageView: {
    height: 40,
    width: 38,
    backgroundColor: '#F15E64',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
  },

  topView2ofMainContainer1Image: {
    width: 24,
    height: 24,
  },

  topView3ofMainContainer1Image1: {
    height: 200,
    width: '100%',
    resizeMode: 'stretch',
  },

  topView3ofMainContainer1Image2: {
    width: 8,
    height: 16,
    marginHorizontal: 2,
    marginTop: 5,
  },

  topView3ofMainContainer1Image3: {
    width: 8,
    height: 8,
    marginHorizontal: 2,
    marginTop: 5,
    alignSelf: 'center',
  },

  topView5ofMainContainer1: {
    paddingHorizontal: 25,
    paddingVertical: 17,
    backgroundColor: '#F15E64',
    borderRadius: 12,
  },

  topView5ofMainContainer1View: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  topView5ofMainContainer1ViewText: {
    fontFamily: 'OswaldRegular',
    fontSize: 16,
    color: '#FFFFFF',
    fontWeight: '500',
  },

  topView5ofMainContainer1ViewImage: {
    width: 24,
    height: 24,
  },

  paginationContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 10,
  },
  dot: {
    width: 8,
    height: 8,
    borderRadius: 8,
    marginHorizontal: 4,
    backgroundColor:'#585858',
    alignSelf:"center"
  },
  square: {
    width: 8,
    height: 16,
    borderRadius: 8,
    marginHorizontal: 4,
    backgroundColor:'#F15E64'
  },

});

export default App;
