import axios from 'axios';

export async function asyncgetProducts(){
  try{
    const response = axios.get('http://localhost:3001');
    return response;
  }
  catch(err){
    console.error('o no');
    return[]
  }
}
