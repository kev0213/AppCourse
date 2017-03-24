import React from 'react';
import { View,Image,Text} from 'react-native';

const header =()=>{
   

    
 const {hd,ty,gl,pl,sc,row} = st;
    return(
        <View>
<View style = {[hd,row]}>
            <View style = {[ty,row]}>
                <Image source={require('../img/icon_search.png')} style={[gl]} />
                <Text style = {[sc]}>Search</Text>
            </View>
    <Image source={require('../img/btn_cast.png')} style={[pl]} />
</View>
        
        </View>
    );
};

const st = {
     row:{ flexDirection:'row',},
    hd:{width:375,height:64,
        backgroundColor:'rgb(100,65,165)',},
    ty:{
        width:320,height:30,
        marginTop:26.5,marginLeft:8.5,
        backgroundColor:'rgb(49,31,83)',
    borderRadius:5,},
    gl:{width:18,height:18,
        marginTop:6,marginLeft:8.5,},
    pl:{width:33,height:33,
        marginTop:25,marginLeft:5,},
    sc:{
        width:49.5,height:18,
        marginTop:5,
        marginLeft:5.5,
        fontSize:15,
        color:'rgb(185,163,227)',
    }  
};
export default header;