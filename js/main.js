new Vue({
  el: '#app',
  data: {
      message: 'Hello Vue.js!'
    }
});

function openvalidate() {
  var validatebutton = document.getElementById('convert');
  if (false) {
    validatebutton.title = "Validate before creating XBRL File"
    validatebutton.disabled = false
    validatebutton.onclick = function() {validateReturn()};
  } else {
    validatebutton.title = "Please add an details to create file"
    validatebutton.disabled = true
    validatebutton.onclick = function(){};
  }
}

function stripwhitecommas(str) {
  window.test = str
  if (!str || 0 === str.length) {
    return str
  } else {
    return str.toString().replace(/[\s,]+/g,'').trim(); 
  }
}

function toTitleCase(str)
{
    return str.replace(/\w\S*/g, function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();});
}

function validateReturn() {
  //window.valid = true;
  //numb = ['ABN']
	//validate.validators.abn = function($abn, options, key, attributes) {
    //var weights = [10, 1, 3, 5, 7, 9, 11, 13, 15, 17, 19];

    //// strip anything other than digits
    //$abn = $abn.toString().replace("/[^\d]/","");

    //// check length is 11 digits
    //if ($abn.length==11) {
        //// apply ato check method 
        //var sum = 0;
        //weights.forEach(function(weight, position) {
            //var digit = $abn[position] - (position ? 0 : 1);
            //sum += weight * digit;
        //})
				//if((sum % 89)==0){
					//return null;
				//} else {
					//return "Invalid ABN"
				//}
    //} 
		//return "ABN Length Invalid";
	//};

	//validate.validators.tfn = function($tfn, options, key, attributes) {
    //var weights = [ 1, 4, 3, 7, 5, 8, 6, 9, 10];
    //var valids = [
      //"111111111",
      //"000000000",
      //"333333333",
      //"987654321",
    //]

    //// strip anything other than digits
    //$tfn = $tfn.toString().replace("/[^\d]/","");

    //if (valids.includes($tfn)){
      //return null;
    //}

    //// check length is 11 digits
    //if ($tfn.length==9) {
        //// apply ato check method 
        //var sum = 0;
        //weights.forEach(function(weight, position) {
            ////var digit = $tfn[position] - (position ? 0 : 1);
            //var digit = $tfn[position];
            //sum += weight * digit;
        //})
				//if((sum % 11)==0){
					//return null;
				//} else {
					//return "Invalid TFN"
				//}
    //} 
		//return "TFN Length Invalid";
	//};

	//validate.validators.customdate = function(value, options, key, attributes) {
    //if(moment(value,["Do MMMM YYYY","DDMMYYYY"]).isValid()){
      //return null;
    //} else {
      //return "Invalid Date"
    //}
	//};

  //var payerConstraints = {
  //};
  //var payerErrors = validate(window.payer, payerConstraints)

  //window.employeeErrors = []
  //window.errorNames = []

  //$('#console').empty();
  //$("#validateModal").modal() 
  //var div = document.getElementById('console');
  //if(payerErrors) {
    //window.valid = false;
    //var p = document.createElement("p")                
    //p.style.color = "red";
    //var content = document.createTextNode("---ERRORS WITH PAYER DATA ---");
    //p.appendChild(content);
    //var br = document.createElement("br");
    //p.appendChild(br);
    //for (var property in payerErrors) {
      //var content = document.createTextNode(property + ":");
      //var br = document.createElement("br");
      //p.appendChild(br);
      //p.appendChild(content);
      //for (var i in payerErrors[property]) {
        //var content = document.createTextNode(i +":" + payerErrors[property][i]);
    //var br = document.createElement("br");
        //p.appendChild(br);
        //p.appendChild(content);
      //}
    //}
    //div.appendChild(p);
  //} else {
    //var p = document.createElement("p")                
    //p.style.color = "green";
    //var content = document.createTextNode("---PAYER DATA VALID---");
    //var br = document.createElement("br");
    //p.appendChild(content);
    //p.appendChild(br);
    //div.appendChild(p);
  //}
  //if(window.employeeErrors.length > 0) {
    //window.valid = false;
    //var p = document.createElement("p")                
    //p.style.color = "red";
    //var content = document.createTextNode("---ERRORS WITH EMPLOYEE DATA ---");
    //var br = document.createElement("br");
    //p.appendChild(br);
    //p.appendChild(content);
    //for (var i in window.employeeErrors) {
      //var content = document.createTextNode("---EMPLOYEE: " + window.errorNames[i] + " ---");
      //var br = document.createElement("br");
      //p.appendChild(br);
      //p.appendChild(content);
      //for (var property in window.employeeErrors[i]) {
        //var content = document.createTextNode(property + ":");
        //var br = document.createElement("br");
        //p.appendChild(br);
        //p.appendChild(content);
        //for (var j in window.employeeErrors[i][property]) {
          //var content = document.createTextNode(window.employeeErrors[i][property][j]);
          //var br = document.createElement("br");
          //p.appendChild(br);
          //p.appendChild(content);
        //}
      //}
    //}
    //div.appendChild(p);
  //} else {
    //var p = document.createElement("p")                
    //p.style.color = "green";
    //var content = document.createTextNode("---EMPLOYEE DATA VALID---");
    //var br = document.createElement("br");
    //p.appendChild(br);
    //p.appendChild(content);
    //div.appendChild(p);
  //}
  //openfile();

}
function openfile() {
  var createbutton = document.getElementById('createbutton');
  var pdfbutton = document.getElementById('pdfbutton');
  if (window.valid) {
    createbutton.disabled = false
    createbutton.onclick = function() {createXBRL()};
    pdfbutton.disabled = false
    pdfbutton.onclick = function() {makePDF()};
  } else {
    createbutton.disabled = true
    createbutton.onclick = function(){};
    pdfbutton.disabled = true
    pdfbutton.onclick = function(){};
  }
}

function download(filename, text) {
  var element = document.createElement('a');
  element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
  element.setAttribute('download', filename);

  element.style.display = 'none';
  document.body.appendChild(element);

  element.click();

  document.body.removeChild(element);
}

function createEmpdupe() {
  window.XBRL = "";
  download("individualReturnXBRL", window.XBRL);
}

// left padding s with c to a total of n chars
function padding_left(s, c, n) {
  if (s == null || ! c || s.length >= n) {
    return s;
  }
  var max = (n - s.length)/c.length;
  for (var i = 0; i < max; i++) {
    s = c + s;
  }
  return s;
}
// right padding s with c to a total of n chars
function padding_right(s, c, n) {
  if (s == null || ! c || s.length >= n) {
    return s;
  }
  var max = (n - s.length)/c.length;
  for (var i = 0; i < max; i++) {
    s += c;
  }
  return s;
}

function checkABN(str) {
    if (!str || str.length !== 11) {
        return false;
    }
    var weights = [10, 1, 3, 5, 7, 9, 11, 13, 15, 17, 19],
        checksum = str.split('').map(Number).reduce(
        function(total, digit, index) {
            if (!index) {
                digit--;
            }
            return total + (digit * weights[index]);
        },
        0
    );

    if (!checksum || checksum % 89 !== 0) {
        return false;
    }

    return true;
}

function formatCapitalize(element) {
  element.value = toTitleCase(element.value.toString());
}

function moneyNumber(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

function tableCreate() {
    var tbdy = document.getElementById('employeetable');
    tbdy.innerHTML = '';
    //for (var i = 0; i < window.employees.length; i++) {
        //var tr = document.createElement('tr');
        //var td = document.createElement('td');
        //td.appendChild(document.createTextNode(window.employees[i].name +  ' ' +window.employees[i].surname))
        //tr.appendChild(td)
        //var td = document.createElement('td');
        //td.appendChild(document.createTextNode(window.employees[i].TFN))
        //tr.appendChild(td)
        //var td = document.createElement('td');
        //td.appendChild(document.createTextNode("$" + moneyNumber(window.employees[i].grossPayments)));
        //tr.appendChild(td)
        //var td = document.createElement('td');
        //td.appendChild(document.createTextNode("$" + moneyNumber(window.employees[i].taxWithheld)));
        //tr.appendChild(td)
        //var td = document.createElement('td');
        //var btn = document.createElement('button');
        //btn.className = 'btn btn-warning';
        //btn.setAttribute('data-param', i);
        //btn.onclick = function () {editEmployee(this.getAttribute('data-param'));}; 
        //btn.innerHTML = "Edit";
        //td.appendChild(btn)
        //tr.appendChild(td)
        //var td = document.createElement('td');
        //var btn = document.createElement('button');
        //btn.className = 'btn btn-danger';
        //btn.setAttribute('data-param', i);
        //btn.onclick = function () {deleteEmployee(this.getAttribute('data-param'));}; 
        //btn.innerHTML = "Delete";
        //td.appendChild(btn)
        //tr.appendChild(td)
        //tbdy.appendChild(tr);
    //}
}

function formatabntfn(element) {
  element.value = formatcomma(element.value);
}
function formatcomma(element) {
  return element.toString().replace(/ /g,'').replace(/\B(?=(\d{3})+(?!\d))/g, " ");
}

function formatdate(element) {
  element.value = moment(element.value, ["DDMMYYYY","DDMMMMYYYY", "DoMMMMYYYY", "DoMMYYYY"], false).format('Do MMMM YYYY');
}

function initdates() {
  //var dobpicker = new Pikaday(
    //{
        //field: document.getElementById('dobbox'),
        //firstDay: 1,
        //maxDate: new Date(),
        //onSelect: function() {
            //var date = this.getMoment().format('Do MMMM YYYY');
            //document.getElementById('dobbox').value = date;
        //}
    //});
  //window.startpicker = new Pikaday(
    //{
        //field: document.getElementById('startbox'),
        //firstDay: 1,
        //maxDate: new Date(),
        //onSelect: function() {
            //var date = this.getMoment().format('Do MMMM YYYY');
            //document.getElementById('startbox').value = date;
        //}
    //});
    
  //window.endpicker = new Pikaday(
    //{
        //field: document.getElementById('endbox'),
        //firstDay: 1,
        //maxDate: new Date(),
        //onSelect: function() {
            //var date = this.getMoment().format('Do MMMM YYYY');
            //document.getElementById('endbox').value = date;
        //}
    //});
  //window.startpicker.setMoment(window.startFY);
  //window.endpicker.setMoment(window.endFY);
}

function makePDF() {
  //var background = new Image;
  //background.src = 'background.jpg';
  //window.doc = new jsPDF()
  //background.onload = function() {
    //for(var i = 0; i < window.employees.length; i++) {
      //if(i > 0) window.doc.addPage();
      //window.doc.addImage(background, 'JPEG', 0, 0,210,297);
      //window.doc.setFontSize(10)
      //rightText(moneyNumber(window.employees[i].taxWithheld), 185, 99)
      //rightText(moneyNumber(window.employees[i].lumpsumA), 175, 115)
      //window.doc.text(188, 115, window.employees[i].lumpsumAtype);
      //rightText(moneyNumber(window.employees[i].lumpsumB), 175, 125)
      //rightText(moneyNumber(window.employees[i].lumpsumD), 175, 135)
      //rightText(moneyNumber(window.employees[i].lumpsumE), 175, 145)
      //rightText(moneyNumber(window.employees[i].grossPayments), 109, 115)
      //rightText("0", 109, 125)
      //rightText(moneyNumber(window.employees[i].fb), 109, 135)
      //rightText(moneyNumber(window.employees[i].superSGC), 109, 145)
      //rightText(moneyNumber(window.employees[i].allowances), 109, 155)
      //window.doc.text(61, 27, 'Payment summary for the year ended 30 June ' + window.payer.financialYear);
      //var arr = [ window.employees[i].name + " " + window.employees[i].surname, window.employees[i].address, window.employees[i].suburb, window.employees[i].state + ' ' + window.employees[i].postcode];
      //if (window.employees[i].address2.length > 0 && window.employees[i].address2.trim()) {
        //arr.splice(2, 0, window.employees[i].address2);
      //}
      //window.doc.text(25, 48, arr);
      //window.doc.text(84, 88,window.employees[i].periodStart);
      //window.doc.text(133, 88,window.employees[i].periodEnd);
      //window.doc.text(56, 100,(formatcomma(window.employees[i].TFN)));
      //window.doc.text(81, 261, (formatcomma(window.payer.ABN)));
      //window.doc.text(160, 261, window.payer.ABNBranch);
      //window.doc.text(40, 268, window.payer.name);
      //window.doc.text(65, 278, window.payer.contactName);
      //window.doc.text(160, 278, moment().format('Do MMMM YYYY'));
    //}
    //window.doc.save('PaymentSummary.pdf')
  //};

}

function main() {
  window.now = moment();
  if (window.now.month() < 6) {
    window.now.set('year', now.year() -1);
  }
  window.now.set('month', 5);
  window.now.set('date', 30);
  window.endFY = moment(window.now);
  window.startFY = moment(window.now.subtract(1, 'years').add(1,'days'));
  initdates();

}
main();
