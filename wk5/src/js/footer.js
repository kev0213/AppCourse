import React from 'react';
import { View,Image,Text} from 'react-native';

const footer =()=>{
   
    return(
     <View style={st.foot}>
            <View style={st.btn}>
                <Image source={require('../img/btn_games_selected.png')} style={st.btnpic}/>
                <Text style={[st.gray,st.purple]}>Games</Text>
            </View>
            <View style={st.btn}>
                <Image source={require('../img/btn_channels.png')} style={st.btnpic}/>
                <Text style={st.gray}>Channels</Text>
            </View>
            <View style={st.btn}>
              <Image source={require('../img/btn_following.png')} style={st.btnpic}/>
                <Text style={st.gray}>Following</Text>
            </View>
            <View style={st.btn}>
                <Image source={require('../img/btn_me.png')} style={st.btnpic}/>
                <Text style={st.gray}>Me</Text>
            </View>
            
     </View>

    );
};
   
const st = {
    foot:{borderTopWidth:0.5,borderTopColor:'rgba(0,0,0,0.2)',
        position:'absolute',
        //left:0,right:0,bottom:0,
      flex:1,
        flexDirection:'row',
        backgroundColor:'white',
         position:'absolute',
    //    justifyContent:'flex-end',
        justifyContent:'center',
       bottom:0,
        //alignItems:'center',
    },
  btnpicbord:{},
    purple:{color:'rgb(100,65,165)'},
    gray:{color:'rgb(187,187,187)',marginBottom:1,fontSize:10, position:'absolute',bottom:1,},
    btnpic:{
               
        width:94,
        height:49,
      marginTop:0,
    },
    btn:{
        alignItems:'center',
    }
};
export default footer;