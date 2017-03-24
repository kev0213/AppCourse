import React from 'react';
import { View,Image} from 'react-native';

const uno =()=>{
    const {container,logo} = styles;
    return(
     <View style={styles.purple}>
      <Image source={require('../img/logo_twitch.png')}style={logo}/>
     </View>

    );
};
 
const styles = {
    purple:{
        width:375,
        height:667,
        backgroundColor:'rgb(100,65,165)',
        //justifyContent:'center',
        alignItems:'center',
    },
    logo:{
        width:185.5,
        height:61.5,
        marginTop:273,
    }
};
export default uno;