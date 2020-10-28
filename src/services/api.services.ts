import axios from 'axios';

const base_url = '';

async function getData(node_id:string) {
  try {
    const res = await (await axios.get(`${base_url}/${node_id}`));
    return res.data;
  } catch (err) {
    console.log(err.message);
  }
}

export default getData;