import { IAMClient, AddUserToGroupCommand } from "@aws-sdk/client-iam";

const iamClient = new IAMClient();

const params = {
    GroupName: 'RDSAdmins-Group',
    UserName: 'updated' // Removed extra space before 'updated'
};

const run = async () => { // Corrected function declaration syntax
    try {
        const data = await iamClient.send(new AddUserToGroupCommand(params));
        console.log('Success', data);
    } catch (err) {
        console.log(err);
    }
};

run();
