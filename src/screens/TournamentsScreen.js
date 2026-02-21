import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, Button, StyleSheet } from 'react-native';

const TournamentsScreen = () => {
    const [tournaments, setTournaments] = useState([]);

    useEffect(() => {
        // Fetch tournaments from API or a source
        fetchTournaments();
    }, []);

    const fetchTournaments = async () => {
        // Replace with your API endpoint
        const response = await fetch('https://api.example.com/tournaments');
        const data = await response.json();
        setTournaments(data);
    };

    const renderTournamentItem = ({ item }) => (
        <View style={styles.item}> 
            <Text style={styles.title}>{item.name}</Text>
            <Button title="Manage" onPress={() => manageTournament(item.id)} />
        </View>
    );

    const manageTournament = (id) => {
        // Logic to manage tournament (e.g., navigation to another screen)
        console.log(`Manage Tournament: ${id}`);
    };

    return (
        <View style={styles.container}>
            <Text style={styles.header}>Tournaments</Text>
            <FlatList
                data={tournaments}
                renderItem={renderTournamentItem}
                keyExtractor={(item) => item.id.toString()}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: { flex: 1, padding: 16 },
    header: { fontSize: 24, fontWeight: 'bold', marginBottom: 16 },
    item: { marginVertical: 8, padding: 16, backgroundColor: '#f9f9f9', borderRadius: 5 },
    title: { fontSize: 18 },
});

export default TournamentsScreen;