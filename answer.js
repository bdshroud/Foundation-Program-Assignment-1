// ==========================================
// Question No. 1: Value Detective
// ==========================================
function describeValue(value) {
  const type = typeof value;
  const truthiness = value ? "truthy" : "falsy";
  return `${type} | ${truthiness}`;
}

// ==========================================
// Question No. 2: Bangladesh Weekend Machine
// ==========================================
function getDayType(day) {
  const normalizedDay = day.toLowerCase();

  switch (normalizedDay) {
    case "friday":
    case "saturday":
      return "Weekend";

    case "sunday":
    case "monday":
    case "tuesday":
    case "wednesday":
    case "thursday":
      return "Working Day";

    default:
      return "Invalid Day";
  }
}

// ==========================================
// Question No. 3: Username Gatekeeper
// ==========================================
function validateUsername(username) {
  // Rule 1: Shorter than 4 characters
  if (username.length < 4) {
    return "Too Short";
  }

  // Rule 2: Contains a space
  if (username.includes(" ")) {
    return "No Space Allowed";
  }

  // Rule 3: Contains the word "admin" anywhere (case-insensitive)
  if (username.toLowerCase().includes("admin")) {
    return "Reserved Word";
  }

  // Otherwise valid
  return "Available";
}

// ==========================================
// Question No. 4: Dhaka CNG Fare Meter
// ==========================================
function getCngFare(distance, isNight = false, waitingMinutes = 0) {
  // Base fare covers up to 2 km
  let fare = 50;

  // Additional km beyond the first 2 km
  if (distance > 2) {
    fare += (distance - 2) * 15;
  }

  // Waiting charge: 2 taka per minute
  fare += waitingMinutes * 2;

  // Night surcharge: 20% on the entire fare
  if (isNight) {
    fare += fare * 0.2;
  }

  return fare;
}

// ==========================================
// Question No. 5: Run Chase Commentator
// ==========================================
const getChaseVerdict = (target, scored, ballsLeft) => {
  const runsNeeded = target - scored;

  if (runsNeeded <= 0) {
    return "Won";
  }

  if (ballsLeft <= 0) {
    return "Lost";
  }

  const requiredRate = (runsNeeded / ballsLeft) * 6;
  let verdict = "";

  if (requiredRate <= 6) {
    verdict = "Comfortable";
  } else if (requiredRate <= 12) {
    verdict = "Tough";
  } else {
    verdict = "Almost Impossible";
  }

  return `Need ${runsNeeded} runs in ${ballsLeft} balls | ${verdict}`;
};