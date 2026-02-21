// apiService.js

const API_URL = 'https://example.com/api/tournaments'; // Replace with actual API URL

/**
 * Fetch all tournaments
 * @returns {Promise} - Promise representing the response data
 */
const fetchTournaments = async () => {
    const response = await fetch(API_URL);
    if (!response.ok) {
        throw new Error('Failed to fetch tournaments');
    }
    return response.json();
};

/**
 * Create a new tournament
 * @param {Object} tournamentData - The data for the new tournament
 * @returns {Promise} - Promise representing the response data
 */
const createTournament = async (tournamentData) => {
    const response = await fetch(API_URL, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(tournamentData),
    });
    if (!response.ok) {
        throw new Error('Failed to create tournament');
    }
    return response.json();
};

/**
 * Update an existing tournament
 * @param {string} tournamentId - The ID of the tournament to update
 * @param {Object} updatedData - The updated data for the tournament
 * @returns {Promise} - Promise representing the response data
 */
const updateTournament = async (tournamentId, updatedData) => {
    const response = await fetch(`${API_URL}/${tournamentId}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(updatedData),
    });
    if (!response.ok) {
        throw new Error('Failed to update tournament');
    }
    return response.json();
};

/**
 * Delete a tournament
 * @param {string} tournamentId - The ID of the tournament to delete
 * @returns {Promise} - Promise representing the response data
 */
const deleteTournament = async (tournamentId) => {
    const response = await fetch(`${API_URL}/${tournamentId}`, {
        method: 'DELETE',
    });
    if (!response.ok) {
        throw new Error('Failed to delete tournament');
    }
    return response.json();
};

export { fetchTournaments, createTournament, updateTournament, deleteTournament };