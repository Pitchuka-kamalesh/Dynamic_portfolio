function loadjson(file){
	return new Promise((resolve,reject)=>{
		return fetch(file).then(response=>{
			if(response.ok){
				resolve(response.json());
			}
			else{
				reject(new Error("error"));
			}
		})
	})
}
var newfile = loadjson("main.json");
newfile.then(data =>{

	console.log(data);
	basic(data.profile);
	careerinfo(data.careerobjective);
	education(data.educationqualification);
	skills(data.techinicalskills);
	other(data.otherskills);
	langs(data.lang)
})

var child1 =document.querySelector(".child1");
var child2 =document.querySelector(".child2");
function basic(det) {
	var img = document.createElement("img");
	img.src  = det.image;
	img.style.borderRadius = "50%";
	img.style.alignSelf = "center";
	child1.appendChild(img);
	child1.appendChild(document.createElement("br"));
	
	var name = document.createElement("h4");
    name.textContent = det.Name;
	child1.appendChild(name);
	//child1.appendChild(document.createElement("br"));
	child1.appendChild(document.createElement("br"));
	
	var emails = document.createElement("a");
	emails.href = "mailto:kamalesh.4025@gmail.com";
    emails.textContent  = det.email;
	child1.appendChild(emails);
	child1.appendChild(document.createElement("br"));
	
	var numbers = document.createElement("a");
	numbers.href = "#";
    numbers.textContent = det.soc_1;
	child1.appendChild(numbers);
	child1.appendChild(document.createElement("br"));
	
	var add =  document.createElement("a");
	add.href = "#";
    add.textContent = det.soc_2;
    child1.appendChild(add);
    child1.appendChild(document.createElement("br"));
	
	var add1 = document.createElement("a");
	add1.href = "#";
    add1.textContent = det.soc_3;
	child1.appendChild(add1);
	child1.appendChild(document.createElement("br"));

   
}
function careerinfo(info1){
		var heading1 = document.createElement("h2");
		heading1.textContent = "Careerobjective:";
		child2.appendChild(heading1);
		//child2.appendChild(document.createElement("hr"));
		var heading2 = document.createElement("p");
		heading2.textContent = info1.info;
		child2.appendChild(heading2);

}
function education(edu){
		var heading3 = document.createElement("h2");
		heading3.textContent = "Educational:";
		child2.appendChild(heading3);
		//child2.appendChild(document.createElement("hr"));
		var divs = document.createElement("div");
		var table1 = document.createElement("table");
		divs.className += ["apple"];
		divs.appendChild(table1);
		child2.appendChild(divs);
		tabledata = "";
		for (i in edu){
			
			tabledata+="<tr><td>"+edu[i].course+"</td><td>"+edu[i].college+"</td><td>"+edu[i].passedout+"</td><td>"+edu[i].percentage+"</td><tr>";
					
		}
		table1.innerHTML = tabledata;	
		
}
function skills(skillinfo){
	var heading4 = document.createElement("h2");
	heading4.textContent = "Techinicalskill:";
	child2.appendChild(heading4);

	child2.appendChild(document.createElement("br"));
	for (i in skillinfo){
		var title = document.createElement("h4");
		title.textContent = skillinfo[i].info;
		child2.appendChild(title);
		var skillui = document.createElement("ul");
		var skillli = document.createElement("li");
		skillli.textContent = skillinfo[i].details;
		skillui.appendChild(skillli);
		child2.appendChild(skillui);
	}

}
function other(othskills){
	var heading5 = document.createElement("h4");
	heading5.textContent = othskills.info;
	child2.appendChild(heading5);
	for (i in othskills.details){
		var skillui = document.createElement("ul");
		var skillli = document.createElement("li");
		skillli.textContent = othskills.details[i];
		skillui.appendChild(skillli);
		child2.appendChild(skillui);
		console.log([i]);
		console.log(othskills.details[i])

	}
	
}
function langs(othskills){
	var heading5 = document.createElement("h4");
	heading5.textContent = othskills.info;
	child2.appendChild(heading5);
	for (i in othskills.details){
		var skillui = document.createElement("ul");
		var skillli = document.createElement("li");
		skillli.textContent = othskills.details[i];
		skillui.appendChild(skillli);
		child2.appendChild(skillui);
		console.log([i]);
		console.log(othskills.details[i])

	}
	
}
