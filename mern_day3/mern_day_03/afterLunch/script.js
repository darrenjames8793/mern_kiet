const div = document.getElementsByTagName("div");

// div[0].remove();

// //div[0].innerHTML = "<p> hello world </p>";

const c = document.querySelector("p:nth-of-type(2)");

const getInfo = (e) => {
  // const val = document.querySelector('p');
  // val.prepend("hello ");
  // const val = document.querySelector('button');
  // e.target.style.backgroundColor = 'green';
  // e.target.style.color = 'red';
  // val.style.position = "relative";
  // val.style.left = "100px";
  // val.style.top = "100px";
  // val.style.backgroundColor = "red";
  // val.style.height = "50px";
  // val.style.width = "100px";
  // val.style.fontSize = "20px";
  // val.style.borderRadius = "10px";
};

// const firstNameChange = (e) =>{

//     // var x = document.querySelector('input').value;
//     // console.log(x);

//       const val = e.target.value;

//       if(val.length>3)
//       console.log("correct");
// }

const submitForm = (e) => {
  e.preventDefault();

  const t = e.target;
  const res = {
    hobbies: [],
    gender: [],
  };

  for (let i = 0; i < t.length; i++) {
    const ty = t[i].type;
    const vl = t[i].value;
    const nm = t[i].name;

    if (ty != "submit") {
      if ((ty == "checkbox" || ty == "radio") && t[i].checked) {
        if (ty == "checkbox") {
          res.hobbies.push(vl);
        } else {
          res.gender.push(vl);
        }
      } else if (ty != "checkbox" && ty != "radio") {
        res[nm] = vl;
      }
    }
  }

  if (
    res.firstName.length > 0 &&
    res.lastName.length > 0 &&
    res.age > 0 &&
    res.hobbies.length > 0 &&
    res.gender.length > 0
  )
    alert("Form submitted successfully !!");
  else alert("Incomplete form !!");

  console.log(res);
};
