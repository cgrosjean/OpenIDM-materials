function startCertificationWorkflow(user) {
    var params = {
        "userId" : user._id,
        "_key": "certification",
        "_businessKey" : "UserId: " + user._id
    };
 
    openidm.create('workflow/processinstance', null,  params);
}

var allUsers = openidm.query("managed/user", { "_queryId": "query-all" }, ["_id","userName"]), i;

for (i = 0; i < allUsers.result.length; i++) {
    logger.info("Calling the certification workflow for {} ..", allUsers.result[i].userName) ;
    startCertificationWorkflow(allUsers.result[i]);
    logger.info("Certification workflow called !") ;
}

