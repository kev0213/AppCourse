import React from 'react';
import { View,Image,Text} from 'react-native';

const header =()=>{
   

    
    const {head,ico,title,like,btn,clk,gray} = st;
    return(
        <View>
          <View style={[head]}>
            <Image source={require('../img/btn_back.png')} style={[ico]} />
            <Text style={[title]}>Hearthstone</Text>
            <Image source={require('../img/btn_like.png')} style={[ico,like]} />
          </View>
          <View style={[btn]}>
            <Text style={[clk]}>LIVE</Text>
            <Text style={[clk,gray]}>RECENT</Text>
          </View>
        </View>
    );
};

const st = {
    head:{
        width:375,height:64,
        backgroundColor:'rgb(100,65,165)',
        flexDirection:'row'
    }, title:{
        width:108,height:21.5,
        marginTop:30.5,marginLeft:92,
        color:'white',
        fontSize:18},
    ico:{width:33,height:33,marginTop:25,marginLeft:8.5},
    like:{marginLeft:92},
    btn:{flexDirection:'row',height:39},
    clk:{  textAlign:'center',
        width:187.5,
        marginTop:15,
        fontSize:13,
        color:'rgb(100,65,165)'
    },
    gray:{color:'rgb(187,187,187)'},
  
};
export default header;