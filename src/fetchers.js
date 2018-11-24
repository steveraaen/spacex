var axios = require ('axios')

 async function getAll(lng, lat) {
	try {

	 const launchesPromise = axios('https://api.spacexdata.com/v3/launches')   
	 const launchpadPromise = axios('https://api.spacexdata.com/v3/launchpads/')

    const [allLaunches, allLaunchpads] = await Promise.all([launchesPromise, launchpadPromise]);
          
    return [allLaunches, allLaunchpads]
} catch (e) {
    console.error(e);  
  }
 }

export default  getAll
