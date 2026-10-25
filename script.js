const messages = {
    Happy: "Keep smiling! Your happiness is beautiful. 🌻",
    Sad: "It's okay to feel sad. Be kind to yourself. 💗",
    Calm: "Enjoy this peaceful moment. You deserve it. 🌿",
    Excited: "Your energy is amazing! Make today count. ✨"
};

let moodHistory = JSON.parse(
    localStorage.getItem("moodHistory")
) || [];

function selectMood(mood) {
    const result = document.getElementById("result");

    result.innerHTML = `
        <h3>Your mood: ${mood}</h3>
        <p>${messages[mood]}</p>
    `;

    const entry = {
        mood: mood,
        date: new Date().toLocaleDateString()
    };

    moodHistory.unshift(entry);

    localStorage.setItem(
        "moodHistory",
        JSON.stringify(moodHistory)
    );
}

function showHistory() {
    const history = document.getElementById("history");

    if (moodHistory.length === 0) {
        history.innerHTML = "<li>No moods recorded yet.</li>";
        return;
    }

    history.innerHTML = moodHistory
        .slice(0, 7)
        .map(entry => `
            <li>${entry.date} — ${entry.mood}</li>
        `)
        .join("");
}