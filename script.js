// Get form elements
const hospitalSelect = document.querySelector("select:nth-of-type(1)");
const doctorSelect = document.querySelector("select:nth-of-type(2)");
const timeSelect = document.querySelector("select:nth-of-type(3)");
const form = document.querySelector("form");

// Data: Hospitals & Doctors
const hospitalData = {
  "City Hospital": ["Dr. Sharma", "Dr. Khan"],
  "Apollo Hospital": ["Dr. Mehta", "Dr. Verma"],
  "Sunrise Clinic": ["Dr. Patel", "Dr. Singh"]
};

// Time slots
const timeSlots = ["10:00 AM", "11:00 AM", "12:00 PM", "2:00 PM", "4:00 PM"];

// Load hospitals
window.onload = function () {
  for (let hospital in hospitalData) {
    let option = document.createElement("option");
    option.text = hospital;
    option.value = hospital;
    hospitalSelect.appendChild(option);
  }

  // Load time slots
  timeSlots.forEach(time => {
    let option = document.createElement("option");
    option.text = time;
    option.value = time;
    timeSelect.appendChild(option);
  });
};

// When hospital changes, update doctors
hospitalSelect.addEventListener("change", function () {
  doctorSelect.innerHTML = "<option>Choose Doctor</option>";

  let selectedHospital = this.value;

  if (hospitalData[selectedHospital]) {
    hospitalData[selectedHospital].forEach(doctor => {
      let option = document.createElement("option");
      option.text = doctor;
      option.value = doctor;
      doctorSelect.appendChild(option);
    });
  }
});

// Form submit
form.addEventListener("submit", function (e) {
  e.preventDefault();

  const patientName = document.querySelector("input[type='text']").value;
  const hospital = hospitalSelect.value;
  const doctor = doctorSelect.value;
  const date = document.querySelector("input[type='date']").value;
  const time = timeSelect.value;

  if (
    patientName === "" ||
    hospital === "Choose Hospital" ||
    doctor === "Choose Doctor" ||
    date === "" ||
    time === "Choose Time"
  ) {
    alert("Please fill all fields!");
    return;
  }

  alert(
    "Appointment Booked Successfully!\n\n" +
    "Patient: " + patientName + "\n" +
    "Hospital: " + hospital + "\n" +
    "Doctor: " + doctor + "\n" +
    "Date: " + date + "\n" +
    "Time: " + time
  );

  form.reset();
});

