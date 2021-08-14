const hasMeeting = true;

const meeting = new Promise((resolve,reject)=>{
  if(!hasMeeting){
    const meetingDetails = {
      name: "Technical Meeting",
      lacation: "Google Meet",
      time: "10:00 PM",
    }
    resolve(meetingDetails);
  }else{
    reject(new Error("meeting already scheduled!"));
  }
  });

/*   const addTocalendar = (meetingDetails) =>{
      return new Promise((resolve,reject)=>{
          const calendar = `${meetingDetails.name} has been scheduled on ${meetingDetails.lacation} at ${meetingDetails.time}`;
          resolve(calendar);
      })
  }  */
 
  const addTocalendar = (meetingDetails) =>{
        const calendar = `${meetingDetails.name} has been scheduled on ${meetingDetails.lacation} at ${meetingDetails.time}`;
        return Promise.resolve(calendar);
   
};

  /* async function myMeeting () {
    try {
      const meetingDetails = await meeting;
      const calendar = await addTocalendar(meetingDetails);
      console.log(calendar);
    } catch (e) {
        console.log(e)
    } 
  } */
  async function myMeeting () {
    try {
      const meetingDetails = await meeting;
      const calendar = await addTocalendar(meetingDetails);
      console.log(calendar);
    } catch {
        console.log(`Something wrong happend`)
    } 
  }

 myMeeting();

/*
 *
 ** promise then/ none async-await
 *
 */
  /* meeting
    .then(addTocalendar)
    .then((res)=>{
    console.log(JSON.stringify(res));
  })
  .catch((err)=>{
    console.log((err.message));
  }) */

  /*
   *
   * *  async- await
   * 
   */
 
