import React from 'react';
import { View,Image} from 'react-native';
import Footer from './footer';
import Header from './header';
const hs =()=>{
  
    return(
     <View style={styles.purple}>
    <Header />

 
          
          <View>
            <Image source={require('../img/img_firebat.png')} style={[styles.scene]} />
          </View>
          <View>
            <Image source={require('../img/img_forsen.png')} style={[styles.scene]} />
          </View>
          <View>
            <Image source={require('../img/img_kolento.png')} style={[styles.scenee]} />
          </View>

        <Footer />
     </View>

    );
};
   
const styles = {
      scene:{
        width:365, height:200,
        marginLeft:4.5,marginTop:5,    },
    scenee:{
        width:365,
        height:144,
        marginLeft:4.5,marginTop:5,   },
    purple:{
        width:375,height:667,
        backgroundColor:'white',
    alignItems:'center',    },
    logo:{      width:185.5, height:61.5,
        marginTop:273,    }
};
export default hs;