export default function testLogin() {
  const accessToken = window.sessionStorage.getItem('accessToken');

  // Check if accessToken exists and handle accordingly
  if (accessToken) {
    // Handle login or perform other actions with the accessToken
    console.log('Login successful:', accessToken);
    // Remove the accessToken from Session Storage after use
    // window.sessionStorage.removeItem('accessToken');
  }
  console.log("hehe")
}
