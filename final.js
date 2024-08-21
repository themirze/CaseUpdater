javascript: (function () {
  var popupDiv = document.createElement("div");
  popupDiv.id = "customPopup";
  popupDiv.style.position = "fixed";
  popupDiv.style.top = "100px";
  popupDiv.style.left = "62px";
  popupDiv.style.width = "92vh";
  popupDiv.style.height = "787px";
  popupDiv.style.backgroundColor = "rgba(0, 0, 0, 0.8)";
  popupDiv.style.zIndex = "10000";
  popupDiv.style.display = "flex";
  popupDiv.style.flexDirection = "column";
  popupDiv.style.justifyContent = "center";
  popupDiv.style.alignItems = "center";
  popupDiv.style.color = "white";
  popupDiv.style.overflowY = "auto";

  var contentDiv = document.createElement("div");
  contentDiv.style.backgroundColor = "white";
  contentDiv.style.width = "90%";
  contentDiv.style.height = "80%";
  contentDiv.style.borderRadius = "30px";
  contentDiv.style.padding = "20px";
  contentDiv.style.boxShadow = "0 0 10px rgba(0,0,0,0.5)";
  contentDiv.style.color = "black";
  contentDiv.style.overflowY = "auto";
  contentDiv.style.position = "relative";
  contentDiv.style.display = "flex";
  contentDiv.style.flexDirection = "column";
  contentDiv.style.justifyContent = "space-between";
  contentDiv.innerHTML = `
      <div id="noteMailContainer" style="display: flex; justify-content:space-between;">
          <div id="noteContainer">
              <div>
                  <h3 style="display: inline;">Implementation</h3>
                  <button id="implementationButton" style="background: none; border: none; cursor: pointer; font-size: 1.2em;">⬇</button>
              </div>
              <div id="implementationContent" style="display: none; margin-left: 20px;">
                  <a href="#" id="soio">SO - Implementation Only</a><br><br>
                  <a href="#" id="soeo">SO - Educational Only</a><br><br>
                  <a href="#" id="soto">SO - Troubleshooting Only</a><br><br>
              </div>
              <div>
                  <h3 style="display: inline;">Inactive</h3>
                  <button id="inactiveButton" style="background: none; border: none; cursor: pointer; font-size: 1.2em;">⬇</button>
              </div>
              <div id="inactiveContent" style="display: none; margin-left: 20px;">
                  <a href="#" id="inNotReachable">IN - Not Reachable</a><br><br>
                  <a href="#" id="inNotInterested">IN - Not Interested</a><br><br>
                  <a href="#" id="inNotReady1">IN - Not Ready (JoinBase)</a><br><br>
                  <a href="#" id="inNotReady2">IN - Not Ready (TechnicalBase)</a><br><br>
                  <a href="#" id="inOOS">IN - Out of Scope - Rerouted</a><br><br>
              </div>
              <div>
                  <h3 style="display: inline;">Reschedule</h3>
                  <button id="rescheduleButton" style="background: none; border: none; cursor: pointer; font-size: 1.2em;">⬇</button>
              </div>
              <div id="rescheduleContent" style="display: none; margin-left: 20px;">
                  <a href="#" id="reschedule1">AS - Reschedule 1</a><br><br>
                  <a href="#" id="aPreschedule">AS - Acceptable Reschedule</a><br><br>
                  <a href="#" id="aDirectReschedule">AS - Direct Reschedule</a><br><br>
              </div>
              <div>
                  <h3 style="display: inline;">Awaiting Input</h3>
                  <button id="awaitingInputButton" style="background: none; border: none; cursor: pointer; font-size: 1.2em;">⬇</button>
              </div>
              <div id="awaitingInputContent" style="display: none; margin-left: 20px;">
                  <a href="#" id="aAfa">NI - Awaiting Action from ADV</a><br><br>
                  <a href="#" id="aVa">NI - Awaiting Validation ADS</a><br><br>
                  <a href="#" id="aVm">NI - Awaiting Validation MC</a><br><br>
              </div>
              <div>
                  <h3 style="display: inline;">Attempt Call</h3>
                  <button id="attemptCallButton" style="background: none; border: none; cursor: pointer; font-size: 1.2em;">⬇</button>
              </div>
              <div id="attemptCallContent" style="display: none; margin-left: 20px;">
                  <a href="#" id="aC">AC - Attempt Contact</a><br><br>
              </div>
              <div>
                  <h3 style="display: inline;">Extras</h3>
                  <button id="emptyTemplateButton" style="background: none; border: none; cursor: pointer; font-size: 1.2em;">⬇</button>
              </div>
              <div id="emptyTemplateContent" style="display: none; margin-left: 20px;">
                  <a href="#" id="eTemplate">Empty Template</a><br><br>
                  <a href="#" id="fastUpdate">Case Updater</a><br><br>
              </div>
          </div>
          <div id="mailContainer">
              <div>
                  <h3 style="display: inline;">Tag & Shopping</h3>
                  <button id="tagShoppingButton" style="background: none; border: none; cursor: pointer; font-size: 1.2em;">⬇</button>
              </div>
              <div id="tagShoppingContent" style="display: none; margin-left: 20px;">
                  <div>
                      <h3 style="display: inline;">First Response</h3>
                      <button id="firstResponseButton" style="background: none; border: none; cursor: pointer; font-size: 1.2em;">⬇</button>
                  </div>
                  <div id="firstResponseContent" style="display: none; margin-left: 20px;">
                      <a href="#" id="firstResponse">First Response Email for New Tickets</a><br><br>
                      <a href="#" id="firstResponseDFA">First Response Email for New Tickets DFA</a><br><br>
                  </div>
                  <div>
                      <h3 style="display: inline;">AS - Reschedule</h3>
                      <button id="rescheduleButtonTS" style="background: none; border: none; cursor: pointer; font-size: 1.2em;">⬇</button>
                  </div>
                  <div id="rescheduleContentTS" style="display: none; margin-left: 20px;">
                      <a href="#" id="rescheduleTS1">AS - Reschedule 1</a><br><br>
                      <a href="#" id="aPrescheduleTS">AS - Acceptable Reschedule</a><br><br>
                      <a href="#" id="aDirectRescheduleTS">AS - Direct Reschedule</a><br><br>
                  </div>
                  <div>
                      <h3 style="display: inline;">IN - Inactive Cases</h3>
                      <button id="inactiveButtonTS" style="background: none; border: none; cursor: pointer; font-size: 1.2em;">⬇</button>
                  </div>
                  <div id="inactiveContentTS" style="display: none; margin-left: 20px;">
                      <a href="#" id="inRescLimExc">IN - Reschedule Limit Exceeded</a><br><br>
                      <a href="#" id="inInf">IN - Infeasible</a><br><br>
                      <a href="#" id="inNreach">IN - Not Reachable</a><br><br>
                      <a href="#" id="inNotIntest">IN - Not Interested</a><br><br>
                      <a href="#" id="inNotReady">IN - Not Ready</a><br><br>
                      <a href="#" id="inOssRtit">IN - Out of Scope - Rerouted to Internal Team</a><br><br>
                      <a href="#" id="inOssUtt">IN - Out of Scope - Unable to Transfer</a><br><br>
                      <a href="#" id="inOssEts">IN - Out of Scope - Email to Seller</a><br><br>
                      <a href="#" id="inO">IN - Other</a><br><br>
                  </div>
                  <div>
                      <h3 style="display: inline;">NI - Awaiting & Attempt</h3>
                      <button id="awaitingButtonTs" style="background: none; border: none; cursor: pointer; font-size: 1.2em;">⬇</button>
                  </div>
                  <div id="awaitingContentTs" style="display: none; margin-left: 20px;">
                      <a href="#" id="niAwInp">NI - Awaiting Inputs</a><br><br>
                      <a href="#" id="niInCons">NI - Awaiting Validation</a><br><br>
                      <a href="#" id="niAwaVal">AS - Direct Reschedule</a><br><br>
                      <a href="#" id="niAttC">NI - Attempted Contact</a><br><br>
                  </div>
                  <div>
                      <h3 style="display: inline;">SO - Implementation</h3>
                      <button id="impButtonTs" style="background: none; border: none; cursor: pointer; font-size: 1.2em;">⬇</button>
                  </div>
                  <div id="impContentTs" style="display: none; margin-left: 20px;">
                      <a href="#" id="impEo">SO- Education Only</a><br><br>
                      <a href="#" id="impTo">SO - Troubleshooting Only</a><br><br>
                      <a href="#" id="impSf">SO - Verified</a><br><br>
                      <a href="#" id="impVnnc">SO - Verified No Recent Conversion</a><br><br>
                      <a href="#" id="impUnv">SO - Unverified</a><br><br>
                      <a href="#" id="impVnn">SO - Verification Not Needed</a><br><br>
                  </div>
              </div>
              <div>
                  <h3 style="display: inline;">LeadGen</h3>
                  <button id="LeadGenButton" style="background: none; border: none; cursor: pointer; font-size: 1.2em;">⬇</button>
              </div>
              <div id="LeadGenContent" style="display: none; margin-left: 20px;">
                  <div>
                      <h3 style="display: inline;">AS - Reschedule</h3>
                      <button id="LrescheduleButtonTS" style="background: none; border: none; cursor: pointer; font-size: 1.2em;">⬇</button>
                  </div>
                  <div id="LrescheduleContentTS" style="display: none; margin-left: 20px;">
                      <a href="#" id="LworkIp">AS - Work in Progress</a><br><br>
                      <a href="#" id="Lresch">AS - Reschedule 1</a><br><br>
                      <a href="#" id="LreschA">AS - Acceptable Reschedule</a><br><br>
                  </div>
                  <div>
                      <h3 style="display: inline;">AS - Reschedule</h3>
                      <button id="LawaitingButtonTs" style="background: none; border: none; cursor: pointer; font-size: 1.2em;">⬇</button>
                  </div>
                  <div id="LawaitingContentTs" style="display: none; margin-left: 20px;">
                      <a href="#" id="LawaIp">NI - Awaiting Inputs</a><br><br>
                      <a href="#" id="Lic">NI - In Consult</a><br><br>
                      <a href="#" id="Lav">NI - Awaiting Validation</a><br><br>
                      <a href="#" id="Lac">NI - Attempted Contact</a><br><br>
                      <a href="#" id="Lmlag">NI - Modifying leadform to accept GCLID</a><br><br>
                      <a href="#" id="Lucag">NI - Updating CRM to accept GCLID</a><br><br>
                      <a href="#" id="Lpdi">NI - Preparing data for import</a><br><br>
                      <a href="#" id="Lno">NI - Other</a><br><br>
                  </div>
                  <div>
                      <h3 style="display: inline;">IN - Inactive Cases</h3>
                      <button id="LinactiveButtonTS" style="background: none; border: none; cursor: pointer; font-size: 1.2em;">⬇</button>
                  </div>
                  <div id="LinactiveContentTS" style="display: none; margin-left: 20px;">
                      <a href="#" id="linInf">IN - Infeasible</a><br><br>
                      <a href="#" id="linNreach">IN - Not Reachable</a><br><br>
                      <a href="#" id="linNotIntest">IN - Not Interested</a><br><br>
                      <a href="#" id="linNotReady">IN - Not Ready</a><br><br>
                      <a href="#" id="linOssRtit">IN - Out of Scope - Rerouted to Internal Team</a><br><br>
                      <a href="#" id="linOssUtt">IN - Out of Scope - Unable to Transfer</a><br><br>
                      <a href="#" id="linOssEts">IN - Out of Scope - Email to Seller</a><br><br>
                      <a href="#" id="linO">IN - Other</a><br><br>
                  </div>
                  <div>
                      <h3 style="display: inline;">SO - Implementation</h3>
                      <button id="limpButtonTs" style="background: none; border: none; cursor: pointer; font-size: 1.2em;">⬇</button>
                  </div>
                  <div id="limpContentTs" style="display: none; margin-left: 20px;">
                      <a href="#" id="limpSf">SO - Verified</a><br><br>
                      <a href="#" id="limpves">SO - Verified Email to Seller</a><br><br>
                      <a href="#" id="limpso">SO - Others</a><br><br>
                  </div>
              </div>
              </div>
          </div>
  `;

  var CaseDetail = document.createElement("div");
  CaseDetail.id = "caseDetail";
  CaseDetail.style.fontSize = "20px";

  var sname = document.createElement("div");
  var cname = document.createElement("div");
  var adsid = document.createElement("div");
  var task = document.createElement("div");
  var mrkt = document.createElement("div");

  sname.innerHTML = "Seller Name: <span id='snameVal'></span>";
  cname.innerHTML = "Customer Name: <span id='cnameVal'></span>";
  adsid.innerHTML = "ADS ID: <span id='adsidVal'></span>";
  task.innerHTML = "Task: <span id='taskVal'></span>";
  mrkt.innerHTML = "Market: <span id='mrktVal'></span>";

  CaseDetail.appendChild(sname);
  CaseDetail.appendChild(cname);
  CaseDetail.appendChild(adsid);
  CaseDetail.appendChild(task);
  CaseDetail.appendChild(mrkt);

  var buttonDiv = document.createElement("div");
  buttonDiv.style.marginTop = "20px";
  buttonDiv.style.display = "flex";
  buttonDiv.style.justifyContent = "space-between";
  popupDiv.appendChild(buttonDiv);

  var closeButton = document.createElement("button");
  closeButton.textContent = "Close";
  closeButton.onclick = function () {
    document.body.removeChild(popupDiv);
  };

  var purgerButton = document.createElement("button");
  purgerButton.textContent = "Purge🗑";
  purgerButton.onclick = function () {
    document.querySelector("#email-body-content-top-content").innerText = "";
  };

  buttonDiv.appendChild(closeButton);
  buttonDiv.appendChild(purgerButton);
  contentDiv.appendChild(CaseDetail);
  popupDiv.appendChild(contentDiv);
  document.body.appendChild(popupDiv);

  var snmeVal = document.querySelector("#snameVal");
  var cnmeVal = document.querySelector("#cnameVal");
  var adsdVal = document.querySelector("#adsidVal");
  var tskVal = document.querySelector("#taskVal");
  var mrktVal = document.querySelector("#mrktVal");

  snmeVal.innerText = document.querySelectorAll(".submitter-info .name")[0].innerText;
  cnmeVal.innerText = document.querySelectorAll(".submitter-info .name")[1].innerText;
  adsdVal.innerText = document.querySelectorAll(".item .data-pair-content")[3].innerText;
  tskVal.innerText = document.querySelectorAll(".issue-details-container")[0].childNodes[8].innerText.slice(6);
  mrktVal.innerText = document.querySelectorAll(".issue-details-container")[0].childNodes[12].innerText.slice(14);

  function toggleContent(buttonId, contentId) {
    document.getElementById(buttonId).onclick = function () {
      var contentDiv = document.getElementById(contentId);
      var button = document.getElementById(buttonId);
      if (contentDiv.style.display === "none") {
        contentDiv.style.display = "block";
        button.textContent = "⬆";
      } else {
        contentDiv.style.display = "none";
        button.textContent = "⬇";
      }
    };
  }

  toggleContent("implementationButton", "implementationContent");
  toggleContent("inactiveButton", "inactiveContent");
  toggleContent("rescheduleButton", "rescheduleContent");
  toggleContent("LrescheduleButtonTS", "LrescheduleContentTS");
  toggleContent("awaitingInputButton", "awaitingInputContent");
  toggleContent("LawaitingButtonTs", "LawaitingContentTs");
  toggleContent("attemptCallButton", "attemptCallContent");
  toggleContent("emptyTemplateButton", "emptyTemplateContent");
  toggleContent("firstResponseButton", "firstResponseContent");
  toggleContent("rescheduleButtonTS", "rescheduleContentTS");
  toggleContent("inactiveButtonTS", "inactiveContentTS");
  toggleContent("LinactiveButtonTS", "LinactiveContentTS");
  toggleContent("awaitingButtonTs", "awaitingContentTs");
  toggleContent("impButtonTs", "impContentTs");
  toggleContent("limpButtonTs", "limpContentTs");

  document.getElementById("tagShoppingButton").onclick = function () {
    var tagShoppingContent = document.getElementById("tagShoppingContent");
    var button = document.getElementById("tagShoppingButton");
    var leadGenContent = document.getElementById("LeadGenContent");
    if (tagShoppingContent.style.display === "none") {
      tagShoppingContent.style.display = "block";
      button.textContent = "⬆";
    } else {
      tagShoppingContent.style.display = "none";
      button.textContent = "⬇";
    }

    if (leadGenContent) {
      leadGenContent.style.display = "none";
      document.getElementById("LeadGenButton").textContent = "⬇";
    }
  };
  document.getElementById("LeadGenButton").onclick = function (event) {
    event.preventDefault();
    var leadGenContent = document.getElementById("LeadGenContent");
    var leadGenButton = document.getElementById("LeadGenButton");
    var tagShoppingContent = document.getElementById("tagShoppingContent");
    if (leadGenContent.style.display === "none") {
      leadGenContent.style.display = "block";
      leadGenButton.textContent = "⬆";
    } else {
      leadGenContent.style.display = "none";
      leadGenButton.textContent = "⬇";
    }

    if (tagShoppingContent) {
      tagShoppingContent.style.display = "none";
      document.getElementById("tagShoppingButton").textContent = "⬇";
    }
  };
  document.getElementById("firstResponse").onclick = function (event) {
    event.preventDefault();
    sendMail("ts as new");
  };
  document.getElementById("firstResponseDFA").onclick = function (event) {
    event.preventDefault();
    sendMail("ts as new dfa");
  };
  document.getElementById("rescheduleTS1").onclick = function (event) {
    event.preventDefault();
    sendMail("ts as resched1");
  };
  document.getElementById("aPrescheduleTS").onclick = function (event) {
    event.preventDefault();
    sendMail("ts as reschedok");
  };
  document.getElementById("aDirectRescheduleTS").onclick = function (event) {
    event.preventDefault();
    sendMail("ts as dr");
  };
  document.getElementById("LworkIp").onclick = function (event) {
    event.preventDefault();
    sendMail("lg as wip seller");
  };
  document.getElementById("Lresch").onclick = function (event) {
    event.preventDefault();
    sendMail("lg as resched1");
  };
  document.getElementById("LreschA").onclick = function (event) {
    event.preventDefault();
    sendMail("lg as reschedok");
  };
  document.getElementById("inRescLimExc").onclick = function (event) {
    event.preventDefault();
    sendMail("ts in limit");
  };
  document.getElementById("LawaIp").onclick = function (event) {
    event.preventDefault();
    sendMail("lg ni ai");
  };
  document.getElementById("Lic").onclick = function (event) {
    event.preventDefault();
    sendMail("lg ni ic");
  };
  document.getElementById("LawaIp").onclick = function (event) {
    event.preventDefault();
    sendMail("lg ni av");
  };
  document.getElementById("Lac").onclick = function (event) {
    event.preventDefault();
    sendMail("lg ni ac");
  };
  document.getElementById("Lmlag").onclick = function (event) {
    event.preventDefault();
    sendMail("lg ni lf");
  };
  document.getElementById("Lucag").onclick = function (event) {
    event.preventDefault();
    sendMail("lg ni crm");
  };
  document.getElementById("Lpdi").onclick = function (event) {
    event.preventDefault();
    sendMail("lg ni imp");
  };
  document.getElementById("Lno").onclick = function (event) {
    event.preventDefault();
    sendMail("lg ni oth");
  };
  document.getElementById("inInf").onclick = function (event) {
    event.preventDefault();
    sendMail("ts in inf");
  };
  document.getElementById("inNreach").onclick = function (event) {
    event.preventDefault();
    sendMail("ts in nrch");
  };
  document.getElementById("inNotIntest").onclick = function (event) {
    event.preventDefault();
    sendMail("ts in ni");
  };
  document.getElementById("inNotReady").onclick = function (event) {
    event.preventDefault();
    sendMail("ts in nrdy");
  };
  document.getElementById("inOssRtit").onclick = function (event) {
    event.preventDefault();
    sendMail("ts in oost");
  };
  document.getElementById("inOssUtt").onclick = function (event) {
    event.preventDefault();
    sendMail("ts in oosu");
  };
  document.getElementById("inOssEts").onclick = function (event) {
    event.preventDefault();
    sendMail("ts in oos seller");
  };
  document.getElementById("inO").onclick = function (event) {
    event.preventDefault();
    sendMail("ts in oth");
  };
  document.getElementById("linInf").onclick = function (event) {
    event.preventDefault();
    sendMail("lg in inf");
  };
  document.getElementById("linNreach").onclick = function (event) {
    event.preventDefault();
    sendMail("lg in nrch");
  };
  document.getElementById("linNotIntest").onclick = function (event) {
    event.preventDefault();
    sendMail("lg in ni");
  };
  document.getElementById("linNotReady").onclick = function (event) {
    event.preventDefault();
    sendMail("lg in nrdy");
  };
  document.getElementById("linOssRtit").onclick = function (event) {
    event.preventDefault();
    sendMail("lg in oost");
  };
  document.getElementById("linOssUtt").onclick = function (event) {
    event.preventDefault();
    sendMail("lg in oosu");
  };
  document.getElementById("linOssEts").onclick = function (event) {
    event.preventDefault();
    sendMail("lg in oos seller");
  };
  document.getElementById("linO").onclick = function (event) {
    event.preventDefault();
    sendMail("lg in oth");
  };
  document.getElementById("niAwInp").onclick = function (event) {
    event.preventDefault();
    sendMail("ts ni ai");
  };
  document.getElementById("niInCons").onclick = function (event) {
    event.preventDefault();
    sendMail("ts ni ic");
  };
  document.getElementById("niAwaVal").onclick = function (event) {
    event.preventDefault();
    sendMail("ts ni av");
  };
  document.getElementById("niAttC").onclick = function (event) {
    event.preventDefault();
    sendMail("ts ni ac");
  };
  document.getElementById("impEo").onclick = function (event) {
    event.preventDefault();
    sendMail("ts so Edu");
  };
  document.getElementById("impTo").onclick = function (event) {
    event.preventDefault();
    sendMail("ts so trbl");
  };
  document.getElementById("impSf").onclick = function (event) {
    event.preventDefault();
    sendMail("ts so verif");
  };
  document.getElementById("impVnnc").onclick = function (event) {
    event.preventDefault();
    sendMail("ts so verif nrc");
  };
  document.getElementById("impUnv").onclick = function (event) {
    event.preventDefault();
    sendMail("ts so unv");
  };
  document.getElementById("impVnn").onclick = function (event) {
    event.preventDefault();
    sendMail("ts so vnn");
  };
  document.getElementById("limpSf").onclick = function (event) {
    event.preventDefault();
    sendMail("lg so verif");
  };
  document.getElementById("limpves").onclick = function (event) {
    event.preventDefault();
    sendMail("lg so verif seller");
  };
  document.getElementById("limpso").onclick = function (event) {
    event.preventDefault();
    sendMail("lg so oth");
  };
  document.getElementById("soio").onclick = function (event) {
    event.preventDefault();
    generateCaseNote(
      "SO - Implementation only",
      "The operation requested in the support ticket has been installed. Detailed explanation is in the OnCall note..",
      "I tracked the Google ADS account and the conversions I set up are working correctly. I have attached the corresponding photos below. Customer said data flowed correctly by mail, every ga4 and ads is written successfully."
    );
  };
  document.getElementById("soeo").onclick = function (event) {
    event.preventDefault();
    generateCaseNote(
      "SO - Educational only",
      "The operation requested in the support ticket has been installed. Detailed explanation is in the OnCall note..",
      "Necessary information regarding the installation of the tags below has been sent to the customer. Guidance has been provided for the installation:<br><ol><li><b> xxxxxxxxxxxxxxxxxxxxxxx <b></li></ol>"
    );
  };
  document.getElementById("soto").onclick = function (event) {
    event.preventDefault();
    generateCaseNote(
      "SO - Troubleshooting only",
      "The operation requested in the support ticket has been installed. Detailed explanation is in the OnCall note..",
      "During the meeting, the problems in the tags below were resolved. The connection between Google products was tested: <br><ol><li><b> xxxxxxxxxxxxxxxxxxxxxxxx <b></li></ol>"
    );
  };
  document.getElementById("inNotReachable").onclick = function (event) {
    event.preventDefault();
    generateCaseNote(
      "IN - Not Reachable",
      "No Response from Advertiser",
      "I tried to contact the customer but he did not answer.<br><br><b>Tags Implemented: N/A</b><br><br><b>Multiple CIDs: N/A</b>"
    );
  };
  document.getElementById("inNotInterested").onclick = function (event) {
    event.preventDefault();
    generateCaseNote(
      "IN - Not Interested",
      "Customer is not interested",
      "The client currently has different things to do with the site. Once complete, it will open a support ticket again.<br><br><b>Tags Implemented: N/A</b><br><br><b>Multiple CIDs: N/A</b>"
    );
  };
  document.getElementById("inNotReady1").onclick = function (event) {
    event.preventDefault();
    generateCaseNote(
      "IN - Not Ready",
      "The customer was not available for the meeting",
      "We made a phone call with the customer, although we did the reschedule, he asked us to do the reschedule again and I stated that this would not be possible. He will create a support ticket again at the appropriate time.<br><br><b>Tags Implemented: N/A</b><br><br><b>Multiple CIDs: N/A</b>"
    );
  };
  document.getElementById("inNotReady2").onclick = function (event) {
    event.preventDefault();
    generateCaseNote(
      "IN - Not Ready",
      "The customer was not available for the implementing process, he has technical issue on his website.",
      "During the call, we tried to add the site to set up the conversions requested in the support ticket, but the technical condition of the site was not suitable for setting up this conversion process. I suggested the customer switch to a different hosting or a different provider.<br><br><b>Tags Implemented: N/A</b><br><br><b>Multiple CIDs: N/A</b>"
    );
  };
  document.getElementById("inOOS").onclick = function (event) {
    event.preventDefault();
    generateCaseNote(
      "IN - Out of Scope",
      "The subject of the customer's request is OOS for the TechSol team.",
      "I contacted the customer and he told me there was no technical problem. He had a problem with ads. I sent information about this to GSR. Or The transaction requested by the customer is OOS for us, I have reported it to the account consultant who created the support record about it, and he will contact the customer and resolve the situation. <br><br><b>Tags Implemented: N/A</b><br><br><b>Multiple CIDs: N/A</b>"
    );
  };
  document.getElementById("reschedule1").onclick = function (event) {
    event.preventDefault();
    generateCaseNote(
      "AS - Reschedule 1",
      "The customer is not available for today's meeting.",
      "The client said he was busy at the moment and asked me to reschedule the meeting.<br><br><b>Tags Implemented: N/A</b><br><br><b>Multiple CIDs: N/A</b>"
    );
  };
  document.getElementById("aPreschedule").onclick = function (event) {
    event.preventDefault();
    generateCaseNote(
      "AS - Acceptable Reschedule",
      "Technical installation continues...",
      "We made another appointment to complete the unfinished technical work.<br><br><b>Tags Implemented: N/A</b><br><br><b>Multiple CIDs: N/A</b>"
    );
  };
  document.getElementById("aAfa").onclick = function (event) {
    event.preventDefault();
    generateCaseNote(
      "NI - Awaiting Action from Advertiser",
      "Waiting for the customer to complete the procedure...",
      "The customer has been given the necessary instructions to complete the request in the support ticket. The customer's actions are listed below: <ol><li><b>****************</b></li></ol><br><br><b>Tags Implemented: N/A</b><br><br><b>Multiple CIDs: N/A</b>"
    );
  };
  document.getElementById("aVa").onclick = function (event) {
    event.preventDefault();
    generateCaseNote(
      "NI - Awaiting Validation ADS",
      "We have set up the conversions that the customer wants, we need to wait <b>48 hours.</b>",
      "The conversions requested in the support ticket are listed below, pending confirmation of installation:<ol><li><b>****************</b></li></ol><br><br><b>Tags Implemented: N/A</b><br><br><b>Multiple CIDs: N/A</b>"
    );
  };
  document.getElementById("aVm").onclick = function (event) {
    event.preventDefault();
    generateCaseNote(
      "NI - Awaiting Validation MC",
      "We have set up the Merchant Center, we need to wait <b>48 hours.</b>",
      "We have added the products, we are waiting for their approval. Then he needs to consult with the account advisor and use advertising.<br><br><b>Tags Implemented: N/A</b><br><br><b>Merchant Center ID: *********</b><br><br><b>Multiple CIDs: N/A</b>"
    );
  };
  document.getElementById("aC").onclick = function (event) {
    event.preventDefault();
    generateCaseNote(
      "AC - Attempt Contact",
      "I called the customer 2 times, but he did not answer",
      "Tried to contact the advertiser (2 successive + 1 after 10 min attempts) however no response. I will contact him again tomorrow.<br><br><b>Tags Implemented: N/A</b><br><br><b>Multiple CIDs: N/A</b>"
    );
  };
  document.getElementById("eTemplate").onclick = function (event) {
    event.preventDefault();
    generateCaseNote(
      "",
      "",
      "<br><br><b>Tags Implemented: </b><br><br><b>Multiple CIDs: </b><br><br><b>Screenshots:</b>"
    );
  };
  document.getElementById("fastUpdate").onclick = function (event) {
    event.preventDefault();
    fastNote();
  };
  function fastNote() {
    var field = document.querySelector("case-note-card-content-wrapper > div > editor > div > div");
    var MyDate = new Date();
    var MyDateString =
      ("0" + MyDate.getDate()).slice(-2) + "/" + ("0" + (MyDate.getMonth() + 1)).slice(-2) + "/" + MyDate.getFullYear();
    var caseNote = [
      "Date: ".bold() + "(" + MyDateString + ")",
      "Q+ status:".bold() + " Updated.",
      "Action:".bold() + " A reminder email has been sent.",
      "Case Status:".bold() + " Awaiting response from customer...",
    ];
    field.innerHTML = "";
    for (var i = 0; i < caseNote.length; i++) {
      field.innerHTML += caseNote[i] + "<br><br>";
    }
  }
  function generateCaseNote(substatus, reason, onCallComments) {
    var field = document.querySelector("case-note-card-content-wrapper > div > editor > div > div");
    var MyDate = new Date();
    var MyDateString =
      ("0" + MyDate.getDate()).slice(-2) + "/" + ("0" + (MyDate.getMonth() + 1)).slice(-2) + "/" + MyDate.getFullYear();
    var caseNote = [
      "Date: ".bold() + "(" + MyDateString + ")",
      "Speakeasy ID:".bold() + " via connect",
      "Substatus:".bold() + " " + substatus,
      "Reason/Comments:".bold() + " " + reason,
      "On Call Comments:".bold() + " " + onCallComments,
      "Screenshots:".bold() + " Attached files",
      "On Call( Call Started) signaled on time?: ".bold() + "Attached files",
    ];
    setTimeout(
      async () =>
        await window.navigator.clipboard
          .readText()
          .then((speakEasyID) => print(speakEasyID))
          .catch((err) => alert("Open a case note and copy SpeakEasy ID")),
      0
    );

    function print(id) {
      field.innerHTML = "";
      var regex = /^P\d{19}/;
      for (var i = 0; i < caseNote.length; i++) {
        if (i == 1 && new RegExp(regex).test(id)) {
          field.innerHTML += caseNote[1] + " " + id;
          field.innerHTML += "<br><br>";
        } else {
          field.innerHTML += caseNote[i] + "\u00A0";
          field.innerHTML += "<br><br>";
        }
      }
    }
  }
  function sendMail(value) {
    setTimeout(function () {
      var emailButtonSelector = 'material-button[debug-id="canned_response_button"]';
      var emailButtonElement = document.querySelector(emailButtonSelector);

      if (emailButtonElement) {
        emailButtonElement.click();
      }
      setTimeout(function () {
        var inputSelector = 'canned-response-dialog input.input.input-area[role="combobox"][aria-haspopup="listbox"]';
        var inputElement = document.querySelector(inputSelector);
        if (inputElement) {
          inputElement.value = value;
          inputElement.setAttribute("value", value);
          inputElement.dispatchEvent(new Event("input", { bubbles: true }));
          setTimeout(function () {
            var dropdownItems = document.querySelectorAll("material-select-dropdown-item span.text-segment");

            dropdownItems.forEach(function (item) {
              if (item.textContent.includes(value)) {
                item.click();
              }
            });
          }, 6000);
        }
      }, 1000);
    }, 1000);
  }
})();
