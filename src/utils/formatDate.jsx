export const formatDate = (date) => {
  const d = new Date(date);
  const now = new Date();

  const diffMs = now - d; // milliseconds difference
  const diffHrs = diffMs / (1000 * 60 * 60); // hours difference

  // Bengali digits convert helper
  const bengaliDigits = ["০","১","২","৩","৪","৫","৬","৭","৮","৯"];
  const convertToBengali = (num) =>
    num.toString().split("").map(d => bengaliDigits[d] || d).join("");

  if (diffHrs < 24) {
    // relative time in hours
    const hoursAgo = Math.floor(diffHrs);
    return `${convertToBengali(hoursAgo)} ঘণ্টা আগে`;
  } else {
    // full date time
    let hours = d.getHours();
    const minutes = d.getMinutes();
    const period = hours >= 12 ? "অপরাহ্ন" : "পূর্বাহ্ন";
    hours = hours % 12 || 12; // 12-hour format

    const day = convertToBengali(d.getDate());
    const month = d.toLocaleString("bn-BD", { month: "long" });
    const year = convertToBengali(d.getFullYear());
    const hour = convertToBengali(hours);
    const minute = convertToBengali(minutes.toString().padStart(2, "0"));

    return `${day} ${month} ${year}, ${hour}:${minute} ${period}`;
  }
};