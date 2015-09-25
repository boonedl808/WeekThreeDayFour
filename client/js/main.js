$(document).ready(function() {
/*Using document ready runs code only after the DOM is ready for js code to run more on that here: https://learn.jquery.com/using-jquery-core/document-ready */
		/*This function should create a post request using jquery. When posted it should:
			1) Add tweets to the 'database'
			2) After posted prepend message to list of messages and clear input box */
	
	function postData() {
		$("button").click(function(){
    	$.post("text box",
    {
        username: "default"
    },
    function(data, status){
        console.log("Data: " + data + "\nStatus: " + status);
    });
});
	}

	function getData() {
		/*This function should make a get request from 'database', parse the data and prepend each to the page*/
		$("button").click(function() {
    		$.get("messages", function(data, status) {
        console.log("Data: " + data + "\nStatus: " + status);
    	});
	});
}
	/*Calls function once page loaded to display tweets to page*/
	getData();
});
