import http from 'k6/http';

export const options = {
  vus: 300,
  duration: '60s',
  rps: 2000,
};

export default function() {
  const id = Math.floor(Math.random() * 1000000) + 1;

  http.delete(
    `http://ec2-52-15-218-131.us-east-2.compute.amazonaws.com:5000/${id}/`,
  );
}
