// "Routes" to forward the supported requests
// (and any information encoded in request URLs) to the appropriate controller functions.
// Routes define the server response to REST endpoints
import { create, findAllExperience, findAllRestaurant, findAllEntertainment, findAllSightseeing ,update, join, count, groupBy } from '../controllers/experience.controller';
export default (server) => {
  // Create a new experience in response to post request
  server.post('/experience', create);

  // Retrieve all experiences in response to get request
  server.get('/experience', findAllExperience);

  // Retrieve all restaurants in response to get request
  server.get('/experience', findAllRestaurant);

  // Retrieve all entertainment in response to get request
  server.get('/experience', findAllEntertainment);

  // Retrieve all sightseeing in response to get request
  server.get('/experience', findAllSightseeing);

  // Update experience 
  server.post('/experience/:expId/:expName/:expRate/:expAccess/:expCost', update);

  // Retrieve join
  server.get('/experience', join);

  // Retrieve count
  server.get('/experience', count);

  // Retrieve group by
  server.get('/experience', groupBy);

};