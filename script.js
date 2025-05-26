document.getElementById("leaveForm").addEventListener("submit", function(event) {
  event.preventDefault();

  const name = document.getElementById("name").value;
  const type = document.getElementById("type").value;
  const from = document.getElementById("from").value;
  const to = document.getElementById("to").value;
  const reason = document.getElementById("reason").value;

  const request = { name, type, from, to, reason };
  let requests = JSON.parse(localStorage.getItem("leaveRequests")) || [];
  requests.push(request);
  localStorage.setItem("leaveRequests", JSON.stringify(requests));

  alert("Demande envoyée avec succès !");
  document.getElementById("leaveForm").reset();
});
