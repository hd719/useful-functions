import axios from "axios";

import { createConversations } from "./utils.js";

async function fetchUserMessagingData() {
  const API_URL = "";

  try {
    const response = await axios.get(API_URL, {
      params: {
        userKey: "",
      },
    });
    createConversations(response.data);
  } catch (error) {
    console.log("Error fetching data", error);
  }
}

async function postConversations() {
  const API_URL = "";

  try {
    const conversationDataPayload = await fetchUserMessagingData();
    const response = await axios.post(
      API_URL,
      {
        headers: {
          "Content-Type": "application/json",
        },
      },
      conversationDataPayload
    );
  } catch (error) {
    console.log("Error POST data", error);
  }
}

postConversations();
