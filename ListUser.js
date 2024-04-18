import { IAMClient, ListUsersCommand } from "@aws-sdk/client-iam"; // Import corrected

const iamClient = new IAMClient();

const params = {
    MaxItems: 10
};

const run = async () => { // Corrected function declaration syntax
    try {
        const data = await iamClient.send(new ListUsersCommand(params));
        const users = data.Users;
        users.forEach(function(user) {
            console.log("User: " + user.UserName + ", Arn: " + user.Arn); // Corrected log message formatting
        });
    } catch (error) {
        console.error("Error:", error); // Added error handling
    }
};

run();
