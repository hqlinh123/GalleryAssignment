export const loginApi = async (credentials: {
  email: string;
  password: string;
}) => {
  try {
    const response = await fetch('https://api.example.com/login', {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(credentials),
    });
    return {
      result: response,
    };
  } catch (error) {
    return {error};
  }
};
