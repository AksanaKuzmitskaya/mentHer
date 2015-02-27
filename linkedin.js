<!-- 1. Include the LinkedIn JavaScript API and define a onLoad callback function -->
<script type="text/javascript" src="http://platform.linkedin.com/in.js">
  api_key: 75bioe58rczqvl
  onLoad: onLinkedInLoad
  authorize: true
  scope: r_basicprofile r_network

</script>

<script type="text/javascript">
  // 2. Runs when the JavaScript framework is loaded
  function onLinkedInLoad() {
    IN.Event.on(IN, "auth", onLinkedInAuth);
  }

  // 2. Runs when the viewer has authenticated
  function onLinkedInAuth() {
  	IN.API.Connections("url=https://www.linkedin.com/pub/arianna-huffington/40/158/aa7")
    .fields("firstName", "lastName", "industry")
    .result(displayConnections)
    .error(displayConnectionsErrors);
	}

  // 2. Runs when the PeopleSearch() API call returns successfully
 	function displayConnections(connections) {
  	var connectionsDiv = document.getElementById("connections");

  	var members = connections.values; // The list of members you are connected to
  		for (var member in members) {
    		connectionsDiv.innerHTML += "<p>" + members[member].firstName + " " + members[member].lastName
      		+ " works in the " + members[member].industry + " industry";
  		}     
	}

  function displayPeopleSearchErrors(error) { /* do nothing */ }
</script>

<script type="IN/Login"></script>
