import { IAMClient, CreateGroupCommand } from "@aws-sdk/client-iam";

const iamClient = new IAMClient();

const params = {
    GroupName: 'RDSAdmins-Group'
}; // Corrected object syntax

const run = async () => { // Corrected function declaration syntax
    try {
        const data = await iamClient.send(new CreateGroupCommand(params));
        console.log("Group is created", data); // Corrected log message
    } catch (err) {
        console.log(err);
    }
};

run();
