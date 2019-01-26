import http from 'k6/http';

export const options = {
  vus: 300,
  duration: '60s',
  rps: 3000,
};

export default function() {
  const products = Math.floor(Math.random() * 10) + 1;
  const notPopular = Math.floor(Math.random() * 9999000) + 1000;
  const id = products > 8 ? notPopular : Math.floor(Math.random() * 1000) + 1;
  http.get(`http://localhost:5000/${id}/`);
}
