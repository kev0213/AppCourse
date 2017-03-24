import React from 'react';
import { View,Image} from 'react-native';
import Footer from './footer';
import Header from './header2';
const trois =()=>{
  
    return(
     <View style={[st.bg]}>
    <Header />
            <View style={st.row}>
            <Image source={require('../img/img_leagueoflegends.png')} style={[st.sc]} />
            <Image source={require('../img/img_counterstrike.png')} style={[st.sc]} />
          </View>
          <View style={st.row}>
            <Image source={require('../img/img_hearthstone.png')} style={[st.sc]} />
            <Image source={require('../img/img_dota2.png')} style={[st.sc]} />
          </View>
          <View style={st.row}>
            <Image source={require('../img/img_h1z1.png')} style={[st.sc]} />
            <Image source={require('../img/img_destiny.png')} style={[st.sc]} />
          </View>

        <Footer />
     </View>

    );
};
   
const st = {
    bg:{
        width:375,height:667,
        backgroundColor:'white',alignItems:'center'    },
   row:{ flexDirection:'row',},
    sc:{
        width:180,height:180,
        marginTop:5,marginLeft:5 },
};
export default trois;