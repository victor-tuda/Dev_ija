var aws = require('aws-sdk');
var ddb = new aws.DynamoDB()

exports.handler = async (event, context) => {
  console.log("Received event: ", JSON.stringify(event, null, 2));

  let date = new Date();
  
  if (event.request.userAttributes.sub){
    let params = {
      Item: {
        'id': {S: event.request.userAttributes.sub},
        '__typename': {S: 'User'},
        'email': {S: event.request.userAttributes.email},
        'createdAt': {S: date.toISOString()},
        'updatedAt': {S:date.toISOString()}
      },
      TableName: process.env.USERTABLE
    }

    try {
      console.log("Item to put in DynamoDB: ", JSON.stringify(params, null, 2));
      await ddb.putItem(params).promise();
      console.log("SUCCESS");
    } catch (err) {
      console.log("ERROR: ", err)
    }
    context.done(null, event);

  } else {
    console.log("Error: Nothing was written to DynamoDB");
    context.done(null, event);
  }

  return event;
};
