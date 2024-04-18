import { IAMClient, DeleteUserCommand } from "@aws-sdk/client-iam";

const iamClient = new IAMClient();
const params = {
    UserName: 'test'
};

const run = async () => {
    try {
        const data = await iamClient.send(new DeleteUserCommand(params)); // Fixed syntax for sending command
        console.log('User is deleted', data);
    } catch (err) { // Added curly braces to encapsulate catch block
        console.log(err);
    }
};

run();
