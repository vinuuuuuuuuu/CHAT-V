async function loadResponses() {
  const response = await fetch("responses.json");
  const data = await response.json();
  return data;
}

async function getChatbotResponse(userMessage) {
  const responses = await loadResponses();
  return responses[userMessage.toLowerCase()] || responses["default"];
}
const responses = {
    "hello": "Hala! How can I help you today, machan?",
    "hi": "Hiya! What's up, bro?",
    "how are you?": "I'm good, machan! How about you?",
    "tell me a joke": "Why don't programmers like nature? It has too many bugs, bro!",
    "default": "Hmm, I don’t understand what you saying, machan. Can you ask in another way?"
};

// Function to handle large Q&A responses
function getChatbotResponse(userMessage) {
    const messageLower = userMessage.toLowerCase();
    
    if (responses[messageLower]) {
        return responses[messageLower];
    }
    
    // Keyword matching for broader responses
    const keys = Object.keys(responses);
    for (let i = 0; i < keys.length; i++) {
        if (messageLower.includes(keys[i])) {
            return responses[keys[i]]; // Return a match if partial keyword is found
        }
    }
    
    return responses["default"]; // Default response if no match found
}
