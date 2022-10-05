import { StyleSheet, Text, View, Image, FlatList } from 'react-native';
import ResturantApi from '../../../restaurants.json';

const Resturant = (props) => {
    return (
        <View style={{ width: "100%" }}>
            <View style={styles.resturant}>
                <Image style={styles.resImg} source={(props.img)} />
                <View style={styles.resturantMainWrap}>
                    <View style={styles.resturantTitles}>
                        <Text style={styles.resTitle}>{props.title}</Text>
                        <View style={styles.timeWrap}>
                            <Text style={styles.dFee}>{"$"} {props.delfee}</Text>
                            <Text style={styles.minmaxTime}>{`${props.min}-${props.max} min`}</Text>
                        </View>
                    </View>

                    <Text style={styles.rating}>{props.rating}</Text>
                </View>
            </View>

        </View>
    )
}

export default Resturant;

const styles = StyleSheet.create({
    minmaxTime: {
        marginLeft: 10,
        color: "grey",
        fontWeight: "bold"
    },
    dFee: {
        marginRight: 5,
        fontWeight: "bold",
        color: "grey"
    },
    rating: {
        backgroundColor: "gray",
        fontWeight: "bold",
        padding: 5,

        textAlign: "center",
        borderRadius: 15,

    },
    resturantMainWrap: {
        flexDirection: "row",
        width: "100%",
        height: 70,
        alignItems: "center",
        justifyContent: "space-between",
        paddingHorizontal: 6
    },
    timeWrap: {
        flexDirection: "row"
    },
    resTitle: {
        fontSize: 21,
        fontWeight: "bold",
        marginTop: 10
    },
    resturant: {
        width: "100%",
        paddingHorizontal: 6,
        marginVertical: 10
    },
    resImg: {
        width: "100%",
        height: 220,
        aspectRatio: 4 / 2,
        padding: 10,

    }
})