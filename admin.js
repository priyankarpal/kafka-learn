const { kafka }=require("./client");


async function init() {
    const admin=kafka.admin();
    console.log('Admin connecting...');
    admin.connect();
    console.log('Admin connected...');

    console.log('Creating Topics...');

    await admin.createTopics({
        topics: [
            {
                topic: 'rider-updates',
                numPartitions: 2,
            },
        ],
    });
    console.log('Topics Created [rider-updates]...');

    await admin.disconnect();

    console.log('Admin disconnect');
}

init();
