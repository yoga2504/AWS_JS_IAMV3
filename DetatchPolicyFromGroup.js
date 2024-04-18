import { IAMClient, DetachGroupPolicyCommand } from "@aws-sdk/client-iam";

const iamClient = new IAMClient();

const params = {
    GroupName: 'RDSAdmins-Group',
    PolicyArn: 'arn:aws:iam::aws:policy/AmazonRDSFullAccess' // Corrected ARN syntax
};

const run = async () => {
    try {
        const data = await iamClient.send(new DetachGroupPolicyCommand(params));
        console.log("Policy is detached", data); // Corrected log message
    } catch (err) {
        console.log(err);
    }
};

run();
