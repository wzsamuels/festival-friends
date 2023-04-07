import {
  CognitoUserPool,
} from "amazon-cognito-identity-js";

const poolData = {
  UserPoolId: 'us-east-1_4PVXb2Q0M', // Your user pool id here
  ClientId: '7t8cuv627mrj4s0qeopdm51900', // Your client id here
};
const userPool = new CognitoUserPool(poolData);

userPool.signUp('wzsamuels@gmail.com', 'BDDeMan1!!', [], [], function(
  err,
  result
) {
  if (err) {
    alert(err.message || JSON.stringify(err));
    return;
  }
  const cognitoUser = result?.user;
  console.log(result)
  console.log('user name is ' + cognitoUser?.getUsername());
});
