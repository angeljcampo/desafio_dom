function header() {
  let div = document.createElement("div");
  div.className = "py-5 text-center";
  let image = document.createElement("img");
  image.className = "d-block mx-auto mb-4";
  image.src = "bootstrap-solid.svg";
  image.width = 72;
  image.height = 72;
  div.appendChild(image);

  let h2 = document.createElement("h2");
  h2.appendChild(document.createTextNode("Checkout form"));
  div.appendChild(h2);

  let p = document.createElement("p");
  p.className = "lead";
  p.appendChild(
    document.createTextNode(
      "Below is an example form built entirely with Bootstrap’s form controls. Each required form group has a validation state that can be triggered by attempting to submit the form without completing it."
    )
  );
  div.appendChild(p);

  return div;
}

function form() {
  let div = document.createElement("div");
  div.classname = "col-md-8 order-md-1";
  let h4 = document.createElement("h4");
  h4.className = "mb-3";
  h4.appendChild(document.createTextNode("Billing address"));
  div.appendChild(h4);

  let formu = document.createElement("form");
  formu.className = "needs-validation";
  div.appendChild(formu);

  let row = document.createElement("row");
  row.className = "row";
  formu.appendChild(row);

  // No se por que no me funciona esto:

  // formu.appendChild(fields(
  //   "col-md-6 mb-3",
  //   "firstName",
  //   "First Name",
  //   "text",
  //   "form-control",
  //   "firstName",
  //   "first name",
  //   "Valid first name is required"
  // );)

  let divName = document.createElement("div");
  divName.className = "col-md-6 mb-3";
  row.appendChild(divName);

  let labelName = document.createElement("label");
  labelName.htmlFor = "firstName";
  labelName.appendChild(document.createTextNode("First Name"));
  divName.appendChild(labelName);

  let input = document.createElement("input");
  input.type = "text";
  input.className = "form-control";
  input.id = "firstName";
  input.required = true;
  divName.appendChild(input);

  let invalidName = document.createElement("div");
  invalidName.className = "invalid-feedback";
  invalidName.appendChild(
    document.createTextNode("Valid first name is required.")
  );
  divName.appendChild(invalidName);

  let divLast = document.createElement("div");
  divLast.className = "col-md-6 mb-3";
  row.appendChild(divLast);

  let labelLast = document.createElement("label");
  labelLast.htmlFor = "lastName";
  labelLast.appendChild(document.createTextNode("Last name"));
  divLast.appendChild(labelLast);

  let inputLast = document.createElement("input");
  inputLast.type = "text";
  inputLast.className = "form-control";
  inputLast.id = "lastName";
  divLast.appendChild(inputLast);

  let invalidLast = document.createElement("div");
  invalidLast.className = "invalid-feedback";
  invalidLast.appendChild(
    document.createTextNode("Valid last name is required.")
  );
  divLast.appendChild(invalidLast);

  let divUser = document.createElement("div");
  divUser.className = "col-12 mb-3";
  row.appendChild(divUser);

  let labelUser = document.createElement("label");
  labelUser.htmlFor = "username";
  labelUser.appendChild(document.createTextNode("Username"));
  divUser.appendChild(labelUser);

  let inputOne = document.createElement("div");
  inputOne.className = "input-group";
  divUser.appendChild(inputOne);
  let inputPrepend = document.createElement("div");
  inputPrepend.className = "input-group-prepend";
  inputOne.appendChild(inputPrepend);

  let at = document.createElement("span");
  at.className = "input-group-text";
  at.appendChild(document.createTextNode("@"));
  inputPrepend.appendChild(at);

  let inputUser = document.createElement("input");
  inputUser.type = "text";
  inputUser.className = "form-control";
  inputUser.id = "username";
  inputUser.placeholder = "Username";
  inputOne.appendChild(inputUser);

  let invalidUser = document.createElement("div");
  invalidUser.className = "invalid-feedback";
  invalidUser.appendChild(
    document.createTextNode("Your username is required.")
  );

  let divEmail = document.createElement("div");
  divEmail.className = "col-12 mb-3";
  row.appendChild(divEmail);

  let labelEmail = document.createElement("label");
  labelEmail.htmlFor = "email";
  labelEmail.appendChild(document.createTextNode("Email"));
  divEmail.appendChild(labelEmail);

  let spanEmail = document.createElement("span");
  spanEmail.className = "ml-2 text-muted";
  spanEmail.appendChild(document.createTextNode("(Optional)"));
  labelEmail.appendChild(spanEmail);

  let inputEmail = document.createElement("input");
  inputEmail.type = "email";
  inputEmail.className = "form-control";
  inputEmail.id = "email";
  inputEmail.placeholder = "you@example.com";
  divEmail.appendChild(inputEmail);

  let invalidEmail = document.createElement("div");
  invalidEmail.className = "invalid-feedback";
  invalidEmail.appendChild(
    document.createTextNode(
      "Please enter a valid email address for shipping updates."
    )
  );
  divEmail.appendChild(invalidEmail);

  let divAddress = document.createElement("div");
  row.appendChild(divAddress);

  let labelAdress = document.createElement("label");
  labelAdress.htmlFor = "address";
  labelAdress.appendChild(document.createTextNode("Address"));
  divEmail.appendChild(labelAdress);

  let inputAddress = document.createElement("input");
  inputAddress.type = "text";
  inputAddress.className = "form-control";
  inputAddress.id = "address";
  inputAddress.placeholder = "1234 Main St";
  divEmail.appendChild(inputAddress);

  let invalidAdress = document.createElement("div");
  invalidAdress.className = "invalid-feedback";
  invalidAdress.appendChild(
    document.createTextNode("Please enter your shipping address.")
  );
  divAddress.appendChild(invalidAdress);

  divAdressTwo = document.createElement("div");
  divAdressTwo.className = "mb-3";
  row.appendChild(divAdressTwo);

  let labelAdressTwo = document.createElement("label");
  labelAdressTwo.htmlFor = "address2";
  labelAdressTwo.appendChild(document.createTextNode("Address 2"));
  divEmail.appendChild(labelAdressTwo);

  let inputAddressTwo = document.createElement("input");
  inputAddressTwo.type = "text";
  inputAddressTwo.className = "form-control";
  inputAddressTwo.id = "address2";
  inputAddressTwo.placeholder = "Apartment or suite";
  divEmail.appendChild(inputAddressTwo);

  let row2 = document.createElement("row2");
  row2.className = "row";
  div.appendChild(row2);

  let divCountry = document.createElement("div");
  divCountry.className = "col-md-5 mb-3";
  row2.appendChild(divCountry);


  let labelCountryOne = document.createElement("label");
  labelCountryOne.htmlFor = "country";
  labelCountryOne.appendChild(document.createTextNode("Country"));
  row2.appendChild(labelCountryOne);

  let selectCountryOne = document.createElement("select");
  selectCountryOne.className = "custom-select d-block w-100";
  selectCountryOne.id = "country";
  selectCountryOne.required = true;

    let optionCountryOne = document.createElement("option");
    optionCountryOne.appendChild(document.createTextNode("Choose..."));
    row2.appendChild(labelCountryOne);

    let optionCountryTwo = document.createElement("option");
    optionCountryTwo.appendChild(document.createTextNode("United States"));
    row2.appendChild(optionCountryTwo);

    let divCountryTwo = document.createElement("div");
    divCountryTwo.className = "invalid-feedback";

    optionCountryTwo.appendChild(document.createTextNode("Please select a valid country"));
    row2.appendChild(optionCountryTwo);
      
      
    row2.appendChild(divCountry);
};

// function fields(
//   divclass,
//   labelfor,
//   labeltext,
//   inputype,
//   inputclass,
//   inputid,
//   inputplaceholder,
//   invalidtext
// ) {
//   let row = document.createElement("row");
//   row.className = "row";

//   let div2 = document.createElement("div");
//   div2.className = `${divclass}`;
//   let label = document.createElement("label");
//   label.htmlFor = `${labelfor}`;
//   label.appendChild(document.createTextNode(`"${labeltext}"`));
//   div2.appendChild(label);
//   let input = document.createElement("input");
//   input.type = `${inputype}`;
//   input.className = `"${inputclass}"`;
//   input.id = `${inputid}`;
//   input.required = true;
//   input.placeholder = `${inputplaceholder}`;
//   div2.appendChild(input);
//   let invalid = document.createElement("div");
//   invalid.className = "invalid-feedback";
//   invalid.appendChild(document.createTextNode(`${invalidtext}`));
//   div2.appendChild(invalid);
//   row.appendChild(div2);
// }

let body = document.getElementsByTagName("body")[0];
body.className = "bg-light";
let container = document.createElement("div");
container.className = "container";
body.appendChild(container);
container.appendChild(header());
container.appendChild(form());
