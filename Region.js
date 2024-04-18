const { defaultProvider } = require("@aws-sdk/credential-provider-node");
const { REGION } = process.env;
const { fromIni } = require("@aws-sdk/credential-provider-ini");

// Load AWS SDK
const { EC2Client, DescribeRegionsCommand } = require("@aws-sdk/client-ec2");

// Set up AWS EC2 client
const client = new EC2Client({
    region: REGION,
    credentials: fromIni({ profile: "default" }),
});

// Describe regions
async function describeRegions() {
    try {
        const command = new DescribeRegionsCommand({});
        const response = await client.send(command);
        const regions = response.Regions.map(region => region.RegionName);

        if (regions.includes(REGION)) {
            console.log(`You are working in the correct region: ${REGION}`);
        } else {
            console.log(`You are not working in the correct region: ${REGION}`);
        }
    } catch (err) {
        console.error("Error:", err);
    }
}

describeRegions();
