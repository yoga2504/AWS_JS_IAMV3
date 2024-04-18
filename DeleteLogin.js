import { IAMClient, DeleteLoginProfileCommand } from "@aws-sdk/client-iam";

const iamClient = new IAMClient();

const params = {
    UserName: 'test'
};

const run = async () => {
    try {
        const data = await iamClient.send(new DeleteLoginProfileCommand(params)); // Corrected closing parenthesis and removed the period
        console.log('Login profile deleted', data); // Corrected log message
        return data;
    } catch (err) {
        console.log(err);
    }
};

run();
