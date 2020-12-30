import React from 'react';
import { View, FlatList,Text } from 'react-native';
import { ListItem, Avatar  } from 'react-native-elements';

function Menu(props) {

    const renderMenuItem = ({item, index}) => {
      console.log(props);
        return (
            <ListItem onPress={() => props.onPress(item.id)}>
             <Avatar source={require('./images/uthappizza.png')} />
            <ListItem.Content>
              <ListItem.Title>{item.name}</ListItem.Title>
              <ListItem.Subtitle>{item.subtitle}</ListItem.Subtitle>
            </ListItem.Content>
            <ListItem.Chevron />
          </ListItem>
                
        );
    };

    return (
            <FlatList 
                data={props.dishes}
                renderItem={renderMenuItem}
                keyExtractor={item => item.id.toString()}
                />
    );
}


export default Menu;