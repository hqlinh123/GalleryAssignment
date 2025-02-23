import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
    },
    searchBar: {
        height: 40,
        borderColor: '#ccc',
        borderWidth: 1,
        borderRadius: 8,
        paddingLeft: 10,
        marginBottom: 10,
    },
    list: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
    },
    item: {
        flex: 1,
        margin: 5,
        borderRadius: 8,
        overflow: 'hidden',
        backgroundColor: '#f0f0f0', // Light background for better visibility
    },
    image: {
        width: '100%',
        height: 150, // Adjust the height as per your needs
        borderRadius: 8,
    },
    draggingText: {
        position: 'absolute',
        top: 5,
        left: 5,
        color: '#fff',
        backgroundColor: 'rgba(0,0,0,0.7)',
        padding: 5,
        borderRadius: 5,
    },
    errorText: {
        color: 'red',
        marginTop: 10,
        textAlign: 'center',
    },
});

export default styles;
