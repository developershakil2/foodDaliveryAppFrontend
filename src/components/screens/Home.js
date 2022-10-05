import { View, FlatList } from 'react-native';
import Resturant from '../partial/Resturant';
import ResApi from '../../../restaurants.json';

const HomeScreen = () => {
    return (
        <View style={{ width: '100%' }}>

            <FlatList data={ResApi} renderItem={({ item, index }) => {
                return <Resturant img={item.image} key={item.id} delfee={item.deliveryFee} max={item.maxDeliveryTime} min={item.minDeliveryTime} rating={item.rating} title={item.name} />
            }} />



        </View>
    )
}

export default HomeScreen;