const axios = require('axios');

let userArray = ['123', '1223', '12223'];
let events = ['Add to cart', 'viewedPage', 'Product Purchased'];

function getRandomEvent() {
    return events[Math.floor(Math.random() * events.length)];
}

function getRandomUser() {
    return userArray[Math.floor(Math.random() * userArray.length)];
}

async function postData() {
    while(true){
        // Randomly select a user and an event
        let randomUser = getRandomUser();
        let randomEvent = getRandomEvent();
        
        // Prepare the data to send
        let data = {
            MMID: randomUser,
            eventName: randomEvent,
        };
        
        try {
            // Post the data to the server with headers
            const response = await axios.post('http://localhost:3000/events/addEvent', data, {
                headers: {
                    'x-api-key': '123'  // Add x-api-key header
                }
            });
            console.log(`Posted event: ${randomEvent} for user: ${randomUser}`);
        } catch (error) {
            console.error(`Error posting event: ${randomEvent} for user: ${randomUser}`, error);
        }

        // Add a delay between requests to avoid overwhelming the server
        await new Promise(resolve => setTimeout(resolve, 1000)); // 1-second delay
    }
}

// Start posting data
postData();
