const kenyaAdmn = require("kenya-administrative-divisions");



const loadData = async () => {
   
    await kenyaAdmn.getCounties().then((data) => {
    console.log({data});
    data.forEach(constituency => {
        console.log(`This is ${constituency.county_name}`);
    });
        // console.log(desData);
    })

}

loadData();