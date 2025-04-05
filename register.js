const axios = require('axios');

const payload = {
  email: "22103197@mail.jiit.ac.in",
  name: "yash rajput",
  mobileNo: "9636339128",
  githubUsername: "yeah-ssh",
  rollNo: "22103197",
  collegeName: "Jaypee Institue Of Information Technology",
  accessCode: "SrMQqR"
};

const registerUser = async () => {
  try {
    const response = await axios.post('http://20.244.56.144/evaluation-service/register', payload, {
      headers: {
        'Content-Type': 'application/json'
      }
    });

    console.log("✅ Registration Success:");
    console.log(response.data); // likely includes a confirmation message
  } catch (error) {
    console.error("❌ Registration Failed:");
    if (error.response) {
      console.error("Status:", error.response.status);
      console.error("Data:", error.response.data);
    } else {
      console.error(error.message);
    }
  }
};

registerUser();
