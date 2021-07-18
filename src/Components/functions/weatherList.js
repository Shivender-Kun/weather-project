function getMonth() {
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const currentMonth = new Date().getMonth();
  return months[currentMonth];
}

function hoursArr() {
  const currentTime = new Date().getHours();
  let hours = [];
  let j = 0;

  for (let i = 0; i < 48; i++) {
    const newTime = currentTime + i;
    if (newTime <= 24) hours.push(newTime);
    else {
      if (j >= 25) j = 0;
      hours.push(j++);
    }
  }
  return hours;
}

function dateArr() {
  let dates = [];
  const currentDate = new Date().getDate();
  const year = new Date().getFullYear();
  const month = new Date().getMonth() + 1;
  const totalDays = new Date(year, month, 0).getDate();
  let j = 1;

  for (let i = 0; i < 8; i++) {
    const newDate = currentDate + i;
    if (newDate <= totalDays) dates.push(newDate);
    else {
      dates.push(j++);
    }
  }
  return dates;
}

const list = (data) => {
  try {
    if (data) {
      let dates = dateArr();
      let hours = hoursArr();

      const dataList = data.map((i, index) => {
        return (
          <li className="weather-item flex-col scale" key={index}>
            <div className="date-time">
              {data.length < 9
                ? `${dates && dates[index]} ${getMonth()}`
                : `${hours && hours[index]}:00`}
            </div>
            <div className="temp">
              {data.length < 9
                ? String(i.temp.day).slice(0, 2)
                : String(i.temp).slice(0, 2)}
              ° C
            </div>
            <div className="weather-condition">
              {i.weather[0].description.toUpperCase()}
            </div>
          </li>
        );
      });
      return dataList;
    }
  } catch (error) {
    console.log(error);
    return <div className="error">Unable to fetch data</div>;
  }
};

export default list;
