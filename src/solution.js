
// Please implement your solution in this file

// Please implement your solution in this file

export const prepareData = (filterParams, data) => {
  data = data.filter((item) => {
    const payloads = item.rocket.second_stage.payloads;
    let include = false;
    for (let payload of payloads) {
      for (let customer of payload.customers) {
        if (customer === filterParams.customerName) include = true;
      }
    }
    return (
      include &&
      item.launch_date_local.split("-")[0] === filterParams.year.toString()
    );
  });
  return Promise.resolve(
    data.map((item) => ({
      flight_number: item.flight_number,
      mission_name: item.mission_name,
      payloads_count: item.rocket.second_stage.payloads.length,
    }))
  );
};

export const renderData = (data) => {
  const json = JSON.stringify(data, undefined, 2);
  const pre = document.getElementById("out");
  pre.innerText = json;
};