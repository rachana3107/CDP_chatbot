document.getElementById('send-button').addEventListener('click', function() {
    const responses = {
        "How do I set up a new source in Segment?": "To set up a new source in Segment, go to the Sources tab and click on 'Add Source'. Follow the prompts to configure your source.",
        "How can I create a user profile in mParticle?": "To create a user profile in mParticle, navigate to the Users section and click on 'Create User'. Fill in the required details.",
        "How do I build an audience segment in Lytics?": "To build an audience segment in Lytics, go to the Audiences tab and click on 'Create Segment'. Define your criteria and save the segment.",
        "How can I integrate my data with Zeotap?": "To integrate your data with Zeotap, access the Integrations section and follow the setup instructions for your data source.",
        "What is Segment?": "Segment is a customer data platform that helps you collect, clean, and control your customer data.",
        "What is mParticle?": "mParticle is a customer data platform that provides tools for managing and integrating customer data across various channels.",
        "What is Lytics?": "Lytics is a customer data platform that helps businesses understand their customers and deliver personalized experiences.",
        "What is Zeotap?": "Zeotap is a customer data platform that focuses on data privacy and helps brands connect with their customers."
    };
    
    const userInput = document.getElementById('user-input').value.toLowerCase(); // Convert input to lowercase for matching
    const chatBox = document.getElementById('chat-box');
    
    if (userInput) {
        chatBox.innerHTML += `<p><strong>You:</strong> ${userInput}</p>`;
        document.getElementById('user-input').value = '';

        // Check if the user input matches any predefined questions
        const response = responses[userInput] || "I'm sorry, I don't have an answer for that.";
        chatBox.innerHTML += `<p><strong>Bot:</strong> ${response}</p>`;
        chatBox.scrollTop = chatBox.scrollHeight; // Scroll to the bottom
    }
});
