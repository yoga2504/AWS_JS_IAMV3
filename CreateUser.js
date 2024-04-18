const { IAMClient, CreateUserCommand, GetUserCommand } = require('@aws-sdk/client-iam'); // Corrected syntax

const iamClient = new IAMClient();

const params = {
    UserName: 'test' // Removed extra space before 'test'
};

const run = async () => { // Corrected function declaration syntax
    try {
        const data = await iamClient.send(new GetUserCommand(params));
        console.log('User already exists:', data); // Corrected typo in log message
        return data;
    } catch (err) {
        try {
            const result = await iamClient.send(new CreateUserCommand(params));
            console.log('User is created:', result); // Corrected typo in log message
            return result;
        } catch (err) {
            console.log(err);
        }
    }
};

run();
