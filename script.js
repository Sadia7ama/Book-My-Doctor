const citySelect = document.getElementById("city");
const hospitalSelect = document.getElementById("hospital");
const doctorSelect = document.getElementById("doctor");
const timeSelect = document.getElementById("time");

// Data for City -> Hospital -> Doctor
const data = {
  Delhi: {
    "Apollo Hospital": ["Dr. Sharma", "Dr. Mehta"],
    "Fortis Hospital": ["Dr. Khan", "Dr. Verma"]
  },
  Mumbai: {
    "Lilavati Hospital": ["Dr. Patel", "Dr. Joshi"],
    "Kokilaben Hospital": ["Dr. Singh", "Dr. Rao"]
  },
  Patna: {
    "AIIMS Patna": ["Dr. Kumar", "Dr. Sinha"],
    "Paras Hospital": ["Dr. Mishra", "Dr. Gupta"]
  }
};

// Time slots
const timeSlots = ["10:00 AM", "12:00 PM", "3:00 PM", "6:00 PM"];

// Load cities on page load
window.onload = function () {
  for (let city in data) {
    let option = document.createElement("option");
    option.value = city;
    option.textContent = city;
    citySelect.appendChild(option);
  }
};

// When city changes -> load hospitals
citySelect.addEventListener("change", function () {
  hospitalSelect.innerHTML = `<option value="">Choose Hospital</option>`;
  doctorSelect.innerHTML = `<option value="">Choose Doctor</option>`;
  timeSelect.innerHTML = `<option value="">Choose Time</option>`;

  let selectedCity = citySelect.value;

  if (selectedCity !== "") {
    let hospitals = data[selectedCity];

    for (let hospital in hospitals) {
      let option = document.createElement("option");
      option.value = hospital;
      option.textContent = hospital;
      hospitalSelect.appendChild(option);
    }
  }
});

// When hospital changes -> load doctors
hospitalSelect.addEventListener("change", function () {
  doctorSelect.innerHTML = `<option value="">Choose Doctor</option>`;
  timeSelect.innerHTML = `<option value="">Choose Time</option>`;

  let selectedCity = citySelect.value;
  let selectedHospital = hospitalSelect.value;

  if (selectedHospital !== "") {
    let doctors = data[selectedCity][selectedHospital];

    doctors.forEach(function (doctor) {
      let option = document.createElement("option");
      option.value = doctor;
      option.textContent = doctor;
      doctorSelect.appendChild(option);
    });
  }
});

// When doctor changes -> load time slots
doctorSelect.addEventListener("change", function () {
  timeSelect.innerHTML = `<option value="">Choose Time</option>`;

  if (doctorSelect.value !== "") {
    timeSlots.forEach(function (time) {
      let option = document.createElement("option");
      option.value = time;
      option.textContent = time;
      timeSelect.appendChild(option);
    });
  }
});

// Form submit
document.querySelector("form").addEventListener("submit", function (e) {
  e.preventDefault();

  const patientName = document.getElementById("patient-name").value;
  const city = citySelect.value;
  const hospital = hospitalSelect.value;
  const doctor = doctorSelect.value;
  const date = document.getElementById("appointment-date").value;
  const time = timeSelect.value;

  if (city && hospital && doctor && date && time) {
    alert(
      "Appointment Booked Successfully!\n\n" +
      "Patient: " + patientName + "\n" +
      "City: " + city + "\n" +
      "Hospital: " + hospital + "\n" +
      "Doctor: " + doctor + "\n" +
      "Date: " + date + "\n" +
      "Time: " + time
    );
  } else {
    alert("Please fill all fields!");
  }
});
