var aws = require('aws-sdk');
var ddb = new aws.DynamoDB()

exports.handler = async (event, context) => {
  console.log("Received event: ", JSON.stringify(event, null, 2));

  let date = new Date();
  
  if (event.request.userAttributes.sub){
    let params = {
      Item: {
        'id': {S: event.request.userAttributes.sub},
        'nome': {S: event.request.userAttributes.given_name},
        'sobrenome': {S: event.request.userAttributes.middle_name},
        'celular': {S: event.request.userAttributes.phone_number},
        'email': {S: event.request.userAttributes.email},
        '__typename': {S: 'Aprendiz'},
        'createdAt': {S: date.toISOString()},
        'updatedAt': {S:date.toISOString()}
      },
      TableName: process.env.APRENDIZTABLE
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
